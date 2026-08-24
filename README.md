# PlanningTrip

En nettside laget for å planlegge en venninnetur til Aarhus i september 2026.

Siden samler det viktigste vi trenger til turen på ett sted, blant annet flyalternativer, bosteder, avstemning og kart.

## Funksjoner

* Countdown til avreise
* Flyalternativer fra flere norske byer
* Oversikt over aktuelle bosteder
* Mulighet for å stemme på hvor vi skal bo
* Kart med bostedene og adressen til Maia
* Bilder fra Aarhus

## Teknologi

Prosjektet er laget med:

* Next.js
* TypeScript
* Tailwind CSS
* Supabase
* Leaflet
* Vercel

## Kjør prosjektet lokalt

```bash
npm install
npm run dev
```

Åpne deretter:

```text
http://localhost:3000
```

## Supabase

Supabase brukes til å lagre stemmer på bostedene.

For å bruke avstemningen lokalt må følgende variabler ligge i `.env.local`:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

SQL-oppsettet ligger i:

```text
supabase/schema.sql
```

## Deployment

Nettsiden er deployet med Vercel:

https://planning-trip-chi.vercel.app/
