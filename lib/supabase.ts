import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Hvis env-variablene mangler (f.eks. under lokal utvikling uten Supabase
// koblet til enda), lager vi ikke en klient - komponentene som bruker
// stemmegivning håndterer dette gracefully og viser en vennlig melding.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
