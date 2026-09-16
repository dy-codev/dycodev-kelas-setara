<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase.js'
import { loginWithEmail } from '../composables/useAuth.js'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const backgroundImage = ref('')

let backgroundTimer

// Cek jika sudah login, langsung lempar ke dashboard
onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  if (data.session) {
    router.push('/dash/staff-management')
  }

  // Set background pertama kali
  updateBackground()

  // Cek setiap menit apakah sudah berganti jam
  backgroundTimer = setInterval(updateBackground, 60 * 1000)
})

onUnmounted(() => {
  clearInterval(backgroundTimer)
})

const handleStaffLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // Kita manfaatkan fungsi login publik karena mekanismenya sama (Email & Password)
    await loginWithEmail(email.value, password.value)
    
    // Jika berhasil, arahkan ke dashboard
    router.push('/dash/staff-management')
  } catch (error) {
    errorMessage.value = 'Akses ditolak. Email atau NIP/Password tidak valid.'
  } finally {
    isLoading.value = false
  }
}

const updateBackground = () => {
  const hour = new Date().getHours()

  backgroundImage.value =
    `https://picsum.photos/seed/kelas-setara-${hour}/1600/900`
}
</script>

<template>
    <div class="bg-slate-900 sm:pl-10 sm:pr-2 sm:pt-10 sm:pb-2 h-screen w-full flex flex-col box-border">
      
        <!-- Wrapper Utama Dashboard: Full screen, Flexbox -->
        <div class="flex flex-col-reverse md:flex-row h-full bg-[#F4F7F9] font-sans rounded-2xl shadow-2xl overflow-hidden border border-slate-900">
    
            <!-- SIDEBAR (KIRI) -->
            <aside class="w-full md:w-1/2 2xl:w-[clamp(10rem,25vw,24rem)] shrink-0 bg-[#F4F7F9] flex flex-col justify-between">
                <div class="h-full flex flex-col justify-center border border-gray-200 rounded-2xl sm:mt-4 sm:mr-4 sm:ml-4">
                   
                    <!-- Login Form -->
                    <div class=" bg-[#F4F7F9] flex items-center justify-center p-4 font-sans">
                        <div class="w-full max-w-md rounded-3xl border border-gray-100 overflow-hidden relative">
          
                             <!-- Logo Area -->
                            <div class="bg-slate-900 p-8 text-center rounded-br-3xl">
                                <h1 class="text-2xl font-bold text-white tracking-wide">Portal <span class="text-indigo-400">Staf</span></h1>
                                <p class="text-slate-400 text-sm mt-2">Login ke Dasbor Kelas Setara</p>
                            </div>
    
                            <div class="p-8">
            
                                <div v-if="errorMessage" class="mb-6 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100 flex items-start gap-2">
                                    <span>⚠️</span> {{ errorMessage }}
                                </div>
    
                                <form @submit.prevent="handleStaffLogin" class="space-y-5">
                                    <div>
                                        <label class="block text-sm font-bold text-slate-700 mb-1.5">Email Pegawai</label>
                                        <input v-model="email" type="email" required placeholder="email@sekolah.com" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all">
                                    </div>
    
                                    <div>
                                        <label class="block text-sm font-bold text-slate-700 mb-1.5">Kata Sandi (NIP)</label>
                                        <input v-model="password" type="password" required placeholder="Masukkan kata sandi / NIP" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all">
                                    </div>
    
                                    <button type="submit" :disabled="isLoading" class="w-full mt-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2">
                                        <span v-if="isLoading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            {{ isLoading ? 'Mengautentikasi...' : 'Masuk ke Dasbor' }}
                                    </button>
                                </form>
            
                                <div class="mt-8 text-center">
                                    <router-link to="/" class="text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors">
                                        &larr; Kembali ke halaman utama
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Logout Button -->
                <div class="p-0">
                    <!-- Ornamen Concave Atas (Otomatis terdorong naik) -->
                    <div class="w-10 h-4 bg-slate-900">
                        <div class="w-10 h-4 bg-[#F4F7F9] rounded-bl-2xl"></div>
                    </div>
  
                    <div class="flex">
                        <!-- WADAH TUNGGAL (Kiri): Menggabungkan Logout & Profile tanpa celah -->
                        <div class="w-1/2 md:w-2/3 bg-slate-900 rounded-tr-2xl transition-all duration-300">
      
                            <!-- Area Info Profil (Trigger) -->
                            <div class="flex items-center gap-3 cursor-pointer px-3 py-1.5 pt-3 overflow-hidden">
                                <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm shrink-0">
                                    👤
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-white">Belum punya akun?</span>
                                    <span class="text-sm font-medium text-white mr-2 flex items-center gap-1 truncate">
                                        Register
                                    </span>
                                </div>
                            </div>      
                        </div>
    
                        <!-- Area Ornamen (Kanan): Otomatis meregang tingginya -->
                        <div class="w-1/2 md:w-1/4">
                            <div class="w-full md:w-10 h-full bg-slate-900">
                                <div class="w-full md:w-10 h-full bg-[#F4F7F9] rounded-bl-2xl">
                                    <div class="w-full h-10 px-10 pt-4 sm:block md:hidden">
                                        <p class="text-xs text-grey-200 text-right mt-2">Based on Diatom v.0.0.1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- MAIN CONTENT (KANAN) -->
            <div class="flex-1 flex flex-col overflow-hidden">
      
                <main
                    class="flex-1 border rounded-2xl overflow-hidden px-8 pb-8 sm:m-4 sm:mb-7 relative bg-cover bg-center"
                        :style="{ backgroundImage: `url(${backgroundImage})` }"
                    >
                        <div class="absolute inset-0 bg-slate-900/30"></div>

                        <!-- konten utama -->
                </main>
            
                <div class="w-full h-10 px-10 hidden md:block">
                    <p class="text-xs text-grey-200 text-right mt-2">Based on Diatom v.0.0.1</p>
                </div>
            </div>

        </div>
    </div>
</template>
