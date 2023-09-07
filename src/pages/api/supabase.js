import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://znehfmdvqxgqnmixhkuc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZWhmbWR2cXhncW5taXhoa3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3MjU4MjIsImV4cCI6MjAwOTMwMTgyMn0.atdN5UEr0WCGxXBkKxjVeM3S1o7xYNpS8YUXOdejiEM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
