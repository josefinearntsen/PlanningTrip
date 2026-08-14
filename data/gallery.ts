// 🖼️ AARHUS-GALLERI
// Bytt ut src med dine egne bilder i /public/images/gallery/ når du har dem.
// "span" styrer størrelsen i det asymmetriske grid-oppsettet (se Gallery.tsx).

export type GalleryImage = {
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://picsum.photos/seed/aros-rainbow/800/1000",
    alt: "ARoS Rainbow Panorama",
    span: "tall",
  },
  {
    src: "https://picsum.photos/seed/latinerkvarteret/900/650",
    alt: "Latinerkvarteret",
    span: "wide",
  },
  {
    src: "https://picsum.photos/seed/aarhus-sentrum/700/700",
    alt: "Aarhus sentrum",
    span: "normal",
  },
  {
    src: "https://picsum.photos/seed/aarhus-havn/700/900",
    alt: "Havnen i Aarhus",
    span: "tall",
  },
  {
    src: "https://picsum.photos/seed/dansk-gate/900/650",
    alt: "Danske gater",
    span: "wide",
  },
  {
    src: "https://picsum.photos/seed/cafe-aarhus/700/700",
    alt: "Café i Aarhus",
    span: "normal",
  },
];
