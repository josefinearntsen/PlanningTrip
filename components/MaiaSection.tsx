"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { maiaLocation } from "@/data/maia";

// Hver polaroid får litt ulik rotasjon og "washi-tape"-plassering, slik at
// collagen ser ut som noe man faktisk har limt inn i en scrapbook - ikke
// et perfekt rutenett. Rekkefølgen matcher maiaLocation.images.
const polaroidStyles = [
  { rotate: -6, tape: "top" as const, wrapClass: "translate-y-2 sm:translate-y-4" },
  { rotate: 4, tape: "corner" as const, wrapClass: "-translate-y-1" },
  { rotate: 3, tape: "top" as const, wrapClass: "translate-y-3" },
  { rotate: -4, tape: "corner" as const, wrapClass: "-translate-y-2 sm:-translate-y-3" },
];

export default function MaiaSection() {
  const images = maiaLocation.images.slice(0, 4);

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-x-4 gap-y-6 sm:max-w-lg sm:gap-x-6">
          {images.map((src, i) => {
            const style = polaroidStyles[i % polaroidStyles.length];
            return (
              <motion.div
                key={src + i}
                initial={{ opacity: 0, rotate: style.rotate * 1.5, y: 24 }}
                whileInView={{ opacity: 1, rotate: style.rotate, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                className={`polaroid relative w-full ${style.wrapClass}`}
              >
                {style.tape === "top" ? (
                  <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                ) : (
                  <div className="washi-tape -top-2 -right-3 rotate-45" />
                )}
                {/* 🖼️ BYTT UT: bilder av Maia ligger i data/maia.ts (images-lista).
                    Legg filene i /public/images/maia/ og pek på dem der. */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`Maia i Aarhus ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-hand text-2xl text-burgundy sm:text-3xl">Jentetuuuur</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Vi kommer til <span className="italic text-burgundy">Maia</span>{" "}
            <span className="not-italic">💌</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/70">
            Maia har bytta Norge mot Aarhus – så selvfølgelig må vi komme på
            besøk. Fire daga med surfette på tur, masse sprell og verdens beste kvalitetstid!!!
          </p>
          <p className="mt-6 font-body text-sm text-ink/50">
            📍 {maiaLocation.address}
          </p>
        </motion.div>
      </div>
    </section>
  );
}