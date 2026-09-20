<template>
  <div :class="['bg-slate-900 sm:pl-10 sm:pb-2 h-screen w-full flex flex-col box-border', isDetailDrawerOpen ? 'sm:pr-0' : 'sm:pr-2']">
    <div class=" flex justify-between p-2.5 sm:my-2.5">
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

      <button class="text-gray-400 hover:text-gray-600 ">
        <!-- Icon Bell Placeholder -->
        🔔
      </button>
    </div>

    <!-- Wrapper Utama Dashboard: Full screen, Flexbox -->
    <div
      class="flex flex-col h-full bg-[#F4F7F9] font-sans rounded-tl-2xl rounded-br-2xl shadow-2xl overflow-hidden border border-slate-900">

      <div class="flex flex-1 min-h-0">
        <!-- SIDEBAR (KIRI) -->
        <aside
          class="hidden md:flex md:w-[clamp(10rem,25vw,24rem)] shrink-0 bg-[#F4F7F9] flex flex-col justify-between">
          <div class="h-full border border-gray-200 rounded-2xl sm:mt-4 sm:mr-4 sm:ml-4">
            <!-- Logo Area -->
            <!-- <div class="h-20 flex items-center px-6">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
              <span class="text-2xl font-black text-indigo-900 tracking-tight">Kelas Setara</span>
            </div>
          </div> -->

            <!-- Navigation Menu -->
            <nav class="px-4 py-2 space-y-1 mt-4">
              <router-link to="/dash/dashboard" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Ringkasan Dasbor
              </router-link>
              <router-link to="/dash/students" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Daftar Siswa
              </router-link>
              <router-link to="/dash/course-management" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Manajemen Course
              </router-link>
              
              <!-- Menu Aktif -->
              <router-link to="/dash/staff-management" class="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100">
                Manajemen Kepegawaian
              </router-link>
            </nav>
          </div>
        </aside>

        <!-- MAIN CONTENT (KANAN) -->
        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">

          <!-- Top Header -->
          <header class="bg-[#F4F7F9] flex justify-between pl-2 md:pl-8 shrink-0">
            <div class="flex-9 flex justify-end">
              <!-- WADAH FLEKSIBEL: Hamburger & Tambah Pegawai -->
              <div class="flex-1 mt-4 flex items-center justify-start md:justify-center px-4 md:px-2 gap-4 md:gap-2">
                
                <!-- TOMBOL HAMBURGER (Hanya muncul di mobile) -->
                <button 
                  @click="isMobileMenuOpen = true" 
                  class="md:hidden text-slate-400 hover:text-indigo-600 focus:outline-none transition-colors"
                >
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 487 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 52.894h146.098a70.42 70.42 0 0118.388-32.26C177.18 7.874 194.783 0 214.13 0c19.37 0 36.95 7.874 49.645 20.569s20.569 30.275 20.569 49.644c0 19.348-7.874 36.95-20.569 49.645-12.76 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-8.79-8.812-15.29-19.936-18.453-32.326H0V52.894zm392.096 201.698a35.528 35.528 0 00-10.404-25.172 35.526 35.526 0 00-25.172-10.404 35.562 35.562 0 00-25.171 10.404c-6.413 6.369-10.404 15.334-10.404 25.172 0 9.837 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.382 25.193 10.382 9.837 0 18.802-3.991 25.193-10.382a35.728 35.728 0 0010.383-25.193zm14.069-49.645a70.26 70.26 0 0118.409 32.326h62.405v34.637h-62.405a70.366 70.366 0 01-18.409 32.326c-12.761 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-12.738-12.76-20.634-30.362-20.634-49.644 0-19.326 7.896-36.885 20.569-49.58 12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569zM260.11 271.91H0v-34.637h260.11v34.637zM67.007 424.421a70.414 70.414 0 0118.388-32.26c12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569 12.694 12.694 20.569 30.275 20.569 49.644 0 19.347-7.875 36.95-20.569 49.645-12.76 12.672-30.319 20.569-49.645 20.569-19.282 0-36.884-7.897-49.579-20.569-8.79-8.813-15.29-19.937-18.453-32.326H0v-34.638h67.007zm42.839-7.852c-6.391 6.369-10.382 15.334-10.382 25.171s3.991 18.802 10.382 25.193c6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.803-3.992 25.193-10.383a35.728 35.728 0 0010.383-25.193 35.525 35.525 0 00-35.576-35.576 35.654 35.654 0 00-25.193 10.405zm121.603 7.852h255.508v34.638H231.449v-34.638zM188.937 45.042c-6.391 6.369-10.382 15.334-10.382 25.171 0 9.838 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.802-3.992 25.193-10.383a35.725 35.725 0 0010.383-25.193 35.524 35.524 0 00-35.576-35.575 35.653 35.653 0 00-25.193 10.404zm121.603 7.852H487v34.638H310.54V52.894z"/>
                  </svg>
                </button>

                <!-- Tombol Tambah Pegawai (Kode Anda aslinya) -->
                <button
                  @click="showModal = true"
                  title="Tambah Pegawai"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span class="text-lg leading-none">+</span>
                  <span class="hidden md:inline">Tambah Pegawai</span>
                </button>
              </div>

              <div class="w-10 h-10 bg-slate-900">
                <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
              </div>
            </div>

            <div class="flex items-center gap-2 md:gap-4 bg-slate-900 flex-1 rounded-bl-2xl">
              <!-- <button class="text-gray-400 hover:text-gray-600"> -->
              <!-- Icon Bell Placeholder -->
              <!-- 🔔
              </button> -->
              <div title="Manajemen Pegawai"
                class="flex items-center gap-3 cursor-pointer ml-4 px-2 md:px-3 py-1.5 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors">
                <div
                  class="w-8 h-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                  <!-- Users / Staff Icon -->
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
              </div>
            </div>
          </header>
          <div class="w-full flex justify-end">
            <div class="w-10 h-10 bg-slate-900">
              <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
            </div>
          </div>

          <!-- Scrollable Area untuk Tabel -->
          <main class="flex-1 overflow-y-auto px-4 md:px-8 pb-8">

            <div class="flex justify-between items-end mb-6">
              <div>
                <h1 class="text-2xl font-bold text-gray-900">Manajemen Kepegawaian</h1>
                <p class="text-gray-500 text-sm mt-1">Kelola data staf, guru, dan hak akses sistem.</p>
              </div>

              <!-- <button @click="showModal = true" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
              + Tambah Pegawai
            </button> -->
            </div>

            <!-- Tabel Staf -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50/50 border-b border-gray-100 text-sm text-gray-500">
                  <!-- Disembunyikan di mobile, muncul di layar medium (md) ke atas -->
                  <th class="hidden md:table-cell px-3 md:px-6 py-4 font-semibold">NIP</th>
                  
                  <th class="px-3 md:px-6 py-4 font-semibold">Nama Lengkap</th>
                  <th class="px-3 md:px-6 py-4 font-semibold">Jabatan</th>
                  <th class="px-3 md:px-6 py-4 font-semibold">Role Sistem</th>
                  
                  <!-- Kolom Aksi disembunyikan di mobile -->
                  <th class="hidden md:table-cell px-3 md:px-6 py-4 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-if="isLoading" class="text-center">
                  <!-- Sesuaikan colspan menjadi 3 di mobile, 5 di desktop. Tailwind tidak bisa mengatur colspan via class, jadi kita biarkan 5, teks akan tetap di tengah -->
                  <td colspan="5" class="px-6 py-10 text-gray-400">Memuat data...</td>
                </tr>
                <tr v-else-if="staffList.length === 0" class="text-center">
                  <td colspan="5" class="px-6 py-10 text-gray-400">Belum ada data pegawai.</td>
                </tr>
                <tr v-else v-for="staff in staffList" :key="staff.id" 
                    @click="openStaffDetail(staff)"
                    class="hover:bg-gray-50/80 transition-colors cursor-pointer active:bg-gray-100">
                  
                  <!-- Cell NIP -->
                  <td class="hidden md:table-cell px-3 md:px-6 py-4 text-sm font-mono text-gray-500">{{ staff.nip }}</td>
                  
                  <!-- Cell Nama -->
                  <td class="px-3 md:px-6 py-4 text-sm font-bold text-gray-900">{{ staff.full_name }}</td>
                  
                  <!-- Cell Jabatan -->
                  <td class="px-3 md:px-6 py-4 text-sm text-gray-600">{{ staff.position }}</td>
                  
                  <!-- Cell Role -->
                  <td class="px-3 md:px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <span v-for="role in staff.roles" :key="role"
                        class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md font-semibold border border-indigo-100/50">
                        {{ role }}
                      </span>
                    </div>
                  </td>
                  
                  <!-- Cell Aksi -->
                  <td class="hidden md:table-cell px-3 md:px-6 py-4 text-right">
                    <!-- Tambahkan .stop di sini agar klik tidak merembet ke <tr> -->
                    <button @click.stop="console.log('Edit dari Desktop')" class="text-sm bg-white border border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600 px-3 py-1.5 rounded-lg font-medium shadow-sm transition-all">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

          </main>

        </div>
      </div>

      <!-- Footer User Info Login & Build number info-->
      <footer class="flex shrink-0 w-full">
        <div class="flex flex-col w-1/2 xl:w-[clamp(10rem,25vw,14rem)]">
          <!-- Ornamen Concave Atas (Otomatis terdorong naik) -->
          <div class="w-10 h-4 bg-slate-900">
            <div class="w-10 h-4 bg-[#F4F7F9] rounded-bl-2xl"></div>
          </div>

          <div class="flex">
            <!-- WADAH TUNGGAL (Kiri): Menggabungkan Logout & Profile tanpa celah -->
            <div class="w-full xl:w-[clamp(10rem,25vw,14rem)] pl-6 pb-2 md:pl-2 md:pb-2 bg-slate-900 rounded-tr-2xl transition-all duration-300">

              <!-- Area Menu Log Keluar -->
              <div class="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                :class="isProfileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                <div class="overflow-hidden">
                  <a href="#" @click.prevent="handleLogout"
                    class="block px-4 py-3 text-gray-400 hover:text-red-500 text-sm font-medium transition-colors">
                    Log Keluar
                  </a>
                </div>
              </div>

              <!-- Area Info Profil (Trigger) -->
              <div @click="isProfileMenuOpen = !isProfileMenuOpen"
                class="flex items-center gap-3 cursor-pointer px-3 py-1.5 pt-3 overflow-hidden">
                <div
                  class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm shrink-0">
                  {{ adminInitial }}
                </div>
                <span class="text-sm font-medium text-white mr-2 flex items-center gap-1 truncate">
                  {{ adminName }}
                  <span class="inline-block transition-transform duration-300"
                    :class="{ 'rotate-180': isProfileMenuOpen }">⌄</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- VERSION -->
        <div class="relative flex-1 self-stretch">

          <div class="absolute left-0 bottom-0 w-10 h-full bg-slate-900">
            <div class="w-10 h-full bg-[#F4F7F9] rounded-bl-2xl"></div>
          </div>

          <p class="absolute right-10 bottom-3 text-xs text-slate-400">
            Based on Diatom v.0.0.1
          </p>

        </div>
      </footer>

    </div>

  </div>

  <!-- Modal Tambah Pegawai (Dipertahankan seperti semula) -->
  <div v-if="showModal" class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-2">
      <div class="bg-[#F4F7F9] rounded-xl p-0 pt-16 relative">
        <div class="absolute left-0 top-0 flex">
          <div class="flex flex-col">
            <div class="bg-slate-900 p-4 rounded-br-xl">
              <h2 class="text-xl font-bold text-gray-200 inline">Tambah Pegawai Baru</h2>
            </div>
            <div class="w-5 h-10 bg-slate-900">
              <div class="w-5 h-10 bg-[#F4F7F9] rounded-tl-xl"></div>
            </div>
          </div>
          <div class="w-10 h-10 bg-slate-900">
            <div class="w-10 h-10 bg-[#F4F7F9] rounded-tl-xl"></div>
          </div>
        </div>
        
        
        <form @submit.prevent="submitNewStaff" class="mt-4">
          <div class="px-7 space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email Pegawai</label>
              <input v-model="form.email" type="email" required
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="email@sekolah.com">
            </div>
    
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Nomor Induk Pegawai (NIP)</label>
              <input v-model="form.nip" type="text" required
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="Contoh: 19920602...">
            </div>
    
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Nama Lengkap</label>
              <input v-model="form.full_name" type="text" required
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="Nama berserta gelar">
            </div>
    
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Jabatan Struktural</label>
              <select v-model="form.position" @change="autoAssignRole" required
                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer">
                <option value="" disabled>Pilih Jabatan...</option>
                <option v-for="(roles, position) in roleMapping" :key="position" :value="position">
                  {{ position }}
                </option>
              </select>
              <p v-if="form.roles.length" class="text-xs text-gray-500 mt-2 flex gap-1.5">
                <span>↳</span> Sistem akan otomatis memberikan hak akses: <span class="font-bold text-indigo-600">{{
                  form.roles.join(', ') }}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col items-end mt-2">
            <div class="w-15 h-5 bg-slate-900">
              <div class="w-10 h-5 bg-[#F4F7F9] rounded-br-xl"></div>
            </div>
            <div class="flex justify-end items-end">
              <div class="w-10 h-10 bg-slate-900">
                <div class="w-10 h-10 bg-[#F4F7F9] rounded-br-xl"></div>
              </div>
              <div class="inline-flex pl-3 pt-3 pr-1 pb-1 gap-3 bg-slate-900 rounded-tl-xl">
                <button type="button" @click="showModal = false"
                  class="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
                  Batal
                </button>
                <button type="submit"
                  class="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
                  :disabled="isLoading">
                  {{ isLoading ? 'Menyimpan...' : 'Simpan Pegawai' }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MOBILE MENU OVERLAY (Left Side Drawer) -->
  <transition
    enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    enter-from-class="opacity-0 -translate-x-12"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-12"
  >
    <!-- justify-start memaksa konten menempel di kiri -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden flex items-center justify-start bg-slate-900/40 backdrop-blur-sm">
      
      <!-- Latar transparan untuk area tutup (area kanan yang kosong) -->
      <div class="absolute inset-0" @click="isMobileMenuOpen = false"></div>

      <!-- Kartu Menu: Menempel Kiri, Melengkung di Kanan -->
      <div class="relative bg-[#F4F7F9] rounded-r-[2rem] p-6 shadow-[20px_0_40px_rgba(0,0,0,0.1)] border-y border-r border-white w-[80vw] max-w-sm max-h-[90vh] overflow-y-auto">
        
        <div class="flex justify-between items-center mb-6 px-2">
          <span class="text-xl font-bold text-slate-900 tracking-tight">Navigasi</span>
          <!-- Tombol silang untuk menutup -->
          <button @click="isMobileMenuOpen = false" class="text-slate-400 bg-white hover:bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors">
            ✕
          </button>
        </div>
        
        <nav class="flex flex-col gap-2">
          <router-link to="/dash/dashboard" class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Ringkasan Dasbor
          </router-link>
          <router-link to="/dash/students" class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Daftar Siswa
          </router-link>
          <router-link to="/dash/course-management" class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Manajemen Course
          </router-link>
          
          <!-- Menu Aktif -->
          <router-link to="/dash/staff-management" class="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100 flex items-center justify-between">
            Manajemen Kepegawaian
            <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
          </router-link>
        </nav>
      </div>
    </div>
  </transition>

  <!-- DATA PREVIEW OVERLAY (Right Side Drawer) -->
  <transition
    enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    enter-from-class="opacity-0 translate-x-12"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-12"
  >
    <!-- flex items-center justify-end memastikan posisi di tengah vertikal & mentok kanan -->
    <div v-if="isDetailDrawerOpen" class="fixed inset-0 z-50 flex flex-col items-end justify-center pt-10 bg-slate-900/40 backdrop-blur-sm p-0">
      
      <!-- Latar transparan untuk area tutup (area kiri yang kosong) -->
      <div class="absolute inset-0" @click="isDetailDrawerOpen = false"></div>

      <div class="w-5 h-5 bg-slate-900">
          <div class="w-5 h-5 bg-[#F4F7F9]/60 rounded-br-2xl backdrop-blur-sm"></div>
      </div>
      <!-- Kartu Detail: Menempel Kanan (di mobile), Melengkung di Kiri -->
      <div class="relative bg-slate-900 rounded-l-[2rem] p-6 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-y border-l md:border border-slate-900 w-[85vw] md:w-[24rem] h-[65vh] flex flex-col">
        
        <!-- Header Drawer -->
        <div class="flex justify-between items-center mb-6 px-2 shrink-0">
          <span class="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-200/50 px-3 py-1 rounded-full border border-slate-200/60">Data Preview</span>
          <button @click="isDetailDrawerOpen = false" class="text-slate-200 hover:text-slate-400 bg-slate-200/50 hover:bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors">
            ✕
          </button>
        </div>
        
        <!-- Area Konten (Bisa Di-scroll jika panjang) -->
        <div v-if="selectedStaff" class="flex-1 overflow-y-auto px-2 custom-scrollbar">
          
          <!-- Avatar & Nama Utama -->
          <div class="flex items-center gap-4 mb-6 p-4 bg-slate-900 rounded-2xl shadow-sm border border-slate-200/60">
            <div class="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-black shrink-0">
              {{ selectedStaff.full_name.charAt(0).toUpperCase() }}
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-100 leading-tight">{{ selectedStaff.full_name }}</h3>
              <p class="text-sm font-medium text-indigo-600 mt-0.5">{{ selectedStaff.position }}</p>
            </div>
          </div>

          <!-- Metadata Detail -->
          <div class="space-y-5 bg-slate-900 p-5 rounded-2xl border border-slate-200/60 shadow-sm mb-6">
            <div>
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Nomor Induk Pegawai (NIP)</p>
              <p class="text-sm font-semibold text-slate-200">{{ selectedStaff.nip }}</p>
            </div>
            
            <div class="h-px bg-slate-200/60 w-full"></div>
            
            <div>
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hak Akses Sistem (Roles)</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="role in selectedStaff.roles" :key="role" 
                      class="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 text-[11px] rounded-md font-bold uppercase tracking-wider">
                  {{ role }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Action Buttons di Bawah (Fixed) -->
        <div class="pt-4 mt-auto border-t border-slate-200/60 flex gap-3 px-2 shrink-0">
          <button class="flex-1 py-3 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-bold transition-colors">
            Hapus
          </button>
          <button class="flex-1 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-bold shadow-sm transition-colors">
            Edit Data
          </button>
        </div>

      </div>
      <div class="w-5 h-5 bg-slate-900">
          <div class="w-5 h-5 bg-[#F4F7F9]/60 rounded-tr-2xl backdrop-blur-sm"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

// Inisialisasi router
const router = useRouter()

const staffList = ref([])
const isLoading = ref(true)
const showModal = ref(false)
const adminName = ref('Memuat...')
const isProfileMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isDetailDrawerOpen = ref(false)
const selectedStaff = ref(null)

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

// Fungsi untuk membuka laci dan melempar data baris ke dalamnya
const openStaffDetail = (staff) => {
  selectedStaff.value = staff
  isDetailDrawerOpen.value = true
}

// Mengambil huruf pertama untuk ikon bundar
const adminInitial = computed(() => {
  return adminName.value !== 'Memuat...' ? adminName.value.charAt(0).toUpperCase() : ''
})

const fetchCurrentProfile = async () => {
  try {
    // 1. Ambil sesi user yang sedang login dari Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.getUser()

    if (authError || !authData.user) throw new Error('Sesi tidak ditemukan')

    // 2. Cari nama lengkap berdasarkan UID di tabel staff
    const { data: staffData, error: staffError } = await supabase
      .from('staff')
      .select('full_name')
      .eq('id', authData.user.id)
      .single()

    if (staffError) throw staffError

    // 3. Potong nama menjadi kata pertama saja agar rapi di sidebar
    if (staffData && staffData.full_name) {
      adminName.value = staffData.full_name.split(' ')[0]
    }
  } catch (error) {
    console.error('Gagal memuat profil:', error.message)
    adminName.value = 'Admin' // Fallback jika gagal
  }
}

// Logout
const handleLogout = async () => {
  try {
    // 1. Hapus sesi di sisi peladen (Supabase) dan peramban lokal
    const { error } = await supabase.auth.signOut()

    if (error) throw error

    // 2. Arahkan pengguna kembali ke halaman utama (KelasSetara.vue)
    router.push('/')
  } catch (error) {
    console.error('Terjadi kesalahan saat logout:', error.message)
    alert('Gagal logout: ' + error.message)
  }
}

onMounted(() => {
  fetchStaff()
  fetchCurrentProfile()
})
</script>