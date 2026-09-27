import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Tangani preflight request untuk CORS dari browser
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { account_id, auth_email, password } = await req.json()

    if (!account_id || !auth_email) {
      throw new Error("ID Akun (account_id) dan Email (auth_email) wajib dikirim.")
    }

    // Inisialisasi Supabase Admin (Bypass RLS)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    )

    // Siapkan wadah (payload) untuk update
    const updatePayload: any = { 
      email: auth_email, 
      email_confirm: true 
    }

    // Jika admin mengisi password baru di frontend, masukkan ke payload
    if (password && password.trim() !== '') {
      updatePayload.password = password
    }

    // Eksekusi pembaruan kredensial langsung ke auth.users berdasarkan account_id
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
      account_id, 
      updatePayload
    )

    if (updateError) throw updateError

    return new Response(
      JSON.stringify({ success: true, message: "Kredensial berhasil diperbarui." }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})