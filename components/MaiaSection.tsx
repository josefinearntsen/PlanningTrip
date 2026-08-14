"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { maiaLocation } from "@/data/maia";

export default function MaiaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, rotate: -6, y: 20 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="polaroid mx-auto w-72 sm:w-80"
        >
          <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
          {/* 🖼️ BYTT UT: bilde av Maia ligger i /public/images/maia/maia.jpg
              (pek på filen via data/maia.ts) */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige">
            <Image
              src="https://picsum.photos/seed/maia-portrait/700/875"
              alt="Maia i Aarhus"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center font-hand text-xl text-ink/70">
            Maia 💌 · Aarhus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-hand text-2xl text-burgundy sm:text-3xl">Turens grunn</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Vi kommer til <span className="italic text-burgundy">Maia</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/70">
            Maia har byttet Norge mot Aarhus – så selvfølgelig må vi komme på
            besøk. Fire dager med kanel, kanaler og kvalitetstid, midt i
            hjertet av Danmark.
          </p>
          <p className="mt-6 font-body text-sm text-ink/50">
            📍 {maiaLocation.address}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
