// file: src/components/gunpo/Gallery.tsx
import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">군포 현장 갤러리</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                style={{ objectFit: 'cover' }}
                className="rounded-2xl" 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 