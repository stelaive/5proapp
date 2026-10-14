"""Check rendered SEO output against a running local server (stdlib only).
Usage: python3 scripts/verify-seo.py http://localhost:3000
"""
import concurrent.futures
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000'
DOMAIN = 'https://www.5prosky.com'


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.title = []
        self.h1 = 0
        self.main = 0
        self.meta = {}
        self.canonical = []
        self.links = []
        self.ids = set()
        self.schemas = []
        self.text = []
        self.in_title = False
        self.script = None
        self.script_body = ''
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'meta': self.meta.setdefault(a.get('name') or a.get('property'), []).append(a.get('content', ''))
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical.append(a.get('href'))
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'script':
            self.script = a.get('type', 'javascript')
            self.script_body = ''

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script':
            if self.script == 'application/ld+json': self.schemas.append(json.loads(self.script_body))
            self.script = None

    def handle_data(self, data):
        if self.script is not None: self.script_body += data
        elif self.in_title: self.title.append(data)
        else: self.text.append(data)


def fetch(path):
    req = urllib.request.Request(BASE + path, headers={'User-Agent': 'Mozilla/5.0 SEO-local-check'})
    with urllib.request.urlopen(req, timeout=90) as response:
        assert response.status == 200, (path, response.status)
        return response.read().decode()


sitemap = ET.fromstring(fetch('/sitemap.xml'))
urls = [x.text for x in sitemap.findall('.//{*}loc')]
paths = [urllib.parse.urlsplit(url).path or '/' for url in urls if urllib.parse.urlsplit(url).path in ('', '/', '/pricing') or '/locations/' in url]
assert len(paths) == 33, f'Expected home, pricing, 28 cities and 3 hubs, got {len(paths)}'
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    pages = dict(zip(paths, pool.map(lambda path: Page(fetch(path)), paths)))
seen_titles, seen_descriptions = set(), set()
for path, page in pages.items():
    title = ''.join(page.title)
    assert title and title not in seen_titles, (path, 'missing/duplicate title')
    seen_titles.add(title)
    descriptions = page.meta.get('description', [])
    assert len(descriptions) == 1 and descriptions[0] not in seen_descriptions, (path, 'description')
    seen_descriptions.add(descriptions[0])
    assert len(page.canonical) == 1 and page.canonical[0].rstrip('/') == (DOMAIN + path).rstrip('/'), (path, page.canonical)
    assert page.h1 == 1 and page.main == 1, (path, page.h1, page.main)
    assert 'noindex' not in ' '.join(page.meta.get('robots', [])), (path, 'noindex')
    assert page.meta.get('og:description') == descriptions, (path, 'OG description mismatch')
    assert page.meta.get('twitter:description') == descriptions, (path, 'Twitter description mismatch')
    assert len(page.meta.get('og:url', [])) == 1 and page.meta['og:url'][0].rstrip('/') == (DOMAIN + path).rstrip('/'), (path, 'OG URL')
    assert 'user-scalable=no' not in ' '.join(page.meta.get('viewport', [])), (path, 'zoom disabled')
    assert 'maximum-scale=1' not in ' '.join(page.meta.get('viewport', [])), (path, 'zoom capped')
    assert '/pricing' in page.links and 'tel:18773924' in page.links, (path, 'SSR navigation/CTA missing')
    text = ' '.join(page.text)
    assert '스카이차비용' in text and '간판' in text, (path, 'intent content missing')
    assert 'answer-summary' in page.ids, (path, 'answer summary missing from initial HTML')
    assert '5프로돌려주는스카이차(5프로스카이차)는' in text, (path, 'brand definition missing')
    assert '2026-10-15' in text, (path, 'content date missing')
    for schema in page.schemas:
        if schema.get('@type') == 'FAQPage':
            for question in schema['mainEntity']:
                assert question['name'] in text and question['acceptedAnswer']['text'] in text, (path, 'FAQ differs from visible HTML')
    for href in page.links:
        target = urllib.parse.urlsplit(href)
        if target.netloc and target.netloc != 'www.5prosky.com': continue
        target_path = target.path or path
        if target_path.startswith('/locations/'):
            assert target_path in pages, (path, 'broken regional link', href)
        if target.fragment and target_path in pages:
            assert target.fragment in pages[target_path].ids, (path, 'missing anchor', href)
    if path in ('/locations/anyang', '/locations/suwon', '/locations/gunpo'):
        assert '테헤란로' not in text and '강남구' not in descriptions[0], (path, 'copied Gangnam content')

assert '스카이차비용' in ''.join(pages['/pricing'].title)
pricing_text = ' '.join(pages['/pricing'].text)
for fact in ['시장 평균', '가정 예시', '높이·거리·시간·설치 공간', '150,000원', '200,000원']:
    assert fact in pricing_text, ('/pricing', 'missing evidence or boundary', fact)
assert not any('/locations/junggu' == href for href in pages['/locations/incheon'].links)

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl): return None

opener = urllib.request.build_opener(NoRedirect)
for path, status, location in [
    ('/locations/seoul/gangnam', 308, '/locations/gangnam'),
    ('/locations/gyeonggi/suwon', 308, '/locations/suwon'),
    ('/locations/incheon/junggu', 404, None),
    ('/locations/seoul/suwon', 404, None),
    ('/locations/not-a-real-region', 404, None),
]:
    try:
        response = opener.open(BASE + path, timeout=90)
        code, headers = response.status, response.headers
    except urllib.error.HTTPError as error:
        code, headers = error.code, error.headers
    assert code == status, (path, code, status)
    if location: assert urllib.parse.urlsplit(headers['Location']).path == location

print(f'PASS: {len(pages)} pages; unique metadata, canonical, H1/main, SSR content/links, FAQ, anchors, regional links; 5 redirect/404 cases.')
