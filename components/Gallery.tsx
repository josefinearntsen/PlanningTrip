"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function Gallery() {
  return (
    <section id="galleri" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl sm:px-8">
        <p className="font-hand text-2xl text-burgundy sm:text-3xl">Snart der</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Vi sees i Aarhus <span className="not-italic">🇩🇰</span>
        </h2>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm bg-beige ${spanClasses[img.span]} ${
                i % 5 === 2 ? "sm:translate-y-4" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
