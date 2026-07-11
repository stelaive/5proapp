# 토스페이먼츠

## Mission

Create implementation-ready, token-driven UI guidance for 토스페이먼츠 that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand

- Product/brand: 토스페이먼츠
- URL: https://www.tosspayments.com/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations

- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Toss Product Sans`, `font.family.stack=Toss Product Sans, Tossface, SF Pro KR, SF Pro Display, SF Pro Icons, -apple-system, BlinkMacSystemFont, Basier Square, Apple SD Gothic Neo, Roboto, Noto Sans KR, Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=13px`, `font.size.sm=13.33px`, `font.size.md=14px`, `font.size.lg=15px`, `font.size.xl=16px`, `font.size.2xl=17px`, `font.size.3xl=19px`, `font.size.4xl=48px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#6b7684`, `color.text.tertiary=#0000ee`, `color.surface.muted=#ffffff`, `color.surface.raised=#3182f6`, `color.surface.strong=#64a8ff`
- Spacing scale: `space.1=2px`, `space.2=5px`, `space.3=6px`, `space.4=8px`, `space.5=9px`, `space.6=10px`, `space.7=11px`, `space.8=12px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=8px`, `radius.md=10px`, `radius.lg=12px`, `radius.xl=14px`, `radius.2xl=20px`, `radius.step7=40px`, `radius.step8=50px` | `shadow.1=rgba(0, 0, 0, 0) 0px 0px 0px 1px inset`, `shadow.2=rgba(0, 0, 0, 0.1) 0px 4px 6px 0px, rgba(0, 0, 0, 0.15) 0px 8px 30px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`

## Accessibility

- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone

Concise, confident, implementation-focused.

## Rules: Do

- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't

- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow

1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure

- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations

- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (47), buttons (42), lists (12), inputs (1), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates

- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
