// src/supabase.js
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ztxhtrozlgxkbrhliuxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eGh0cm96bGd4a2JyaGxpdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Mzc1MDEsImV4cCI6MjA2MzAxMzUwMX0.MyZo1OzIpL8G8ohxkxy-g-_IAMJyFZahnMdLzc0jqT0';
export const supabase = createClient(supabaseUrl, supabaseKey);