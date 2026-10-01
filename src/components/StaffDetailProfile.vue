<template>
  <div class="flex flex-col h-full overflow-hidden relative">
    <!-- HEADER / TOMBOL KEMBALI -->
    <div class="flex items-center gap-4 mb-6 shrink-0">
      <h2 class="text-xl font-bold text-gray-900 leading-tight">Profil Lengkap Staf</h2>
    </div>

    <!-- KONTEN SCROLLABLE -->
    <div class="flex-1 overflow-y-auto custom-scrollbar flex flex-col xl:flex-row gap-6 pb-10">
      
      <!-- KOLOM KIRI: SIDEBAR RINGKASAN -->
      <aside class="w-full xl:w-72 shrink-0 h-max bg-gray-50/50 rounded-[2rem] border border-gray-200/50 p-6 flex flex-col items-center shadow-sm">
         <div class="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-black mb-4 shadow-inner">
            {{ formData.full_name?.charAt(0).toUpperCase() || 'S' }}
         </div>
         <h2 class="text-lg font-bold text-gray-900 text-center leading-tight">{{ formData.full_name }}</h2>
         <p class="text-sm font-semibold text-gray-500 mt-1 text-center">{{ formData.position }}</p>
         
         <div class="w-full h-px bg-gray-200/60 my-5"></div>
         
         <div class="w-full space-y-3">
           <div>
             <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">NIP / NUPTK</p>
             <p class="text-sm font-mono text-gray-800">{{ formData.nip || '-' }}</p>
           </div>
           <div>
             <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">TMT Kerja</p>
             <p class="text-sm font-semibold text-gray-800">{{ formData.tmt_kerja || '-' }}</p>
           </div>
         </div>
      </aside>

      <!-- KOLOM KANAN: FORMULIR INLINE EDITING -->
      <div class="flex-1 space-y-6">
         <!-- Looping otomatis berdasarkan Schema yang dibuat di Javascript -->
         <div v-for="section in schema" :key="section.id" class="bg-gray-50/50 rounded-[2rem] border border-gray-200/50 p-6 lg:p-8 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-6">{{ section.title }}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
               <div v-for="field in section.fields" :key="field.key" :class="field.colSpan ? 'md:col-span-2' : ''">
                  <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">{{ field.label }}</label>

                  <!-- MODE VIEW (READ-ONLY) -->
                  <div v-if="!editing[field.key]" class="group flex items-start justify-between bg-[#E9EEF2]/60 px-4 py-2.5 rounded-xl border border-transparent hover:border-gray-200/80 transition-colors min-h-[42px]">
                     <span class="text-sm text-gray-800 font-medium whitespace-pre-wrap">{{ formData[field.key] || '-' }}</span>
                     <button @click="startEdit(field.key)" class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600 transition-all p-0.5 shrink-0 ml-2" title="Edit Data">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                     </button>
                  </div>

                  <!-- MODE EDIT (INPUT FIELD) -->
                  <div v-else class="flex gap-2 items-start min-h-[42px]">
                     
                     <select v-if="field.type === 'select'" v-model="tempData[field.key]" class="flex-1 bg-white px-4 py-2.5 rounded-xl border border-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[42px]">
                        <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                     </select>
                     
                     <input v-else-if="field.type === 'date'" v-model="tempData[field.key]" type="date" class="flex-1 bg-white px-4 py-2.5 rounded-xl border border-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[42px]">
                     
                     <input v-else v-model="tempData[field.key]" type="text" class="flex-1 bg-white px-4 py-2.5 rounded-xl border border-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[42px]">

                     <button @click="saveEdit(field.key)" :disabled="isSaving" class="h-[42px] px-3 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 rounded-xl transition-colors flex items-center justify-center shrink-0">
                        <svg v-if="!isSaving" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span v-else class="text-xs font-bold">...</span>
                     </button>
                     
                     <button @click="cancelEdit(field.key)" :disabled="isSaving" class="h-[42px] px-3 bg-rose-100 text-rose-600 hover:bg-rose-200 rounded-xl transition-colors flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                  </div>

               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase' // Sesuaikan path ini dengan letak supabase.js Anda

const props = defineProps({
  staffData: {
    type: Object,
    required: true
  }
})

const formData = ref({})
const tempData = ref({})
const editing = ref({})
const isSaving = ref(false)

// Inisialisasi data saat form dibuka
onMounted(() => {
  formData.value = { ...props.staffData }
})

// Fungsi masuk mode edit
const startEdit = (key) => {
  tempData.value[key] = formData.value[key]
  editing.value[key] = true
}

// Fungsi membatalkan edit
const cancelEdit = (key) => {
  editing.value[key] = false
}

// Fungsi menyimpan per satu kolom langsung ke Supabase
const saveEdit = async (key) => {
  try {
    isSaving.value = true
    const { error } = await supabase
      .from('staff')
      .update({ [key]: tempData.value[key] })
      .eq('id', formData.value.id)

    if (error) throw error

    // Jika sukses, perbarui tampilan visualnya
    formData.value[key] = tempData.value[key]
    editing.value[key] = false
  } catch (error) {
    alert('Gagal memperbarui data: ' + error.message)
  } finally {
    isSaving.value = false
  }
}

// SKEMA FORM: Tambah, kurangi, atau ubah urutan field cukup dari array ini
const schema = [
  {
    id: 'identitas', title: 'Data Identitas Pribadi (Demografi)',
    fields: [
      { key: 'nik', label: 'Nomor Induk Kependudukan', type: 'text' },
      { key: 'kk', label: 'No. Kartu Keluarga', type: 'text' },
      { key: 'full_name', label: 'Nama Lengkap', type: 'text', colSpan: true },
      { key: 'tempat_lahir', label: 'Tempat Lahir', type: 'text' },
      { key: 'tanggal_lahir', label: 'Tanggal Lahir', type: 'date' },
      { key: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
      { key: 'agama', label: 'Agama', type: 'select', options: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'] },
      { key: 'status_pernikahan', label: 'Status Pernikahan', type: 'select', options: ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'] },
    ]
  },
  {
    id: 'kepegawaian', title: 'Data Kepegawaian & Struktural (Inti)',
    fields: [
      { key: 'nip', label: 'NIP / NUPTK / NIY', type: 'text' },
      { key: 'status_kepegawaian', label: 'Status Kepegawaian', type: 'select', options: ['PNS', 'PPPK', 'Guru Tetap Yayasan', 'Guru Tidak Tetap', 'Honorer'] },
      { key: 'position', label: 'Jabatan Struktural Utama', type: 'select', options: ['Kepala Sekolah', 'Waka Kurikulum', 'Kepala Program', 'Operator Sekolah', 'Guru BK / Wali Kelas', 'Staf TU / Umum'] },
      { key: 'jabatan_fungsional', label: 'Jabatan Fungsional (Contoh: Guru Matematika)', type: 'text' },
      { key: 'tmt_kerja', label: 'TMT Kerja (Tanggal Bergabung)', type: 'date' },
      { key: 'golongan', label: 'Pangkat / Golongan Ruang', type: 'text' },
    ]
  },
  {
    id: 'kontak', title: 'Data Kontak & Alamat',
    fields: [
      { key: 'alamat', label: 'Alamat Domisili Lengkap', type: 'text', colSpan: true },
      { key: 'no_hp', label: 'Nomor Telepon / WhatsApp Aktif', type: 'text' },
      { key: 'contact_email', label: 'Kontak Email', type: 'text' },
      { key: 'darurat_nama', label: 'Kontak Darurat (Nama Keluarga)', type: 'text' },
      { key: 'darurat_hp', label: 'Kontak Darurat (Nomor Telepon)', type: 'text' },
      { key: 'darurat_hubungan', label: 'Kontak Darurat (Hubungan: Suami/Istri/Ortu)', type: 'text' },
    ]
  },
  {
    id: 'akademik', title: 'Data Kualifikasi & Akademik',
    fields: [
      { key: 'pendidikan_tingkat', label: 'Tingkat Pendidikan Terakhir', type: 'select', options: ['SMA/SMK', 'D3', 'D4/S1', 'S2', 'S3'] },
      { key: 'pendidikan_tahun', label: 'Tahun Kelulusan', type: 'text' },
      { key: 'pendidikan_instansi', label: 'Nama Instansi Pendidikan / Universitas', type: 'text' },
      { key: 'pendidikan_jurusan', label: 'Jurusan / Program Studi', type: 'text' },
      { key: 'sertifikasi', label: 'Status Sertifikasi Pendidik', type: 'text', colSpan: true },
      { key: 'pelatihan', label: 'Riwayat Pelatihan / Sertifikasi Tambahan', type: 'text', colSpan: true },
    ]
  },
  {
    id: 'finansial', title: 'Data Administratif & Finansial',
    fields: [
      { key: 'bank_nama', label: 'Nama Bank Payroll', type: 'text' },
      { key: 'bank_rekening', label: 'Nomor Rekening', type: 'text' },
      { key: 'bank_atasnama', label: 'Nama Atas Rekening', type: 'text' },
      { key: 'npwp', label: 'Nomor Pokok Wajib Pajak (NPWP)', type: 'text' },
    ]
  }
]
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
</style>