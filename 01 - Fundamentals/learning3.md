ANALOGI:

Function = MESIN yang mengolah input menjadi output

Contoh nyata:
┌──────────────┐ ┌─────────────────┐ ┌───────────────┐
│ INPUT │ → │ MESIN KOPI │ → │ OUTPUT │
│ Biji Kopi │ │ (Function) │ │ Secangkir │
│ + Air │ │ Grind + Brew │ │ Kopi Panas │
└──────────────┘ └─────────────────┘ └───────────────┘

Dalam JavaScript:
┌──────────────┐ ┌─────────────────┐ ┌───────────────┐
│ INPUT │ → │ FUNCTION │ → │ OUTPUT │
│ angka 1, 2 │ │ penjumlahan │ │ 3 │
└──────────────┘ └─────────────────┘ └───────────────┘

1️⃣ Kenapa Function Sangat Penting?

// ❌ TANPA FUNCTION - Kode berulang, susah maintain
const harga1 = 100000;
const diskon1 = harga1 \* 0.1;
const total1 = harga1 - diskon1;
console.log(`Total: Rp ${total1}`);

const harga2 = 250000;
const diskon2 = harga2 \* 0.1;
const total2 = harga2 - diskon2;
console.log(`Total: Rp ${total2}`);

const harga3 = 500000;
const diskon3 = harga3 \* 0.1;
const total3 = harga3 - diskon3;
console.log(`Total: Rp ${total3}`);
// Bayangkan kalau ada 100 produk! 😱

// ✅ DENGAN FUNCTION - Reusable, mudah maintain
function hitungTotalDiskon(harga) {
const diskon = harga \* 0.1;
const total = harga - diskon;
return total;
}

console.log(`Total: Rp ${hitungTotalDiskon(100000)}`);
console.log(`Total: Rp ${hitungTotalDiskon(250000)}`);
console.log(`Total: Rp ${hitungTotalDiskon(500000)}`);
// Tulis logic 1x, pakai berkali-kali! 🎉

PRINSIP INDUSTRI - DRY (Don't Repeat Yourself):

"Kalau Anda menulis kode yang sama 3x,
sudah waktunya jadikan function!"

Ini prinsip yang dipegang teguh di Google, Meta, Amazon.

2️⃣ Anatomi Function

// ================================
// ANATOMI FUNCTION
// ================================

function namaFunction(parameter1, parameter2) {
// Body function - logika di sini
const hasil = parameter1 + parameter2;
return hasil; // Mengembalikan nilai
}

// Cara memanggil (calling) function:
namaFunction(argument1, argument2);

// CONTOH KONKRIT:
function tambah(a, b) { // a, b = PARAMETER
return a + b;
}

const hasil = tambah(5, 3); // 5, 3 = ARGUMENT
console.log(hasil); // 8

// BEDA PARAMETER vs ARGUMENT:
// Parameter → "variabel" di DEFINISI function
// Argument → "nilai" yang DIKIRIM saat memanggil

// ANALOGI:
// Parameter = kotak kosong berlabel
// Argument = barang yang dimasukkan ke kotak

3️⃣ 3 Cara Membuat Function

// A. Function Declaration (Cara Klasik)
// ================================
// FUNCTION DECLARATION
// ================================

function sapa(nama) {
return `Halo, ${nama}!`;
}

console.log(sapa("Anas")); // "Halo, Anas!"

// ⭐ Ciri khas: Bisa dipanggil SEBELUM dideklarasikan
// (Karena hoisting - konsep advanced, nanti dibahas)

console.log(kali(5, 3)); // 15 ← BISA! Meski function di bawah

function kali(a, b) {
return a \* b;
}

B. Function Expression
// ================================
// FUNCTION EXPRESSION
// ================================

const bagi = function(a, b) {
return a / b;
};

console.log(bagi(10, 2)); // 5

// ⭐ Ciri khas: Function disimpan dalam variabel
// TIDAK bisa dipanggil sebelum dideklarasikan

C. Arrow Function ⭐ (MODERN & PALING SERING DIPAKAI)
// ================================
// ARROW FUNCTION - Wajib Kuasai!
// ================================
// Diperkenalkan di ES6 (2015)
// SANGAT sering di React, Node.js, dll

// FORMAT DASAR:
const namaFunction = (parameter) => {
return hasil;
};

// EVOLUSI - dari verbose ke ringkas:

// 1. Function biasa
function kali1(a, b) {
return a \* b;
}

// 2. Function expression
const kali2 = function(a, b) {
return a \* b;
};

// 3. Arrow function - versi lengkap
const kali3 = (a, b) => {
return a \* b;
};

// 4. Arrow function - versi ringkas (implicit return)
const kali4 = (a, b) => a \* b;

// 5. Arrow function - 1 parameter, kurung boleh dilepas
const kuadrat = x => x \* x;

console.log(kali4(5, 3)); // 15
console.log(kuadrat(4)); // 16

KAPAN PAKAI ARROW FUNCTION?
✅ Function pendek & simpel
✅ Callback function
✅ Method di array (map, filter, reduce)
✅ Di React components

KAPAN PAKAI FUNCTION DECLARATION?
✅ Function utama/besar
✅ Kalau butuh hoisting
✅ Method di class (kita bahas nanti)

⭐ ATURAN PRAKTIS INDUSTRI:
90% waktu → Arrow Function
10% waktu → Function Declaration

4️⃣ Return Statement
// ================================
// RETURN - Sangat Penting!
// ================================

// return = "kirim balik" nilai dari function

function tambah(a, b) {
return a + b; // Kirim hasil keluar function
}

const hasil = tambah(2, 3);
console.log(hasil); // 5

// ❌ Function TANPA return
function tambahSalah(a, b) {
const total = a + b;
// Tidak ada return!
}

const hasilSalah = tambahSalah(2, 3);
console.log(hasilSalah); // undefined ← Kosong!

// ✅ Function dengan return
function tambahBenar(a, b) {
const total = a + b;
return total; // WAJIB return jika ingin pakai hasilnya
}

// ⚠️ PENTING: return juga MENGHENTIKAN function
function cekUmur(umur) {
if (umur < 0) {
return "Umur tidak valid!"; // Function BERHENTI di sini
}

if (umur < 18) {
return "Masih anak-anak";
}

return "Sudah dewasa";
}

console.log(cekUmur(-5)); // "Umur tidak valid!"
console.log(cekUmur(15)); // "Masih anak-anak"
console.log(cekUmur(25)); // "Sudah dewasa"

// PERBEDAAN return vs console.log:
function jumlah(a, b) {
console.log(a + b); // Menampilkan ke console
return a + b; // Mengembalikan nilai untuk diproses
}

const x = jumlah(2, 3);  
// Output di console: 5 (dari console.log)
// Nilai x = 5 (dari return)

// Kalau tanpa return:
function jumlahTanpaReturn(a, b) {
console.log(a + b); // Menampilkan saja
}

const y = jumlahTanpaReturn(2, 3);
// Output di console: 5
// Nilai y = undefined

5️⃣ Default Parameters (ES6)
// ================================
// DEFAULT PARAMETERS
// ================================

// Kasih nilai default kalau argument tidak dikirim

function sapa(nama = "Guest") {
return `Halo, ${nama}!`;
}

console.log(sapa("Anas")); // "Halo, Anas!"
console.log(sapa()); // "Halo, Guest!" ← default dipakai

// CONTOH NYATA - Function pembayaran:
function hitungTotal(harga, pajak = 0.11, diskon = 0) {
const totalPajak = harga \* pajak;
const total = harga + totalPajak - diskon;
return total;
}

console.log(hitungTotal(100000)); // 111000 (default pajak 11%)
console.log(hitungTotal(100000, 0.11, 10000)); // 101000 (dengan diskon)
console.log(hitungTotal(100000, 0)); // 100000 (tanpa pajak)

6️⃣ Scope - Local vs Global
// ================================
// SCOPE - Cakupan Variabel
// ================================

// GLOBAL SCOPE - variabel bisa diakses dimana saja
const globalVar = "Saya global";

function testScope() {
// LOCAL SCOPE - hanya di dalam function ini
const localVar = "Saya local";

console.log(globalVar); // ✅ Bisa akses global
console.log(localVar); // ✅ Bisa akses local
}

testScope();
console.log(globalVar); // ✅ Bisa akses
// console.log(localVar); // ❌ ERROR! Tidak bisa akses local

// ANALOGI:
// Global = ruang tamu → semua orang bisa akses
// Local = kamar tidur → hanya pemilik yang bisa akses

// ⭐ ATURAN INDUSTRI:
// Hindari variabel global sebanyak mungkin!
// Kenapa? Karena bisa diubah dari mana saja = bahaya

    LOOPS

🧠 Kenapa Perlu Loop?
// ❌ TANPA LOOP - Repetitif dan tidak efisien
console.log("Hitungan ke-1");
console.log("Hitungan ke-2");
console.log("Hitungan ke-3");
console.log("Hitungan ke-4");
console.log("Hitungan ke-5");
// Bayangkan kalau harus sampai 1000! 😱

// ✅ DENGAN LOOP - Otomasi & efisien
for (let i = 1; i <= 5; i++) {
console.log(`Hitungan ke-${i}`);
}
// 5 baris → 3 baris, dan bisa sampai 1000 dengan mudah!

1️⃣ For Loop (Paling Sering Dipakai)
// ================================
// FOR LOOP - ANATOMI
// ================================

for (inisialisasi; kondisi; increment) {
// Kode yang diulang
}

// CONTOH:
for (let i = 0; i < 5; i++) {
// ↑ ↑ ↑
// | | └── Increment: i naik 1 setiap iterasi
// | └────── Kondisi: loop selama i < 5
// └────────────── Inisialisasi: mulai dari 0

console.log(`Iterasi ke-${i}`);
}

// Output:
// Iterasi ke-0
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4

// STEP BY STEP CARA KERJA:
// 1. let i = 0 → i = 0
// 2. i < 5? → true → jalankan body
// 3. i++ → i = 1
// 4. i < 5? → true → jalankan body
// 5. i++ → i = 2
// ... dan seterusnya
// Sampai i = 5, kondisi false → LOOP BERHENTI

// ⭐ KENAPA MULAI DARI 0?
// Karena di programming, index array mulai dari 0
// Kebiasaan ini akan sangat berguna nanti

// CONTOH NYATA - Tampilkan tabel perkalian:
const angka = 5;
for (let i = 1; i <= 10; i++) {
console.log(`${angka} x ${i} = ${angka * i}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...sampai 5 x 10 = 50

2️⃣ While Loop
// ================================
// WHILE LOOP
// ================================

// Jalankan SELAMA kondisi true
// Cocok untuk kondisi yang TIDAK TAHU berapa kali iterasi

let counter = 0;
while (counter < 5) {
console.log(`Counter: ${counter}`);
counter++; // ⚠️ WAJIB update! Kalau tidak = infinite loop!
}

// CONTOH NYATA - Game guessing:
let attempt = 0;
let isCorrect = false;

while (!isCorrect && attempt < 3) {
attempt++;
// Simulasi tebakan
if (attempt === 2) {
isCorrect = true;
console.log(`Benar di percobaan ke-${attempt}!`);
} else {
console.log(`Percobaan ke-${attempt}: Salah, coba lagi`);
}
}

// ⚠️ INFINITE LOOP - JANGAN SAMPAI KEJADIAN!
// let i = 0;
// while (i < 5) {
// console.log(i);
// // Lupa i++ → loop tidak pernah berhenti = browser crash!
// }

3️⃣ For...of Loop ⭐ MODERN & SERING DIPAKAI
// ================================
// FOR...OF LOOP
// ================================
// Loop untuk iterable (array, string, dll)
// SANGAT sering dipakai di industri modern

// LOOP ARRAY (bahas array lengkap di Sesi 4)
const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// ❌ Cara lama pakai for biasa - verbose
for (let i = 0; i < buah.length; i++) {
console.log(buah[i]);
}

// ✅ Cara modern pakai for...of - bersih!
for (const item of buah) {
console.log(item);
}
// Output:
// Apel
// Jeruk
// Mangga
// Pisang

// LOOP STRING
const nama = "Anas";
for (const huruf of nama) {
console.log(huruf);
}
// Output: A, n, a, s

4️⃣ Break & Continue
// ================================
// BREAK - Hentikan loop
// ================================

for (let i = 1; i <= 10; i++) {
if (i === 5) {
break; // Loop BERHENTI ketika i = 5
}
console.log(i);
}
// Output: 1, 2, 3, 4

// ================================
// CONTINUE - Skip iterasi
// ================================

for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
continue; // Skip angka genap, lanjut ke iterasi berikutnya
}
console.log(i);
}
// Output: 1, 3, 5, 7, 9 (hanya ganjil)

// CONTOH NYATA - Cari user pertama yang admin:
const users = ["user1", "user2", "admin_budi", "user3", "admin_ani"];

for (const user of users) {
if (user.startsWith("admin")) {
console.log(`Admin ditemukan: ${user}`);
break; // Cukup 1 admin pertama, stop loop
}
}
// Output: "Admin ditemukan: admin_budi"

RINGKASAN SESI 3
YANG SUDAH DIPELAJARI:

FUNCTIONS:
✅ Function Declaration → function nama() {}
✅ Function Expression → const nama = function() {}
✅ Arrow Function ⭐ → const nama = () => {}
✅ Parameters & Arguments → beda peran, sering tertukar
✅ Return statement → wajib untuk balikan nilai
✅ Default parameters → function(a = 10)
✅ Scope → local vs global

LOOPS:
✅ for loop → paling sering dipakai
✅ while loop → untuk kondisi tak terbatas
✅ for...of loop ⭐ → modern, untuk iterable
✅ break → hentikan loop
✅ continue → skip iterasi

MINDSET:
⭐ DRY - Don't Repeat Yourself
⭐ Function harus punya SATU tanggung jawab
⭐ Nama function harus deskriptif (kata kerja)
⭐ Hindari infinite loop!

// SOAL 1 - Function BMI Calculator
// Buat function hitungBMI(berat, tinggi)
// - berat dalam kg
// - tinggi dalam meter
// - Rumus: berat / (tinggi \* tinggi)
// Return kategori:
// BMI < 18.5 → "Kurus"
// BMI 18.5 - 24.9 → "Normal"
// BMI 25 - 29.9 → "Gemuk"
// BMI >= 30 → "Obesitas"
// Test dengan: hitungBMI(70, 1.75)

// SOAL 2 - Function Diskon
// Buat arrow function hitungDiskon(harga, persenDiskon)
// - Return harga setelah diskon
// - Gunakan default parameter: persenDiskon = 10
// Test:
// hitungDiskon(100000) → 90000
// hitungDiskon(200000, 20) → 160000

// SOAL 3 - Loop Bintang (Star Pattern)
// Buat pattern seperti ini menggunakan for loop:
// \*
// **
// \***
// \***\*
// \*\*\***
// HINT: Gunakan nested loop atau string repeat

// SOAL 4 - Function + Loop
// Buat function tampilkanTabelPerkalian(angka)
// yang menampilkan tabel perkalian dari 1 sampai 10
// Contoh output tampilkanTabelPerkalian(7):
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

// SOAL 5 - Sum of Numbers
// Buat function jumlahAngka(sampai)
// yang menghitung total dari 1 sampai n
// Contoh: jumlahAngka(5) → 1+2+3+4+5 = 15
// Test: jumlahAngka(100) → berapa hasilnya?

// CHALLENGE 1 - Prime Number Checker
// Buat function isPrime(number) yang return true/false
// Prima = angka yang hanya bisa dibagi 1 dan dirinya sendiri
// (2, 3, 5, 7, 11, 13, 17, ...)
// Test: isPrime(7) → true, isPrime(10) → false

// CHALLENGE 2 - Reverse String
// Buat function reverseString(str)
// yang membalik urutan huruf
// Gunakan for loop!
// Test: reverseString("Anas") → "sanA"
// HINT: bisa dengan for loop mundur atau menyusun dari belakang

// CHALLENGE 3 - Fibonacci Sequence
// Buat function fibonacci(n) yang menampilkan
// n angka pertama dari deret Fibonacci
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// (angka berikutnya = jumlah 2 angka sebelumnya)
// Test: fibonacci(10) → tampilkan 10 angka pertama

NAMING FUNCTION - Gunakan KATA KERJA:
✅ hitungTotal()
✅ getUserData()
✅ isValidEmail()
✅ formatCurrency()

❌ total() → tidak jelas action
❌ user() → tidak jelas mau ngapain
❌ email() → ambigu

BOOLEAN FUNCTION - Awali dengan is/has/can:
✅ isLoggedIn()
✅ hasPermission()
✅ canEdit()
