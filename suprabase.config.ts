import * as SecureStore from "expo-secure-store";
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = process.env.SUPABASE_URL || 'https://avefennijcxgpktkflps.supabase.co'
const supabaseAnonKey = process.env.ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZWZlbm5pamN4Z3BrdGtmbHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2MjMzNjEsImV4cCI6MTk5NzE5OTM2MX0.GCIxlxSvikiGnyn7tQT1PURo7YzvtvWYisDJMIDR_E8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    
  },
})