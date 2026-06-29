const nama = "John Doe";
const umur = 28;
const isProgrammer = true;
const hobi = null;
let alamat;

console.log(nama);
console.log(umur);
console.log(isProgrammer);

console.log(typeof nama);
console.log(typeof isProgrammer);
console.log(typeof hobi);
console.log(typeof alamat);

// =============
// DATA TYPE LENGKAP
// ==============

// 1. STRING - semua teks
const firstName = "John";
const lastName = 'Doe';  // boleh pakai single quote
const greeting = `Hello, ${firstName} ${lastName} !`; // Template literal ⭐
console.log(greeting);

// 2. MUMBER - semua angka
const integer = 42;
const decimal = 3.14;
const negative = -10;
const resut = 10 / 3;

console.log(resut);

//3. BOLEAN - hanya true atau false
const isLoggedIn = true;
const hasPermission = false;

//4. NULL vs UNDEFINED
const kosong = null;  // sengaja dikosongkan
let belumDiisi;     // belum diberi nilai

console.log(kosong);
console.log(belumDiisi);

// 5. Cara LET - mengubha nilai
let score = 0;
console.log(score);
score = 100;
console.log(score);

// 6. CONST tidak bisa diubah nilainya!
const PI = 3.14159;
// PI = 3;  // ❌ ERROR! Cannot assign to constant variable

const fullName = "Anas Nasrulloh"
const age = 40;
const city = "Ciamis";
const isLearnCoding = true;
const favProgLanguage = "javascript";

console.log(fullName);
console.log(age);
console.log(city);
console.log(isLearnCoding);
console.log(favProgLanguage);



