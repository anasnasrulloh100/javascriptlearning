// Selama ini Anda sudah pakai object tapi belum
// dipelajari secara mendalam:

product.nama          // ← akses property
{ ...product, qty }   // ← spread object
cart.find(...)        // ← object dalam array

// Di Sesi 5 kita akan pelajari:

// 1. DESTRUCTURING ⭐ (sangat sering di React!)
const { nama, harga, rating } = product;
// Lebih ringkas dari:
const nama   = product.nama;
const harga  = product.harga;
const rating = product.rating;

// 2. OPTIONAL CHAINING
user?.address?.city  // Aman meski user atau address undefined

// 3. NULLISH COALESCING
const nama = user.nama ?? "Guest"; // Fallback jika null/undefined

// 4. OBJECT METHODS
Object.keys(product)    // ["id", "nama", "harga", ...]
Object.values(product)  // [1, "Laptop Pro", 15000000, ...]
Object.entries(product) // [["id", 1], ["nama", "Laptop Pro"], ...]

Kalau Array = RAK dengan kotak bernomor (index)
Maka Object = RAK dengan kotak berlabel (key)

Array  → data["0"], data["1"], data["2"]
Object → data["nama"], data["harga"], data["stok"]

Di dunia nyata, hampir semua DATA adalah Object:
- User profile    → { nama, email, umur, alamat }
- Produk          → { id, nama, harga, stok }
- Response API    → { status, data, message }
- Config app      → { apiUrl, timeout, debug }

Kuasai Object = kuasai cara data mengalir di aplikasi!

// ================================
// CARA MEMBUAT OBJECT
// ================================

// Object literal (paling umum)
const user = {
  id: 1,
  nama: "Anas Nasrulloh",
  umur: 40,
  kota: "Ciamis",
  isPremium: true,
};

// Key  = nama properti (string)
// Value = nilai (semua tipe data)


// ================================
// MENGAKSES PROPERTY
// ================================

// Cara 1: Dot notation (paling sering dipakai)
console.log(user.nama);      // "Anas Nasrulloh"
console.log(user.umur);      // 40
console.log(user.isPremium); // true

// Cara 2: Bracket notation (untuk key dinamis)
console.log(user["nama"]);   // "Anas Nasrulloh"
console.log(user["kota"]);   // "Ciamis"

// Kapan pakai bracket notation?
const key = "nama"; // Key disimpan di variabel
console.log(user[key]); // "Anas Nasrulloh" ✅
// console.log(user.key); // undefined ❌ JS cari property "key"


// ================================
// NESTED OBJECT (Object di dalam Object)
// ================================

const userLengkap = {
  id: 1,
  nama: "Anas Nasrulloh",
  alamat: {              // ← Nested object
    jalan: "Jl. Merdeka No.10",
    kota: "Ciamis",
    provinsi: "Jawa Barat",
    kodePos: "46200",
  },
  kontak: {              // ← Nested object
    email: "anas@email.com",
    telepon: "08123456789",
  },
};

// Akses nested object:
console.log(userLengkap.alamat.kota);       // "Ciamis"
console.log(userLengkap.kontak.email);      // "anas@email.com"
console.log(userLengkap.alamat.kodePos);    // "46200"


// ================================
// OBJECT DENGAN METHOD
// ================================
// Method = function yang ada di dalam object

const calculator = {
  brand: "Casio",
  tambah: (a, b) => a + b,
  kurang: (a, b) => a - b,
  kali: (a, b) => a * b,
  bagi: (a, b) => b !== 0 ? a / b : "Tidak bisa bagi dengan 0",
};

console.log(calculator.brand);        // "Casio"
console.log(calculator.tambah(5, 3)); // 8
console.log(calculator.bagi(10, 0));  // "Tidak bisa bagi dengan 0"

// ================================
// MENAMBAH, MENGUBAH, MENGHAPUS
// ================================

const produk = {
  id: 1,
  nama: "Laptop Pro",
  harga: 15000000,
};

// MENAMBAH property baru
produk.stok = 10;
produk.kategori = "elektronik";
console.log(produk);
// { id:1, nama:"Laptop Pro", harga:15000000, stok:10, kategori:"elektronik" }

// MENGUBAH property
produk.harga = 14000000; // Update harga
produk.stok = 8;
console.log(produk.harga); // 14000000

// MENGHAPUS property
delete produk.kategori;
console.log(produk.kategori); // undefined


// ================================
// CEK APAKAH PROPERTY ADA
// ================================

console.log("nama" in produk);      // true
console.log("kategori" in produk);  // false (sudah dihapus)
console.log("warna" in produk);     // false


// ================================
// SPREAD OBJECT ⭐
// ================================

const produkAsli = { id: 1, nama: "Laptop", harga: 15000000 };

// Copy object (bukan reference!)
const produkKopi = { ...produkAsli };
produkKopi.harga = 12000000;

console.log(produkAsli.harga); // 15000000 ← tidak berubah!
console.log(produkKopi.harga); // 12000000

// Merge 2 object:
const infoTambahan = { stok: 10, rating: 4.8 };
const produkLengkap = { ...produkAsli, ...infoTambahan };
console.log(produkLengkap);
// { id:1, nama:"Laptop", harga:15000000, stok:10, rating:4.8 }

// Update property saat spread:
const produkDiskon = { ...produkAsli, harga: 12000000 };
// { id:1, nama:"Laptop", harga:12000000 } ← harga ter-override!
// .

// ==================
// DESTRUCTURING 
// ==================
Destructuring = "Bongkar" object/array
                ambil property yang dibutuhkan
                simpan ke variabel

Ini SANGAT SERING dipakai di React!
Hampir setiap component React pakai destructuring!

// ================================
// OBJECT DESTRUCTURING
// ================================

const user = {
  id: 1,
  nama: "Anas Nasrulloh",
  umur: 40,
  kota: "Ciamis",
  isPremium: true,
};

// ❌ Cara lama - verbose:
const nama = user.nama;
const umur = user.umur;
const kota = user.kota;

// ✅ Cara modern - destructuring:
const { nama, umur, kota } = user;

console.log(nama); // "Anas Nasrulloh"
console.log(umur); // 40
console.log(kota); // "Ciamis"


// ================================
// RENAME SAAT DESTRUCTURING
// ================================

const { nama: namaLengkap, kota: kotaAsal } = user;

console.log(namaLengkap); // "Anas Nasrulloh"
console.log(kotaAsal);    // "Ciamis"
// console.log(nama);     // ❌ ERROR! nama tidak ada, yang ada namaLengkap


// ================================
// DEFAULT VALUE
// ================================

const { nama: nm, negara = "Indonesia" } = user;
// user tidak punya property "negara"
// Karena ada default value → pakai "Indonesia"

console.log(nm);      // "Anas Nasrulloh"
console.log(negara);  // "Indonesia" ← default value!


// ================================
// NESTED DESTRUCTURING
// ================================

const userLengkap = {
  nama: "Anas",
  alamat: {
    kota: "Ciamis",
    provinsi: "Jawa Barat",
  },
  kontak: {
    email: "anas@email.com",
  },
};

// Destructuring nested:
const { nama: namaUser, alamat: { kota: kotaUser, provinsi }, kontak: { email } } = userLengkap;

console.log(namaUser);  // "Anas"
console.log(kotaUser);  // "Ciamis"
console.log(provinsi);  // "Jawa Barat"
console.log(email);     // "anas@email.com"


// ================================
// DESTRUCTURING DI FUNCTION PARAMETER ⭐
// ================================
// Ini SANGAT SERING di React!

// ❌ Cara lama:
const cetakUser = (user) => {
  console.log(`Nama: ${user.nama}`);
  console.log(`Kota: ${user.kota}`);
  console.log(`Premium: ${user.isPremium}`);
};

// ✅ Cara modern - destructuring di parameter:
const cetakUser2 = ({ nama, kota, isPremium }) => {
  console.log(`Nama: ${nama}`);
  console.log(`Kota: ${kota}`);
  console.log(`Premium: ${isPremium}`);
};

cetakUser2(user); // Panggil dengan object user


// CONTOH NYATA - Seperti React Component:
// Di React nanti akan terlihat seperti ini:
const ProductCard = ({ nama, harga, rating, stok }) => {
  const tersedia = stok > 0 ? "Tersedia" : "Habis";
  return `
    Produk : ${nama}
    Harga  : Rp ${harga.toLocaleString("id-ID")}
    Rating : ⭐ ${rating}
    Status : ${tersedia}
  `;
};

const laptop = { nama: "Laptop Pro", harga: 15000000, rating: 4.8, stok: 5 };
console.log(ProductCard(laptop));


// ================================
// ARRAY DESTRUCTURING
// ================================

const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// ❌ Cara lama:
const pertama = buah[0];
const kedua   = buah[1];

// ✅ Cara modern:
const [pertama, kedua, ketiga] = buah;

console.log(pertama); // "Apel"
console.log(kedua);   // "Jeruk"
console.log(ketiga);  // "Mangga"


// SKIP elemen dengan koma:
const [, , ketigaBuah, keempatBuah] = buah;
console.log(ketigaBuah);  // "Mangga"
console.log(keempatBuah); // "Pisang"


// DEFAULT VALUE:
const [a, b, c, d, e = "Durian"] = buah;
console.log(e); // "Durian" ← default, karena index 4 tidak ada


// REST ELEMENT - ambil sisanya:
const [head, ...tail] = buah;
console.log(head); // "Apel"
console.log(tail); // ["Jeruk", "Mangga", "Pisang"]


// ================================
// SWAP VARIABLE ⭐
// ================================
// Anda sudah pakai ini di Sesi 3 (bubble sort)!

let x = 10;
let y = 20;

// ❌ Cara lama (butuh temp variable):
let temp = x;
x = y;
y = temp;

// ✅ Cara modern - destructuring swap:
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10


// ================================
// DESTRUCTURING DARI FUNCTION RETURN
// ================================

const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return [min, max]; // Return array
};

const nilai = [85, 92, 78, 95, 88];
const [nilaiMin, nilaiMax] = getMinMax(nilai);

console.log(nilaiMin); // 78
console.log(nilaiMax); // 95


//==================
//Modern Object Feature

// ================================
// OPTIONAL CHAINING
// ================================
// Akses property yang mungkin undefined/null
// TANPA menyebabkan error!

const user1 = {
  nama: "Anas",
  alamat: {
    kota: "Ciamis",
  },
};

const user2 = {
  nama: "Budi",
  // Tidak punya alamat!
};

// ❌ Tanpa optional chaining → ERROR jika tidak ada!
// console.log(user2.alamat.kota); // TypeError: Cannot read properties of undefined

// ✅ Dengan optional chaining → aman!
console.log(user1?.alamat?.kota); // "Ciamis"
console.log(user2?.alamat?.kota); // undefined ← tidak error!

// ANALOGI:
// user?.alamat?.kota
// "Kalau user ada, cek alamat. Kalau alamat ada, ambil kota.
//  Kalau salah satu tidak ada, return undefined saja."


// CONTOH NYATA - Data dari API sering tidak lengkap!
const responseAPI = {
  status: "success",
  data: {
    user: {
      nama: "Anas",
      // profile tidak ada!
    },
  },
};

// Tanpa optional chaining → crash!
// console.log(responseAPI.data.user.profile.avatar); // ERROR!

// Dengan optional chaining → aman!
console.log(responseAPI.data?.user?.profile?.avatar); // undefined


// Optional chaining dengan method:
const users = ["Anas", "Budi"];
console.log(users?.find(u => u === "Anas")); // "Anas"
console.log(null?.find(u => u === "Anas"));  // undefined ← tidak error!

// ================================
// NULLISH COALESCING (??)
// ================================
// Berikan nilai default jika null atau undefined
// BERBEDA dengan || (OR)

const user = {
  nama: "Anas",
  umur: 0,          // 0 = falsy tapi valid!
  saldo: 0,         // 0 = falsy tapi valid!
  alamat: null,     // null = tidak ada
  bio: "",          // string kosong = falsy tapi mungkin valid
};

// ❌ Masalah dengan OR (||):
console.log(user.umur   || "Tidak diketahui"); // "Tidak diketahui" ← SALAH! 0 adalah valid!
console.log(user.saldo  || "Tidak ada saldo"); // "Tidak ada saldo" ← SALAH! 0 valid!
console.log(user.bio    || "Tidak ada bio");   // "Tidak ada bio"   ← Mungkin salah!

// ✅ Nullish coalescing (??):
// Hanya anggap null dan undefined sebagai "tidak ada"
console.log(user.umur   ?? "Tidak diketahui"); // 0 ← BENAR! 0 bukan null/undefined
console.log(user.saldo  ?? "Tidak ada saldo"); // 0 ← BENAR!
console.log(user.alamat ?? "Belum isi alamat"); // "Belum isi alamat" ← null diganti!
console.log(user.bio    ?? "Tidak ada bio");    // "" ← string kosong bukan null!


// ================================
// KOMBINASI ?. DAN ?? ⭐
// ================================
// Sangat sering di industri!

const getKotaUser = (user) => {
  return user?.alamat?.kota ?? "Kota tidak diketahui";
};

console.log(getKotaUser({ nama: "Anas", alamat: { kota: "Ciamis" } }));
// "Ciamis"

console.log(getKotaUser({ nama: "Budi" }));
// "Kota tidak diketahui" ← alamat tidak ada → undefined → ?? memberi default

console.log(getKotaUser(null));
// "Kota tidak diketahui" ← user null → ?. stop → undefined → ?? memberi default

// ================================
// OBJECT BUILT-IN METHODS
// ================================

const produk = {
  id: 1,
  nama: "Laptop Pro",
  harga: 15000000,
  stok: 5,
  rating: 4.8,
};

// Object.keys() → Array semua KEY
const keys = Object.keys(produk);
console.log(keys); // ["id", "nama", "harga", "stok", "rating"]

// Object.values() → Array semua VALUE
const values = Object.values(produk);
console.log(values); // [1, "Laptop Pro", 15000000, 5, 4.8]

// Object.entries() → Array of [key, value] pairs
const entries = Object.entries(produk);
console.log(entries);
// [["id", 1], ["nama", "Laptop Pro"], ["harga", 15000000], ...]


// ================================
// CONTOH NYATA - Pakai Object.entries()
// ================================

// Tampilkan semua property dan nilainya:
Object.entries(produk).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// id: 1
// nama: Laptop Pro
// harga: 15000000
// stok: 5
// rating: 4.8


// ================================
// Object.assign() - Merge objects
// ================================

const base = { id: 1, nama: "Laptop" };
const extra = { harga: 15000000, stok: 5 };

const merged = Object.assign({}, base, extra);
console.log(merged);
// { id:1, nama:"Laptop", harga:15000000, stok:5 }

// Di industri modern, spread lebih sering dipakai:
const merged2 = { ...base, ...extra }; // Sama hasilnya!


// ================================
// Object.freeze() - Buat object tidak bisa diubah
// ================================

const CONFIG = Object.freeze({
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  MAX_RETRY: 3,
});

CONFIG.API_URL = "https://hack.com"; // ← Diabaikan! Tidak error, tapi tidak berubah
console.log(CONFIG.API_URL); // "https://api.example.com" ← Tetap!

// Dipakai untuk konstanta konfigurasi yang tidak boleh berubah.

//
// ================================
// PROPERTY SHORTHAND
// ================================

const nama = "Anas";
const umur = 40;
const kota = "Ciamis";

// ❌ Cara lama:
const user1 = {
  nama: nama,
  umur: umur,
  kota: kota,
};

// ✅ Shorthand - kalau nama variable = nama key:
const user2 = { nama, umur, kota };
// Sama persis dengan user1!

console.log(user2); // { nama: "Anas", umur: 40, kota: "Ciamis" }


// ================================
// COMPUTED PROPERTY NAMES
// ================================

const field = "nama";
const value = "Anas";

// Key dinamis dari variable:
const obj = {
  [field]: value, // ← Key = nilai dari variable "field"
};

console.log(obj); // { nama: "Anas" }


// CONTOH NYATA - Update field tertentu:
const updateField = (obj, field, value) => ({
  ...obj,
  [field]: value, // ← Field yang diupdate ditentukan dinamis
});

const produk = { id: 1, nama: "Laptop", harga: 15000000 };

const updated = updateField(produk, "harga", 12000000);
console.log(updated); // { id:1, nama:"Laptop", harga:12000000 }

const updated2 = updateField(produk, "stok", 10);
console.log(updated2); // { id:1, nama:"Laptop", harga:15000000, stok:10 }


// = vs === vs .includes()

// ❌ = → ASSIGNMENT (ubah nilai)
m.genre = "drama"
// Artinya: "Set genre menjadi drama"
// MERUSAK data asli!

// ✅ === → COMPARISON (bandingkan nilai)
m.genre === "drama"
// Artinya: "Apakah genre sama dengan drama?"
// Tapi genre adalah ARRAY, bukan string!
// ["drama", "thriller"] === "drama" → false!

// ✅ .includes() → CEK KEBERADAAN dalam array
m.genre.includes("drama")
// Artinya: "Apakah array genre mengandung 'drama'?"
// ["drama", "thriller"].includes("drama") → true! ✅

// RULE:
// String   → gunakan ===
// Array    → gunakan .includes()
// Object   → gunakan "key" in obj atau obj.key !== undefined





//======================
// L A T I H A N
//=======================

// Buat file: latihan-sesi5.js

// DATA:
const employees = [
  {
    id: 1,
    nama: "Anas Nasrulloh",
    jabatan: "Senior Developer",
    departemen: "Engineering",
    gaji: 18000000,
    skills: ["JavaScript", "React", "Node.js"],
    alamat: { kota: "Ciamis", provinsi: "Jawa Barat" },
    kontak: { email: "anas@company.com", telepon: "08111111111" },
    aktif: true,
  },
  {
    id: 2,
    nama: "Budi Santoso",
    jabatan: "UI Designer",
    departemen: "Design",
    gaji: 12000000,
    skills: ["Figma", "Adobe XD", "CSS"],
    alamat: { kota: "Bandung", provinsi: "Jawa Barat" },
    kontak: { email: "budi@company.com", telepon: "08222222222" },
    aktif: true,
  },
  {
    id: 3,
    nama: "Citra Dewi",
    jabatan: "Project Manager",
    departemen: "Management",
    gaji: 20000000,
    skills: ["Agile", "Scrum", "Leadership"],
    alamat: { kota: "Jakarta", provinsi: "DKI Jakarta" },
    kontak: { email: "citra@company.com" }, // ← tidak punya telepon!
    aktif: true,
  },
  {
    id: 4,
    nama: "Deni Pratama",
    jabatan: "Junior Developer",
    departemen: "Engineering",
    gaji: 8000000,
    skills: ["HTML", "CSS", "JavaScript"],
    alamat: { kota: "Bekasi", provinsi: "Jawa Barat" },
    kontak: { email: "deni@company.com", telepon: "08444444444" },
    aktif: false, // ← tidak aktif
  },
  {
    id: 5,
    nama: "Eka Putri",
    jabatan: "Data Analyst",
    departemen: "Data",
    gaji: 15000000,
    skills: ["Python", "SQL", "Tableau"],
    alamat: { kota: "Surabaya", provinsi: "Jawa Timur" },
    kontak: { email: "eka@company.com", telepon: "08555555555" },
    aktif: true,
  },
];


// SOAL 1 - Destructuring
// Destructure employee pertama (Anas) dan tampilkan:
// "Nama    : Anas Nasrulloh"
// "Jabatan : Senior Developer"
// "Kota    : Ciamis"  ← dari nested object alamat
// "Email   : anas@company.com" ← dari nested object kontak
// Gunakan SATU destructuring statement saja!


// SOAL 2 - Optional Chaining & Nullish Coalescing
// Buat function getKontak(employee) yang:
// - Tampilkan email dan telepon setiap karyawan
// - Jika telepon tidak ada → tampilkan "Tidak tersedia"
// - Gunakan optional chaining dan nullish coalescing!
// Test dengan semua employee (termasuk Citra yang tidak punya telepon)


// SOAL 3 - Object Methods
// Menggunakan Object.keys(), Object.values(), Object.entries():
// a. Tampilkan semua KEY dari employee pertama
// b. Buat function hitungTotalGaji(employees) 
//    menggunakan Object.values() atau reduce
// c. Gunakan Object.entries() untuk tampilkan
//    semua property employee pertama dengan format:
//    "nama        → Anas Nasrulloh"
//    "jabatan     → Senior Developer"
//    dst...


// SOAL 4 - Spread & Update
// a. Buat function updateGaji(employee, kenaikanPersen)
//    - Return employee BARU dengan gaji yang sudah diupdate
//    - JANGAN ubah object asli! (immutable update)
//    - Tampilkan gaji lama dan gaji baru
//
// b. Buat function tambahSkill(employee, skillBaru)
//    - Return employee BARU dengan skill ditambahkan
//    - JANGAN ubah array skills asli!
//    - Test: tambahSkill(employees[0], "TypeScript")


// SOAL 5 - Gabungkan Semua!
// Buat function generateLaporanKaryawan(employees) yang:
// - Filter hanya karyawan AKTIF
// - Gunakan destructuring di parameter function
// - Tampilkan laporan dengan format:
/*
╔══════════════════════════════════════════╗
║         LAPORAN KARYAWAN AKTIF          ║
╠══════════════════════════════════════════╣
║ Total Karyawan Aktif : 4                ║
║ Total Pengeluaran    : Rp 65.000.000    ║
║ Rata-rata Gaji       : Rp 16.250.000   ║
╠══════════════════════════════════════════╣
║ DAFTAR KARYAWAN:                        ║
║                                         ║
║ 1. Anas Nasrulloh                       ║
║    Jabatan : Senior Developer           ║
║    Dept    : Engineering                ║
║    Gaji    : Rp 18.000.000             ║
║    Skills  : JavaScript, React, Node.js ║
║    Kota    : Ciamis                     ║
║                                         ║
║ 2. dst...                               ║
╚══════════════════════════════════════════╝
*/