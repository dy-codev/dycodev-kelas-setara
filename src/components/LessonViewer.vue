<script setup>
import { ref, watch, onMounted } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

const props = defineProps({
  lesson: Object,
  brief: String,
  tabLabel: String,
  hasMedia: Boolean,
  externalLinks: Array,
  scores: Array,
  bestScore: Number,
  activeTab: String
})

// State untuk menyimpan teks di editor
const editorCode = ref('')
const codeOutput = ref('Tekan tombol "Run Code" untuk menjalankan program Python...')
const isRunning = ref(false)
let pyodideInstance = null

// Memuat Pyodide secara asinkron dari CDN saat komponen dipasang
onMounted(async () => {
  if (!window.loadPyodide) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js'
    script.async = true
    document.head.appendChild(script)
  }
})

// Pantau perubahan materi untuk memuat kode bawaan berbasis Python
watch(() => props.lesson, (newLesson) => {
  if (newLesson && newLesson.type === 'interactive') {
    editorCode.value = newLesson.defaultCode || 'print("Halo, Dunia!")'
    codeOutput.value = 'Tekan tombol "Run Code" untuk menjalankan program Python...'
  }
}, { immediate: true })

// Fungsi untuk mengeksekusi kode Python langsung di browser
const runPythonCode = async () => {
  isRunning.value = true
  codeOutput.value = 'Memuat interpreter Python & menjalankan kode...'
  try {
    if (!pyodideInstance) {
      pyodideInstance = await window.loadPyodide()
    }
    
    // Alihkan output standar (stdout) agar bisa ditangkap oleh teks area
    pyodideInstance.runPython(`
      import sys
      import io
      sys.stdout = io.StringIO()
    `)
    
    await pyodideInstance.runPythonAsync(editorCode.value)
    
    const stdout = pyodideInstance.runPython('sys.stdout.getvalue()')
    codeOutput.value = stdout || 'Program berhasil dieksekusi tanpa pesan keluar (no output).'
  } catch (err) {
    codeOutput.value = 'Terjadi Kesalahan:\n' + err.message
  } finally {
    isRunning.value = false
  }
}

defineEmits(['change-tab'])

// Fungsi parser URL YouTube/Drive dipindah ke sini
const getEmbedUrl = (url) => {
  if (!url) return '';
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^"&?\/\s]{11})/);
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  if (url.includes('drive.google.com')) return url; 
  return url;
}
</script>

<template>
  <div class="max-w-4xl mx-auto">  
    <!-- Header Konten Aktif -->
    <div class="mb-8 pb-6 border-b border-slate-200">
      <div class="inline-block px-2.5 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 rounded-lg">
        {{ lesson.moduleTitle?.split(':')[0] }} • {{ lesson.type }}
      </div>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
        {{ lesson.title }}
      </h2>
      <p class="text-slate-600 text-lg leading-relaxed">
        {{ brief }}
      </p>
    </div>

    <!-- TABS NAVIGATION -->
    <div class="flex gap-6 border-b border-slate-200 mb-8 mt-2">
      <button @click="$emit('change-tab', 'materi')" :class="['pb-3 text-sm font-semibold border-b-2 transition-all duration-200', activeTab === 'materi' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700']">
        {{ tabLabel }}
      </button>
      <button @click="$emit('change-tab', 'media')" :class="['pb-3 text-sm font-semibold border-b-2 transition-all duration-200', activeTab === 'media' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700']">
        🎧 Media & Referensi
      </button>
      <button v-if="['practice', 'challenge', 'sumative'].includes(lesson.type)" @click="$emit('change-tab', 'nilai')" :class="['pb-3 text-sm font-semibold border-b-2 transition-all duration-200 whitespace-nowrap', activeTab === 'nilai' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700']">
        🏅 Riwayat Nilai
      </button>
    </div>

    <!-- TAB 1: MATERI UTAMA -->
    <div v-show="activeTab === 'materi'">
      
      <!-- JIKA TIPE MATERI ADALAH INTERACTIVE (SPLIT VIEW) -->
      <div v-if="lesson.type === 'interactive'" class="flex flex-col lg:flex-row gap-6">
        <!-- Kolom Kiri: Instruksi -->
        <div class="lg:w-5/12 h-[600px] overflow-y-auto prose prose-slate prose-indigo pr-4">
          <div class="mb-4 inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 rounded-lg">
            Mode Praktik Langsung
          </div>
          <component v-if="lesson.component" :is="lesson.component" />
          <div v-else-if="lesson.content" v-html="lesson.content"></div>
        </div>
        
        <!-- Kolom Kanan: Code Editor & Terminal Output -->
        <div class="lg:w-7/12 h-[600px] bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col">
  
          <!-- Header Editor -->
          <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-slate-700 shrink-0">
            <span class="text-xs font-mono text-slate-300">main.py</span>
            <button 
              @click="runPythonCode" 
              :disabled="isRunning"
              class="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-md transition-colors disabled:opacity-50"
            >
              {{ isRunning ? 'Menjalankan...' : 'Run Code 🚀' }}
            </button>
          </div>
  
          <!-- Komponen Editor (Mengambil 65% tinggi area) -->
          <div class="flex-1 h-[65%]">
            <VueMonacoEditor
              v-model:value="editorCode"
              theme="vs-dark"
              language="python"
              :options="{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                padding: { top: 12 }
              }"
              />
          </div>

          <!-- Jendela Terminal Output (Mengambil 35% tinggi area di bawah) -->
          <div class="h-[35%] bg-black/85 border-t border-slate-700 p-3 font-mono text-xs text-emerald-400 overflow-y-auto shrink-0">
            <p class="text-slate-500 mb-1">// Terminal Output:</p>
            <pre class="whitespace-pre-wrap">{{ codeOutput }}</pre>
          </div>
        </div>
      </div>

      <!-- JIKA TIPE MATERI BIASA (FULL WIDTH) -->
      <div v-else class="prose prose-slate prose-indigo max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl">
        <div v-if="lesson.slideUrl" class="aspect-video w-full mb-8 rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200">
          <iframe class="w-full h-full" :src="lesson.slideUrl" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <div v-if="lesson.pdfUrl" class="w-full min-h-[600px] mb-8 rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200">
          <iframe class="w-full h-full min-h-[600px]" :src="lesson.pdfUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-if="lesson.practiceUrl" class="w-full min-h-[650px] mb-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <iframe class="w-full h-full min-h-[650px]" :src="lesson.practiceUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-if="lesson.component">
          <component :is="lesson.component" />
        </div>
        <div v-else-if="lesson.content" v-html="lesson.content"></div>
      </div>

    </div>

    <!-- TAB 2: MEDIA & REFERENSI -->
    <div v-show="activeTab === 'media'" class="space-y-10">
      <div v-if="lesson.videoUrl">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span class="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">👨‍🏫</span> Penjelasan Instruktur
        </h3>
        <div class="aspect-video w-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden shadow-sm bg-slate-900 border border-slate-200 relative">
          <iframe class="w-full h-full" :src="getEmbedUrl(lesson.videoUrl)" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-if="lesson.videoUrl.includes('drive.google.com')" class="mt-3 block sm:hidden">
          <a :href="lesson.videoUrl" target="_blank" class="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100 text-slate-700 text-sm font-medium rounded-xl border hover:bg-slate-200">Buka Video Penuh</a>
        </div>
      </div>

      <div v-if="lesson.externalVideoUrl || externalLinks.length > 0">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pt-6 border-t border-slate-200">
          <span class="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg">💡</span> Pengayaan & Referensi Luar
        </h3>
        <div v-if="lesson.externalVideoUrl" class="aspect-video w-full mb-6 rounded-2xl overflow-hidden shadow-sm bg-slate-900 border border-slate-200">
          <iframe class="w-full h-full" :src="getEmbedUrl(lesson.externalVideoUrl)" frameborder="0" allowfullscreen></iframe>
        </div>
        <ul v-if="externalLinks.length > 0" class="space-y-3">
          <li v-for="(link, index) in externalLinks" :key="index">
            <a :href="link.url" target="_blank" class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 group">
              <div>
                <p class="text-sm font-semibold text-slate-700 group-hover:text-indigo-700 m-0">{{ link.title || 'Tautan Referensi' }}</p>
                <p class="text-xs text-slate-500 m-0 mt-0.5">{{ link.type || 'Tautan Eksternal' }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div v-if="!hasMedia" class="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
        <span class="text-4xl block mb-3">🎥</span>
        <p class="text-slate-500 font-medium">Belum ada media audio/visual untuk sesi ini.</p>
      </div>
    </div>

    <!-- TAB 3: RIWAYAT NILAI -->
    <div v-show="activeTab === 'nilai'" class="space-y-6">
      <div v-if="scores.length > 0">
        <div :class="['p-5 rounded-2xl border flex items-center justify-between mb-8', bestScore >= 75 ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200']">
          <div>
            <p class="text-sm font-medium text-slate-600 mb-1">Status Pencapaian Akhir</p>
            <h3 :class="['text-xl font-bold', bestScore >= 75 ? 'text-emerald-700' : 'text-rose-700']">
              {{ bestScore >= 75 ? '🎉 TUNTAS (KOMPETEN)' : '⚠️ BELUM TUNTAS' }}
            </h3>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-slate-600 mb-1">Nilai Tertinggi</p>
            <p class="text-3xl font-black text-slate-900">{{ bestScore }}</p>
          </div>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-4">Riwayat Percobaan</h4>
        <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table class="w-full text-left text-sm text-slate-600">
            <thead class="bg-slate-50 border-b border-slate-200 text-slate-700">
              <tr>
                <th class="px-4 py-3 font-semibold">Percobaan Ke-</th>
                <th class="px-4 py-3 font-semibold">Skor</th>
                <th class="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="(attempt, index) in scores" :key="index" class="hover:bg-slate-50/50">
                <td class="px-4 py-3 font-medium text-slate-900">#{{ index + 1 }}</td>
                <td class="px-4 py-3 font-bold text-slate-700">{{ attempt.score }}</td>
                <td class="px-4 py-3">
                  <span :class="['px-2.5 py-1 text-[11px] font-bold uppercase rounded-md', attempt.isPassed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700']">
                    {{ attempt.isPassed ? 'Lulus' : 'Remedial' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
        <span class="text-4xl block mb-3">📝</span>
        <p class="text-slate-600 font-bold">Belum Ada Nilai</p>
      </div>
    </div>
  </div>
</template>