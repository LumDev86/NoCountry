import { createClient } from "@supabase/supabase-js";
import { config } from "./validateEnv";

const supabaseUrl = config.SUPEBASE_URL;
const supabaseAnonKey = config.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);