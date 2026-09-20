<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { loginWithNisn, loginWithEmail } from '../composables/useAuth.js'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  course: { type: Object, default: null }
})

const emit = defineEmits(['close'])
const router = useRouter()

const loginMode = ref('nisn') 
const loginForm = ref({ nisn: '', email: '', password: '' })
const loginError = ref('')
const isLoggingIn = ref(false)

// Sangat sederhana: Bersihkan form dan set ke tab NISN
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    loginForm.value = { nisn: '', email: '', password: '' }
    loginError.value = ''
    loginMode.value = 'nisn' 
  }
})

const handleLogin = async () => {
  loginError.value = ''
  isLoggingIn.value = true
  try {
    if (loginMode.value === 'nisn') await loginWithNisn(loginForm.value.nisn, loginForm.value.password)
    else await loginWithEmail(loginForm.value.email, loginForm.value.password)
    
    emit('close')
    if (props.course) router.push(props.course.link)
  } catch (error) {
    loginError.value = 'Kredensial tidak valid. Periksa kembali data Anda.'
  } finally {
    isLoggingIn.value = false
  }
}

const continueAsGuest = () => {
  emit('close')
  if (props.course) router.push(props.course.link)
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-xl w-full max-w-sm overflow-hidden relative border border-slate-200">
      <button @click="$emit('close')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-1 rounded-full z-10">✕</button>
    
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Akses Kelas</h3>
        <p v-if="course" class="text-xs text-center text-slate-500 mb-6">Materi: <span class="font-bold text-indigo-600">{{ course.title }}</span></p>
        <p v-else class="text-xs text-center text-slate-500 mb-6">Masuk untuk menyimpan riwayat belajarmu</p>

        <!-- TAB SWITCHER (Selalu Muncul) -->
        <div class="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button @click="loginMode = 'nisn'" :class="['flex-1 py-1.5 text-sm font-semibold rounded-lg transition-colors', loginMode === 'nisn' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700']">Siswa</button>
          <button @click="loginMode = 'email'" :class="['flex-1 py-1.5 text-sm font-semibold rounded-lg transition-colors', loginMode === 'email' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700']">Umum / Publik</button>
        </div>
      
        <div v-if="loginError" class="mb-4 p-3 bg-red-50 text-red-600 text-xs font-medium rounded-lg border border-red-100">{{ loginError }}</div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div v-if="loginMode === 'nisn'">
            <label class="block text-xs font-bold text-slate-700 mb-1">NOMOR INDUK (NISN)</label>
            <input v-model="loginForm.nisn" type="text" placeholder="Contoh: 1001" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
          </div>
          <div v-if="loginMode === 'email'">
            <label class="block text-xs font-bold text-slate-700 mb-1">ALAMAT EMAIL</label>
            <input v-model="loginForm.email" type="email" placeholder="nama@email.com" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">PASSWORD</label>
            <input v-model="loginForm.password" type="password" required class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
          </div>
          <button type="submit" :disabled="isLoggingIn" class="w-full mt-2 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isLoggingIn ? 'Memverifikasi...' : 'Masuk' }}
          </button>
        </form>
      </div>

      <!-- AREA FOOTER -->
      <div v-if="course" class="bg-slate-50 p-4 border-t border-slate-100 text-center">
        <p class="text-xs text-slate-500 mb-3">Tidak ingin menyimpan progress?</p>
        <button @click="continueAsGuest" class="w-full py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-100 transition-colors">
          Lewati, Masuk sebagai Guest
        </button>
      </div>
      <div v-else class="bg-slate-50 p-4 border-t border-slate-100 text-center">
        <p class="text-xs text-slate-500 mb-3">Belum punya akun?</p>
        <button @click="$emit('close')" class="w-full py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-100 transition-colors">
          Eksplorasi Kelas Setara sebagai Guest
        </button>
      </div>
    </div>
  </div>
</template>