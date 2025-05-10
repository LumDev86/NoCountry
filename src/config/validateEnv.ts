import dotenv from "dotenv";
dotenv.config();

// Función genérica para validar variables de entorno
const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
};

export const config = {
  PORT: getEnvVar('PORT'),
  SUPEBASE_URL: getEnvVar('SUPABASE_URL'),
  SUPABASE_ANON_KEY: getEnvVar('SUPABASE_ANON_KEY')

}