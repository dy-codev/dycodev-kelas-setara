<!-- Section 1: Tujuan Pembelaran -->
<div class="bg-indigo-50/80 border border-indigo-200 rounded-xl p-5 mb-8">
  <h3 class="text-indigo-800 m-0 mb-3 flex items-center gap-2">🎯 Tujuan Pembelajaran</h3>
  <ul class="text-indigo-900 m-0 text-sm">
    <li>Murid mampu memahami komponen perangkat keras pada sistem komputer dengan baik. </li>
  </ul>
</div>

<!-- Section 2: Materi Pembelaran -->
Sebuah sistem komputer bekerja lewat interaksi tiga komponen: **perangkat keras (hardware)**, **perangkat lunak (software)**, dan **pengguna (brainware)**. Bagian ini membahas komponen perangkat keras, yang secara umum dibagi menjadi empat kelompok: perangkat input, output, proses, dan media penyimpanan.

## 1. Perangkat Input

Perangkat input digunakan untuk memasukkan data dan perintah ke komputer agar bisa diproses lebih lanjut.

- **Keyboard** — papan ketik untuk memasukkan huruf, angka, karakter khusus, serta menjalankan perintah/*shortcut* (menyimpan, membuka, menghapus, dll.). Jenisnya antara lain QWERTY (paling umum dipakai, formatnya sama dengan mesin tik), DVORAK, dan KLOCKENBERG. Keyboard QWERTY sendiri terbagi jadi 4 bagian: *typewriter key*, *numeric key*, *function key*, dan *special function key*.
- **Mouse** — untuk menggerakkan pointer/kursor, punya dua tombol klik (kiri & kanan) serta *scroll wheel*. Bisa juga dipakai untuk *drag and drop* — menekan klik kiri tanpa melepas sambil memindahkan elemen ke lokasi lain.
- **Touchpad** — fungsinya sama seperti mouse (menggerakkan pointer), tapi biasanya tertanam langsung di laptop.
- **Scanner** — menduplikasi gambar/teks fisik menjadi file digital yang bisa dilihat, diedit, dan disimpan di komputer. Jenis SCAN IR juga umum dipakai untuk memindai Lembar Jawaban Komputer (LJK) yang ditandai pensil 2B.

## 2. Perangkat Output

Perangkat output menyajikan hasil pengolahan data komputer agar bisa diterima pengguna.

- **Monitor** — menampilkan hasil gambar/tampilan dari komputer. Spesifikasinya berbeda-beda tergantung kebutuhan (kerja kantoran vs multimedia/gaming), dengan parameter seperti resolusi, *refresh rate*, *color depth*, dan ukuran layar.
- **Printer** — mencetak teks/gambar/grafik ke kertas, terhubung lewat USB atau nirkabel. Ketajaman hasil cetak diukur dalam satuan **dpi** (*dot per inch*) — makin tinggi dpi, makin tajam hasilnya. Jenisnya meliputi *Dot Matrix* (tinta pita), *Inkjet* (tinta cair), dan *Laser* (tinta serbuk).
- **Proyektor** — menampilkan tampilan monitor ke layar/dinding untuk presentasi, biasanya terhubung lewat kabel VGA atau HDMI.
- **Speaker** — menghasilkan suara dari komputer, bisa didengar banyak orang sekaligus (berbeda dari headset/earphone yang sifatnya personal).

## 3. Perangkat Proses

Perangkat proses menjalankan operasi data, aritmatika, dan logika, dengan **CPU** sebagai pusat pemrosesannya.

- **CPU (Central Processing Unit)** — "otak" komputer, berisi mikroprosesor dengan dua komponen dasar: *Unit Kontrol* (mengarahkan instruksi program) dan *Arithmetic/Logical Unit/ALU* (menjalankan operasi hitung & logika). Dua merek prosesor yang paling umum digunakan adalah **Intel** dan **AMD**.
- **RAM (Random Access Memory)** — memori sementara untuk menyimpan data/program yang sedang aktif digunakan, agar prosesor bisa mengaksesnya lebih cepat. Isinya hilang saat komputer dimatikan. Makin besar kapasitas RAM, makin banyak proses/program besar yang bisa dijalankan bersamaan.
- **VGA (Kartu Grafis)** — menerjemahkan output tampilan komputer ke monitor, penting untuk desain grafis dan gaming yang butuh performa grafis tinggi.
- **Motherboard** — "papan utama" yang menghubungkan dan mengendalikan komunikasi antar komponen (prosesor, RAM, penyimpanan, dll). Tidak semua komponen cocok dengan semua jenis motherboard, sehingga perlu disesuaikan sebelum dirakit.

## 4. Perangkat Media Penyimpanan

Perangkat penyimpanan menyimpan aplikasi, berkas, dan data agar bisa dikelola (diduplikasi, dipindahkan, dihapus).

- **Hard Drive** — media penyimpanan utama, termasuk tempat sistem operasi tersimpan (biasanya tampil sebagai partisi *Local Disk C, D,* dst.). Jenisnya meliputi **SATA** (jenis konektor standar yang umum dipakai) dan **SSD (Solid State Drive)** — tanpa komponen bergerak, jauh lebih cepat dan lebih tahan guncangan dibanding hard disk konvensional, meski harganya lebih mahal. Kombinasi umum: SSD untuk sistem operasi (biar cepat), HDD kapasitas besar untuk penyimpanan data (lebih murah per GB).
- **Optical Drive** — penggerak cakram (CD/DVD/Blu-ray) yang membaca/menulis data pakai sinar laser.
- **USB Flash Memory** — media penyimpanan portabel berbasis memori kilat (*flash*) dengan konektor USB, ringan dan mudah dibawa. Kapasitasnya bervariasi mulai dari beberapa GB hingga skala TB tergantung teknologi memorinya.

<div class="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6">
    <h4 class="text-blue-800 m-0 mb-2 flex items-center gap-2">📝 Catatan Pembaruan:</h4>
    <h5 class="text-blue-800 m-0 mb-2 flex items-center gap-2">Perangkat yang Sudah Bergeser Relevansinya</h5>
    <p class="text-blue-900 text-sm m-0">Beberapa detail teknis pada materi hardware ini sudah berubah sejak buku ini ditulis (2023):</p>
        <ul class="text-blue-900 text-sm m-0">
            <li><strong class="text-blue-900">PATA (Parallel ATA)</strong>sudah benar-benar usang dan sudah lama tidak diproduksi — bukan sekadar "mulai digantikan SATA" seperti disebut buku aslinya. Bahkan SATA sendiri kini mulai tergeser tren terbaru: <strong class="text-blue-900">SSD NVMe (M.2)</strong>, yang jauh lebih cepat dari SATA SSD sekalipun karena terhubung langsung lewat jalur PCIe, dan sudah jadi standar di laptop-laptop baru yang dijual di Indonesia saat ini.</li>
            <li><strong class="text-blue-900">Optical Drive (CD/DVD)</strong>kini jarang ditemukan di laptop baru — sejak pertengahan 2010-an sebagian besar produsen laptop (termasuk yang dijual di Indonesia) sudah tidak lagi menyertakan slot optical drive bawaan, seiring distribusi software dan file yang beralih ke unduhan digital/cloud. Optical drive kini lebih banyak dipakai lewat drive eksternal untuk kebutuhan khusus (arsip lama, instalasi software lawas).</li>
            <li><strong class="text-blue-900">Merek VGA "ATI"</strong>sudah tidak ada lagi — ATI diakuisisi oleh AMD sejak 2006, dan sejak sekitar 2010 seluruh produk kartu grafisnya dipasarkan dengan nama AMD Radeon. Dua produsen VGA utama yang relevan saat ini adalah <strong class="text-blue-900">NVIDIA</strong> dan <strong class="text-blue-900">AMD (Radeon)</strong></li>
        </ul>
    <p class="text-blue-900 text-sm">Contoh sistem operasi <i>driverless printing</i> pada materi asli menyebut Windows 10. Perlu dicatat bahwa <strong class="text-blue-900">dukungan resmi Windows 10 sudah berakhir per 14 Oktober 2025</strong>, dan Microsoft mengarahkan pengguna untuk beralih ke Windows 11 sebagai standar saat ini (meski Windows 10 masih bisa dipakai lewat program Extended Security Updates berbayar hingga 2027).</p>
    <p class="text-blue-900 text-sm">Banyak kantor dan sekolah di Indonesia kini juga mengandalkan <strong class="text-blue-900">penyimpanan cloud</strong> (Google Drive, OneDrive) untuk berbagi file sehari-hari, sehingga sebagian kebutuhan yang dulu ditangani USB flash drive atau CD kini bisa dilakukan tanpa perangkat fisik. Meski USB flash drive tetap relevan untuk transfer data cepat/offline atau <i>bootable installer</i> sistem operasi.</p>
</div>

## Rangkuman

- Perangkat keras komputer terbagi menjadi 4 kelompok: **input** (keyboard, mouse, dll.), **output** (monitor, printer, dll.), **proses** (CPU, RAM, VGA, motherboard), dan **media penyimpanan** (hard drive, optical drive, USB flash memory).
- **SSD NVMe (M.2)** kini menjadi standar penyimpanan tercepat yang lebih relevan dibanding PATA/SATA HDD untuk laptop modern.
- **AMD Radeon** dan **NVIDIA** adalah dua produsen VGA/GPU utama saat ini — nama "ATI" sudah tidak dipakai lagi sejak lebih dari satu dekade lalu.
- **Windows 11** kini menjadi sistem operasi standar setelah dukungan resmi Windows 10 berakhir pada Oktober 2025.
- Optical drive dan sebagian fungsi media penyimpanan fisik kini banyak tergantikan oleh penyimpanan cloud dalam praktik kerja sehari-hari di Indonesia.

<!-- Section 3: Referensi -->
<div class="bg-slate-50/50 border border-slate-100 rounded-xl p-5 my-6">
    <h4 class="text-slate-800 m-0 mb-2 flex items-center gap-2">📚 Referensi</h4>
    <p class="text-slate-900 text-sm m-0"><em>Materi ini merupakan tulisan ulang dari sub-bab "Perangkat Keras Komputer" (Bab 3 – Sistem Komputer) pada buku Informatika untuk SMK/MAK Kelas X Semester 1 karya Kusmadi, dengan catatan relevansi tren industri terkini di Indonesia (per September 2026).</em></p>
</div>
