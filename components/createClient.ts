import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ihczwvsmfnxtsopaveuv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloY3p3dnNtZm54dHNvcGF2ZXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MzYyMDcsImV4cCI6MjA0MDIxMjIwN30.cefBzSKOCa3X6jREV8i7mBzdmXmMr5Zxmu2LrW5BEHs'
)
