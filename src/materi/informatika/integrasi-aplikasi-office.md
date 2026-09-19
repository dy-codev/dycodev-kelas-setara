<!-- Section 1: Tujuan Pembelaran -->
<div class="bg-indigo-50/80 border border-indigo-200 rounded-xl p-5 mb-8">
  <h3 class="text-indigo-800 m-0 mb-3 flex items-center gap-2">🎯 Tujuan Pembelajaran</h3>
  <ul class="text-indigo-900 m-0 text-sm">
    <li>Murid mampu melakukan integrasi dan menyajikan konten aplikasi dengan baik.</li>
  </ul>
</div>

<!-- Section 2: Materi Pembelaran -->
Integrasi adalah proses menggabungkan beberapa objek, data, atau komponen dari aplikasi yang berbeda menjadi satu kesatuan yang lebih bermakna — misalnya menggabungkan tabel Excel ke dalam dokumen Word, atau grafik ke dalam slide presentasi. Kemampuan ini penting karena dalam pekerjaan sehari-hari, data jarang hanya diolah di satu aplikasi saja.

<div class="bg-green-50/50 border border-green-100 rounded-xl p-5 my-6">
    <h4 class="text-green-800 m-0 mb-2 flex items-center gap-2">🧘 Ingat K3L</h4>
    <p class="text-green-900 text-sm m-0">Sebelum praktik lama di depan komputer, perhatikan Kesehatan, Keselamatan Kerja, dan Lingkungan (K3L) — duduk tegak dengan leher lurus, jarak pandang layar minimal 40 cm, atur pencahayaan agar mata tidak cepat lelah, gunakan kursi yang nyaman, dan posisikan kaki menapak lantai dengan lutut menekuk 90°.</p>
</div>

## Object Linking and Embedding (OLE)

OLE adalah fitur pada Ms. Office untuk menggabungkan objek dari satu aplikasi ke aplikasi lain, misalnya menempelkan grafik/data Excel ke dalam Word. Ada dua mode:

- **Linking** — objek yang ditempel tetap terhubung ke file sumber. Jika data sumber diubah, objek yang ditempel ikut ter-update.
- **Embedding** — objek yang ditempel berdiri sendiri. Perubahan pada file sumber tidak akan memengaruhi objek yang sudah ditempel.

### A. Menghubungkan (Object Linking) Excel ke Word

1. Buka file Excel yang datanya ingin ditempel, seleksi data tersebut, lalu **Copy**.
2. Buka Ms. Word, pada tab **Home** pilih **Paste → Paste Special**.
3. Pada kotak dialog yang muncul, pilih **Paste Link**, lalu pilih **Microsoft Excel Worksheet Object**, klik **OK**.
4. Data akan tampil di Word dan tetap terhubung ke file Excel sumber — klik dua kali pada data tersebut untuk membuka file Excel aslinya.

### B. Menempelkan (Object Embedding) Excel ke Word

1. Buka file Excel yang datanya ingin ditempel, seleksi data tersebut, lalu **Copy**.
2. Buka Ms. Word, pada tab **Home** pilih **Paste → Paste Special**.
3. Pada kotak dialog yang muncul, pilih **Paste** (bukan Paste Link), lalu pilih **Microsoft Excel Worksheet Object**, klik **OK**.
4. Klik dua kali pada data yang sudah ditempel untuk mengeditnya langsung di dalam worksheet Excel yang tertanam di Word, tanpa memengaruhi file Excel aslinya.

## Integrasi Ms. PowerPoint dan Ms. Excel

Cara memasukkan tabel Excel yang bisa diedit langsung ke dalam slide PowerPoint:

1. Buka Ms. PowerPoint, klik **Insert → Table → Excel Spreadsheet**.
2. Sebuah worksheet Excel akan muncul di dalam slide, lengkap dengan fitur-fitur Excel (rumus, format, dll.).
3. Setelah selesai memasukkan data, klik dua kali di luar area worksheet untuk kembali ke tampilan slide normal.

## Integrasi Ms. Word dan Ms. Excel (Membuat Grafik/Chart)

Cara membuat diagram/grafik di Word menggunakan data yang diolah lewat Excel:

1. Buka Ms. Word, klik **Insert → Chart**, lalu pilih jenis diagram yang sesuai kebutuhan.
2. Sebuah worksheet Excel akan otomatis terbuka berdampingan — worksheet ini digunakan untuk mengisi data yang akan ditampilkan pada grafik.
3. Setelah data sesuai, tutup worksheet Excel tersebut; grafik pada Word akan otomatis menyesuaikan.

## 4. Menghubungkan (Link) PowerPoint dengan Dokumen Lain

Cara membuat hyperlink antar-slide atau ke dokumen/halaman web lain di PowerPoint:

1. Blok teks yang ingin dijadikan tautan, lalu klik **Insert → Hyperlink**.
2. Pilih **Place in This Document** untuk menghubungkan ke slide tertentu dalam file yang sama, lalu klik **OK**.
3. Jika ingin menghubungkan ke file lain atau situs web, pilih opsi **Existing File or Web Page** dan masukkan tautan/lokasi filenya.

<div class="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6">
    <h4 class="text-blue-800 m-0 mb-2 flex items-center gap-2">📝 Catatan Pembaruan:</h4>
    <h5 class="text-blue-800 m-0 mb-2 flex items-center gap-2">OLE di Era Kerja Kolaboratif Berbasis Cloud</h5>
    <p class="text-blue-900 text-sm m-0">Teknologi OLE sendiri sudah cukup lama (berbasis teknologi COM milik Windows sejak awal 1990-an) dan masih berfungsi normal di Ms. Office versi terbaru — jadi bukan fitur yang usang. Namun, cara kerjanya (menghubungkan ke file lokal di komputer) kurang cocok dengan pola kerja banyak tim di Indonesia saat ini yang sudah pindah ke workflow berbasis cloud:</p>
        <ul class="text-blue-900 text-sm m-0">
            <li>Banyak startup dan software house di Indonesia kini bekerja di <strong class="text-blue-900">Google Workspace</strong>, di mana konsep serupa OLE Linking sudah digantikan oleh fitur bawaan **Google Slides/Docs → Insert → Chart → From Sheets**, yang secara otomatis menyediakan tombol <i>Update</i> untuk menyinkronkan data terbaru dari Google Sheets tanpa perlu membuka file terpisah secara manual, dan bisa diakses/diedit bersama secara real-time oleh banyak orang sekaligus.</li>
            <li>Prinsip "menggabungkan data dari aplikasi berbeda" saat ini juga meluas ke tools kolaborasi lain seperti <strong class="text-blue-900">Notion</strong> atau <strong class="text-blue-900">Airtable</strong>, yang memungkinkan embed tabel/data secara langsung dan otomatis ter-update, sebagai bagian dari tren dokumentasi kerja modern.</li>
            <li>Untuk pekerjaan yang memang berbasis file lokal/offline di lingkungan Microsoft (misalnya laporan resmi instansi pemerintah/korporat yang masih memakai Windows + Ms. Office), OLE seperti di atas tetap menjadi cara yang valid dan relevan digunakan.</li>
        </ul>
</div>

## Rangkuman

- **OLE (Object Linking and Embedding)** memungkinkan penggabungan data dari satu aplikasi Office ke aplikasi lain, dengan dua mode: *linking* (tetap terhubung ke sumber) dan *embedding* (berdiri sendiri).
- Data Excel bisa diintegrasikan ke **PowerPoint** (sebagai tabel interaktif) maupun ke **Word** (sebagai sumber data grafik/chart).
- **Hyperlink** di PowerPoint memungkinkan slide terhubung ke slide lain maupun ke dokumen/situs web eksternal.
- OLE tetap relevan di lingkungan kerja berbasis Windows/Microsoft, namun tren industri saat ini juga banyak beralih ke integrasi data berbasis cloud (Google Workspace, Notion, dsb.) yang lebih kolaboratif dan otomatis.


<!-- Section 3: Referensi -->
<div class="bg-slate-50/50 border border-slate-100 rounded-xl p-5 my-6">
    <h4 class="text-slate-800 m-0 mb-2 flex items-center gap-2">📚 Referensi</h4>
    <p class="text-slate-900 text-sm m-0"><em>Materi ini merupakan tulisan ulang dari sub-bab "Integrasi Aplikasi Office" (Bab 2 – Teknologi Informasi dan Komunikasi) pada buku Informatika untuk SMK/MAK Kelas X Semester 1 karya Kusmadi, dengan catatan relevansi tren industri terkini di Indonesia (per September 2026).</em></p>
</div>



