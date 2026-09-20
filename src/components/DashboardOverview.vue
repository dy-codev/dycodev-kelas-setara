<template>
  <div class="bg-slate-900 sm:pl-10 sm:pb-2 h-screen w-full flex flex-col box-border sm:pr-2">
    <!-- Header Logo -->
    <div class="flex justify-between p-2.5 sm:my-2.5">
      <div class="flex gap-2">
        <svg class="w-[34px] h-[34px] shrink-0" viewBox="0 0 40 40" fill="none">
          <rect x="16" y="2" width="10" height="10" rx="2" fill="#fff"></rect>
          <rect x="2" y="16" width="10" height="10" rx="2" fill="#fff" opacity=".85"></rect>
          <rect x="16" y="16" width="10" height="10" rx="2" fill="#fff" opacity=".7"></rect>
          <rect x="30" y="16" width="10" height="10" rx="2" fill="#fff" opacity=".85"></rect>
          <rect x="16" y="30" width="10" height="10" rx="2" fill="#fff" opacity=".7"></rect>
        </svg>
        <span class="text-2xl font-bold text-white tracking-wide">Kelas Setara</span>
      </div>
    </div>

    <!-- Wrapper Utama Dashboard -->
    <div class="flex flex-col h-full bg-[#F4F7F9] font-sans rounded-tl-2xl rounded-br-2xl shadow-2xl overflow-hidden border border-slate-900">
      <div class="flex flex-1 min-h-0">
        
        <!-- SIDEBAR (KIRI) -->
        <aside class="hidden md:flex md:w-[clamp(10rem,25vw,24rem)] shrink-0 bg-[#F4F7F9] flex flex-col justify-between">
          <div class="h-full border border-gray-200 rounded-2xl sm:mt-4 sm:mr-4 sm:ml-4">
            <nav class="px-4 py-2 space-y-1 mt-4">
              <!-- Menu Aktif -->
              <router-link to="/dash/dashboard" class="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100">
                Ringkasan Dasbor
              </router-link>
              <router-link to="/dash/students" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Daftar Siswa</router-link>
              <router-link to="/dash/course-management" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Manajemen Course</router-link>
              <router-link to="/dash/staff-management" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Manajemen Kepegawaian</router-link>
            </nav>
          </div>
        </aside>

        <!-- MAIN CONTENT (KANAN) -->
        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
          
          <!-- Ornamen Header Kosong agar desain konsisten -->
          <header class="bg-[#F4F7F9] flex justify-between pl-2 md:pl-8 shrink-0">
            <div class="flex-9 flex justify-end">
                <!-- WADAH FLEKSIBEL: Hamburger & Tambah Pegawai -->
              <div class="flex-1 mt-4 flex items-center justify-start md:justify-center px-4 md:px-2 gap-4 md:gap-2">
                
                <!-- TOMBOL HAMBURGER (Hanya muncul di mobile) -->
                <!-- <button 
                  @click="isMobileMenuOpen = true" 
                  class="md:hidden text-slate-400 hover:text-indigo-600 focus:outline-none transition-colors"
                >
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 487 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 52.894h146.098a70.42 70.42 0 0118.388-32.26C177.18 7.874 194.783 0 214.13 0c19.37 0 36.95 7.874 49.645 20.569s20.569 30.275 20.569 49.644c0 19.348-7.874 36.95-20.569 49.645-12.76 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-8.79-8.812-15.29-19.936-18.453-32.326H0V52.894zm392.096 201.698a35.528 35.528 0 00-10.404-25.172 35.526 35.526 0 00-25.172-10.404 35.562 35.562 0 00-25.171 10.404c-6.413 6.369-10.404 15.334-10.404 25.172 0 9.837 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.382 25.193 10.382 9.837 0 18.802-3.991 25.193-10.382a35.728 35.728 0 0010.383-25.193zm14.069-49.645a70.26 70.26 0 0118.409 32.326h62.405v34.637h-62.405a70.366 70.366 0 01-18.409 32.326c-12.761 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-12.738-12.76-20.634-30.362-20.634-49.644 0-19.326 7.896-36.885 20.569-49.58 12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569zM260.11 271.91H0v-34.637h260.11v34.637zM67.007 424.421a70.414 70.414 0 0118.388-32.26c12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569 12.694 12.694 20.569 30.275 20.569 49.644 0 19.347-7.875 36.95-20.569 49.645-12.76 12.672-30.319 20.569-49.645 20.569-19.282 0-36.884-7.897-49.579-20.569-8.79-8.813-15.29-19.937-18.453-32.326H0v-34.638h67.007zm42.839-7.852c-6.391 6.369-10.382 15.334-10.382 25.171s3.991 18.802 10.382 25.193c6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.803-3.992 25.193-10.383a35.728 35.728 0 0010.383-25.193 35.525 35.525 0 00-35.576-35.576 35.654 35.654 0 00-25.193 10.405zm121.603 7.852h255.508v34.638H231.449v-34.638zM188.937 45.042c-6.391 6.369-10.382 15.334-10.382 25.171 0 9.838 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.802-3.992 25.193-10.383a35.725 35.725 0 0010.383-25.193 35.524 35.524 0 00-35.576-35.575 35.653 35.653 0 00-25.193 10.404zm121.603 7.852H487v34.638H310.54V52.894z"/>
                  </svg>
                </button> -->

                <!-- Tombol Tambah Pegawai (Kode Anda aslinya) -->
                <!-- <button
                  @click="showModal = true"
                  title="Tambah Pegawai"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span class="text-lg leading-none">+</span>
                  <span class="hidden md:inline">Tambah Pegawai</span>
                </button> -->
              </div>

              <div class="w-10 h-10 bg-slate-900">
                <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
              </div>
            </div>

            <div class="flex items-center gap-2 md:gap-4 bg-slate-900 flex-1 rounded-bl-2xl">
                <!-- <div title="Manajemen Pegawai"
                class="flex items-center gap-3 cursor-pointer ml-4 px-2 md:px-3 py-1.5 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors">
                <div
                  class="w-8 h-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <span class="hidden md:inline text-sm font-medium text-white mr-2 whitespace-nowrap">
                  Manajemen Pegawai
                </span>
                </div>
                <div title="Hak Akses"
                class="flex items-center gap-3 cursor-pointer px-2 md:px-3 py-1.5 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors">
                <div
                  class="w-8 h-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z" stroke="currentColor"
                      stroke-width="2" stroke-linejoin="round" />
                    <path
                      d="M12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.5523 13.2014 13.0348 12.75 13.2929V15H11.25V13.2929C10.7986 13.0348 10.5 12.5523 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5Z"
                      fill="currentColor" />
                  </svg>
                </div>

                <span class="hidden md:inline text-sm font-medium text-white mr-2 whitespace-nowrap">
                  Hak Akses
                </span>
                </div> -->
            </div>
          </header>
          <div class="w-full flex justify-end">
            <div class="w-10 h-10 bg-slate-900">
                <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
            </div>
          </div>
          
          
          
          

          <!-- AREA WELCOME -->
          <main class="flex-1 overflow-y-auto px-4 md:px-8 pb-12 flex items-center justify-center">
            <div class="text-center max-w-xl -mt-10">
              <div class="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm border border-indigo-200">
                👋
              </div>
              
              <h1 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Welcome to <span class="text-indigo-600">Open Setara</span>
              </h1>
              
              <p class="text-slate-600 text-lg leading-relaxed mb-10">
                Selamat datang di Dasbor Manajemen Kelas Setara. Mulai kelola kurikulum pembelajaran, pantau data siswa, dan atur tim Anda dengan mudah dari satu tempat.
              </p>
              
              <!-- Shortcut Cards -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <router-link to="/dash/course-management" class="p-5 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-xl">📚</div>
                  <h3 class="font-bold text-slate-900 text-lg">Kelola Kursus</h3>
                  <p class="text-sm text-slate-500 mt-1">Tambah, edit, dan atur visibilitas materi pembelajaran.</p>
                </router-link>
                
                <router-link to="/dash/staff-management" class="p-5 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-xl">👥</div>
                  <h3 class="font-bold text-slate-900 text-lg">Kelola Staf</h3>
                  <p class="text-sm text-slate-500 mt-1">Tambahkan akun pengajar dan kelola hak akses sistem.</p>
                </router-link>
              </div>
            </div>
          </main>

        </div>
      </div>

      <!-- Footer User Info -->
      <footer class="flex shrink-0 w-full">
        <div class="flex flex-col w-1/2 xl:w-[clamp(10rem,25vw,14rem)]">
          <div class="w-10 h-4 bg-slate-900"><div class="w-10 h-4 bg-[#F4F7F9] rounded-bl-2xl"></div></div>
          <div class="flex">
            <div class="w-full xl:w-[clamp(10rem,25vw,14rem)] pl-6 pb-2 md:pl-2 md:pb-2 bg-slate-900 rounded-tr-2xl transition-all duration-300">
              <div @click="handleLogout" class="flex items-center gap-3 cursor-pointer px-3 py-1.5 pt-3 overflow-hidden group">
                <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-sm shrink-0 group-hover:bg-rose-500/20 group-hover:text-rose-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </div>
                <span class="text-sm font-medium text-slate-400 group-hover:text-rose-500 transition-colors mr-2 truncate">Log Keluar</span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-1 self-stretch">
          <div class="absolute left-0 bottom-0 w-10 h-full bg-slate-900"><div class="w-10 h-full bg-[#F4F7F9] rounded-bl-2xl"></div></div>
          <p class="absolute right-10 bottom-3 text-xs text-slate-400">Bakti Nusantara LMS</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')
  } catch (error) {
    alert('Gagal logout: ' + error.message)
  }
}
</script>