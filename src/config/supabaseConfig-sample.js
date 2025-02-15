import { createClient } from '@supabase/supabase-js'

// adding here because it's not reading .env file for some reason.
// Replace with value from Supabase
const supabaseUrl = ''
const supabaseKey = ''

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
