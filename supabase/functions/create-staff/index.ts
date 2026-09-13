import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

// Konfigurasi CORS agar frontend Vue bisa mengakses API ini
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 1. Tangani preflight request dari peramban (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 2. Tangkap data yang dikirim dari form Vue
    const { email, nip, full_name, position, roles } = await req.json()

    // 3. Panggil Kunci Rahasia Server (Service Role Key)
    // Kunci ini otomatis disediakan oleh env Supabase, JANGAN PERNAH menaruh ini di Vue!
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 4. Buat Akun Otentikasi
    // Kita gunakan NIP sebagai password default pertama kali
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: nip, 
      email_confirm: true // Lewati verifikasi email untuk MVP ini
    })

    if (authError) throw authError

    // 5. Masukkan data ke tabel staff
    const { error: dbError } = await supabaseAdmin
      .from('staff')
      .insert([
        {
          id: authData.user.id,
          nip: nip,
          full_name: full_name,
          position: position,
          roles: roles
        }
      ])

    // 6. Mekanisme Rollback jika gagal masuk tabel staff
    if (dbError) {
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      throw dbError
    }

    // 7. Berikan respon sukses ke Vue
    return new Response(
      JSON.stringify({ message: 'Pegawai berhasil ditambahkan!', user_id: authData.user.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})