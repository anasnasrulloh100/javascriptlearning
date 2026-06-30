// LTIHAN 1
// ===============

// Soal 1
const name = "Anas Nasrulloh";
const age = 40;
const city = "Ciamis";
const isPelajar = false;
const favoLanguage = "Javascript";
const avgScore = 95.8;

// Soal 2
const greeting = `Halo! Nama saya ${name}, berumur ${age} tahun dari ${city}. Saya sedang belajar ${favoLanguage} dan nilai rata-rata saya ${avgScore}.`

// Soal 3
console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isPelajar);
console.log(typeof favoLanguage);
console.log(typeof avgScore);

console.log(typeof null);
// Outputnya object, karena ada kesalahan (bug) di versi terdahulu dan kalau dikoreksi sekarang akan menyebabkan kerusakan kode yang sudah di buat di jutaan web

console.log(typeof undefined); // hasilnya undefined

console.log(typeof NaN); // hasilnya number; 
// NaN = "Not a Number"
// Tapi tipe datanya NUMBER?? 🤔

// PENJELASAN:

// NaN adalah hasil operasi matematika yang GAGAL atau TIDAK VALID
// tapi tetap berada dalam "kategori" number.

// Analoginya:
// Bayangkan kamu punya kalkulator.
// Kamu mencoba operasi yang tidak masuk akal:

// "Apel" ÷ 5 = ???

// Hasilnya bukan angka valid → NaN
// Tapi hasilnya TETAP dari operasi MATEMATIKA
// Jadi masih dikategorikan sebagai "number"

// Contoh yang menghasilkan NaN:

// Kapan NaN muncul?
// const a = "apel" / 5;      // String dibagi angka
// const b = Math.sqrt(-1);   // Akar dari negatif
// const c = 0 / 0;           // Nol dibagi nol
// const d = parseInt("xyz"); // Konversi string bukan angka

// console.log(a); // NaN
// console.log(b); // NaN
// console.log(c); // NaN
// console.log(d); // NaN

// console.log(typeof a); // "number" ← semua tetap number!

// ⭐ PENTING DI INDUSTRI:
// NaN tidak sama dengan dirinya sendiri! (satu-satunya di JS!)
// console.log(NaN === NaN); // false ← UNIK banget!

// Cara cek apakah sesuatu itu NaN:
// console.log(isNaN(a));        // true ✅ cara lama
// console.log(Number.isNaN(a)); // true ✅ cara MODERN & lebih akurat

// Kenapa Number.isNaN lebih baik?
// console.log(isNaN("hello"));        // true  ← misleading!
// console.log(Number.isNaN("hello")); // false ← lebih akurat!
// "hello" itu bukan NaN, dia string!

console.log(0.1 + 0.2 === 0.3); // hasilnya false; kenapa bisa begitu 

// PENJELASAN - FLOATING POINT PROBLEM:

// Komputer menyimpan angka dalam format BINARY (0 dan 1)
// Sama seperti kita tidak bisa tulis 1/3 secara tepat
// dalam desimal (0.333333333... tak terhingga)

// Komputer juga tidak bisa menyimpan 0.1 secara TEPAT
// dalam binary! Dia menyimpan angka yang SANGAT DEKAT
// tapi tidak persis 0.1

// ANALOGI:
// Bayangkan kamu punya penggaris yang hanya bisa
// mengukur sampai milimeter.
// Kamu minta ukur 0.1mm + 0.2mm
// Penggaris tidak bisa tepat → hasilnya sedikit meleset

// Ini bukan bug JavaScript saja!
// Ini masalah SEMUA bahasa pemrograman yang pakai
// IEEE 754 floating-point standard:
// Python  → 0.1 + 0.2 = 0.30000000000000004
// Java    → sama!
// C++     → sama!
// Ruby    → sama!



