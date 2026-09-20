<script setup>
// Komponen ini menerima data 'course' dari bapaknya (KelasSetara.vue)
defineProps({
  course: {
    type: Object,
    required: true
  }
})

// Helper untuk mendeteksi apakah string icon adalah file gambar (.png, .svg, .ico, dll)
const isImageIcon = (icon) => {
  if (!icon) return false
  return icon.includes('.') || icon.startsWith('/') || icon.startsWith('http')
}

// Komponen ini bisa berteriak 'mulai-belajar' ke bapaknya saat tombol diklik
defineEmits(['mulai-belajar'])
</script>

<template>
  <div class="group relative bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
    <!-- PITA DRAFT (Hanya muncul jika is_published = false) -->
    <div v-if="!course.is_published" class="absolute -top-3 -right-3 z-20 pointer-events-none">
      <div class="bg-amber-400 text-amber-950 text-[10px] font-black px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider border-2 border-white flex items-center gap-1">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-900 animate-pulse"></span>
        DRAFT
      </div>
    </div>
    
    <div>
      <div class="flex items-center justify-between mb-4">
        <!-- Render sebagai Gambar jika berupa file -->
        <img 
          v-if="isImageIcon(course.icon)" 
          :src="course.icon" 
          :alt="course.title" 
          class="w-8 h-8 object-contain"
        />
        <!-- Render sebagai Emoji/Teks jika bukan file -->
        <span v-else>{{ course.icon }}</span>
        <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50">
          {{ course.tag }}
        </span>
      </div>

      <h2 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {{ course.title }}
      </h2>
      <p class="text-sm text-slate-600 leading-relaxed mb-6">
        {{ course.description }}
      </p>
    </div>

    <div>
      <div class="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mb-4">
        <div class="flex items-center gap-4">
          <span>📚 {{ course.lessonsCount || 0 }} Modul</span>
          <a v-if="course.practiceLink !== '#'"
              :href="course.practiceLink"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-indigo-600 transition-colors">
            <span>🥋 {{ course.practiceCount || 0 }} Latihan</span>
          </a>
          <span v-else>🥋 {{ course.practiceCount || 0 }} Latihan</span>
        </div>
        <span class="shrink-0 text-right font-medium">=✪= {{ course.level }}</span>
      </div>

      <!-- Saat diklik, komponen ini memancarkan sinyal (emit) ke bapaknya -->
      <button 
        @click="$emit('mulai-belajar', course)"
        class="w-full py-2.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white font-medium text-sm rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
        >
        Mulai Belajar
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</template>