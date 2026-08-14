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
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhokEgoyMDI2LTA5LTI0ag0IAxIJL20vMDE4YnZscgcIARIDQUFSGiQSCjIwMjYtMDktMjdqBwgBEgNBQVJyDQgDEgkvbS8wMThidmxAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhopEgoyMDI2LTA5LTI0ag0IAxIJL20vMDE4YnZscgwIAxIIL20vMDFsZnkaKRIKMjAyNi0wOS0yN2oMCAMSCC9tLzAxbGZ5cg0IAxIJL20vMDE4YnZsQAFIAXABggELCP___________wGYAQE&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhorEgoyMDI2LTA5LTI0ag0IAxIJL20vMDE4YnZscg4IAxIKL20vMDViNm03ORorEgoyMDI2LTA5LTI3ag4IAxIKL20vMDViNm03OXINCAMSCS9tLzAxOGJ2bEABSAFwAYIBCwj___________8BmAEB&tfu=EgYIABAAGAA",
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
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI2LTA5LTI0agwIAxIIL20vMGZtN3NyBwgBEgNBQVIaIxIKMjAyNi0wOS0yN2oHCAESA0FBUnIMCAMSCC9tLzBmbTdzQAFIAXABggELCP___________wGYAQE&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhooEgoyMDI2LTA5LTI0agwIAxIIL20vMGZtN3NyDAgDEggvbS8wMWxmeRooEgoyMDI2LTA5LTI3agwIAxIIL20vMDFsZnlyDAgDEggvbS8wZm03c0ABSAFwAYIBCwj___________8BmAEB&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhoqEgoyMDI2LTA5LTI0agwIAxIIL20vMGZtN3NyDggDEgovbS8wNWI2bTc5GioSCjIwMjYtMDktMjdqDggDEgovbS8wNWI2bTc5cgwIAxIIL20vMGZtN3NAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
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
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTI0agcIARIDT1NMcgcIARIDQUFSGh4SCjIwMjYtMDktMjdqBwgBEgNBQVJyBwgBEgNPU0xAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTI0agcIARIDT1NMcgcIARIDQ1BIGh4SCjIwMjYtMDktMjdqBwgBEgNDUEhyBwgBEgNPU0xAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTI0agcIARIDT1NMcgcIARIDQkxMGh4SCjIwMjYtMDktMjdqBwgBEgNCTExyBwgBEgNPU0xAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
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
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA5LTI0agcIARIDVFJEcgcIARIDQUFSGh4SCjIwMjYtMDktMjdqBwgBEgNBQVJyBwgBEgNUUkRAAUgBcAGCAQsI____________AZgBAQ&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via CPH)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI2LTA5LTI0agwIAxIIL20vMDlidGtyBwgBEgNDUEgaIxIKMjAyNi0wOS0yN2oHCAESA0NQSHIMCAMSCC9tLzA5YnRrQAFIAXABggELCP___________wGYAQE&tfu=EgYIABAAGAA",
      },
      {
        label: "Google Flights (via BLL)",
        url: "https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI2LTA5LTI0agwIAxIIL20vMDlidGtyBwgBEgNCTEwaIxIKMjAyNi0wOS0yN2oHCAESA0JMTHIMCAMSCC9tLzA5YnRrQAFIAXABggELCP___________wGYAQE&tfu=EgYIABAAGAA",
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
export const busInfo = {
  label: "Direktebuss Billund Lufthavn → Aarhus",
  url: "https://www.midttrafik.dk/media/443dzpqm/912x_k26-ua.pdf",
};
