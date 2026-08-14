"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      {/* 🖼️ BYTT UT: hovedbildet av Aarhus. Legg gjerne et stort landskapsbilde
          i /public/images/hero.jpg og bytt ut src under. */}
      <Image
        src="/images/article-denmark-aarhus-aros-rainbow-panorama.jpg"
        alt="Aarhus by night"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-hand text-2xl text-dustypink sm:text-3xl"
        >
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-2 font-display text-[16vw] leading-[0.9] text-cream sm:text-[9vw] lg:text-[7.5rem]"
        >
          Surfette
          <br />
          <span className="italic text-dustypink">til Aarhus</span>
          <span className="ml-3 not-italic">🇩🇰</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <span className="rounded-full border border-cream/30 px-5 py-2 font-body text-sm uppercase tracking-[0.2em] text-cream sm:text-base">
            24.–27. september 2026
          </span>
          {/* <span className="font-body text-sm text-cream/70">
            10 jenter · én venninne på utveksling · fire dager i Danmark
          </span> */}
        </motion.div>
      </div>

      <motion.a
        href="#countdown"
        aria-label="Scroll ned"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="group absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <span className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-cream/50 pt-2 transition-colors group-hover:border-cream">
          <motion.span
            className="h-2 w-1 rounded-full bg-cream"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
