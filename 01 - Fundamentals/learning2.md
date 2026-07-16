Sesi 1 kita sudah punya KOTAK (variable) untuk simpan data.
Sesi 2 kita belajar cara MENGOLAH dan MEMBUAT KEPUTUSAN
dari data tersebut.

Analoginya:
Sesi 1 = Punya bahan masakan (data)
Sesi 2 = Belajar cara memasak (operators)
dan memilih resep (control flow)

// ================================
// ARITHMETIC OPERATORS
// ================================

const a = 10;
const b = 3;

console.log(a + b); // 13 → Penjumlahan
console.log(a - b); // 7 → Pengurangan
console.log(a \* b); // 30 → Perkalian
console.log(a / b); // 3.333... → Pembagian
console.log(a % b); // 1 → MODULUS (sisa bagi) ⭐
console.log(a \*\* b); // 1000 → Pangkat (10³)

// ⭐ MODULUS - Yang paling sering bikin bingung pemula
// Tapi SANGAT sering dipakai di industri!

console.log(10 % 3); // 1 → 10 dibagi 3, sisa 1
console.log(12 % 3); // 0 → 12 dibagi 3, sisa 0 (habis!)
console.log(7 % 2); // 1 → 7 dibagi 2, sisa 1 (ganjil!)
console.log(8 % 2); // 0 → 8 dibagi 2, sisa 0 (genap!)

// ANALOGI MODULUS:
// Kamu punya 10 permen, dibagi ke 3 orang
// Masing-masing dapat 3 permen
// Sisa = 1 permen → itulah hasil MODULUS!

// KEGUNAAN MODULUS DI INDUSTRI:
// ✅ Cek angka genap atau ganjil
// ✅ Membuat pola warna selang-seling di tabel
// ✅ Rotasi item (carousel, playlist)
// ✅ Validasi (misal: setiap 5 item tampilkan iklan)

const angka = 7;
const isGenap = angka % 2 === 0;
console.log(isGenap); // false → 7 adalah ganjil

// ================================
// ASSIGNMENT OPERATORS
// ================================

let score = 0; // Assignment biasa

// Shorthand - SANGAT sering dipakai!
score += 10; // score = score + 10 → 10
score -= 3; // score = score - 3 → 7
score _= 2; // score = score _ 2 → 14
score /= 7; // score = score / 7 → 2
score **= 3; // score = score ** 3 → 8

console.log(score); // 8

// INCREMENT & DECREMENT
let counter = 0;
counter++; // counter = counter + 1 → 1
counter++; // → 2
counter--; // counter = counter - 1 → 1

console.log(counter); // 1

// CONTOH NYATA - Sistem like di sosial media:
let likes = 100;
likes++; // User klik like → 101
likes++; // User lain klik like → 102
likes--; // User unlike → 101
console.log(`Total likes: ${likes}`); // Total likes: 101

// ================================
// COMPARISON OPERATORS
// ================================
// Selalu menghasilkan TRUE atau FALSE

const umur = 20;

console.log(umur > 17); // true → lebih besar
console.log(umur < 17); // false → lebih kecil
console.log(umur >= 20); // true → lebih besar atau sama
console.log(umur <= 19); // false → lebih kecil atau sama
console.log(umur === 20); // true → sama (nilai DAN tipe)
console.log(umur !== 20); // false → tidak sama

// ============================================
// ⚠️ PALING PENTING: === vs ==
// ============================================

// == (loose equality) → cek NILAI saja, abaikan tipe
// === (strict equality) → cek NILAI dan TIPE DATA

console.log(5 == "5"); // true ← BAHAYA! Berbeda tipe tapi dianggap sama
console.log(5 === "5"); // false ← BENAR! Berbeda tipe = tidak sama

console.log(0 == false); // true ← BAHAYA!
console.log(0 === false); // false ← BENAR!

console.log(null == undefined); // true ← loose
console.log(null === undefined); // false ← strict

// 🔑 ATURAN EMAS INDUSTRI:
// SELALU gunakan === dan !==
// HINDARI == dan !=
// Ini standar di semua perusahaan tech besar!

// ================================
// LOGICAL OPERATORS
// ================================

// && → AND → SEMUA harus true
// || → OR → SALAH SATU true sudah cukup
// ! → NOT → Membalik nilai boolean

// CONTOH NYATA - Sistem login:
const isLoggedIn = true;
const isAdmin = false;
const isPremium = true;

// AND (&&) - Semua kondisi harus terpenuhi
console.log(isLoggedIn && isAdmin); // false (salah satu false)
console.log(isLoggedIn && isPremium); // true (keduanya true)

// OR (||) - Minimal satu kondisi terpenuhi
console.log(isAdmin || isPremium); // true (isPremium true)
console.log(isAdmin || false); // false (keduanya false)

// NOT (!) - Membalik nilai
console.log(!isAdmin); // true (isAdmin false, dibalik jadi true)
console.log(!isLoggedIn); // false (isLoggedIn true, dibalik jadi false)

// ============================================
// TABEL KEBENARAN - Cara mudah mengingat
// ============================================

/\*
AND (&&):
true && true = true ✅
true && false = false ❌
false && true = false ❌
false && false = false ❌
"Semuanya harus true"

OR (||):
true || true = true ✅
true || false = true ✅
false || true = true ✅
false || false = false ❌
"Minimal satu true"
\*/

// CONTOH NYATA - Syarat beli tiket bioskop 21:
const punya_uang = true;
const sudah_dewasa = true;
const film_tersedia = false;

const bisaBeli = punya_uang && sudah_dewasa && film_tersedia;
console.log(bisaBeli); // false → film tidak tersedia!

// CONTOH NYATA - Diskon pelanggan:
const isMember = false;
const isPremiumMember = true;

const dapatDiskon = isMember || isPremiumMember;
console.log(dapatDiskon); // true → dapat diskon karena premium!

// ================================
// IF / ELSE IF / ELSE
// ================================

// ANALOGI:
// Seperti pengambilan keputusan sehari-hari:
// "Kalau hujan → bawa payung"
// "Kalau mendung → bawa jaket"  
// "Selain itu → santai saja"

const nilai = 78;

if (nilai >= 90) {
console.log("Grade A - Excellent! 🏆");
} else if (nilai >= 80) {
console.log("Grade B - Good! 👍");
} else if (nilai >= 70) {
console.log("Grade C - Average 📚");
} else if (nilai >= 60) {
console.log("Grade D - Need Improvement ⚠️");
} else {
console.log("Grade F - Failed ❌");
}
// Output: Grade C - Average 📚

// CONTOH NYATA - Cek status login:
const isLoggedIn2 = true;
const username = "Anas";

if (isLoggedIn2) {
console.log(`Selamat datang, ${username}!`);
} else {
console.log("Silakan login terlebih dahulu.");
}

// CONTOH NYATA - Cek umur untuk akses konten:
const userAge = 16;
const hasParentalConsent = true;

if (userAge >= 18) {
console.log("Akses diberikan ✅");
} else if (userAge >= 13 && hasParentalConsent) {
console.log("Akses diberikan dengan persetujuan orang tua ✅");
} else {
console.log("Akses ditolak ❌");
}

//
// ================================
// TERNARY OPERATOR
// ================================

// Versi singkat dari if/else
// FORMAT: kondisi ? "jika true" : "jika false"

// ANALOGI:
// "Hujan? Bawa payung : Tidak perlu"

// if/else biasa → 4 baris:
const umur2 = 20;
let status;
if (umur2 >= 18) {
status = "Dewasa";
} else {
status = "Anak-anak";
}

// Ternary → 1 baris, hasil sama! ⚡
const status2 = umur2 >= 18 ? "Dewasa" : "Anak-anak";

console.log(status); // "Dewasa"
console.log(status2); // "Dewasa"

// CONTOH NYATA - Sangat sering di industri!

// 1. Tampilkan harga dengan/tanpa diskon
const harga = 100000;
const isMember2 = true;
const hargaFinal = isMember2 ? harga \* 0.9 : harga;
console.log(`Harga: Rp ${hargaFinal}`); // Harga: Rp 90000

// 2. Tampilkan teks berdasarkan kondisi
const stok = 0;
const statusStok = stok > 0 ? "Tersedia" : "Habis";
console.log(statusStok); // "Habis"

// 3. Greeting berdasarkan waktu
const jam = 14;
const greeting2 = jam < 12 ? "Selamat Pagi"
: jam < 17 ? "Selamat Siang"
: "Selamat Malam";
console.log(greeting2); // "Selamat Siang"

// ⚠️ TIPS:
// Ternary bagus untuk kondisi SIMPEL
// Kalau kondisi kompleks → tetap pakai if/else
// Jangan paksa ternary kalau malah susah dibaca!

// ================================
// SWITCH STATEMENT
// ================================

// Gunakan switch ketika:
// - Membandingkan SATU variable dengan BANYAK nilai
// - Lebih rapi dari banyak if/else if

const hari = "Senin";

switch (hari) {
case "Senin":
case "Selasa":
case "Rabu":
case "Kamis":
case "Jumat":
console.log("Hari kerja 💼");
break; // ⚠️ WAJIB! Tanpa break, lanjut ke case berikutnya!

case "Sabtu":
console.log("Weekend! Belajar coding 💻");
break;

case "Minggu":
console.log("Istirahat total 😴");
break;

default: // Seperti "else" - jika tidak ada yang cocok
console.log("Hari tidak valid!");
}
// Output: Hari kerja 💼

// CONTOH NYATA - Role user di aplikasi:
const userRole = "admin";

switch (userRole) {
case "admin":
console.log("Akses penuh ke semua fitur");
break;
case "editor":
console.log("Bisa edit dan publish konten");
break;
case "viewer":
console.log("Hanya bisa melihat konten");
break;
default:
console.log("Role tidak dikenali, akses ditolak");
}

RINGKASN SESI 2

YANG SUDAH DIPELAJARI:
✅ Arithmetic Operators → +, -, _, /, %, \*\*
✅ Assignment Operators → +=, -=, _=, ++, --
✅ Comparison Operators → ===, !==, >, <, >=, <=
✅ Logical Operators → &&, ||, !
✅ if / else if / else → pengambilan keputusan
✅ Ternary Operator → kondisi ? true : false
✅ Switch Statement → multiple case

ATURAN EMAS YANG HARUS DIINGAT:
⭐ Selalu === bukan ==
⭐ Ternary untuk kondisi simpel
⭐ Switch untuk banyak pilihan dari 1 variabel
⭐ % (modulus) untuk cek genap/ganjil

// Buat file: latihan2.js

// SOAL 1 - Kalkulator Sederhana
// Buat variabel: angka1 = 150000, angka2 = 75000
// Tampilkan hasil: tambah, kurang, kali, bagi, dan sisa bagi
// Format output: "150000 + 75000 = 225000"

// SOAL 2 - Cek Kelayakan Kredit
// Buat sistem cek kelayakan kredit dengan kondisi:
// - Gaji minimal Rp 5.000.000
// - Usia minimal 21 tahun
// - Maksimal usia 55 tahun
// - Tidak punya hutang (isDebt = false)
// Gunakan variabel:
// const gaji = 6000000;
// const usia = 28;
// const isDebt = false;
// Tampilkan: "Kredit Disetujui ✅" atau "Kredit Ditolak ❌"

// SOAL 3 - Konverter Nilai ke Grade
// Input: const nilaiUjian = 85;
// Output menggunakan TERNARY operator:
// 90-100 → "A"
// 80-89 → "B"  
// 70-79 → "C"
// 60-69 → "D"
// < 60 → "F"
// Tampilkan: "Nilai: 85 | Grade: B | Status: LULUS"

// SOAL 4 - Kalkulator Ongkos Kirim
// Buat sistem ongkos kirim berdasarkan kota tujuan:
// Switch case untuk: "Jakarta", "Bandung", "Surabaya",
// "Medan", "Makassar"
// Tentukan sendiri harga ongkirnya
// Tampilkan: "Ongkos kirim ke [kota]: Rp [harga]"

// CHALLENGE - FizzBuzz (Pertanyaan Interview Klasik!)
//
// Cetak angka 1 sampai 20, dengan aturan:
// - Jika angka habis dibagi 3 → tampilkan "Fizz"
// - Jika angka habis dibagi 5 → tampilkan "Buzz"  
// - Jika habis dibagi 3 DAN 5 → tampilkan "FizzBuzz"
// - Selain itu → tampilkan angkanya
//
// HINT: Gunakan modulus (%) !
// Expected output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
// 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
//
// ⭐ FizzBuzz adalah soal interview yang SANGAT terkenal!
// Hampir semua perusahaan tech pernah pakai soal ini!
// Kuasai ini = fondasi logic programming yang kuat!

BONUS INDSTRI (FORMAT MATA UANG)
const formatRupiah = new Intl.NumberFormat("id-ID", {
style: "currency",
currency: "IDR",
maximumFractionDigits: 0,
});

console.log(formatRupiah.format(15000));

KODE LAMA (sebelum refactor):
if (gaji >= 5000000 && usia >= 21 && usia <= 55 && !isDebt)

Masalah:
→ Kondisi menumpuk dalam satu baris
→ Susah dibaca
→ Susah di-debug kalau ada yang salah
→ Susah diubah kalau requirement berubah

──────────────────────────────────────────────

KODE BARU (setelah refactor):
const isGajiEligible = gaji >= 5000000;
const isUsiaEligible = usia >= 21 && usia <= 55;
const isDebtFree = !isDebt;
const isCreditApproved = isGajiEligible && isUsiaEligible && isDebtFree;

Keunggulan:
→ Setiap kondisi punya nama yang jelas
→ Mudah dibaca seperti kalimat bahasa manusia
→ Mudah di-debug, cek satu per satu
→ Mudah diubah kalau requirement berubah

Di Google, Microsoft, dan perusahaan top lainnya,
ini adalah standar yang DIWAJIBKAN.

Prinsipnya:
"Code is read more often than it is written"
Kode lebih sering DIBACA daripada DITULIS

Jadi tulis kode untuk MANUSIA, bukan untuk komputer!
