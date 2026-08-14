"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import MaiaSection from "@/components/MaiaSection";
import Flights from "@/components/Flights";
import Accommodations from "@/components/Accommodations";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  // Delt state: hvilket bosted som er valgt/uthevet, brukt av både
  // "Hvor skal vi bo?"-seksjonen og kartet, slik at de kan snakke sammen.
  const [selectedAccommodationId, setSelectedAccommodationId] = useState<string | null>(
    null
  );

  function handleSelect(id: string) {
    setSelectedAccommodationId((current) => (current === id ? null : id || null));
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <MaiaSection />
      <Flights />
      <Accommodations selectedId={selectedAccommodationId} onSelect={handleSelect} />
      <MapSection selectedId={selectedAccommodationId} onSelect={handleSelect} />
      <Gallery />
      <Footer />
    </main>
  );
}
