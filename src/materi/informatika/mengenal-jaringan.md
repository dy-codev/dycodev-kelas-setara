<!-- Section 1: Tujuan Pembelaran -->
<div class="bg-indigo-50/80 border border-indigo-200 rounded-xl p-5 mb-8">
  <h3 class="text-indigo-800 m-0 mb-3 flex items-center gap-2">🎯 Tujuan Pembelajaran</h3>
  <ul class="text-indigo-900 m-0 text-sm">
    <li>Murid mampu mengenal perangkat jaringan dengan baik dan benar.</li>
  </ul>
</div>

<!-- Section 2: Materi Pembelaran -->
Untuk membangun sebuah jaringan komputer, dibutuhkan beberapa komponen perangkat keras (_hardware_) yang saling terhubung — mulai dari komputer itu sendiri, kartu jaringan, perangkat penghubung, hingga media kabel yang dipakai.

## Komputer Client dan Server

- **Komputer Client** — komputer yang dipakai pengguna akhir (*end user*) untuk mengakses sumber daya di jaringan, kadang disebut juga *workstation*.
- **Komputer Server** — komputer yang menyediakan layanan yang diakses oleh perangkat client (smartphone, laptop, dll).

## Kartu Jaringan

- **Network Interface Card (NIC)** — kartu jaringan/LAN Card yang menjembatani komputer ke jaringan. Hampir semua komputer modern sudah memiliki NIC bawaan (*built-in*). Kecepatannya bervariasi: *ethernet* (10 Mbps), *fast ethernet* (100 Mbps), *gigabit ethernet* (1000 Mbps), hingga *ten-gig* (10.000 Mbps).
- **Wireless Card** — perangkat untuk menangkap sinyal dan menghubungkan komputer ke jaringan nirkabel (Wi-Fi). Laptop generasi sekarang umumnya sudah punya ini bawaan, sedangkan komputer desktop sering kali perlu ditambahkan secara terpisah.
- **Bluetooth Card** — perangkat untuk menghubungkan dua perangkat secara nirkabel dan privat tanpa kabel. Sama seperti wireless card, laptop modern umumnya sudah punya ini secara bawaan.

## Perangkat Penghubung Jaringan

- **Router** — menghubungkan dua jaringan atau lebih dan meneruskan data antar jaringan, termasuk menghubungkan LAN ke internet.
- **Modem/ONU** — Modem (*Modulator Demodulator*) mengubah sinyal digital ke analog dan sebaliknya untuk komunikasi data dua arah. **ONU (Optical Network Unit)** adalah perangkat untuk koneksi jaringan fiber optic yang tersambung ke rumah dari penyedia layanan internet.
- **Access Point/Repeater** — Access Point menyebarkan sinyal jaringan nirkabel dan bisa dikonfigurasi untuk membatasi siapa saja yang boleh terhubung. Repeater berfungsi memperkuat/memperluas jangkauan sinyal wireless yang sudah ada.
- **Switch/Hub** — Switch mengalokasikan jalur lalu lintas data antar segmen jaringan ke tujuannya. Hub punya fungsi serupa untuk menghubungkan perangkat dalam satu segmen jaringan, namun caranya lebih sederhana (lihat catatan relevansi di bagian 5).

## Kabel Jaringan

- **UTP (Unshielded Twisted Pair)** — kabel dengan sepasang konduktor terbungkus plastik berwarna. CAT5 mendukung frekuensi hingga 100 MHz (kecepatan hingga 100 Mbps), CAT6 mendukung Gigabit Ethernet (frekuensi hingga 250 MHz), dan CAT6a bisa beroperasi hingga 750 MHz. Memakai konektor RJ45/RJ11, dan biaya pemasangannya relatif murah.
- **STP (Shielded Twisted Pair)** — mirip UTP, tapi punya lapisan pembungkus tambahan (metal shield/foil) untuk mengurangi gangguan elektromagnetik. Konektornya sama dengan UTP.
- **Coaxial** — kabel dengan konduktor inti tembaga berlapis, terbagi jadi tipe *thin* (lebih fleksibel & murah) dan *thick*. Memakai konektor BNC.
- **Fiber Optic** — kabel serat kaca yang mentransmisikan sinyal cahaya, mendukung kecepatan 10 Mbps–10 Gbps dengan jangkauan lebih jauh dan bandwidth lebih besar dibanding kabel lain. Kekurangannya: mudah patah, pemasangan sulit, dan biayanya lebih mahal. Memakai konektor FO (SC, ST, LC).

<div class="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6">
    <h4 class="text-blue-800 m-0 mb-2 flex items-center gap-2">📝 Catatan Pembaruan:</h4>
    <h5 class="text-blue-800 m-0 mb-2 flex items-center gap-2">Perangkat yang Sudah Bergeser Relevansinya</h5>
    <!-- <p class="text-blue-900 text-sm m-0">Inro</p> -->
        <ul class="text-blue-900 text-sm m-0">
            <li><strong class="text-blue-900">Hub</strong> sudah sangat jarang dipakai/dijual lagi untuk jaringan baru — secara teknis, hub membagi satu jalur data ke semua perangkat sekaligus (rawan tabrakan data/*collision*) sehingga jauh lebih lambat dan tidak efisien dibanding switch, yang mampu mengatur jalur data secara terpisah ke tiap perangkat. Sejak lebih dari satu dekade lalu, **switch sepenuhnya menggantikan peran hub** di hampir semua instalasi jaringan, termasuk di Indonesia — hub kini hanya muncul di perangkat lama atau materi pembelajaran sejarah jaringan.</li>
            <li><strong class="text-blue-900">Kabel Coaxial</strong> sebagai media LAN (seperti dijelaskan di atas) sudah jadi teknologi historis — praktik ini banyak dipakai di era Ethernet 10BASE2/10BASE5 (1980–90-an) dan sudah lama ditinggalkan untuk jaringan komputer baru. Di Indonesia saat ini, kabel coaxial lebih sering dijumpai untuk televisi kabel atau sebagian jaringan hybrid milik penyedia internet lama, bukan untuk membangun LAN kantor/sekolah.</li>
            <li><strong class="text-blue-900">Access Point + Repeater tunggal</strong> kini banyak digantikan tren **sistem mesh Wi-Fi** (misalnya TP-Link Deco, ASUS ZenWiFi, Google Nest Wifi) di rumah dan kantor kecil di Indonesia, karena repeater konvensional punya kelemahan umum: kecepatan bisa berkurang signifikan dan perpindahan sinyal antar titik (*roaming*) kurang mulus. Sistem mesh mengatasi kedua masalah ini dengan manajemen sinyal terpusat.</li>
            <li><strong class="text-blue-900">NIC berkecepatan 10/100 Mbps</strong> kini sudah dianggap standar usang — laptop dan PC baru minimal sudah memakai **Gigabit Ethernet**. Bahkan, banyak laptop tipis modern sekarang justru **tidak lagi menyediakan port Ethernet bawaan** sama sekali, mengandalkan Wi-Fi atau adaptor eksternal USB-C to Ethernet jika koneksi kabel diperlukan.</li>
            <li><strong class="text-blue-900">Modem/ONU</strong> justru tetap sangat relevan dan makin banyak dipakai — mayoritas penyedia layanan internet rumahan besar di Indonesia (seperti IndiHome, Biznet, dan MyRepublic) kini menggunakan teknologi **fiber optic langsung ke rumah (FTTH)**, sehingga perangkat ONU menjadi makin umum ditemui dibanding modem ADSL/kabel tembaga lama.</li>
        </ul>
    <!-- <p class="text-blue-900 text-sm m-0"></p> -->
</div>

## Rangkuman

- Perangkat keras jaringan terbagi menjadi komputer client/server, kartu jaringan (NIC, wireless card, bluetooth card), perangkat penghubung (router, modem/ONU, access point/repeater, switch), dan kabel jaringan (UTP, STP, coaxial, fiber optic).
- **Switch** kini sepenuhnya menggantikan **hub**, dan **kabel coaxial** untuk LAN sudah jadi teknologi historis.
- Tren mesh Wi-Fi menggantikan pola access point + repeater tunggal di banyak rumah/kantor kecil Indonesia.
- Standar kecepatan jaringan kini minimal Gigabit Ethernet, dan koneksi fiber optic (ONU) makin dominan seiring ekspansi layanan FTTH di Indonesia.

<!-- Section 3: Referensi -->
<div class="bg-slate-50/50 border border-slate-100 rounded-xl p-5 my-6">
    <h4 class="text-slate-800 m-0 mb-2 flex items-center gap-2">📚 Referensi</h4>
    <p class="text-slate-900 text-sm m-0"><em>Materi ini merupakan tulisan ulang dari sub-bab "Mengenal Jaringan" (Bab 4 – Jaringan Kpmputer dan Internet) pada buku Informatika untuk SMK/MAK Kelas X Semester 1 karya Kusmadi, dengan catatan relevansi tren industri terkini di Indonesia (per September 2026).</em></p>
</div>