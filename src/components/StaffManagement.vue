<template>
  <div
    :class="['bg-slate-900 sm:pl-10 sm:pb-2 h-screen w-full flex flex-col box-border', isDetailDrawerOpen ? 'sm:pr-0' : 'sm:pr-2']">
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
              <router-link to="/dash/dashboard"
                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Ringkasan Dasbor
              </router-link>
              <router-link to="/dash/students"
                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Daftar Siswa
              </router-link>
              <router-link to="/dash/course-management"
                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                Manajemen Course
              </router-link>

              <!-- Menu Aktif -->
              <router-link to="/dash/staff-management"
                class="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100">
                Manajemen Kepegawaian
              </router-link>
            </nav>
          </div>
        </aside>

        <!-- MAIN CONTENT (KANAN) -->
        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">

          <!-- Top Header -->
          <header class="bg-[#F4F7F9] flex justify-between pl-2 md:pl-8 shrink-0">
            <!-- Container: Dynamic CTA -->
            <div class="flex justify-end md:w-[285px]">
              <div class="flex-1 flex items-end justify-start md:justify-center px-2 gap-4 md:gap-2">
                <!-- TOMBOL HAMBURGER (Hanya muncul di mobile) -->
                <button @click="isMobileMenuOpen = true"
                  class="border border-grey-200 rounded-lg w-10 h-10 flex justify-center items-center md:hidden text-slate-400 hover:text-indigo-600 focus:outline-none transition-colors">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 487 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 52.894h146.098a70.42 70.42 0 0118.388-32.26C177.18 7.874 194.783 0 214.13 0c19.37 0 36.95 7.874 49.645 20.569s20.569 30.275 20.569 49.644c0 19.348-7.874 36.95-20.569 49.645-12.76 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-8.79-8.812-15.29-19.936-18.453-32.326H0V52.894zm392.096 201.698a35.528 35.528 0 00-10.404-25.172 35.526 35.526 0 00-25.172-10.404 35.562 35.562 0 00-25.171 10.404c-6.413 6.369-10.404 15.334-10.404 25.172 0 9.837 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.382 25.193 10.382 9.837 0 18.802-3.991 25.193-10.382a35.728 35.728 0 0010.383-25.193zm14.069-49.645a70.26 70.26 0 0118.409 32.326h62.405v34.637h-62.405a70.366 70.366 0 01-18.409 32.326c-12.761 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-12.738-12.76-20.634-30.362-20.634-49.644 0-19.326 7.896-36.885 20.569-49.58 12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569zM260.11 271.91H0v-34.637h260.11v34.637zM67.007 424.421a70.414 70.414 0 0118.388-32.26c12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569 12.694 12.694 20.569 30.275 20.569 49.644 0 19.347-7.875 36.95-20.569 49.645-12.76 12.672-30.319 20.569-49.645 20.569-19.282 0-36.884-7.897-49.579-20.569-8.79-8.813-15.29-19.937-18.453-32.326H0v-34.638h67.007zm42.839-7.852c-6.391 6.369-10.382 15.334-10.382 25.171s3.991 18.802 10.382 25.193c6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.803-3.992 25.193-10.383a35.728 35.728 0 0010.383-25.193 35.525 35.525 0 00-35.576-35.576 35.654 35.654 0 00-25.193 10.405zm121.603 7.852h255.508v34.638H231.449v-34.638zM188.937 45.042c-6.391 6.369-10.382 15.334-10.382 25.171 0 9.838 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.802-3.992 25.193-10.383a35.725 35.725 0 0010.383-25.193 35.524 35.524 0 00-35.576-35.575 35.653 35.653 0 00-25.193 10.404zm121.603 7.852H487v34.638H310.54V52.894z" />
                  </svg>
                </button>

                <!-- DYNAMIC CTA BUTTON -->
                <!-- 1. Tombol Kembali (Aktif HANYA saat di halaman Detail Profil) -->
                <button v-if="mainContentView === 'detail'" @click="mainContentView = 'table'; fetchStaff()"
                  class="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span class="hidden md:inline">Kembali ke Daftar</span>
                </button>

                <!-- 2. Tombol Tambah (Aktif saat di halaman Tabel, kecuali tab Ringkasan) -->
                <button v-else-if="activeTab !== 'ringkasan'" @click="openModal()"
                  :title="activeTab === 'akun-akses' ? 'Buat Akun Pegawai' : 'Tambah Pegawai'"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                  <span class="text-lg leading-none">+</span>
                  <span class="hidden md:inline">
                    {{ activeTab === 'akun-akses' ? 'Buat Akun Pegawai' : 'Tambah Pegawai' }}
                  </span>
                </button>
              </div>

              <div class="w-10 h-10 bg-slate-900">
                <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
              </div>
            </div>
            <!-- Container: Context Menu -->
            <div class="flex py-2 items-center flex-1 min-w-0 gap-2 md:gap-4 bg-slate-900 rounded-bl-2xl">
              <!-- Context Menu Ringkasan -->
              <div title="Ringkasan" @click="activeTab = 'ringkasan'; mainContentView = 'table'"
                :class="['flex items-center gap-3 cursor-pointer ml-4 px-2 md:px-3 py-1.5 rounded-2xl shadow-sm transition-colors', activeTab === 'ringkasan' ? 'bg-slate-800' : 'hover:bg-slate-800']">
                <div
                  class="w-8 h-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8" cy="10" r="2" />
                    <path d="M6.5 15h3" />
                    <path d="M13 9h5" />
                    <path d="M13 13h5" />
                    <path d="M13 16h3" />
                  </svg>
                </div>

                <span class="hidden md:inline text-sm font-medium text-white mr-2 whitespace-nowrap">
                  Ringkasan
                </span>
              </div>
              <!-- Context Menu Pegawai -->
              <div title="Data Pegawai Administrasi" @click="activeTab = 'data-pegawai'; mainContentView = 'table'"
                :class="['flex items-center gap-3 cursor-pointer px-2 md:px-3 py-1.5 rounded-2xl shadow-sm transition-colors', activeTab === 'data-pegawai' ? 'bg-slate-800' : 'hover:bg-slate-800']">
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
                  Data Pegawai
                </span>
              </div>
              <!-- Context Menu Akun & Akses -->
              <div title="Akun & Akses" @click="activeTab = 'akun-akses'; mainContentView = 'table'"
                :class="['flex items-center gap-3 cursor-pointer px-2 md:px-3 py-1.5 rounded-2xl shadow-sm transition-colors', activeTab === 'akun-akses' ? 'bg-slate-800' : 'hover:bg-slate-800']">
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
                  Akun & Hak Akses
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

            <div v-if="mainContentView === 'table'" class="h-full">
              <div class="flex justify-between items-end mb-6 gap-1">
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">
                    {{ tabInfo[activeTab].title }}
                  </h1>
                  <p class="text-gray-500 text-sm mt-1">
                    {{ tabInfo[activeTab].description }}
                  </p>
                </div>
                <!-- Content Tools: Tampil khusus di Akun Akses -->
                <div v-if="activeTab != 'ringkasan'"
                  class="flex items-center bg-gray-200/60 p-1.5 rounded-xl shadow-inner border border-gray-200">
                  <button @click="viewMode = 'table'"
                    :class="{ 'bg-white text-indigo-700 shadow font-bold': viewMode === 'table', 'text-gray-500 hover:text-gray-700': viewMode !== 'table' }"
                    class="px-4 py-1.5 text-sm rounded-lg transition-all flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    <span class="hidden xl:inline">Tabel</span>
                  </button>
                  <button @click="viewMode = 'card'"
                    :class="{ 'bg-white text-indigo-700 shadow font-bold': viewMode === 'card', 'text-gray-500 hover:text-gray-700': viewMode !== 'card' }"
                    class="px-4 py-1.5 text-sm rounded-lg transition-all flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                    </svg>
                    <span class="hidden xl:inline">Kartu</span>
                  </button>
                </div>
              </div>

              <!-- Tabel Staf -->
              <!-- TAB 1: RINGKASAN DASHBOARD -->
              <div v-if="activeTab === 'ringkasan'" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- KPI Cards -->
                  <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-2xl">👥</div>
                    <div>
                      <p class="text-sm font-medium text-gray-500">Total Pegawai Terdaftar</p>
                      <h3 class="text-3xl font-black text-gray-900">{{ kpiTotalStaff }}</h3>
                    </div>
                  </div>
                  <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-2xl">🔑</div>
                    <div>
                      <p class="text-sm font-medium text-gray-500">Pegawai Memiliki Akun</p>
                      <h3 class="text-3xl font-black text-gray-900">{{ kpiWithAccount }}</h3>
                    </div>
                  </div>
                  <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center text-2xl">⚠️</div>
                    <div>
                      <p class="text-sm font-medium text-gray-500">Menunggu Pembuatan Akun</p>
                      <h3 class="text-3xl font-black text-gray-900">{{ kpiWithoutAccount }}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <!-- TAB 2: TABEL DATA PEGAWAI (Administrasi Murni) -->
              <div v-if="activeTab === 'data-pegawai'">

                <div v-if="isLoading" class="text-center py-10 text-gray-400">Memuat data...</div>
                <div v-else-if="staffList.length === 0" class="text-center py-10 text-gray-400">Belum ada data pegawai.</div>
                
                <template v-else>
                  <!-- MODE: TABLE -->
                  <div v-if="viewMode === 'table'" class="bg-white overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                    <!-- Tambahan inner wrapper untuk horizontal scroll -->
                    <div class="overflow-x-auto custom-scrollbar">
                      <table class="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                        <thead>
                          <tr class="bg-gray-50/50 border-b border-gray-100 text-sm text-gray-500">
                            <th class="hidden md:table-cell px-6 py-4 font-semibold">NIP</th>
                            <th class="px-6 py-4 font-semibold">Nama Lengkap</th>
                            <th class="px-6 py-4 font-semibold">Jabatan</th>
                            <th class="px-6 py-4 font-semibold">Email Kontak</th>
                            <th class="hidden md:table-cell px-6 py-4 font-semibold text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                          <tr v-if="isLoading" class="text-center">
                            <td colspan="5" class="px-6 py-10 text-gray-400">Memuat data...</td>
                          </tr>
                          <tr v-else-if="staffList.length === 0" class="text-center">
                            <td colspan="5" class="px-6 py-10 text-gray-400">Belum ada data.</td>
                          </tr>
                          <tr v-else v-for="staff in staffList" :key="staff.id" @click="handleRowClick(staff)"
                            class="hover:bg-gray-50/80 md:cursor-default cursor-pointer">
                            <td class="hidden md:table-cell px-6 py-4 text-sm font-mono text-gray-500">{{ staff.nip }}</td>
                            <td class="px-6 py-4 text-sm font-bold text-gray-900">{{ staff.full_name }}</td>
                            <td class="px-6 py-4 text-sm text-gray-600">{{ staff.position }}</td>
                            <td class="px-6 py-4 text-sm text-gray-600">{{ staff.contact_email || '-' }}</td>
                            <td class="hidden md:table-cell px-6 py-4 text-right">
                              <!-- Tombol Profil Lengkap -->
                              <button @click.stop="openFullDetail(staff)"
                                class="text-sm bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white px-1.5 py-1.5 m-1 rounded-lg shadow-sm font-semibold transition-colors"
                                title="Lihat/Edit Profil Lengkap">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </button>
                              <!-- Tombol Edit Cepat (Modal) -->
                              <button @click.stop="openModal(staff, 'data-pegawai')"
                                class="text-sm bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 px-1.5 py-1.5 m-1 rounded-lg shadow-sm transition-colors"
                                title="Edit Data Dasar">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                                  </path>
                                </svg>
                              </button>
                              <!-- Tombol Hapus -->
                              <button @click.stop="deleteStaff(staff)"
                                class="text-sm bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 px-1.5 py-1.5 m-1 rounded-lg shadow-sm transition-colors"
                                title="Hapus Data">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                  </path>
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- MODE: CARDS (Kartu Akses Fisik) -->
                  <div v-if="viewMode === 'card'"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div v-for="staff in staffList" :key="staff.id"
                      :class="['relative aspect-[1.58] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-white/20', getCardBg(staff.id)]">

                      <!-- Watermark / Security Icon di Kanan Atas -->
                      <svg
                        class="absolute -top-4 -right-4 w-32 h-32 text-white opacity-[0.07] -rotate-12 pointer-events-none"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>

                      <!-- Hover Actions Overlay -->
                      <!-- <div v-if="editingCardId !== staff.id"
                        class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px] z-20 rounded-2xl">
                        <button @click.stop="startCardEdit(staff)"
                          class="px-5 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-transform">Ubah
                          Kredensial</button>
                        <button @click.stop="deleteAccount(staff)"
                          class="px-5 py-2.5 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-transform">Hapus
                          Akun</button>
                      </div> -->

                      <!-- Card Layout 1/3 and 2/3 -->
                      <div class="flex h-full relative z-10">

                        <!-- Kiri (1/3): Profil Demografi -->
                        <div
                          class="w-1/3 bg-black/15 flex flex-col items-center justify-center p-4 text-center border-r border-white/10 backdrop-blur-sm rounded-l-2xl">
                          <!-- Avatar Bulat -->
                          <div
                            class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-black text-white shadow-inner mb-3">
                            {{ staff.full_name.charAt(0).toUpperCase() }}
                          </div>
                          <h3 class="text-white font-bold text-sm leading-tight tracking-wide">{{ staff.full_name }}
                          </h3>
                          <p class="text-white/60 text-[10px] font-bold mt-1.5 uppercase tracking-widest">{{
                            staff.nip }}</p>
                        </div>

                        <!-- Kanan (2/3): Kredensial & Role -->
                        <div class="w-2/3 p-5 flex flex-col justify-between">

                          <!-- Block Atas: Kredensial (Normal View) -->
                          <div v-if="editingCardId !== staff.id" class="flex-1">
                            <p class="text-white/60 text-[10px] font-bold mb-1 uppercase tracking-widest">Status Pegawai</p>
                            <p class="text-white font-mono text-sm mb-2 truncate">
                              {{ staff.status_kepegawaian }}
                            </p>

                            <p class="text-white/60 text-[10px] font-bold mb-1 uppercase tracking-widest">
                              Jabatan Fungsional
                            </p>
                            <p class="text-white font-mono text-sm mb-2 mt-1">
                              {{ staff.jabatan_fungsional}}
                            </p>

                            <p class="text-white/60 text-[10px] font-bold mb-1 uppercase tracking-widest">
                              TTL</p>
                            <p class="text-white font-mono text-sm mt-1">
                              {{ staff.tempat_lahir + '/' + staff.tanggal_lahir }}
                            </p>
                          </div>

                          <!-- Block Atas: Kredensial (Inline Edit View) -->
                          <div v-else
                            class="flex-1 bg-black/20 -mx-3 -mt-3 p-3 rounded-xl backdrop-blur-md border border-white/10"
                            @click.stop>
                            <p class="text-white text-xs font-bold mb-2">Edit Kredensial Akses</p>
                            <input v-model="cardEditForm.auth_email" type="email" placeholder="Email Baru"
                              class="w-full bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1.5 mb-2 text-sm outline-none placeholder-white/40 focus:bg-white/20 transition-colors">
                            <input v-model="cardEditForm.password" type="password" placeholder="••••••••"
                              class="w-full bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1.5 text-sm outline-none placeholder-white/40 focus:bg-white/20 transition-colors">
                            <span class="text-xs italic text-white/50">Kosongkan password jika tdk diubah.</span>
                            <div class="flex gap-2 mt-2">
                              <button @click.stop="saveCardEdit(staff)"
                                class="flex-1 bg-white text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">Simpan</button>
                              <button @click.stop="cancelCardEdit"
                                class="flex-1 bg-transparent border border-white/30 text-white text-xs font-bold py-2 rounded-lg hover:bg-white/10 transition-colors">Batal</button>
                            </div>
                          </div>

                          <!-- Block Bawah: System Roles -->
                          <div class="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                            <div>
                              <p class="text-white/60 text-[9px] font-bold mb-2 uppercase tracking-widest">System
                                Clearance</p>
                              <div class="flex flex-wrap gap-1.5">
                                <span v-for="role in staff.roles" :key="role"
                                  class="px-2 py-1 bg-white/10 border border-white/20 text-white text-[10px] rounded-md font-bold uppercase tracking-wider">
                                  {{ role }}
                                </span>
                              </div>
                            </div>

                            <div class="flex flex-col gap-2">
                              <button @click.stop="openFullDetail(staff)"
                                class="text-xs text-white rounded-md hover:bg-gray-100 hover:text-indigo-500 transition-colors border p-0.5" title="Edit Kredensial">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M12 20h9" />
                                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                              </button>
                              <button @click.stop="deleteStaff(staff)"
                                class="text-xs rounded-md text-gray-100 hover:bg-gray-100 hover:text-red-500 transition-colors border p-0.5" title="Cabut Akses Login">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                  </path>
                                </svg>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </template>
              </div>

              <!-- TAB 3: TABEL AKUN & HAK AKSES -->
              <div v-if="activeTab === 'akun-akses'">

                <div v-if="isLoading" class="text-center py-10 text-gray-400">Memuat data...</div>
                <div v-else-if="linkedStaff.length === 0" class="text-center py-10 text-gray-400">Belum ada akun yang
                  dibuat.</div>

                <template v-else>
                  <!-- MODE: TABLE -->
                  <div v-if="viewMode === 'table'" class="bg-white overflow-hidden rounded-2xl border border-gray-200">
                    <!-- Tambahan inner wrapper untuk horizontal scroll -->
                    <div class="overflow-x-auto custom-scrollbar">
                      <table class="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                        <thead>
                          <tr class="bg-gray-50/50 border-b border-gray-100 text-sm text-gray-500">
                            <th class="px-6 py-4 font-semibold">Nama Pemilik Akun</th>
                            <th class="px-6 py-4 font-semibold">Email Login (Auth)</th>
                            <th class="px-6 py-4 font-semibold">Role Sistem</th>
                            <th class="hidden md:table-cell px-6 py-4 font-semibold text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                          <tr v-if="isLoading" class="text-center">
                            <td colspan="4" class="px-6 py-10 text-gray-400">Memuat data...</td>
                          </tr>
                          <tr v-else-if="linkedStaff.length === 0" class="text-center">
                            <td colspan="4" class="px-6 py-10 text-gray-400">Belum ada akun yang dibuat.</td>
                          </tr>
                          <tr v-else v-for="staff in linkedStaff" :key="staff.id" @click="handleRowClick(staff)"
                            class="hover:bg-gray-50/80 md:cursor-default cursor-pointer">
                            <td class="px-6 py-4 text-sm font-bold text-gray-900">
                              {{ staff.full_name }} <br><span class="text-xs font-normal text-gray-500">{{ staff.position
                              }}</span>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-600">{{ staff.auth_email || '(Disembunyikan)' }}
                            </td>
                            <td class="px-6 py-4">
                              <div class="flex flex-wrap gap-1">
                                <span v-for="role in staff.roles" :key="role"
                                  class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md font-semibold border border-indigo-100/50 font-mono tracking-wider">{{
                                    role }}</span>
                              </div>
                            </td>
                            <td class="hidden md:table-cell px-6 py-4 text-right">
                              <div class="flex justify-end gap-2">
                                <!-- Tombol Hapus/Cabut Akun -->
                                <button @click.stop="deleteAccount(staff)"
                                  class="text-sm bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 px-1.5 py-1.5 rounded-lg shadow-sm transition-colors"
                                  title="Cabut Akses Login">
                                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6">
                                    </path>
                                  </svg>
                                </button>
                                <!-- Tombol Edit Kredensial (Modal) -->
                                <button @click.stop="openModal(staff, 'akun-akses')"
                                  class="text-sm bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 px-1.5 py-1.5 rounded-lg shadow-sm transition-colors"
                                  title="Edit Kredensial">
                                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- MODE: CARDS (Kartu Akses Fisik) -->
                  <div v-if="viewMode === 'card'"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div v-for="staff in linkedStaff" :key="staff.id"
                      :class="['relative aspect-[1.58] rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-white/20', getCardBg(staff.id)]">

                      <!-- Watermark / Security Icon di Kanan Atas -->
                      <svg
                        class="absolute -top-4 -right-4 w-32 h-32 text-white opacity-[0.07] -rotate-12 pointer-events-none"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>

                      <!-- Hover Actions Overlay -->
                      <!-- <div v-if="editingCardId !== staff.id"
                        class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px] z-20 rounded-2xl">
                        <button @click.stop="startCardEdit(staff)"
                          class="px-5 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-transform">Ubah
                          Kredensial</button>
                        <button @click.stop="deleteAccount(staff)"
                          class="px-5 py-2.5 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition-transform">Hapus
                          Akun</button>
                      </div> -->

                      <!-- Card Layout 1/3 and 2/3 -->
                      <div class="flex h-full relative z-10">

                        <!-- Kiri (1/3): Profil Demografi -->
                        <div
                          class="w-1/3 bg-black/15 flex flex-col items-center justify-center p-4 text-center border-r border-white/10 backdrop-blur-sm rounded-l-2xl">
                          <!-- Avatar Bulat -->
                          <div
                            class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-black text-white shadow-inner mb-3">
                            {{ staff.full_name.charAt(0).toUpperCase() }}
                          </div>
                          <h3 class="text-white font-bold text-sm leading-tight tracking-wide">{{ staff.full_name }}
                          </h3>
                          <p class="text-white/60 text-[10px] font-bold mt-1.5 uppercase tracking-widest">{{
                            staff.position }}</p>
                        </div>

                        <!-- Kanan (2/3): Kredensial & Role -->
                        <div class="w-2/3 p-5 flex flex-col justify-between">

                          <!-- Block Atas: Kredensial (Normal View) -->
                          <div v-if="editingCardId !== staff.id" class="flex-1">
                            <p class="text-white/60 text-[10px] font-bold mb-1 uppercase tracking-widest">Auth Email</p>
                            <p class="text-white font-mono text-sm mb-4 truncate">
                              {{ staff.auth_email }}
                            </p>

                            <p class="text-white/60 text-[10px] font-bold mb-1 uppercase tracking-widest">Access
                              Password</p>
                            <p class="text-white font-mono text-lg tracking-[0.2em] leading-none mt-1">••••••••</p>
                          </div>

                          <!-- Block Atas: Kredensial (Inline Edit View) -->
                          <div v-else
                            class="flex-1 bg-black/20 -mx-3 -mt-3 p-3 rounded-xl backdrop-blur-md border border-white/10"
                            @click.stop>
                            <p class="text-white text-xs font-bold mb-2">Edit Kredensial Akses</p>
                            <input v-model="cardEditForm.auth_email" type="email" placeholder="Email Baru"
                              class="w-full bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1.5 mb-2 text-sm outline-none placeholder-white/40 focus:bg-white/20 transition-colors">
                            <input v-model="cardEditForm.password" type="password" placeholder="••••••••"
                              class="w-full bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1.5 text-sm outline-none placeholder-white/40 focus:bg-white/20 transition-colors">
                            <span class="text-xs italic text-white/50">Kosongkan password jika tdk diubah.</span>
                            <div class="flex gap-2 mt-2">
                              <button @click.stop="saveCardEdit(staff)"
                                class="flex-1 bg-white text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">Simpan</button>
                              <button @click.stop="cancelCardEdit"
                                class="flex-1 bg-transparent border border-white/30 text-white text-xs font-bold py-2 rounded-lg hover:bg-white/10 transition-colors">Batal</button>
                            </div>
                          </div>

                          <!-- Block Bawah: System Roles -->
                          <div class="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                            <div>
                              <p class="text-white/60 text-[9px] font-bold mb-2 uppercase tracking-widest">System
                                Clearance</p>
                              <div class="flex flex-wrap gap-1.5">
                                <span v-for="role in staff.roles" :key="role"
                                  class="px-2 py-1 bg-white/10 border border-white/20 text-white text-[10px] rounded-md font-bold uppercase tracking-wider">
                                  {{ role }}
                                </span>
                              </div>
                            </div>

                            <div class="flex flex-col gap-2">
                              <button @click.stop="startCardEdit(staff)"
                                class="text-xs text-white rounded-md hover:bg-gray-100 hover:text-indigo-500 transition-colors border p-0.5" title="Edit Kredensial">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M12 20h9" />
                                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                              </button>
                              <button @click.stop="deleteAccount(staff)"
                                class="text-xs rounded-md text-gray-100 hover:bg-gray-100 hover:text-red-500 transition-colors border p-0.5" title="Cabut Akses Login">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6">
                                  </path>
                                </svg>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <!-- ====== LAYAR DETAIL: PROFIL LENGKAP ====== -->
            <div v-else-if="mainContentView === 'detail'" class="h-full pt-4">
              <StaffDetailProfile :staff-data="selectedStaff" />
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
            <div
              class="w-full xl:w-[clamp(10rem,25vw,14rem)] pl-6 pb-2 md:pl-2 md:pb-2 bg-slate-900 rounded-tr-2xl transition-all duration-300">

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
              <h2 v-if="modalMode === 'data-pegawai'" class="text-xl font-bold text-gray-200 inline">
                {{ isEditing ? 'Edit Pegawai' : 'Tambah Pegawai Baru' }}
              </h2>
              <h2 v-else class="text-xl font-bold text-gray-200 inline">
                {{ isEditing ? 'Edit Akun Pegawai' : 'Buat Akun Pegawai' }}
              </h2>
            </div>
            <div class="w-5 h-10 bg-slate-900">
              <div class="w-5 h-10 bg-[#F4F7F9] rounded-tl-xl"></div>
            </div>
          </div>
          <div class="w-10 h-10 bg-slate-900">
            <div class="w-10 h-10 bg-[#F4F7F9] rounded-tl-xl"></div>
          </div>
        </div>

        <form @submit.prevent="modalMode === 'data-pegawai' ? savePegawai() : saveAkun()" class="mt-4">
          <div class="px-7 space-y-4">
            <!-- ====== WUJUD MODAL: PEGAWAI ====== -->
            <template v-if="modalMode === 'data-pegawai'">
              <div>
                <label
                  class="block text-sm font-semibold text-gray-700 mb-1.5 after:ml-0.5 after:text-red-500 after:content-['*']">NIP</label>
                <input v-model="formPegawai.nip" type="text" required
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none">
              </div>
              <div>
                <label
                  class="block text-sm font-semibold text-gray-700 mb-1.5 after:ml-0.5 after:text-red-500 after:content-['*']">Nama
                  Lengkap</label>
                <input v-model="formPegawai.full_name" type="text" required
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none">
              </div>
              <div>
                <label
                  class="block text-sm font-semibold text-gray-700 mb-1.5 after:ml-0.5 after:text-red-500 after:content-['*']">Jabatan
                  Struktural</label>
                <select v-model="formPegawai.position" required
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none cursor-pointer">
                  <option value="" disabled>Pilih Jabatan...</option>
                  <option v-for="(roles, position) in roleMapping" :key="position" :value="position">{{ position }}
                  </option>
                </select>
              </div>
            </template>

            <!-- ====== WUJUD MODAL: AKUN ====== -->
            <template v-if="modalMode === 'akun-akses'">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Pilih Pegawai (Yang belum memiliki
                  akun)</label>
                <!-- Kunci dropdown (disabled) saat mode Edit dan gunakan staffList agar nama yang diedit tetap muncul -->
                <select v-model="formAkun.staff_id" @change="handleStaffSelection" required :disabled="isEditing"
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none cursor-pointer disabled:bg-gray-200 disabled:opacity-70">
                  <option value="" disabled>-- Pilih Pegawai --</option>
                  <option v-for="staff in (isEditing ? staffList : unlinkedStaff)" :key="staff.id" :value="staff.id">
                    {{ staff.full_name }} ({{ staff.position }})
                  </option>
                </select>
                <p v-if="unlinkedStaff.length === 0" class="text-xs text-rose-500 mt-1">Semua pegawai sudah memiliki
                  akun.</p>
              </div>

              <!-- Munculkan info role jika pegawai sudah dipilih -->
              <div v-if="formAkun.roles.length" class="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                <span class="text-xs text-indigo-700 font-bold">Info:</span>
                <p class="text-xs text-indigo-700 flex gap-2.5 items-center">
                  Berdasarkan jabatannya, akun ini akan otomatis mendapat Role:
                  <span class="border border-indigo-700 rounded-md py-1 px-2 font-bold uppercase">
                    {{ formAkun.roles.join(', ') }}
                  </span>
                </p>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email Kredensial (Untuk Login Kelas
                  Setara)</label>
                <input v-model="formAkun.auth_email" type="email" required
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all"
                  placeholder="email.login@sekolah.com">
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <label class="block text-sm font-semibold text-gray-700">Password Kredensial</label>
                  <!-- Sembunyikan tombol Generate Acak jika sedang mode Edit -->
                  <button v-if="!isEditing" type="button" @click="generateRandomPassword"
                    class="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1">
                    🔄 Generate Acak
                  </button>
                </div>
                <!-- Hilangkan validasi required dan rubah placeholder saat mode edit -->
                <input v-model="formAkun.password" type="text" :required="!isEditing" :minlength="isEditing ? 0 : 6"
                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none font-mono text-sm transition-all"
                  :placeholder="isEditing ? '•••••••• (Kosongkan jika tak diubah)' : 'Minimal 6 karakter'">
                <p class="text-[11px] text-gray-400 mt-1">
                  {{
                    isEditing
                      ? 'Isi hanya jika Anda ingin mereset password akun ini.'
                      : 'Admin dapat menggunakan hasil generate atau memasukkan password kustom.'
                  }}
                </p>
              </div>
            </template>
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
                  :disabled="isSaving">
                  {{ isSaving ? 'Memproses...' : (modalMode === 'data-pegawai' ? 'Simpan Data Pegawai' : (isEditing ?
                    'Simpan Kredensial' : 'Buat Akun')) }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MOBILE MENU OVERLAY (Left Side Drawer) -->
  <transition enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    enter-from-class="opacity-0 -translate-x-12" enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-12">
    <!-- justify-start memaksa konten menempel di kiri -->
    <div v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 md:hidden flex items-center justify-start bg-slate-900/40 backdrop-blur-sm">

      <!-- Latar transparan untuk area tutup (area kanan yang kosong) -->
      <div class="absolute inset-0" @click="isMobileMenuOpen = false"></div>

      <!-- Kartu Menu: Menempel Kiri, Melengkung di Kanan -->
      <div
        class="relative bg-[#F4F7F9] rounded-r-[2rem] p-6 shadow-[20px_0_40px_rgba(0,0,0,0.1)] border-y border-r border-white w-[80vw] max-w-sm max-h-[90vh] overflow-y-auto">

        <div class="flex justify-between items-center mb-6 px-2">
          <span class="text-xl font-bold text-slate-900 tracking-tight">Navigasi</span>
          <!-- Tombol silang untuk menutup -->
          <button @click="isMobileMenuOpen = false"
            class="text-slate-400 bg-white hover:bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors">
            ✕
          </button>
        </div>

        <nav class="flex flex-col gap-2">
          <router-link to="/dash/dashboard"
            class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Ringkasan Dasbor
          </router-link>
          <router-link to="/dash/students"
            class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Daftar Siswa
          </router-link>
          <router-link to="/dash/course-management"
            class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
            Manajemen Course
          </router-link>

          <!-- Menu Aktif -->
          <router-link to="/dash/staff-management"
            class="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100 flex items-center justify-between">
            Manajemen Kepegawaian
            <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
          </router-link>
        </nav>
      </div>
    </div>
  </transition>

  <!-- DATA PREVIEW OVERLAY (Right Side Drawer) -->
  <transition enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    enter-from-class="opacity-0 translate-x-12" enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-12">
    <!-- flex items-center justify-end memastikan posisi di tengah vertikal & mentok kanan -->
    <div v-if="isDetailDrawerOpen"
      class="fixed inset-0 z-50 flex flex-col items-end justify-center pt-10 bg-slate-900/40 backdrop-blur-sm p-0">

      <!-- Latar transparan untuk area tutup (area kiri yang kosong) -->
      <div class="absolute inset-0" @click="isDetailDrawerOpen = false"></div>

      <div class="w-5 h-5 bg-slate-900">
        <div class="w-5 h-5 bg-[#F4F7F9]/60 rounded-br-2xl backdrop-blur-sm"></div>
      </div>
      <!-- Kartu Detail: Menempel Kanan (di mobile), Melengkung di Kiri -->
      <div
        class="relative bg-slate-900 rounded-l-[2rem] p-6 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-y border-l md:border border-slate-900 w-[85vw] md:w-[24rem] h-[65vh] flex flex-col">

        <!-- Header Drawer -->
        <div class="flex justify-between items-center mb-6 px-2 shrink-0">
          <span
            class="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-200/50 px-3 py-1 rounded-full border border-slate-200/60">Data
            Preview</span>
          <button @click="isDetailDrawerOpen = false"
            class="text-slate-200 hover:text-slate-400 bg-slate-200/50 hover:bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors">
            ✕
          </button>
        </div>

        <!-- Area Konten (Bisa Di-scroll jika panjang) -->
        <div v-if="selectedStaff" class="flex-1 overflow-y-auto px-2 custom-scrollbar">

          <!-- Avatar & Nama Utama -->
          <div class="flex items-center gap-4 mb-6 p-4 bg-slate-900 rounded-2xl shadow-sm border border-slate-200/60">
            <div
              class="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-black shrink-0">
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
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Nomor Induk Pegawai (NIP)
              </p>
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
          <!-- 1. Tombol khusus jika dibuka dari tabel Data Pegawai -->
          <template v-if="activeTab === 'data-pegawai'">
            <button @click="deleteStaff(selectedStaff)"
              class="flex-1 py-3 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-bold transition-colors">
              Hapus Pegawai
            </button>
            <button @click="openFullDetail(selectedStaff)"
              class="flex-1 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-bold shadow-sm transition-colors">
              Edit Profil
            </button>
          </template>

          <!-- 2. Tombol khusus jika dibuka dari tabel Akun & Akses -->
          <template v-else-if="activeTab === 'akun-akses'">
            <button @click="deleteAccount(selectedStaff)"
              class="flex-1 py-3 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-bold transition-colors">
              Hapus Akses
            </button>
            <button @click="openModal(selectedStaff, 'akun-akses')"
              class="flex-1 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-bold shadow-sm transition-colors">
              Edit Kredensial
            </button>
          </template>
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
import StaffDetailProfile from './StaffDetailProfile.vue'

// Inisialisasi router
const router = useRouter()

const staffList = ref([])
const isLoading = ref(true)
const isSaving = ref(false)
const showModal = ref(false)
const adminName = ref('Memuat...')
const isProfileMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isDetailDrawerOpen = ref(false)
const selectedStaff = ref(null)
const isEditing = ref(false)
const activeTab = ref('ringkasan')
const modalMode = ref('data-pegawai')
const viewMode = ref('card') // 'card' atau 'table'
const editingCardId = ref(null) // Menyimpan ID staff yang sedang di-edit inline
const cardEditForm = ref({ auth_email: '', password: '' }) // Form inline edit
const currentUserId = ref(null)
const mainContentView = ref('table')

// Palet warna estetik untuk background Card
const cardColors = [
  'bg-gradient-to-br from-indigo-500 to-indigo-800',
  'bg-gradient-to-br from-emerald-500 to-emerald-800',
  'bg-gradient-to-br from-rose-500 to-rose-800',
  'bg-gradient-to-br from-amber-500 to-amber-700',
  'bg-gradient-to-br from-cyan-600 to-cyan-900',
  'bg-gradient-to-br from-purple-500 to-purple-800',
  'bg-gradient-to-br from-slate-600 to-slate-900'
]

// Menghasilkan indeks warna berdasarkan UUID secara deterministik (tetap sama per user)
const getCardBg = (id) => {
  if (!id) return cardColors[0]
  let hash = 0
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash)
  }
  return cardColors[Math.abs(hash) % cardColors.length]
}

// Fungsi untuk men-generate password acak otomatis ala WordPress
const generateRandomPassword = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'
  let pass = ''
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  formAkun.value.password = pass
}

// Fungsi Edit Inline Card
const startCardEdit = (staff) => {
  editingCardId.value = staff.id
  cardEditForm.value.auth_email = staff.auth_email
  cardEditForm.value.password = ''
}

const cancelCardEdit = () => {
  editingCardId.value = null
  cardEditForm.value = { auth_email: '', password: '' }
}

const saveCardEdit = async (staff) => {
  try {
    isSaving.value = true // Menggunakan state loading yang sudah ada
    const functionUrl = 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/update-staff-account'

    // Siapkan data yang dibutuhkan Edge Function
    const payload = {
      account_id: staff.account_id,
      auth_email: cardEditForm.value.auth_email,
      password: cardEditForm.value.password // Jika kosong, Edge Function akan mengabaikannya
    }

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Terjadi kesalahan saat memperbarui akun.')
    }

    alert('Sukses! Kredensial berhasil diperbarui.')
    cancelCardEdit() // Tutup mode inline-edit
    await fetchStaff() // Muat ulang data terbaru (RPC akan menarik email baru)

  } catch (error) {
    console.error('Gagal update kredensial:', error.message)
    alert('Gagal memperbarui: ' + error.message)
  } finally {
    isSaving.value = false
  }
}

// --- FUNGSI BARU: Hapus Akun Secara Terpisah ---
const deleteAccount = async (staff) => {
  if (staff.account_id === currentUserId.value) {
    alert('Tindakan Ditolak: Anda tidak dapat mencabut hak akses dari akun yang sedang Anda gunakan saat ini.')
    return;
  }

  if (!confirm(`Yakin ingin menghapus hak akses login untuk ${staff.full_name}?\n\n(Data administrasi pegawai tidak akan terhapus, hanya akses sistem yang dicabut).`)) return;

  try {
    const functionUrl = 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/delete-staff-account'
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account_id: staff.account_id })
    })

    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Gagal menghapus akun.')

    alert(`Akses login ${staff.full_name} berhasil dicabut.`)
    await fetchStaff()
  } catch (error) {
    alert('Terjadi kesalahan saat menghapus akun: ' + error.message)
  }
}

// --- FUNGSI BARU: Hapus Data Pegawai Keseluruhan ---
const deleteStaff = async (staff) => {
  if (staff.account_id === currentUserId.value) {
    alert('Tindakan Ditolak: Anda tidak dapat menghapus data profil Anda sendiri saat sedang aktif masuk di dalam sistem.')
    return;
  }

  let warningMessage = `Anda akan menghapus data administrasi pegawai: ${staff.full_name}.\nApakah Anda yakin?`

  if (staff.account_id) {
    warningMessage = `PERINGATAN! Pegawai ini memiliki akun sistem.\nMenghapus data pegawai juga akan menghapus Kredensial Login-nya secara permanen.\n\nApakah Anda yakin ingin menghapus KEDUANYA?`
  }

  if (!confirm(warningMessage)) return;

  try {
    // Jika pegawai punya akun, bersihkan akunnya dulu via Edge Function
    if (staff.account_id) {
      const functionUrl = 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/delete-staff-account'
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account_id: staff.account_id })
      })
      if (!response.ok) throw new Error('Gagal membersihkan kredensial bawaan pegawai.')
    }

    // Setelah kredensial aman (atau jika memang tidak ada kredensial), hapus dari tabel staff
    const { error } = await supabase.from('staff').delete().eq('id', staff.id)
    if (error) throw error

    alert('Data pegawai berhasil dihapus sepenuhnya.')
    isDetailDrawerOpen.value = false
    await fetchStaff()
  } catch (error) {
    alert('Gagal menghapus data pegawai: ' + error.message)
  }
}

// Computed untuk memisahkan staf berdasarkan status kepemilikan akun
const unlinkedStaff = computed(() => staffList.value.filter(s => !s.account_id))
const linkedStaff = computed(() => staffList.value.filter(s => s.account_id))

// State form dipisah untuk kejelasan
const formPegawai = ref({ id: null, nip: '', full_name: '', position: '', contact_email: '' })
const formAkun = ref({ staff_id: '', auth_email: '', password: '', roles: [] })

// Computed untuk KPI Dasbor
const kpiTotalStaff = computed(() => staffList.value.length)
const kpiWithAccount = computed(() => linkedStaff.value.length)
const kpiWithoutAccount = computed(() => unlinkedStaff.value.length)


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

const fetchStaff = async () => {
  try {
    isLoading.value = true
    // PERBAIKAN LOGIKA: 
    // Kita tidak lagi memanggil .from('staff'), melainkan memanggil fungsi RPC
    const { data, error } = await supabase.rpc('get_staff_accounts')

    if (error) throw error
    staffList.value = data
  } catch (error) {
    console.error('Gagal mengambil data staf:', error.message)
  } finally {
    isLoading.value = false
  }
}

const tabInfo = {
  'ringkasan': {
    title: 'Manajemen Kepegawaian',
    description: 'Ringkasan kondisi dan administrasi kepegawaian staf.'
  },
  'data-pegawai': {
    title: 'Data Pegawai',
    description: 'Kelola data demografi dan catatan struktural staf.'
  },
  'akun-akses': {
    title: 'Akun dan Hak Akses',
    description: 'Kelola hak akses dan kredensial masuk ke Kelas Setara.'
  }
}

// Fungsi untuk membuka laci dan melempar data baris ke dalamnya
const openStaffDetail = (staff) => {
  selectedStaff.value = staff
  isDetailDrawerOpen.value = true
}

// Fungsi untuk mendeteksi layar dan membuka drawer hanya jika di mobile (< 768px)
const handleRowClick = (staff) => {
  if (window.innerWidth < 768) {
    openStaffDetail(staff)
  }
}

const openModal = (staff = null, mode = null) => {
  isDetailDrawerOpen.value = false
  isEditing.value = !!staff

  // Tentukan mode form.
  // Kalau tidak diberikan secara eksplisit:
  // tab akun -> form akun
  // tab lainnya -> form data pegawai
  modalMode.value =
    mode ?? (activeTab.value === 'akun-akses' ? 'akun-akses' : 'data-pegawai')

  if (modalMode.value === 'data-pegawai') {
    if (staff) {
      formPegawai.value = { ...staff }
    } else {
      formPegawai.value = {
        id: null,
        nip: '',
        full_name: '',
        position: '',
        contact_email: ''
      }
    }
  }

  if (modalMode.value === 'akun-akses') {
    if (staff && staff.account_id) {
      // MODE EDIT: Isi form dengan data yang sudah ada
      formAkun.value = {
        staff_id: staff.id,
        auth_email: staff.auth_email,
        password: '', // Kosongkan agar tidak sengaja keriset, admin bisa ketik ulang jika ingin mengganti
        roles: staff.roles || []
      }
    } else {
      // MODE BUAT BARU: Form kosong & generate password
      formAkun.value = {
        staff_id: '',
        auth_email: '',
        password: '',
        roles: []
      }
      generateRandomPassword()
    }
  }

  showModal.value = true
}

// Tambahkan fungsi baru ini untuk membuka layar Profil Lengkap dengan Data Penuh (Lazy Load)
const openFullDetail = async (staff) => {
  try {
    // 1. Ambil data lengkap (seluruh kolom) dari tabel staff berdasarkan ID pegawai yang diklik
    const { data: fullStaffData, error } = await supabase
      .from('staff')
      .select('*')
      .eq('id', staff.id)
      .single()

    if (error) throw error

    // 2. Gabungkan (Merge) data lengkap dari tabel staff dengan data auth (seperti email & role) yang dibawa oleh RPC
    selectedStaff.value = { ...staff, ...fullStaffData }

    // 3. Buka layar detail
    isDetailDrawerOpen.value = false // Tutup laci kanan otomatis
    mainContentView.value = 'detail' // Ubah area tabel menjadi form profil

  } catch (error) {
    console.error('Gagal mengambil detail profil:', error.message)
    alert('Terjadi kesalahan saat memuat data lengkap pegawai.')
  }
}

// Saat dropdown akun memilih staf, otomatis tentukan role
const handleStaffSelection = () => {
  const selected = staffList.value.find(s => s.id === formAkun.value.staff_id)
  if (selected && roleMapping[selected.position]) {
    formAkun.value.roles = roleMapping[selected.position]
  }
}

// Logika Save Pegawai (Murni insert ke tabel public.staff tanpa Edge Function)
const savePegawai = async () => {
  try {
    isSaving.value = true
    const { id, account_id, created_at, updated_at, auth_email, ...updateData } = formPegawai.value
    if (isEditing.value) {
      const { error } = await supabase.from('staff').update(updateData).eq('id', id)
      if (error) throw error
    } else {
      const { id, ...insertData } = formPegawai.value
      const { error } = await supabase.from('staff').insert([insertData])
      if (error) throw error
    }
    showModal.value = false
    await fetchStaff()
  } catch (error) {
    alert('Gagal menyimpan data pegawai: ' + error.message)
  } finally {
    isSaving.value = false
  }
}

// Logika Save Akun (Ini nanti yang akan memanggil Edge Function yang baru)
const saveAkun = async () => {
  try {
    isSaving.value = true

    // Tentukan URL berdasarkan mode (Edit atau Buat Baru)
    const functionUrl = isEditing.value
      ? 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/update-staff-account'
      : 'https://dcndmkhtdlinmimwxslw.supabase.co/functions/v1/create-staff'

    // Siapkan Payload data
    let payload = {}
    if (isEditing.value) {
      const selectedStaff = staffList.value.find(s => s.id === formAkun.value.staff_id)
      payload = {
        account_id: selectedStaff.account_id,
        auth_email: formAkun.value.auth_email,
        password: formAkun.value.password // Akan diabaikan oleh backend jika kosong
      }
    } else {
      payload = formAkun.value
    }

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Terjadi kesalahan saat memproses akun')
    }

    alert(isEditing.value ? 'Kredensial berhasil diperbarui!' : 'Berhasil! Akun login telah dibuat.')

    showModal.value = false
    await fetchStaff()

  } catch (error) {
    console.error('Gagal:', error.message)
    alert('Gagal: ' + error.message)
  } finally {
    isSaving.value = false
  }
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

    currentUserId.value = authData.user.id

    // 2. Cari nama lengkap berdasarkan UID di tabel staff
    const { data: staffData, error: staffError } = await supabase
      .from('staff')
      .select('full_name')
      // .eq('id', authData.user.id)
      .eq('account_id', authData.user.id)
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