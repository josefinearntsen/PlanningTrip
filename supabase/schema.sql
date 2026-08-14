-- Aarhus 2026 - stemme-tabell for "Hvor skal vi bo?"
-- Kjør dette i Supabase SQL Editor (Project -> SQL Editor -> New query).

create table if not exists votes (
  id uuid primary key default gen_random_uuid(),
  accommodation_id text not null,
  voter_name text not null,
  -- Normalisert (lowercase, trimmet) navn brukes for å hindre at samme
  -- person stemmer flere ganger, men lar dem endre stemmen sin.
  voter_name_normalized text not null,
  created_at timestamptz not null default now()
);

-- En person (ett normalisert navn) kan bare ha én aktiv stemme.
-- Stemmer på nytt = oppdaterer raden i stedet for å lage en ny (se upsert i koden).
create unique index if not exists votes_voter_name_unique
  on votes (voter_name_normalized);

-- Rad-nivå sikkerhet: vi har ingen ekte auth i dette prosjektet, så vi
-- åpner opp for anonym lesing og skriving. Fint for en liten privat
-- venninnetur-side, men vær obs på at hvem som helst med lenken kan stemme.
alter table votes enable row level security;

create policy "Alle kan lese stemmer"
  on votes for select
  to anon
  using (true);

create policy "Alle kan stemme"
  on votes for insert
  to anon
  with check (true);

create policy "Alle kan endre sin egen stemme"
  on votes for update
  to anon
  using (true)
  with check (true);

-- Aktiver realtime slik at resultatene oppdaterer seg live for alle som
-- har siden åpen samtidig (valgfritt, men fint å ha).
-- Gjøres i Supabase Dashboard: Database -> Replication -> slå på "votes",
-- eller med:
-- alter publication supabase_realtime add table votes;
