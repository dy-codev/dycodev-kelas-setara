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

        <!-- Wrapper Utama Dashboard -->
        <div
            class="flex flex-col h-full bg-[#F4F7F9] font-sans rounded-tl-2xl rounded-br-2xl shadow-2xl overflow-hidden border border-slate-900">
            <div class="flex flex-1 min-h-0">

                <!-- SIDEBAR (KIRI) -->
                <aside
                    class="hidden md:flex md:w-[clamp(10rem,25vw,24rem)] shrink-0 bg-[#F4F7F9] flex flex-col justify-between">
                    <div class="h-full border border-gray-200 rounded-2xl sm:mt-4 sm:mr-4 sm:ml-4">
                        <nav class="px-4 py-2 space-y-1 mt-4">
                            <router-link to="/dash/dashboard"
                                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Ringkasan
                                Dasbor</router-link>
                            <router-link to="/dash/students"
                                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Daftar
                                Siswa</router-link>

                            <!-- Menu Aktif -->
                            <router-link to="/dash/course-management"
                                class="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100">
                                Manajemen Course
                            </router-link>

                            <router-link to="/dash/staff-management"
                                class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">Manajemen
                                Kepegawaian</router-link>
                        </nav>
                    </div>
                </aside>

                <!-- MAIN CONTENT (KANAN) -->
                <div class="flex-1 min-w-0 flex flex-col overflow-hidden">

                    <!-- Top Header -->
                    <header class="bg-[#F4F7F9] flex justify-between pl-2 md:pl-8 shrink-0">
                        <div class="flex-9 flex justify-end">
                            <div
                                class="flex-1 mt-4 flex items-center justify-start md:justify-center px-4 md:px-2 gap-4 md:gap-2">
                                <!-- TOMBOL HAMBURGER (Hanya muncul di mobile) -->
                                <button @click="isMobileMenuOpen = true"
                                    class="md:hidden text-slate-400 hover:text-indigo-600 focus:outline-none transition-colors">
                                    <svg class="w-6 h-6 fill-current" viewBox="0 0 487 512"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 52.894h146.098a70.42 70.42 0 0118.388-32.26C177.18 7.874 194.783 0 214.13 0c19.37 0 36.95 7.874 49.645 20.569s20.569 30.275 20.569 49.644c0 19.348-7.874 36.95-20.569 49.645-12.76 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-8.79-8.812-15.29-19.936-18.453-32.326H0V52.894zm392.096 201.698a35.528 35.528 0 00-10.404-25.172 35.526 35.526 0 00-25.172-10.404 35.562 35.562 0 00-25.171 10.404c-6.413 6.369-10.404 15.334-10.404 25.172 0 9.837 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.382 25.193 10.382 9.837 0 18.802-3.991 25.193-10.382a35.728 35.728 0 0010.383-25.193zm14.069-49.645a70.26 70.26 0 0118.409 32.326h62.405v34.637h-62.405a70.366 70.366 0 01-18.409 32.326c-12.761 12.673-30.319 20.569-49.645 20.569-19.282 0-36.884-7.896-49.579-20.569-12.738-12.76-20.634-30.362-20.634-49.644 0-19.326 7.896-36.885 20.569-49.58 12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569zM260.11 271.91H0v-34.637h260.11v34.637zM67.007 424.421a70.414 70.414 0 0118.388-32.26c12.694-12.76 30.297-20.634 49.644-20.634 19.369 0 36.95 7.874 49.645 20.569 12.694 12.694 20.569 30.275 20.569 49.644 0 19.347-7.875 36.95-20.569 49.645-12.76 12.672-30.319 20.569-49.645 20.569-19.282 0-36.884-7.897-49.579-20.569-8.79-8.813-15.29-19.937-18.453-32.326H0v-34.638h67.007zm42.839-7.852c-6.391 6.369-10.382 15.334-10.382 25.171s3.991 18.802 10.382 25.193c6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.803-3.992 25.193-10.383a35.728 35.728 0 0010.383-25.193 35.525 35.525 0 00-35.576-35.576 35.654 35.654 0 00-25.193 10.405zm121.603 7.852h255.508v34.638H231.449v-34.638zM188.937 45.042c-6.391 6.369-10.382 15.334-10.382 25.171 0 9.838 3.991 18.802 10.382 25.193 6.391 6.391 15.356 10.383 25.193 10.383 9.838 0 18.802-3.992 25.193-10.383a35.725 35.725 0 0010.383-25.193 35.524 35.524 0 00-35.576-35.575 35.653 35.653 0 00-25.193 10.404zm121.603 7.852H487v34.638H310.54V52.894z" />
                                    </svg>
                                </button>

                                <button @click="openModal()" title="Tambah Kursus"
                                    class="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                                    <span class="text-lg leading-none">+</span>
                                    <span class="hidden md:inline">Tambah Mata Pelajaran</span>
                                </button>
                            </div>
                            <div class="w-10 h-10 bg-slate-900">
                                <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 md:gap-4 bg-slate-900 flex-1 rounded-bl-2xl">
                            <!-- Context Menu -->
                        </div>
                    </header>

                    <div class="w-full flex justify-end">
                        <div class="w-10 h-10 bg-slate-900">
                            <div class="w-10 h-10 bg-[#F4F7F9] rounded-tr-2xl"></div>
                        </div>
                    </div>

                    <!-- Area Tabel -->
                    <main class="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
                        <div class="flex justify-between items-end mb-6">
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900">Manajemen Mata Pelajaran</h1>
                                <p class="text-gray-500 text-sm mt-1">Kelola kurikulum, kategori, dan visibilitas
                                    materi.</p>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-50/50 border-b border-gray-100 text-sm text-gray-500">
                                        <th class="hidden md:table-cell px-3 md:px-6 py-4 font-semibold">Ikon</th>
                                        <th class="px-3 md:px-6 py-4 font-semibold">Nama Mata Pelajaran</th>
                                        <th class="px-3 md:px-6 py-4 font-semibold">Kategori</th>
                                        <th class="px-3 md:px-6 py-4 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-100">
                                    <tr v-if="isLoading" class="text-center">
                                        <td colspan="4" class="px-6 py-10 text-gray-400">Memuat data...</td>
                                    </tr>
                                    <tr v-else-if="courseList.length === 0" class="text-center">
                                        <td colspan="4" class="px-6 py-10 text-gray-400">Belum ada kursus.</td>
                                    </tr>

                                    <tr v-else v-for="course in courseList" :key="course.id"
                                        @click="openCourseDetail(course)"
                                        class="hover:bg-gray-50/80 transition-colors cursor-pointer active:bg-gray-100">
                                        <td class="hidden md:table-cell px-3 md:px-6 py-4">
                                            <div
                                                class="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xl">
                                                <img v-if="course.icon?.includes('.')" :src="course.icon"
                                                    class="w-6 h-6 object-contain" />
                                                <span v-else>{{ course.icon || '📚' }}</span>
                                            </div>
                                        </td>
                                        <td class="px-3 md:px-6 py-4">
                                            <p class="text-sm font-bold text-gray-900">{{ course.title }}</p>
                                            <p class="text-xs text-gray-500 mt-1">{{ course.level }} • {{ course.tag }}
                                            </p>
                                        </td>
                                        <td class="px-3 md:px-6 py-4 text-sm text-gray-600">{{ course.category }}</td>
                                        <td class="px-3 md:px-6 py-4">
                                            <span
                                                :class="['px-2.5 py-1 text-xs rounded-md font-semibold border', course.is_published ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100']">
                                                {{ course.is_published ? 'Published' : 'Draft' }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>

            <!-- Footer User Info (Sama seperti staff) -->
            <footer class="flex shrink-0 w-full">
                <div class="flex flex-col w-1/2 xl:w-[clamp(10rem,25vw,14rem)]">
                    <div class="w-10 h-4 bg-slate-900">
                        <div class="w-10 h-4 bg-[#F4F7F9] rounded-bl-2xl"></div>
                    </div>
                    <div class="flex">
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

    <!-- MODAL TAMBAH/EDIT KURSUS -->
    <div v-if="showModal"
        class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl p-2">
            <div class="bg-[#F4F7F9] rounded-xl p-0 pt-16 relative h-[80vh] flex flex-col">
                <div class="absolute left-0 top-0 flex">
                    <div class="flex flex-col">
                        <div class="bg-slate-900 p-4 rounded-br-xl">
                            <h2 class="text-xl font-bold text-gray-200 inline">
                                {{ isEditing ? 'Edit Mata Pelajaran' : 'Tambah Mata Pelajaran' }}</h2>
                        </div>
                        <div class="w-4 h-4 bg-slate-900">
                            <div class="w-4 h-4 bg-[#F4F7F9] rounded-tl-xl"></div>
                        </div>
                    </div>
                    <div class="w-10 h-10 bg-slate-900">
                        <div class="w-10 h-10 bg-[#F4F7F9] rounded-tl-xl"></div>
                    </div>
                </div>

                <form @submit.prevent="saveCourse" class="flex-1 overflow-y-auto px-4 space-y-4 pb-6 mt-2.5 custom-scrollbar">
                    <div class="grid rid-cols-2 gap-4">
                        <div class="col-span-2">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Judul Mata Pelajaran</label>
                            <input v-model="form.title" type="text" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all">
                        </div>

                        <div class="min-w-0">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Kategori</label>
                            <input v-model="form.category" type="text" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                placeholder="Misal: Materi SMK">
                        </div>

                        <!-- INPUT BARU: Tipe Akses -->
                        <div class="min-w-0">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Tipe Akses Kursus</label>
                            <select v-model="form.access_type" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all cursor-pointer">
                                <option value="public">Publik</option>
                                <option value="private">Privat</option>
                            </select>
                        </div>

                        <!-- INPUT BARU: Target Institusi (Hanya muncul jika Privat) -->
                        <div v-if="form.access_type === 'private'">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Target Institusi <span
                                    class="text-rose-500">*</span></label>
                            <input v-model="form.target_institution" type="text"
                                :required="form.access_type === 'private'"
                                class="w-full px-4 py-2.5 border border-amber-300 bg-amber-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                placeholder="Misal: SPBN Bekasi">
                        </div>
                        <div v-else>
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Tingkat / Level</label>
                            <input v-model="form.level" type="text" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all">
                        </div>

                        <div v-if="form.access_type === 'private'">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Tingkat / Level</label>
                            <input v-model="form.level" type="text" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all">
                        </div>

                        <div class="col-span-2">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Deskripsi Singkat</label>
                            <textarea v-model="form.description" rows="2"
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Tag</label>
                            <input v-model="form.tag" type="text"
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                                placeholder="Misal: Kurikulum 2024">
                        </div>

                        <!-- <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Tag Kelas</label>
              <input v-model="form.tag" type="text" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Misal: SPBN Bekasi">
            </div> -->

                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                                Ikon 
                                <span class="text-xs font-thin italic">(Emoji / Path file)</span>
                            </label>
                            <input v-model="form.icon" type="text"
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                                placeholder="💻 atau /ico-1.png">
                        </div>

                        <div class="col-span-2">
                            <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                                Tautan Rute Pembelajaran</label>
                            <input v-model="form.link" type="text" required
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm outline-none"
                                placeholder="/ruang-belajar/?subject=kode">
                        </div>
                    </div>
                </form>

                <div class="flex flex-col items-end mt-2 shrink-0">
                    <div class="w-15 h-5 bg-slate-900">
                        <div class="w-10 h-5 bg-[#F4F7F9] rounded-br-xl"></div>
                    </div>
                    <div class="flex justify-end items-end">
                        <div class="w-10 h-10 bg-slate-900">
                            <div class="w-10 h-10 bg-[#F4F7F9] rounded-br-xl"></div>
                        </div>
                        <div class="inline-flex pl-3 pt-3 pr-1 pb-1 gap-3 bg-slate-900 rounded-tl-xl">
                            <button @click="showModal = false"
                                class="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg">Batal</button>
                            <button @click="saveCourse"
                                class="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
                                :disabled="isSaving">
                                {{ isSaving ? 'Menyimpan...' : 'Simpan Mata Pelajaran' }}
                            </button>
                        </div>
                    </div>
                </div>
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
                    <!-- Menu Aktif -->
                    <router-link to="/dash/course-management"
                        class="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold transition-colors border border-indigo-100 flex items-center justify-between">
                        Manajemen Course
                        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                    </router-link>

                    <router-link to="/dash/staff-management"
                        class="px-4 py-3 text-gray-600 hover:bg-white rounded-xl text-sm font-medium transition-colors">
                        Manajemen Kepegawaian
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
        <div v-if="isDetailDrawerOpen"
            class="fixed inset-0 z-50 flex flex-col items-end justify-center pt-10 bg-slate-900/40 backdrop-blur-sm p-0">
            <div class="absolute inset-0" @click="isDetailDrawerOpen = false"></div>

            <div class="w-5 h-5 bg-slate-900">
                <div class="w-5 h-5 bg-[#F4F7F9]/60 rounded-br-2xl backdrop-blur-sm"></div>
            </div>
            <div
                class="relative bg-slate-900 rounded-l-[2rem] p-6 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-y border-l md:border border-slate-900 w-[85vw] md:w-[26rem] h-[75vh] flex flex-col">

                <div class="flex justify-between items-center mb-6 px-2 shrink-0">
                    <span
                        class="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-200/50 px-3 py-1 rounded-full border border-slate-200/60">
                        Detail Kursus
                    </span>
                    <button @click="isDetailDrawerOpen = false"
                        class="text-slate-200 hover:text-slate-400 bg-slate-200/50 hover:bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                        ✕
                    </button>
                </div>

                <div v-if="selectedCourse" class="flex-1 overflow-y-auto px-2 custom-scrollbar">
                    <div
                        class="flex items-center gap-4 mb-6 p-4 bg-slate-800 rounded-2xl shadow-sm border border-slate-700">
                        <div
                            class="w-16 h-16 rounded-xl bg-slate-900 border border-slate-600 text-white flex items-center justify-center text-3xl shrink-0">
                            <img v-if="selectedCourse.icon?.includes('.')" :src="selectedCourse.icon"
                                class="w-10 h-10 object-contain" />
                            <span v-else>
                                {{ selectedCourse.icon || '📚' }}
                            </span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white leading-tight">
                                {{ selectedCourse.title }}
                            </h3>
                            <p class="text-sm font-medium text-emerald-400 mt-1">
                                {{ selectedCourse.category }}
                            </p>
                        </div>
                    </div>

                    <div class="space-y-5 bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-sm mb-6">
                        <div>
                            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status
                                Visibilitas</p>
                            <button @click="togglePublish(selectedCourse)"
                                :class="['px-3 py-1.5 text-xs font-bold rounded-lg border transition-all mt-1', selectedCourse.is_published ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30']">
                                {{ selectedCourse.is_published ? '🟢 Sedang Dipublikasi (Ubah ke Draft)' : '🟡 Draft Tersembunyi (Publikasikan)' }}
                            </button>
                        </div>
                        <div class="h-px bg-slate-700 w-full"></div>
                        <div>
                            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Deskripsi
                            </p>
                            <p class="text-sm text-slate-300 leading-relaxed">
                                {{ selectedCourse.description }}
                            </p>
                        </div>
                        <div>
                            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Rute Akses
                            </p>
                            <code
                                class="text-xs bg-slate-900 text-indigo-300 px-2 py-1 rounded border border-slate-700 font-mono">
                                {{ selectedCourse.link }}
                            </code>
                        </div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="pt-4 mt-auto border-t border-slate-700 flex gap-3 px-2 shrink-0">
                    <button @click="deleteCourse(selectedCourse.id)"
                        class="flex-1 py-3 bg-transparent border border-rose-500/50 text-rose-400 hover:bg-rose-500/10 rounded-xl text-sm font-bold transition-colors">
                        Hapus
                    </button>
                    <button @click="openModal(selectedCourse)"
                        class="flex-1 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-bold shadow-sm transition-colors">
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

const courseList = ref([])
const isLoading = ref(true)
const isSaving = ref(false)
const showModal = ref(false)
const adminName = ref('Memuat...')
const isProfileMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isDetailDrawerOpen = ref(false)
const selectedCourse = ref(null)
const isEditing = ref(false)

// State Form
const form = ref({
    id: null,
    title: '',
    category: '',
    description: '',
    level: 'Semua Tingkat',
    tag: 'Umum',
    icon: '',
    link: '',
    practice_link: '#',
    is_published: false,
    access_type: 'public', // Tambahan
    target_institution: null // Tambahan
})

const fetchCourses = async () => {
    try {
        isLoading.value = true
        // Di dasbor, kita tarik SEMUA kursus (termasuk yang draft)
        const { data, error } = await supabase.from('courses').select('*').order('id', { ascending: true })
        if (error) throw error
        courseList.value = data
    } catch (error) {
        console.error('Gagal mengambil data:', error.message)
    } finally {
        isLoading.value = false
    }
}

const openModal = (course = null) => {
    if (course) {
        isEditing.value = true
        form.value = { ...course }
    } else {
        isEditing.value = false
        // Perbarui nilai default saat ditambah
        form.value = { id: null, title: '', category: '', description: '', level: 'Semua Tingkat', tag: 'Umum', icon: '📚', link: '/ruang-belajar/?subject=', practice_link: '#', is_published: false, access_type: 'public', target_institution: null }
    }
    isDetailDrawerOpen.value = false
    showModal.value = true
}

const openCourseDetail = (course) => {
    selectedCourse.value = course
    isDetailDrawerOpen.value = true
}

const saveCourse = async () => {
    try {
        isSaving.value = true
        if (isEditing.value) {
            // Update
            const { error } = await supabase.from('courses').update(form.value).eq('id', form.value.id)
            if (error) throw error
        } else {
            // Insert (Hapus ID agar digenerate Supabase)
            const { id, ...insertData } = form.value
            const { error } = await supabase.from('courses').insert([insertData])
            if (error) throw error
        }

        showModal.value = false
        await fetchCourses()
    } catch (error) {
        alert('Gagal menyimpan: ' + error.message)
    } finally {
        isSaving.value = false
    }
}

const togglePublish = async (course) => {
    try {
        const newStatus = !course.is_published
        const { error } = await supabase.from('courses').update({ is_published: newStatus }).eq('id', course.id)
        if (error) throw error

        course.is_published = newStatus // Update UI lokal
    } catch (error) {
        alert('Gagal mengubah status: ' + error.message)
    }
}

const deleteCourse = async (id) => {
    if (!confirm('Apakah Anda yakin ingin menghapus mata pelajaran ini?')) return
    try {
        const { error } = await supabase.from('courses').delete().eq('id', id)
        if (error) throw error
        isDetailDrawerOpen.value = false
        await fetchCourses()
    } catch (error) {
        alert('Gagal menghapus: ' + error.message)
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
    fetchCourses()
    fetchCurrentProfile()
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background: #94a3b8;
}
</style>