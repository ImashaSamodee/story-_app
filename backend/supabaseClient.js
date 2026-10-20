const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;

let supabase = null;

if (supabaseUrl && supabaseKey && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseKey !== 'YOUR_SUPABASE_ANON_KEY') {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✨ [Supabase] Connected successfully to:', supabaseUrl);
  } catch (err) {
    console.error('⚠️ [Supabase] Initialization failed:', err.message);
  }
} else {
  console.log('ℹ️ [Supabase] SUPABASE_URL or SUPABASE_KEY not configured. Running in offline/in-memory mode.');
}

module.exports = supabase;
