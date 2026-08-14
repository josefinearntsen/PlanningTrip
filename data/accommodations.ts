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
    image: "/images/accommodations/airbnb-1.png", // TODO: bytt ut med bilde fra annonsen eller egen fil i /public/images/accommodations/
  },
  {
    id: "airbnb-byhus-aarhus-c",
    name: "Lekkert 200 m² byhus i Aarhus C, 4 soverom",
    area: "Aarhus C",
    address: "Aarhus C, 8000 Aarhus, Danmark", // Airbnb skjuler eksakt adresse pre-booking
    latitude: 56.147324752186705,
    longitude: 10.193934924656041,
    pricePerPersonNOK: 2367, // 18 937 kr totalt (3 netter) / 8 gjester
    totalPriceNOK: 18937,
    guests: 8,
    rating: 4.93,
    description:
      "Romslig 200 kvm byhus med 4 soverom, 2 bad og privat hage med grill, midt i Aarhus C. Gangavstand til ARoS, rådhuset, Bruuns Galleri, Den Gamle By og Dokk1.",
    bookingUrl:
      "https://www.airbnb.no/rooms/1383439144478344107?adults=8&check_in=2026-09-24&check_out=2026-09-27&guests=8&location=Aarhus%2C%20Sentral-Danmark%2C%20Danmark&search_mode=regular_search&source_impression_id=p3_1786727394_P3H4bMzhY4gWy5r_&previous_page_section_name=1001&federated_search_id=487abdc5-66c9-4873-952f-811955e1a68f",
    bookingLabel: "Se på Airbnb ↗",
    image: "/images/accommodations/airbnb-2.png", // TODO: bytt ut med bilde fra annonsen eller egen fil i /public/images/accommodations/
  },
  {
    id: "airbnb-danhostel-family-room",
    name: "Privat rom for åtte personer med eget bad",
    area: "Aarhus C",
    address: "Aarhus C, 8000 Aarhus, Danmark", // Airbnb skjuler eksakt adresse pre-booking - Danhostel Aarhus City, nær Århusåen/Vadestedet
    latitude: 56.15702106502432,
    longitude: 10.20730529878372,
    pricePerPersonNOK: 842, // 6 733 kr totalt (3 netter) / 8 gjester
    totalPriceNOK: 6733,
    guests: 8,
    rating: undefined, // Airbnb viser ikke snittvurdering før 3 anmeldelser (kun 1 anmeldelse så langt)
    description:
      "Stort familierom på Danhostel Aarhus City med plass til 8 (dobbeltseng + 3 køyesenger) og eget bad. Sentralt i Aarhus C, rett ved Århusåen og gangavstand til Latinerkvarteret, ARoS og Dokk1. Tilgang til delt gjestekjøkken og fellesarealer.",
    bookingUrl: "TODO: lim inn Airbnb-lenken til dette rommet her",
    bookingLabel: "Se på Airbnb ↗",
    image: "/images/accommodations/sovesal-1.png", // TODO: bytt ut med bilde fra annonsen eller egen fil i /public/images/accommodations/
  },
  {
    id: "airbnb-sjarmerende-byhus",
    name: "Sjarmerende byhus midt i sentrum",
    area: "Frederiksbjerg",
    address: "Frederiksbjerg, 8000 Aarhus C, Danmark", // Airbnb skjuler eksakt adresse pre-booking - nær Jægergårdsgade
    latitude: 56.14655190520858,
    longitude: 10.196898999820787,
    pricePerPersonNOK: 2258, // 13 548 kr totalt (3 netter) / 6 gjester
    totalPriceNOK: 13548,
    guests: 6, // OBS: lavere kapasitet enn de andre alternativene
    rating: 4.76,
    description:
      "Koselig rekkehus med hage, terrasse og drivhus, midt på Frederiksbjerg rett ved Jægergårdsgade sine kafeer og restauranter. Kort gangavstand til Aros og Strøget.",
    bookingUrl: "https://www.airbnb.no/rooms/44135404?adults=6&check_in=2026-09-24&check_out=2026-09-27&guests=8&location=Aarhus%2C%20Sentral-Danmark%2C%20Danmark&search_mode=regular_search&source_impression_id=p3_1786729320_P33pYOZ4CRiDWLmo&previous_page_section_name=1001&federated_search_id=f75e693a-e505-45b4-b40e-224fba010817",
    bookingLabel: "Se på Airbnb ↗",
    image: "/images/accommodations/airbnb-3.png", 
  },
];
