"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { accommodations } from "@/data/accommodations";
import { maiaLocation } from "@/data/maia";
import { distanceInMeters, formatDistance, estimatedWalkMinutes } from "@/lib/distance";

// Leaflet sin default markør-ikon peker på filer som ikke bygges riktig med
// Next.js sin bundler - vi lager derfor egne, tema-tilpassede ikoner i stedet.
function makeDivIcon(emoji: string, tone: "burgundy" | "ink") {
  const bg = tone === "burgundy" ? "#6E1F2B" : "#2A1E1E";
  return L.divIcon({
    html: `<div style="
      display:flex;align-items:center;justify-content:center;
      width:34px;height:34px;border-radius:50% 50% 50% 0;
      background:${bg};transform:rotate(-45deg);
      box-shadow:0 3px 8px rgba(0,0,0,0.35);
      border:2px solid #FAF3EA;
    ">
      <span style="transform:rotate(45deg);font-size:16px;line-height:1;">${emoji}</span>
    </div>`,
    className: "",
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32],
  });
}

const maiaIcon = makeDivIcon("💌", "burgundy");
const accIcon = makeDivIcon("🏠", "ink");

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function FlyToSelected({ selectedId }: { selectedId: string | null }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedId) {
      map.flyTo([maiaLocation.latitude, maiaLocation.longitude], 14, { duration: 0.8 });
      return;
    }
    const acc = accommodations.find((a) => a.id === selectedId);
    if (!acc) return;

    const bounds = L.latLngBounds([
      [maiaLocation.latitude, maiaLocation.longitude],
      [acc.latitude, acc.longitude],
    ]);
    map.flyToBounds(bounds, { padding: [80, 80], duration: 0.8, maxZoom: 16 });
  }, [selectedId, map]);

  return null;
}

export default function MapView({ selectedId, onSelect }: Props) {
  const center = useMemo(
    () => [maiaLocation.latitude, maiaLocation.longitude] as [number, number],
    []
  );

  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToSelected selectedId={selectedId} />

      <Marker position={[maiaLocation.latitude, maiaLocation.longitude]} icon={maiaIcon}>
        <Popup>
          <div className="w-44">
            <p className="font-display text-base text-ink">Maia 💌</p>
            <p className="mt-1 text-xs text-ink/60">{maiaLocation.address}</p>
          </div>
        </Popup>
      </Marker>

      {accommodations.map((acc) => {
        const distance = distanceInMeters(
          acc.latitude,
          acc.longitude,
          maiaLocation.latitude,
          maiaLocation.longitude
        );
        return (
          <Marker
            key={acc.id}
            position={[acc.latitude, acc.longitude]}
            icon={accIcon}
            eventHandlers={{ click: () => onSelect(acc.id) }}
          >
            <Popup>
              <div className="w-48">
                <div className="relative mb-2 h-24 w-full overflow-hidden rounded-sm">
                  <Image src={acc.image} alt={acc.name} fill className="object-cover" />
                </div>
                <p className="font-display text-base leading-tight text-ink">{acc.name}</p>
                <p className="mt-1 text-xs text-ink/60">
                  💰 {acc.pricePerPersonNOK.toLocaleString("nb-NO")} kr/pers
                </p>
                <p className="text-xs font-medium text-burgundy">
                  🚶 {formatDistance(distance)} · {estimatedWalkMinutes(distance)} min fra Maia
                </p>
                <div className="mt-2 flex gap-2">
                  <a
                    href={acc.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-burgundy underline"
                  >
                    Se leiligheten ↗
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
