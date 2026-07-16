✅ GROWTH MINDSET
"Saya belum bisa" bukan "Saya tidak bisa"

✅ BUILD IN PUBLIC  
 Share progress di LinkedIn & GitHub dari hari pertama

✅ CONSISTENCY > INTENSITY
1 jam/hari konsisten >> 8 jam sekali seminggu

✅ LEARN BY DOING
70% coding, 30% membaca teori

✅ EMBRACE ERRORS
Error = guru terbaik Anda

✅ ENGLISH FIRST
Mulai biasakan dokumentasi bahasa Inggris
(untuk kerja remote global, ini WAJIB!)

BULAN 1 (Minggu 1-4): JavaScript Fundamentals
├── Minggu 1 : Variables, Data Types, Operators
├── Minggu 2 : Functions, Control Flow, Loops
├── Minggu 3 : Arrays, Objects, ES6+ Modern JS
└── Minggu 4 : DOM Manipulation + Mini Project #1

BULAN 2 (Minggu 5-8): JavaScript Intermediate
├── Minggu 5 : Higher Order Functions (map/filter/reduce)
├── Minggu 6 : Async JS (Promises, Async/Await, Fetch API)
├── Minggu 7 : Git/GitHub workflow + Mini Project #2
└── Minggu 8 : REVIEW + Perkuat fondasi yang lemah

BULAN 3 (Minggu 9-13): React.js + Tailwind CSS
├── Minggu 9 : React Fundamentals (Component, JSX, Props)
├── Minggu 10 : React Hooks (useState, useEffect)
├── Minggu 11 : React Router + Fetch data dari API
├── Minggu 12 : Tailwind CSS + shadcn/ui
└── Minggu 13 : Portfolio Project #3 (Full React App)

BULAN 4 (Minggu 14-16): Polish + Job Ready
├── Minggu 14 : Portfolio Project #4 (Impressive App)
├── Minggu 15 : GitHub profile, Resume, LinkedIn optimize
└── Minggu 16 : Apply jobs + Interview preparation

STRUKTUR 2 JAM/HARI:
┌──────────────────────────────────────────┐
│ 30 menit → Baca/tonton konsep baru │
│ 60 menit → Coding & praktik langsung │
│ 20 menit → Review & catat apa dipelajari│
│ 10 menit → Push ke GitHub (SETIAP HARI!)│
└──────────────────────────────────────────┘

TIPS: GitHub green streak = bukti konsistensi
Recruiter SELALU cek ini! 🟩🟩🟩🟩🟩

Struktur folder yang rapi = kebiasaan profesional!

📁 javascript-learning/
├── 📁 01-fundamentals/
│ ├── 📁 week-1/
│ │ ├── variables.js
│ │ ├── datatypes.js
│ │ └── index.html
├── 📁 02-intermediate/
├── 📁 03-projects/
└── README.md

Buka VS Code → Extensions (Ctrl+Shift+X) → Install ini:

WAJIB:
□ Prettier - Code formatter (by Prettier)
□ ESLint (by Microsoft)
□ Live Server (by Ritwick Dey)

SANGAT BERGUNA:
□ Auto Rename Tag
□ Path Intellisense
□ GitHub Copilot (gratis untuk pelajar/bisa skip dulu)

// Buka Settings → klik icon {} pojok kanan atas
// Paste setting ini:

{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.tabSize": 2,
"editor.wordWrap": "on",
"editor.fontSize": 14,
"editor.minimap.enabled": false
}

ANALOGI:

Variable = KOTAK penyimpanan berlabel
Anda bisa simpan apa saja di dalamnya
dan panggil kapanpun dibutuhkan

Contoh nyata:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ nama │ │ umur │ │ menikah │
│ "Budi" │ │ 25 │ │ false │
└─────────────┘ └─────────────┘ └─────────────┘
(String) (Number) (Boolean)

// Ada 3 cara - tapi industri modern pakai var, let dan const
// var → HINDARI, cara lama, ada masalah teknis
// let → untuk nilai yang BISA berubah
// const → untuk nilai yang TIDAK BOLEH berubah

// ✅ GUNAKAN INI (Modern & Industry Standard)
let → nilai bisa diubah
const → nilai tetap (paling sering dipakai!)

// 🔑 ATURAN EMAS INDUSTRI:
// "Selalu pakai const, ganti ke let HANYA jika perlu diubah"

// ================================
// SESI 1: VARIABLES & DATA TYPES
// ================================

// ---- CARA DEKLARASI ----
const nama = "John Doe"; // String - teks
const umur = 28; // Number - angka
const isProgrammer = true; // Boolean - true/false
const hobi = null; // Null - kosong disengaja
let alamat; // Undefined - belum diisi

// Tampilkan ke console
console.log(nama); // Output: John Doe
console.log(umur); // Output: 28
console.log(isProgrammer); // Output: true

// ---- CEK TIPE DATA ----
console.log(typeof nama); // Output: string
console.log(typeof umur); // Output: number
console.log(typeof isProgrammer); // Output: boolean
console.log(typeof hobi); // Output: object (quirk JS!)
console.log(typeof alamat); // Output: undefined

// ================================
// DATA TYPES LENGKAP
// ================================

// 1. STRING - semua teks
const firstName = "John";
const lastName = 'Doe'; // single quote juga boleh
const greeting = `Hello, ${firstName} ${lastName}!`; // Template literal ⭐

console.log(greeting); // Output: Hello, John Doe!

// 2. NUMBER - semua angka
const integer = 42;
const decimal = 3.14;
const negative = -10;
const result = 10 / 3;

console.log(result); // Output: 3.3333...

// 3. BOOLEAN - hanya true atau false
const isLoggedIn = true;
const hasPermission = false;

// 4. NULL vs UNDEFINED
const kosong = null; // Sengaja dikosongkan
let belumDiisi; // Belum diberi nilai

console.log(kosong); // Output: null
console.log(belumDiisi); // Output: undefined

// 5. Cara LET - nilai bisa diubah
let score = 0;
console.log(score); // Output: 0
score = 100; // Update nilai
console.log(score); // Output: 100

// 6. CONST tidak bisa diubah nilainya!
const PI = 3.14159;
// PI = 3; // ❌ ERROR! Cannot assign to constant variable

// ================================
// NAMING CONVENTION - PENTING!
// ================================

// ✅ BENAR - camelCase (standar JavaScript)
const firstName2 = "John";
const totalScore = 100;
const isUserLoggedIn = true;

// ❌ SALAH - jangan pakai ini
// const first_name = "John"; // snake_case (bukan style JS)
// const FirstName = "John"; // PascalCase (untuk class saja)
// const firstname = "John"; // susah dibaca

// ================================
// MINI CHALLENGE - COBA SENDIRI!
// ================================

// Buat variable untuk profil diri Anda:
// - Nama lengkap
// - Usia
// - Kota tinggal
// - Apakah sedang belajar coding? (boolean)
// - Bahasa pemrograman favorit
// Lalu tampilkan semuanya dengan console.log

CARA 1 - Browser Console (Paling Cepat):

1. Buka Chrome
2. Klik kanan → Inspect → Console
3. Paste kode → Enter
4. Lihat hasilnya langsung!

CARA 2 - Linked ke HTML (Cara Proper):
// Buat file HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Learning</title>
</head>
<body>
  <h1>Buka Console untuk lihat output</h1>
  <p>Tekan F12 → pilih tab Console</p>

  <!-- Link ke file JS - selalu di bawah body! -->
  <script src="variables.js"></script>
</body>
</html>

// =====

Lalu:

1. Klik kanan index.html → Open with Live Server
2. Tekan F12 di browser → Tab Console
3. Lihat output JavaScript Anda! 🎉

RINGKASAN SESI 1

YANG SUDAH DIPELAJARI:
✅ var vs let vs const → Pakai const dulu, let kalau perlu
✅ 5 tipe data dasar → string, number, boolean, null, undefined
✅ Template literal → `Hello ${nama}`
✅ typeof operator → cek tipe data
✅ camelCase naming → standar JavaScript
✅ Cara run JS di browser

YANG HARUS DIINGAT:
⭐ const > let > var (urutan preferensi)
⭐ Gunakan camelCase selalu
⭐ Template literal lebih modern dari concatenation (+)

Latihan 1

// Buat file: latihan1.js
// Kerjakan semua soal ini:

// SOAL 1:
// Buat variabel untuk menyimpan data biodata diri sendiri
// Gunakan tipe data yang TEPAT untuk setiap info
// (nama, umur, kota, isPelajar, bahasa favorit, nilai_rata_rata)

// SOAL 2:
// Buat kalimat perkenalan menggunakan template literal
// Output yang diharapkan:
// "Halo! Nama saya [nama], berumur [umur] tahun dari [kota].
// Saya sedang belajar [bahasa] dan nilai rata-rata saya [nilai]"

// SOAL 3:
// Cek tipe data setiap variable dengan typeof
// dan tampilkan ke console

// Kenapa output ini berbeda? Coba jalankan dan jelaskan!

console.log(typeof null); // Apa outputnya? Kenapa aneh?
console.log(typeof undefined); // Apa outputnya?
console.log(typeof NaN); // NaN itu apa? tipe datanya apa?
console.log(0.1 + 0.2 === 0.3); // true atau false? Kenapa?

// Semua ini adalah STRING:
const kelas = "2A";
const kodeBarang = "AG147CF";
const noHP = "08123456789";
const kodePos = "46200";
const platNomor = "D 1234 ABC";

console.log(typeof kelas); // "string"
console.log(typeof kodeBarang); // "string"
console.log(typeof noHP); // "string"

ATURAN SIMPEL:

Tanya ke diri sendiri:
"Apakah angka ini akan dihitung secara matematika?"

         YA → NUMBER
        TIDAK → STRING

Contoh:
┌─────────────────────┬──────────┬─────────────────────────┐
│ Data │ Tipe │ Alasan │
├─────────────────────┼──────────┼─────────────────────────┤
│ umur = 40 │ NUMBER │ Bisa dihitung (40+1=41) │
│ harga = 50000 │ NUMBER │ Bisa dihitung │
│ nilai = 95.8 │ NUMBER │ Bisa dihitung │
├─────────────────────┼──────────┼─────────────────────────┤
│ kelas = "2A" │ STRING │ Tidak dihitung │
│ kodeBarang ="AG147" │ STRING │ Tidak dihitung │
│ noHP = "08123..." │ STRING │ Tidak dihitung │
│ kodePos = "46200" │ STRING │ Tidak dihitung │
│ platNomor = "D 123" │ STRING │ Tidak dihitung │
└─────────────────────┴──────────┴─────────────────────────┘

JEBAKAN YANG SERING BIKIN BINGUNG

// ANGKA TAPI TETAP STRING!
// Karena tidak untuk dihitung:

const noHP = "08123456789"; // ✅ String
const kodePos = "46200"; // ✅ String  
const tahunLahir = "1984"; // ✅ String (label/identitas)

// Bedakan dengan:
const tahunSekarang = 2024; // ✅ Number (untuk dihitung)
const usia = tahunSekarang - 1984; // = 40 ← operasi matematika

// -------------------------------------------

// ❌ KESALAHAN UMUM PEMULA:
const noHP_salah = 08123456789; // ERROR atau hasil aneh!
// Angka tidak boleh mulai dengan 0 dalam NUMBER
// karena 0 di depan = format octal (sistem bilangan lain)

// ✅ YANG BENAR:
const noHP_benar = "08123456789"; // Pakai string!

Bayangkan kamu kerja di toko online seperti Tokopedia:

DATABASE PRODUK:
┌──────────────────────────────────────────────────────┐
│ kodeBarang : "AG147CF" ← STRING (label/identitas) │
│ namaProduk : "Sepatu" ← STRING (teks) │
│ harga : 250000 ← NUMBER (untuk dihitung) │
│ stok : 50 ← NUMBER (untuk dihitung) │
│ diskon : 10 ← NUMBER (untuk dihitung) │
│ kodeGudang : "GDG-02" ← STRING (label/identitas) │
└──────────────────────────────────────────────────────┘

Kapan NUMBER diperlukan?
→ totalHarga = harga - (harga \* diskon / 100)
→ sisaStok = stok - jumlahBeli

Kapan STRING diperlukan?
→ Ditampilkan sebagai label/identitas
→ Tidak pernah dikalikan atau dijumlahkan secara matematis

Bayangkan kamu kerja di toko online seperti Tokopedia:

DATABASE PRODUK:
┌──────────────────────────────────────────────────────┐
│ kodeBarang : "AG147CF" ← STRING (label/identitas) │
│ namaProduk : "Sepatu" ← STRING (teks) │
│ harga : 250000 ← NUMBER (untuk dihitung) │
│ stok : 50 ← NUMBER (untuk dihitung) │
│ diskon : 10 ← NUMBER (untuk dihitung) │
│ kodeGudang : "GDG-02" ← STRING (label/identitas) │
└──────────────────────────────────────────────────────┘

Kapan NUMBER diperlukan?
→ totalHarga = harga - (harga \* diskon / 100)
→ sisaStok = stok - jumlahBeli

Kapan STRING diperlukan?
→ Ditampilkan sebagai label/identitas
→ Tidak pernah dikalikan atau dijumlahkan secara matematis

3 PERTANYAAN untuk tentukan tipe data:

1. Ada campuran huruf & angka? → Pasti STRING
2. Angka murni tapi untuk identitas?→ Tetap STRING
3. Angka yang akan dihitung? → NUMBER

PRAKTIS:
Kalau ragu → pakai STRING lebih aman
daripada NUMBER yang salah!

// BUG karena salah tipe data:
const harga = "50000"; // ❌ Harusnya Number tapi pakai String
const diskon = 10;

const total = harga - diskon;
console.log(total); // 49990 ← kebetulan benar untuk minus

const total2 = harga + diskon;
console.log(total2); // "5000010" ← SALAH! String + Number = gabung teks!
// Harusnya 50010, tapi jadi "5000010" karena string!
