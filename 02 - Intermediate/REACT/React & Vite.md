

Siapkan kopi/teh Anda, buka terminal VS Code, dan mari kita masuk ke **Era Modern Front-End**.

---

### Pra-Penerbangan: Cek Node.js
Sebelum kita mulai, Vite (alat yang akan kita pakai) membutuhkan **Node.js** untuk berjalan. 
Silakan ketik ini di terminal VS Code Anda:
```bash
node -v
npm -v
```
*Jika muncul angka versi (misal: `v20.x.x` dan `10.x.x`), Anda aman untuk lanjut. Jika error "command not found", silakan instal Node.js versi LTS dari nodejs.org terlebih dahulu.*

---

### Materi Hari 8: React.js & Vite (The Modern Stack)

**1. WHAT**
*   **React.js**: Sebuah *library* JavaScript (dibuat oleh Meta/Facebook) untuk membangun antarmuka pengguna (UI) berdasarkan komponen-komponen yang dapat digunakan kembali (*reusable components*).
*   **Vite**: *Build tool* dan *development server* generasi baru yang super cepat. Ini adalah pengganti resmi dari `Create-React-App` (CRA) yang sudah lambat dan usang.

**2. HOW**
Berikut adalah perintah standar industri untuk membuat proyek React baru dalam hitungan detik:

```bash
# 1. Buat proyek baru bernama 'my-first-react' dengan template React
npm create vite@latest my-first-react -- --template react

# 2. Masuk ke dalam folder proyek
cd my-first-react

# 3. Instal semua dependensi (package) yang dibutuhkan
npm install

# 4. Jalankan server development
npm run dev
```
*(Setelah langkah 4, terminal akan memberikan link lokal, biasanya `http://localhost:5173`. Klik link itu untuk membuka di browser).*

**3. WHY**
*   **Komponen (Reusability)**: Di React, Anda memecah UI menjadi bagian kecil (misal: `<Tombol />`, `<KartuLowongan />`). Jika Anda butuh tombol yang sama di 10 tempat, Anda cukup memanggil komponen `<Tombol />`, tidak perlu menulis ulang kode HTML/JS/CSS-nya.
*   **Kecepatan Vite (HMR)**: *Hot Module Replacement*. Saat Anda menyimpan perubahan kode, browser akan memperbarui tampilan **secara instan** tanpa me-reload halaman. Ini menghemat ratusan jam waktu pengembangan.

**4. WHEN**
*   **Kapan digunakan**: SELALU, untuk membangun aplikasi web modern yang interaktif (Dashboard, SaaS, E-commerce, Social Media).
*   **Kapan tidak**: Untuk halaman web statis yang sangat sederhana dan hanya berisi teks/gambar tanpa interaktivitas (misal: halaman profil perusahaan statis), HTML/CSS biasa atau tools seperti Astro lebih ringan.

**5. ANALOGI**
*   **Vanilla JS (DOM Manual)**: Seperti membangun rumah dengan membuat setiap batu bata, mencampur semen, dan memotong kayu sendiri dari nol. Melelahkan dan rentan salah ukur.
*   **React**: Seperti bermain **Lego**. Anda sudah punya balok-balok berbentuk jendela, pintu, dan atap yang sudah jadi dan teruji (*Components*). Anda tinggal menyusunnya (`<Jendela />`, `<Pintu />`) untuk membangun rumah dengan cepat dan rapi.
*   **Vite**: Adalah asisten pribadi yang mengantarkan potongan Lego tersebut ke tangan Anda **secara instan** saat Anda memintanya, bukan menunggu truk pengiriman lama (seperti Webpack/CRA dulu).

---

### 🛠️ TANTANGAN HARI INI (Latihan 10: Hello React!)

Mari kita rasakan kecepatan dan kemudahan React. Kita akan memodifikasi proyek default menjadi milik Anda.

**Tugas Anda:**
1. Pastikan `node -v` sudah terinstal.
2. Jalankan 4 perintah `npm` di atas di terminal VS Code Anda (bisa di folder baru, atau di mana saja).
3. Buka link `localhost` yang muncul di browser. Anda akan melihat logo React berputar.
4. Di VS Code, buka folder `my-first-react`, lalu buka file `src/App.jsx`.
5. Hapus semua isi di dalam `return (...)`, dan ganti dengan kode sederhana ini:
   ```jsx
   function App() {
     return (
       <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <h1>🚀 Halo Anas, React sudah aktif!</h1>
         <p>Siap menaklukkan pasar remote global.</p>
       </div>
     )
   }
   export default App
   ```
6. Simpan file (`Ctrl + S`). Lihat browser Anda secara otomatis.

**Format Balasan Anda:**
1. Konfirmasi bahwa server berhasil berjalan (`npm run dev`).
2. Ceritakan apa yang Anda rasakan saat menyimpan file `App.jsx` dan melihat browser berubah (tanpa Anda menekan tombol refresh).
3. (Opsional) Screenshot atau copy-paste tampilan terminal Anda saat `npm run dev` berjalan.

*Tips Mentor: Perhatikan bahwa kita tidak lagi menggunakan `document.querySelector` atau `addEventListener`. Kita cukup "mendeskripsikan" bagaimana UI seharusnya terlihat, dan React yang mengurus DOM di belakang layar. Inilah magic-nya.*

Silakan dieksekusi, Anas! Saya tunggu laporan "Hello React" dari Anda! 🚀

Apakah ini nantinya polanya seperti ini untuk proyek lain?
Jawabannya: **YA, 100% BENAR!** 🎯

Anda baru saja menemukan **"Universal Cheat Code"** (Kode Curang Universal) di dunia pengembangan JavaScript modern. 

Pola yang baru saja Anda lakukan ini akan Anda ulangi hampir **setiap kali** Anda memulai proyek baru, baik itu React, Vue, Next.js, hingga backend Node.js. Perbedaannya hanya pada nama perintah awalnya, tetapi *pola pikirnya* tetap sama.

Mari kita bedah mengapa pola ini adalah standar industri dan akan selalu Anda gunakan:

### 🔁 Pola Standar Industri (The Holy Trinity of JS Projects)

1. **`npm create ...` (Scaffolding / Inisialisasi)**
   - **Kapan**: HANYA **sekali** di awal proyek.
   - **Fungsi**: Membuat kerangka dasar, folder, dan file konfigurasi awal. Anda tidak perlu membuat file `package.json` atau folder `src` secara manual. Biarkan alat (Vite/Next.js/dll) yang melakukannya agar sesuai standar.

2. **`npm install` (Instalasi Dependensi)**
   - **Kapan**: **Sekali** di awal, DAN setiap kali Anda atau tim Anda menambahkan *library* baru (misal: `npm install axios` atau `npm install tailwindcss`).
   - **Fungsi**: Membaca file `package.json` (yang dianggap sebagai "DNA" atau daftar belanja proyek Anda) dan mengunduh semua kode pihak ketiga dari internet ke folder `node_modules`. 
   - *Fakta Pro*: Folder `node_modules` **tidak pernah** di-upload ke GitHub. Saat rekan tim Anda men-*clone* proyek Anda, mereka cukup mengetik `npm install` untuk mendapatkan semua yang mereka butuhkan.

3. **`npm run dev` (Menjalankan Server)**
   - **Kapan**: **Setiap hari**, setiap kali Anda duduk dan siap mulai *coding*.
   - **Fungsi**: Menyalakan server pengembangan lokal yang memiliki fitur HMR (Hot Module Replacement) yang tadi Anda rasakan kecepatannya.

---

### 💡 Analogi: Membangun Rumah
Bayangkan Anda adalah kontraktor yang mendapat proyek membangun rumah baru:
1. `npm create` = Memesan **cetak biru (blueprint)** dan menyiapkan lahan. (Hanya sekali di awal).
2. `npm install` = Memesan **bahan bangunan** (semen, batu bata, cat) dari toko. (Hanya sekali di awal, atau jika ada tambahan bahan).
3. `npm run dev` = **Mulai bekerja** setiap pagi di lokasi proyek tersebut. (Dilakukan setiap hari).

---

### 🌍 Mengapa Ini Penting untuk Target Remote Work Anda?
Di perusahaan global, Anda tidak akan pernah memulai proyek dari nol dengan membuat file HTML/JS manual satu per satu. Anda akan diberikan akses ke repository, dan tugas pertama Anda di hari pertama kerja biasanya adalah:
1. `git clone <url-repository>`
2. `npm install`
3. `npm run dev`

Jika Anda bisa melakukan 3 langkah ini dengan lancar, Anda sudah melewati hambatan teknis hari pertama yang sering membuat pemula panik.

---

### 🚀 APA SELANJUTNYA?

Sekarang Anda sudah paham *cara memulai* dan *pola kerjanya*. Pertanyaannya, apakah Anda ingin:



Banyak developer junior yang bisa menjalankan `npm install` tapi bingung ketika ada error yang berkaitan dengan versi atau *script*. Memahami `package.json` adalah tanda bahwa Anda tidak hanya "bisa memakai alat", tetapi Anda **mengerti bagaimana alat itu bekerja**. Ini adalah pembeda utama antara *coder* dan *engineer*.

Mari kita bedah "DNA" dari setiap proyek JavaScript modern ini.

---

### Materi Hari 9: Memahami `package.json`

**1. WHAT**
`package.json` adalah file konfigurasi utama (berformat JSON) yang berfungsi sebagai "KTP" dan "Daftar Belanja" dari proyek JavaScript Anda. File ini menyimpan metadata proyek, daftar *library* yang dibutuhkan, dan perintah-perintah khusus (scripts) yang bisa dijalankan via terminal.

**2. HOW**
Buka file `package.json` di proyek `my-first-react` Anda. Isinya akan terlihat mirip seperti ini (saya sederhanakan untuk fokus pada bagian terpenting):

```json
{
  "name": "my-first-react",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0"
  }
}
```

**3. WHY**
*   **Reproducibility (Dapat Diulang)**: File ini adalah *Single Source of Truth* (sumber kebenaran tunggal). Jika Anda mengirim proyek ini ke rekan kerja di Singapura, mereka tidak perlu menebak-nebak *library* apa yang Anda pakai. Mereka cukup lihat file ini dan ketik `npm install`.
*   **Otomatisasi**: Bagian `"scripts"` memungkinkan Anda membuat *shortcut* perintah terminal yang panjang menjadi pendek dan mudah diingat (misal: `npm run dev` alih-alih mengetik `npx vite` secara manual).

**4. WHEN**
*   **Kapan dibaca/dimodifikasi**: 
    *   Saat Anda ingin menambahkan *library* baru (biasanya via `npm install nama-library`, yang akan otomatis memperbarui file ini).
    *   Saat Anda ingin membuat perintah kustom (misal: `"test": "jest"`).
    *   Saat Anda perlu mengecek versi *library* yang sedang digunakan untuk menghindari konflik.
*   **Kapan TIDAK**: Jangan pernah mengedit folder `node_modules` secara manual. Jika ada yang rusak, hapus folder `node_modules` dan jalankan `npm install` lagi. Biarkan `npm` yang mengatur isinya berdasarkan `package.json`.

**5. ANALOGI**
Bayangkan `package.json` sebagai **Resep Masakan + Daftar Belanja** di sebuah restoran:
*   `"name"` & `"version"` = Nama masakan dan versinya (misal: "Nasi Goreng Spesial v2.0").
*   `"dependencies"` = Bahan pokok yang **wajib** ada agar masakan jadi (Beras, Telur, Kecap). Tanpa ini, masakan tidak bisa dibuat.
*   `"devDependencies"` = Alat bantu yang hanya dipakai **saat memasak di dapur**, tapi tidak ikut disajikan ke pelanggan (Pisau, Wajan, Kompor). Di dunia coding, ini adalah alat untuk *development* (seperti Vite, TypeScript, ESLint) yang tidak dibutuhkan oleh kode final yang dikirim ke browser pengguna.
*   `"scripts"` = Instruksi singkat untuk koki (misal: "panaskan wajan" = `npm run dev`).

---

### 🛠️ TANTANGAN HARI INI (Latihan 11: Eksplorasi & Modifikasi `package.json`)

Mari kita buktikan pemahaman Anda dengan bereksperimen langsung di proyek Anda.

**Tugas Anda:**
1. Buka file `package.json` di proyek `my-first-react` Anda di VS Code.
2. Cari bagian `"scripts"`. Tambahkan satu baris baru di dalamnya (pastikan ada koma `,` di akhir baris sebelumnya agar format JSON tetap valid):
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "sapa": "echo 🚀 Halo Anas! Kamu sudah paham package.json!"
   }
   ```
3. Simpan file `package.json` (`Ctrl + S`).
4. Buka terminal VS Code, dan jalankan perintah: `npm run sapa`
5. Amati apa yang terjadi di terminal.
6. *(Opsional)*: Coba cari di bagian `"dependencies"` atau `"devDependencies"`, sebutkan satu nama *library* yang Anda temukan di sana.

**Format Balasan Anda:**
1. Output yang muncul di terminal setelah Anda menjalankan `npm run sapa`.
2. Sebutkan satu *library* yang Anda temukan di `dependencies` atau `devDependencies`.
3. Kesimpulan singkat Anda: Apa perbedaan fungsi antara `dependencies` dan `devDependencies` berdasarkan analogi tadi?

*Tips Mentor: Format JSON sangat ketat soal koma (`,`) dan tanda kutip (`"`). Jika terminal memberikan error "JSON Parse Error", periksa kembali apakah Anda lupa menambahkan koma di baris sebelum `"sapa"`. Ini adalah latihan ketelitian yang sangat baik!*

Silakan dicoba! Saya tunggu hasil eksperimen Anda. 🚀


Memahami "titik awal" (entry point) akan sangat membantu Anda saat nanti aplikasi Anda mulai kompleks dan Anda perlu mencari tahu mengapa layar Anda kosong (*blank screen*).

Mari kita bedah anatomi proyek React Anda.

***

### Materi Hari 10: Entry Point & Struktur Komponen Dasar

**1. WHAT**
*   **`main.jsx`**: Adalah "jembatan" atau titik masuk (entry point). Fungsinya menghubungkan dunia React dengan dunia HTML (DOM) di browser.
*   **`App.jsx`**: Adalah "Komponen Akar" (Root Component). Ini adalah komponen induk pertama yang dirender oleh `main.jsx`. Semua komponen lain nantinya akan menjadi "anak" atau "cucu" dari `App.jsx`.

**2. HOW**
Buka file `src/main.jsx` di VS Code Anda. Anda akan melihat kode seperti ini:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // <-- INI KONEKSINYA!
import './index.css'

// Mengambil elemen <div id="root"> dari index.html, lalu "menyuntikkan" React ke dalamnya
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <--- App.jsx dirender di sini */}
  </React.StrictMode>,
)
```

**3. WHY**
*   **Pemisahan Tanggung Jawab (Separation of Concerns)**: `main.jsx` hanya bertugas "memasang" React ke HTML. Ia tidak peduli dengan desain atau logika UI Anda. Semua logika UI didelegasikan ke `App.jsx`.
*   **`<React.StrictMode>`**: Ini adalah "mode pelatihan" dari React. Ia akan sengaja menjalankan kode Anda dua kali saat *development* untuk memancing *bug* atau *side-effect* yang tersembunyi agar Anda bisa memperbaikinya sebelum aplikasi dirilis.

**4. WHEN**
*   **Kapan digunakan**: Struktur ini adalah standar mutlak untuk semua proyek React modern (Vite, Next.js, Remix). Anda hampir tidak pernah perlu mengubah isi `main.jsx` kecuali Anda menginstal *global state provider* (seperti Redux) di kemudian hari.

**5. ANALOGI**
Bayangkan sebuah **Pameran Seni di Galeri**:
*   **`index.html`** adalah **Dinding Galeri** yang kosong (hanya ada satu bingkai besar bernama `<div id="root">`).
*   **`main.jsx`** adalah **Kurator** yang mengambil lukisan dan menggantungkannya tepat di bingkai dinding tersebut.
*   **`App.jsx`** adalah **Lukisan Utama** (Masterpiece) yang digantung oleh kurator. Lukisan ini bisa saja berisi gambar-gambar kecil di dalamnya (komponen anak).

***

### ️ ATURAN EMAS KOMPONEN REACT
Sebelum kita bereksperimen, ada 1 aturan mutlak yang tidak bisa ditawar di React:
**Nama Komponen HARUS diawali dengan Huruf Kapital (PascalCase).**
*   ✅ Benar: `function App()`, `function JobCard()`
*   ❌ Salah: `function app()`, `function jobCard()`
*   *Mengapa?* Agar React bisa membedakannya dengan tag HTML biasa (seperti `<div>`, `<p>`, `<span>` yang selalu huruf kecil).

***

### ️ TANTANGAN HARI INI (Latihan 12: Membuat Komponen Pertama)

Mari kita buat komponen kustom pertama Anda dan menyisipkannya ke dalam `App.jsx`.

**Tugas Anda:**
1. Buka file `src/App.jsx`.
2. Di **atas** fungsi `App`, buat sebuah fungsi komponen baru bernama `JobCard`.
3. Di dalam `JobCard`, *return* sebuah `<div>` yang berisi:
   - Tag `<h2>` dengan teks "React Developer"
   - Tag `<p>` dengan teks "Company: Meta | Remote: Yes"
   - Berikan sedikit *inline style* agar terlihat rapi, contoh: `style={{ border: '1px solid white', padding: '20px', borderRadius: '8px' }}`
4. Di dalam fungsi `App` (yang sudah ada), hapus kode lama, dan *return* sebuah `<div>` yang memanggil komponen `<JobCard />` di dalamnya.
5. Simpan dan lihat hasilnya di browser.

**Format Balasan Anda:**
1. Kode lengkap `src/App.jsx` yang sudah Anda modifikasi.
2. Ceritakan apakah komponen `<JobCard />` berhasil muncul di dalam `<App />` di browser Anda!

*Tips Mentor: Perhatikan bagaimana kita memanggil `<JobCard />` persis seperti kita memanggil tag HTML `<div />`. Inilah kekuatan React: kita bisa membuat tag HTML kustom kita sendiri!*

Silakan dicoba, Anas! Saya tunggu *masterpiece* pertama Anda. 🎨



### Menuju Langkah Berikutnya: Masalah & Solusi

Sekarang, bayangkan skenario dunia nyata: Anda tidak hanya perlu menampilkan **satu** lowongan kerja untuk "Meta", tetapi **100 lowongan** dari perusahaan yang berbeda-beda. 

Apakah Anda akan membuat 100 komponen `JobCard` yang berbeda (`JobCard1`, `JobCard2`, dst)? Tentu tidak. Di sinilah konsep paling fundamental di React masuk untuk menyelamatkan kita.

Mari kita pelajari **Props**.

***

### Materi Hari 11: Props (Properties)

**1. WHAT**
Props (singkatan dari *Properties*) adalah cara untuk mengirimkan data dari komponen induk (*Parent*) ke komponen anak (*Child*). Ini membuat komponen Anda menjadi **dinamis** dan **bisa digunakan kembali (reusable)**.

**2. HOW**
Di React modern, kita langsung melakukan *destructuring* pada parameter fungsi untuk mengambil props.

```javascript
// 1. Komponen Anak (Menerima data via props)
// Kita langsung destructure title dan company dari objek props
function JobCard({ title, company }) {
  return (
    <div style={{ border: "1px solid white", padding: "20px" }}>
      <h2>{title}</h2> {/* Menggunakan data yang diterima */}
      <p>Company: {company}</p>
    </div>
  );
}

// 2. Komponen Induk (Mengirim data via attributes)
function App() {
  return (
    <div>
      {/* Mengirim data seperti kita mengisi atribut HTML */}
      <JobCard title="React Developer" company="Meta" />
      <JobCard title="Backend Engineer" company="GoTo" />
    </div>
  );
}
```

**3. WHY**
*   **Reusability (Dapat Digunakan Kembali)**: Anda menulis logika UI (tampilan kartu, border, warna) hanya **sekali** di `JobCard`, tetapi bisa digunakan ribuan kali dengan data yang berbeda.
*   **Unidirectional Data Flow**: Data hanya mengalir satu arah (dari atas/induk ke bawah/anak). Ini membuat aplikasi React sangat mudah di-*debug* karena Anda selalu tahu dari mana data berasal.

**4. WHEN**
*   **Kapan digunakan**: SELALU, setiap kali Anda memiliki komponen yang tampilannya mirip tetapi isinya berbeda (Kartu produk, daftar pengguna, tombol dengan label berbeda, dll).
*   **Kapan tidak**: Jika sebuah komponen benar-benar statis dan tidak akan pernah berubah isinya (misalnya `<LogoPerusahaan />`), Anda tidak perlu mengirim props.

**5. ANALOGI**
Bayangkan **Mesin Penjual Otomatis (Vending Machine)**:
*   **Komponen `JobCard`** adalah mesinnya. Bentuk fisiknya (kaca, tombol, slot koin) selalu sama.
*   **Props** adalah **koin dan pilihan tombol** yang Anda masukkan. 
*   Jika Anda memasukkan koin dan menekan "A1" (Props: `title="Kopi"`, `company="Nescafe"`), mesin mengeluarkan Kopi. Jika Anda menekan "B2" (Props: `title="Teh"`, `company="TehBotol"`), mesin yang sama mengeluarkan Teh. Mesinnya sama, tapi hasilnya berbeda tergantung input (props) yang Anda berikan.

***

### 🛠️ TANTANGAN HARI INI (Latihan 13: Membuat Komponen Dinamis)

Mari kita ubah komponen statis Anda menjadi mesin yang dinamis!

**Tugas Anda:**
1. Buka kembali file `src/App.jsx`.
2. Modifikasi fungsi `JobCard` agar menerima **props** `title`, `company`, dan `isRemote`. Gunakan *destructuring* langsung di parameter fungsi (seperti contoh di atas).
3. Di dalam `JobCard`, ubah teks di `<h2>` dan `<p>` agar menggunakan variabel dari props tersebut. Untuk `isRemote`, tampilkan teks "🌍 Remote" jika true, atau "🏢 On-site" jika false (Anda bisa pakai *ternary operator* sederhana: `isRemote ? "🌍 Remote" : "🏢 On-site"`).
4. Di dalam fungsi `App`, hapus `<JobCard />` yang lama, dan panggil `<JobCard />` sebanyak **3 kali** dengan data yang berbeda-beda.
5. Simpan dan lihat hasilnya di browser.

**Format Balasan Anda:**
1. Kode lengkap `src/App.jsx` yang sudah Anda modifikasi.
2. Ceritakan apakah ketiga kartu dengan data berbeda berhasil muncul di browser!

*Tips Mentor: Ini adalah momen "Aha!" kedua Anda di React. Setelah ini, Anda akan sadar bahwa membangun UI di React sebenarnya sangat mirip dengan menyusun balok Lego yang bisa diubah warnanya sesuka hati.*

Silakan dieksekusi, Anas! Saya tunggu kode dinamis pertama Anda. 🚀