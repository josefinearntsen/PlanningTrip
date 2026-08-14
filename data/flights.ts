// ✈️ FLYLENKER
// Legg til / endre byer, flyselskaper og lenker her.
// Alle lenker åpnes i ny fane. Aarhus flyplass = AAR, København = CPH
// (med tog videre til Aarhus - ca 3t15min med DSB/InterCityLyn).

export type FlightLink = {
  label: string;
  url: string;
};

export type FlightOrigin = {
  city: string;
  airportCode: string;
  links: FlightLink[];
};

export const destinations = {
  aarhus: { name: "Aarhus (AAR)", code: "AAR" },
  copenhagen: { name: "København (CPH) + tog til Aarhus", code: "CPH" },
  billund: { name: "Billund (BLL) + direktebuss til Aarhus", code: "BLL" },
};

export const flightOptions: FlightOrigin[] = [
  {
    city: "Tromsø",
    airportCode: "TOS",
    links: [
      { label: "SAS", url: "https://www.flysas.com/no-no/" },
      { label: "Norwegian", url: "https://www.norwegian.com/no/" },
      {
        label: "Google Flights",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TOS%20to%20AAR",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TOS%20to%20CPH",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TOS%20to%20BLL",
      },
    ],
  },
  {
    city: "Bergen",
    airportCode: "BGO",
    links: [
      { label: "SAS", url: "https://www.flysas.com/no-no/" },
      { label: "Norwegian", url: "https://www.norwegian.com/no/" },
      {
        label: "Google Flights",
        url: "https://www.google.com/travel/flights?q=flights%20from%20BGO%20to%20AAR",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20BGO%20to%20CPH",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20BGO%20to%20BLL",
      },
    ],
  },
  {
    city: "Oslo",
    airportCode: "OSL",
    links: [
      { label: "SAS", url: "https://www.flysas.com/no-no/" },
      { label: "Norwegian", url: "https://www.norwegian.com/no/" },
      {
        label: "Google Flights",
        url: "https://www.google.com/travel/flights?q=flights%20from%20OSL%20to%20AAR",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20OSL%20to%20CPH",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20OSL%20to%20BLL",
      },
    ],
  },
  {
    city: "Trondheim",
    airportCode: "TRD",
    links: [
      { label: "SAS", url: "https://www.flysas.com/no-no/" },
      { label: "Norwegian", url: "https://www.norwegian.com/no/" },
      {
        label: "Google Flights",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TRD%20to%20AAR",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TRD%20to%20CPH",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights?q=flights%20from%20TRD%20to%20BLL",
      },
    ],
  },
];

// 🚆 Tog fra København til Aarhus
export const trainInfo = {
  label: "DSB tog København H → Aarhus H",
  url: "https://www.dsb.dk/",
};

// 🚌 Direktebuss fra Billund til Aarhus
// Flere selskaper kjører denne strekningen (bl.a. Flixbus og Kombardo Expressbus).
// Bytt gjerne ut med den lenken/det selskapet dere faktisk bestiller hos.
export const busInfo = {
  label: "Direktebuss Billund Lufthavn → Aarhus",
  url: "https://www.flixbus.dk/",
};
