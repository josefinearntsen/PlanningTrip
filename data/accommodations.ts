// 🏠 BOPLASS-ALTERNATIVER
// Legg til / fjern / endre alternativer her (mellom 3 og 6 stk anbefales).
// id må være unik og stabil (brukes til stemmegivning i Supabase).
// latitude/longitude brukes til å plassere bostedet på kartet og til å
// regne ut avstand fra Maia. Bytt ut placeholder-bildet med et ekte bilde
// i /public/images/accommodations/ når du har det.

export type Accommodation = {
  id: string; // unik, ikke endre etter at folk har stemt
  name: string;
  area: string;
  address: string;
  latitude: number;
  longitude: number;
  pricePerPersonNOK: number;
  totalPriceNOK: number;
  guests: number;
  rating?: number; // 0-5
  description: string;
  bookingUrl: string;
  bookingLabel?: string; // f.eks. "Se på Airbnb ↗"
  // 🖼️ BYTT UT: legg bilde i /public/images/accommodations/ og pek hit
  image: string;
};

export const accommodations: Accommodation[] = [
  {
    id: "airbnb-1413815701267700886",
    name: "Luksuriøs takleilighet, Frederiksbjerg",
    area: "Frederiksbjerg",
    address: "Frederiksbjerg, 8000 Aarhus C, Danmark", // Airbnb skjuler eksakt adresse pre-booking
    latitude: 56.148937161723765, // anslag for Frederiksbjerg nær togstasjonen - se note i data/maia.ts for hvordan finne eksakt adresse
    longitude: 10.197576142329112,
    pricePerPersonNOK: 1962, // 15 694 kr totalt (3 netter) / 8 gjester
    totalPriceNOK: 15694,
    guests: 8,
    rating: 4.88,
    description:
      "Toppleilighet med Aarhus' beste utsikt og balkong i solnedgangen, midt på Frederiksbjerg. Fem minutter til togstasjonen, kafeer og restauranter rett over gaten.",
    bookingUrl:
      "https://www.airbnb.no/rooms/1413815701267700886?adults=7&check_in=2026-09-24&check_out=2026-09-27&guests=8&location=Aarhus%2C%20Sentral-Danmark%2C%20Danmark&search_mode=regular_search",
    bookingLabel: "Se på Airbnb ↗",
    image: "https://picsum.photos/seed/aarhus-airbnb-1/800/600", // TODO: bytt ut med bilde fra annonsen eller egen fil i /public/images/accommodations/
  },
  {
    id: "latinerkvarteret-loft",
    name: "Loftsleilighet i Latinerkvarteret",
    area: "Latinerkvarteret",
    address: "Møllestien, 8000 Aarhus C, Danmark",
    latitude: 56.1567,
    longitude: 10.2076,
    pricePerPersonNOK: 1150,
    totalPriceNOK: 11500,
    guests: 10,
    rating: 4.8,
    description:
      "Sjarmerende loft midt i de brosteinsbelagte gatene, gåavstand til nesten alt.",
    bookingUrl: "https://www.airbnb.com/",
    bookingLabel: "Se leiligheten ↗",
    image: "https://picsum.photos/seed/aarhus-latin/800/600",
  },
  {
    id: "aarhus-c-penthouse",
    name: "Penthouse i Aarhus C",
    area: "Aarhus C",
    address: "Åboulevarden, 8000 Aarhus C, Danmark",
    latitude: 56.1546,
    longitude: 10.2098,
    pricePerPersonNOK: 1400,
    totalPriceNOK: 14000,
    guests: 10,
    rating: 4.9,
    description: "Lys og luftig leilighet ved åen, med takterrasse og utsikt.",
    bookingUrl: "https://www.booking.com/",
    bookingLabel: "Se leiligheten ↗",
    image: "https://picsum.photos/seed/aarhus-penthouse/800/600",
  },
  {
    id: "frederiksbjerg-townhouse",
    name: "Rekkehus på Frederiksbjerg",
    area: "Frederiksbjerg",
    address: "Frederiks Allé, 8000 Aarhus C, Danmark",
    latitude: 56.149,
    longitude: 10.2015,
    pricePerPersonNOK: 980,
    totalPriceNOK: 9800,
    guests: 10,
    rating: 4.6,
    description:
      "Koselig rekkehus rett rundt hjørnet fra Maia, med hage og god plass.",
    bookingUrl: "https://www.airbnb.com/",
    bookingLabel: "Se leiligheten ↗",
    image: "https://picsum.photos/seed/aarhus-frederiksbjerg/800/600",
  },
  {
    id: "havnen-apartment",
    name: "Leilighet ved Havnen",
    area: "Aarhus Ø / Havnen",
    address: "Dokk1-området, 8000 Aarhus, Danmark",
    latitude: 56.1495,
    longitude: 10.2185,
    pricePerPersonNOK: 1250,
    totalPriceNOK: 12500,
    guests: 10,
    rating: 4.7,
    description: "Moderne leilighet med havneutsikt, kort vei til Dokk1 og sentrum.",
    bookingUrl: "https://www.booking.com/",
    bookingLabel: "Se leiligheten ↗",
    image: "https://picsum.photos/seed/aarhus-havn/800/600",
  },
];