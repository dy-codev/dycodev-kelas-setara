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
    // Tangkap data dari frontend (Vue) - Format baru untuk mode "Buat Akun"
    const { staff_id, auth_email, roles, password } = await req.json()

    if (!staff_id || !auth_email) {
      throw new Error("staff_id, auth_email, dan password wajib diisi")
    }

    // Inisialisasi Supabase Admin menggunakan Service Role Key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    )

    // 1. Ambil data NIP pegawai dari database untuk dijadikan password default
    const { data: staffRecord, error: staffFetchError } = await supabaseAdmin
      .from('staff')
      .select('nip, full_name')
      .eq('id', staff_id)
      .single()

    if (staffFetchError || !staffRecord) {
      throw new Error("Data pegawai tidak ditemukan di database.")
    }

    // 2. Buat user baru di sistem Autentikasi Supabase
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: auth_email,
      password: password, // Menggunakan password eksplisit yang diinput/generate admin
      email_confirm: true,
      user_metadata: {
        full_name: staffRecord.full_name // Simpan nama di metadata agar mudah diakses frontend
      }
    })

    if (authError) throw authError

    const newUserId = authData.user.id

    // 3. Hubungkan ID Auth yang baru dibuat ke tabel public.staff
    const { error: dbError } = await supabaseAdmin
      .from('staff')
      .update({ 
        account_id: newUserId,
        roles: roles
      })
      .eq('id', staff_id)

    // Jika gagal update tabel, rollback akun Auth
    if (dbError) {
      await supabaseAdmin.auth.admin.deleteUser(newUserId)
      throw dbError
    }

    return new Response(
      JSON.stringify({ success: true, message: "Akun berhasil dibuat dan dihubungkan." }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})