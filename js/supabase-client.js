/**
 * ==========================================================
 *  KONEKSI SUPABASE — CAP LAUT BIRU
 * ==========================================================
 * Project URL & anon/publishable key ini AMAN ditaruh di kode
 * frontend (client-side) karena akses data dibatasi oleh
 * Row Level Security (RLS) yang hanya mengizinkan pembacaan
 * publik (SELECT). Jangan pernah menaruh "service_role key"
 * di sini atau di file manapun yang bisa diakses publik.
 */
const SUPABASE_URL = "https://zbbuxxckqhpfpefgjzus.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7JqrvoQnYGD9c0bRISuPnw_E0wFLgAN";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
