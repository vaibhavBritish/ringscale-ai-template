import React from "react";
import Image from "next/image";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type GalleryProps = {
  title: string;
  images: GalleryImage[];
};

const Gallery = ({ title, images }: GalleryProps) => {
  return (
    <div className="bg-white text-black py-20">
      <section className="pt-18 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-12">{title}</h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={350}
                  className="w-full h-65 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
