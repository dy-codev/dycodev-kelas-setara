<template>
  <!-- Wrapper Utama Dashboard: Full screen, Flexbox -->
  <div class="flex h-screen bg-[#F4F7F9] font-sans overflow-hidden">
    
    <!-- SIDEBAR (KIRI) -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0">
      <div>
        <!-- Logo Area -->
        <div class="h-20 flex items-center px-6">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
            <span class="text-2xl font-black text-indigo-900 tracking-tight">Kelas Setara</span>
          </div>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="px-4 py-2 space-y-1">
          <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
            Ringkasan Dasbor
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
            Daftar Siswa
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
            Buku Nilai (Gradebook)
          </a>
          <!-- Menu Aktif -->
          <a href="#" class="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100">
            Manajemen Kelas & Akses
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
            Settings
          </a>
        </nav>
      </div>

      <!-- Logout Button -->
      <div class="p-4">
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors">
          Log Keluar
        </a>
      </div>
    </aside>

    <!-- MAIN CONTENT (KANAN) -->
    <div class="flex-1 flex flex-col overflow-hidden">
      
      <!-- Top Header -->
      <header class="h-20 bg-[#F4F7F9] flex items-center justify-between px-8 shrink-0">
        <h2 class="text-xl font-medium text-gray-900">Selamat Datang, <span class="font-bold">Administrator</span></h2>
        <div class="flex items-center gap-4">
          <button class="text-gray-400 hover:text-gray-600">
            <!-- Icon Bell Placeholder -->
            🔔
          </button>
          <div class="flex items-center gap-3 cursor-pointer bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
            <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
              A
            </div>
            <span class="text-sm font-medium text-gray-700 mr-2">Profile ⌄</span>
          </div>
        </div>
      </header>

      <!-- Scrollable Area untuk Tabel -->
      <main class="flex-1 overflow-y-auto px-8 pb-8">
        
        <div class="flex justify-between items-end mb-6">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Manajemen Kepegawaian</h1>
            <p class="text-gray-500 text-sm mt-1">Kelola data staf, guru, dan hak akses sistem.</p>
          </div>
          <button @click="showModal = true" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
            + Tambah Pegawai
          </button>
        </div>

        <!-- Tabel Staf -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50/50 border-b border-gray-100 text-sm text-gray-500">
                <th class="px-6 py-4 font-semibold">NIP</th>
                <th class="px-6 py-4 font-semibold">Nama Lengkap</th>
                <th class="px-6 py-4 font-semibold">Jabatan</th>
                <th class="px-6 py-4 font-semibold">Role Sistem</th>
                <th class="px-6 py-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-if="isLoading" class="text-center">
                <td colspan="5" class="px-6 py-10 text-gray-400">Memuat data...</td>
              </tr>
              <tr v-else-if="staffList.length === 0" class="text-center">
                <td colspan="5" class="px-6 py-10 text-gray-400">Belum ada data pegawai.</td>
              </tr>
              <tr v-else v-for="staff in staffList" :key="staff.id" class="hover:bg-gray-50/80 transition-colors">
                <td class="px-6 py-4 text-sm font-mono text-gray-500">{{ staff.nip }}</td>
                <td class="px-6 py-4 text-sm font-bold text-gray-900">{{ staff.full_name }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ staff.position }}</td>
                <td class="px-6 py-4">
                  <div class="flex flex-wrap gap-1">
                    <span v-for="role in staff.roles" :key="role" 
                          class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md font-semibold border border-indigo-100/50">
                      {{ role }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 text-right">
                  <button class="text-sm bg-white border border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600 px-3 py-1.5 rounded-lg font-medium shadow-sm transition-all">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>

    <!-- Modal Tambah Pegawai (Dipertahankan seperti semula) -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-7 border border-gray-100">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Tambah Pegawai Baru</h2>
        
        <form @submit.prevent="submitNewStaff" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email Pegawai</label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="email@sekolah.com">
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Nomor Induk Pegawai (NIP)</label>
            <input v-model="form.nip" type="text" required class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="Contoh: 19920602...">
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Nama Lengkap</label>
            <input v-model="form.full_name" type="text" required class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="Nama berserta gelar">
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Jabatan Struktural</label>
            <select v-model="form.position" @change="autoAssignRole" required class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer">
              <option value="" disabled>Pilih Jabatan...</option>
              <option v-for="(roles, position) in roleMapping" :key="position" :value="position">
                {{ position }}
              </option>
            </select>
            <p v-if="form.roles.length" class="text-xs text-gray-500 mt-2 flex gap-1.5">
              <span>↳</span> Sistem akan otomatis memberikan hak akses: <span class="font-bold text-indigo-600">{{ form.roles.join(', ') }}</span>
            </p>
          </div>

          <div class="flex justify-end gap-3 pt-4 mt-6 border-t border-gray-100">
            <button type="button" @click="showModal = false" class="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors">
              Batal
            </button>
            <button type="submit" class="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors" :disabled="isLoading">
              {{ isLoading ? 'Menyimpan...' : 'Simpan Pegawai' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const staffList = ref([])
const isLoading = ref(true)
const showModal = ref(false)

// State Form
const form = ref({
  email: '',
  nip: '',
  full_name: '',
  position: '',
  roles: []
})

// Peta (Mapping) Jabatan ke Role Sistem
const roleMapping = {
  'Kepala Sekolah': ['supervisor'],
  'Waka Kurikulum': ['academic_admin'],
  'Kepala Program': ['supervisor'],
  'Operator Sekolah': ['sys_admin'],
  'Guru Mata Pelajaran': ['instructor'],
  'Guru BK / Wali Kelas': ['supervisor'],
  'Staf TU / Umum': ['basic_staff']
}

// Fungsi otomatisasi Role saat Jabatan dipilih
const autoAssignRole = () => {
  if (form.value.position && roleMapping[form.value.position]) {
    form.value.roles = roleMapping[form.value.position]
  }
}

const fetchStaff = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    staffList.value = data
  } catch (error) {
    console.error('Gagal mengambil data staf:', error.message)
  } finally {
    isLoading.value = false
  }
}

const submitNewStaff = async () => {
  try {
    isLoading.value = true
    
    const functionUrl = 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/create-staff'

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value) 
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Terjadi kesalahan tidak dikenal')
    }

    alert('Berhasil! Pegawai baru telah ditambahkan.')
    
    showModal.value = false
    form.value = { email: '', nip: '', full_name: '', position: '', roles: [] }
    
    fetchStaff() 
    
  } catch (error) {
    console.error('Gagal menambahkan pegawai:', error.message)
    alert('Gagal: ' + error.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchStaff()
})
</script>