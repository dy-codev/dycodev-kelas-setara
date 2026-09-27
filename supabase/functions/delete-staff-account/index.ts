import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { account_id } = await req.json()
    if (!account_id) throw new Error("ID Akun wajib dikirim.")

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    )

    // 1. Putus relasi: Kosongkan account_id di tabel public.staff agar tidak error Foreign Key
    const { error: unlinkError } = await supabaseAdmin
      .from('staff')
      .update({ account_id: null })
      .eq('account_id', account_id)
    if (unlinkError) throw unlinkError

    // 2. Hapus permanen kredensial login dari auth.users
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(account_id)
    if (deleteError) throw deleteError

    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 })
  }
})