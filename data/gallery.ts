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
    src: "/images/gallery/360_F_345596607_4rOKBXbbXoHgvxA262CAxOAyhJqs1R6v.jpg",
    alt: "ARoS Rainbow Panorama",
    span: "tall",
  },
  {
    src: "/images/gallery/Isbjerget-Aarhus-Architecture.jpg",
    alt: "Latinerkvarteret",
    span: "wide",
  },
  {
    src: "/images/gallery/standard_compressed_danmarkfriluftsmuseet.jpg",
    alt: "Aarhus sentrum",
    span: "normal",
  },
  {
    src: "/images/gallery/Aarhus_picture-scaled.jpg",
    alt: "Havnen i Aarhus",
    span: "tall",
  },
  {
    src: "/images/gallery/Aarhus-Denmark.jpg",
    alt: "Danske gater",
    span: "wide",
  },
];
