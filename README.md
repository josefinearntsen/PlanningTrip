# Aarhus 2026 🇩🇰 — Girls trip nettside

En one-page nettside for venninneturen til Aarhus, 24.–27. september 2026.
Bygget med Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion,
Leaflet (kart) og Supabase (avstemning).

## Kom i gang lokalt

```bash
npm install
cp .env.example .env.local   # fyll inn Supabase-verdiene dine, se under
npm run dev
```

Åpne http://localhost:3000

Siden fungerer fint uten Supabase koblet til — da vises alle seksjoner
normalt, men "Stem på denne"-knappene lagrer ikke noe, og du får en liten
gul infoboks i boplass-seksjonen som forteller at avstemning ikke er satt
opp enda.

## Sette opp avstemning (Supabase)

1. Lag et gratis prosjekt på [supabase.com](https://supabase.com).
2. Gå til **SQL Editor** i Supabase-dashboardet, og kjør hele innholdet i
   [`supabase/schema.sql`](./supabase/schema.sql). Dette lager `votes`-tabellen
   med riktige rettigheter (RLS-policies for anonym lesing/skriving).
3. (Valgfritt, men anbefalt) Slå på realtime for tabellen slik at stemmer
   oppdaterer seg live for alle som har siden åpen samtidig:
   Database → Replication → aktiver `votes`. Eller kjør:
   ```sql
   alter publication supabase_realtime add table votes;
   ```
4. Gå til **Project Settings → API** og kopier:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Lim disse inn i `.env.local` (lokalt) og som Environment Variables i
   Vercel-prosjektet ditt (se under).

Stemmegivning er bevisst enkel: ingen ekte innlogging. Man skriver inn
navnet sitt første gang man stemmer, og det navnet husker nettleseren
(`localStorage`) slik at man slipper å skrive det på nytt. Stemmer man på
et nytt bosted senere, oppdateres den gamle stemmen (upsert), så man kan
bare ha én aktiv stemme om gangen, men fritt endre den.

## Deploye til Vercel

1. Push prosjektet til et GitHub-repo.
2. Importer repoet i [vercel.com](https://vercel.com/new).
3. Legg inn de to Supabase-env-variablene under **Environment Variables**.
4. Deploy — ferdig.

> **Obs:** Første build vil hente Google Fonts (Fraunces, Inter, Caveat)
> over internett. Dette krever at build-miljøet har tilgang til
> `fonts.googleapis.com`, noe Vercel har som standard.

## Hva du bør bytte ut før lansering

Alt er merket i koden med 🖼️ / kommentarer, men her er en samlet oversikt:

| Hva | Hvor |
|---|---|
| Hero-bilde av Aarhus | `components/Hero.tsx` (bytt `src` på `<Image>`) |
| Bilde av Maia | `data/maia.ts` → `image`, fil legges i `public/images/maia/` |
| Maias eksakte koordinater | `data/maia.ts` → `latitude` / `longitude` (se note i filen) |
| Boplass-alternativer (3–6 stk) | `data/accommodations.ts` — bilder, adresser, koordinater, priser, Airbnb/Booking-lenker |
| Flylenker per by | `data/flights.ts` |
| Aarhus-galleribilder | `data/gallery.ts`, filer legges i `public/images/gallery/` |
| Avreisedato for countdown | `components/Countdown.tsx` → `DEPARTURE_DATE` |

Alle bilder bruker foreløpig tilfeldige placeholder-bilder fra
`picsum.photos`. Bytt `src`/`image`-feltene til dine egne bilder — enten
ved å legge dem i `public/images/...` og peke på f.eks. `/images/maia/maia.jpg`,
eller ved å bruke egne bilde-URLer.

## Prosjektstruktur

```
app/
  layout.tsx        Fonter + global HTML-struktur
  page.tsx           Selve one-page-siden (rekkefølgen på seksjonene)
  globals.css         Tailwind + polaroid/washi-tape-stiler
components/
  Navbar.tsx           Sticky navigasjon
  Hero.tsx             Forside
  Countdown.tsx        Nedtelling til 24. september 2026
  MaiaSection.tsx       "Vi kommer til Maia"
  Flights.tsx           Fly-seksjon med by-faner
  Accommodations.tsx      "Hvor skal vi bo?"-seksjon (grid av kort)
  AccommodationCard.tsx    Enkeltkort m/ stemmegivning
  MapSection.tsx          Kart-seksjon (filter-knapper + kart)
  MapView.tsx             Selve Leaflet-kartet (client-only)
  Gallery.tsx             Aarhus-bildegalleri
  Footer.tsx
data/
  maia.ts             Maias adresse/koordinater/bilde
  accommodations.ts      Boplass-alternativer
  flights.ts            Flyselskaper/lenker per by
  gallery.ts             Galleribilder
lib/
  supabase.ts          Supabase-klient
  useVotes.ts           Hook for henting/lagring av stemmer (+ realtime)
  distance.ts           Avstandsberegning (Haversine) Maia ↔ bosted
supabase/
  schema.sql            SQL for `votes`-tabellen + RLS-policies
```

## Teknisk

- **Kart:** Leaflet + OpenStreetMap-fliser (helt gratis, ingen API-nøkkel
  nødvendig). Klikk på et bosted i listen eller på kartet for å zoome inn
  og se avstanden til Maia.
- **Avstand:** regnes ut med luftlinje (Haversine-formel) i `lib/distance.ts`,
  vist både i meter/km og som anslått gangtid.
- **Animasjoner:** Framer Motion, brukt sparsomt (inn-animasjoner, scroll-cue),
  og respekterer `prefers-reduced-motion`.
- **Mobile-first:** store klikkflater, sticky enkel navbar, kortstabel som
  blir grid på større skjermer.
