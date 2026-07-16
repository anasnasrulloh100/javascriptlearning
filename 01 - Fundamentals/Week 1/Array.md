Array adalah struktur data yang PALING SERING dipakai
di dunia programming modern.

Hampir semua data di aplikasi nyata berbentuk Array:

- Daftar produk di Tokopedia → Array
- Feed postingan di Instagram → Array
- Playlist lagu di Spotify → Array
- Daftar transaksi di e-banking → Array
- Search results di Google → Array

Kuasai Array = kuasai 70% data manipulation!

// ================================
// APA ITU ARRAY?
// ================================

// ANALOGI:
// Variable biasa = 1 kotak untuk 1 barang
// Array = RAK dengan banyak kotak bernomor

// Variable biasa:
const nama1 = "Anas";
const nama2 = "Budi";
const nama3 = "Citra";
// Tidak efisien untuk banyak data!

// Array - simpan banyak data dalam 1 variabel:
const nama = ["Anas", "Budi", "Citra"];
// [0] [1] [2]
// ↑ Index selalu mulai dari 0!

// ================================
// CARA MEMBUAT ARRAY
// ================================

// 1. Array literal (paling umum dipakai)
const buah = ["Apel", "Jeruk", "Mangga"];

// 2. Array kosong - diisi nanti
const keranjang = [];

// 3. Array dengan tipe data campuran (valid di JS)
const campur = ["Anas", 25, true, null];
// Tapi di industri, usahakan 1 array = 1 tipe data

// ================================
// MENGAKSES ELEMEN ARRAY
// ================================

const kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];
// [0] [1] [2] [3]

console.log(kota[0]); // "Jakarta"
console.log(kota[1]); // "Bandung"
console.log(kota[3]); // "Medan"
console.log(kota[4]); // undefined ← tidak ada index 4!

// Akses dari BELAKANG
console.log(kota[kota.length - 1]); // "Medan" ← elemen terakhir
console.log(kota.at(-1)); // "Medan" ← cara modern ES2022!
console.log(kota.at(-2)); // "Surabaya" ← kedua dari belakang

// ================================
// PROPERTY & INFO ARRAY
// ================================

console.log(kota.length); // 4 ← jumlah elemen
console.log(typeof kota); // "object" ← array adalah object!
console.log(Array.isArray(kota)); // true ← cara cek array yang benar

// ================================
// MENAMBAH & MENGHAPUS ELEMEN
// ================================

const antrian = ["Anas", "Budi", "Citra"];

// PUSH - tambah di BELAKANG (paling sering dipakai!)
antrian.push("Deni");
console.log(antrian); // ["Anas", "Budi", "Citra", "Deni"]

// POP - hapus dari BELAKANG, return elemen yang dihapus
const keluar = antrian.pop();
console.log(keluar); // "Deni"
console.log(antrian); // ["Anas", "Budi", "Citra"]

// UNSHIFT - tambah di DEPAN
antrian.unshift("Zara");
console.log(antrian); // ["Zara", "Anas", "Budi", "Citra"]

// SHIFT - hapus dari DEPAN, return elemen yang dihapus
const pertama = antrian.shift();
console.log(pertama); // "Zara"
console.log(antrian); // ["Anas", "Budi", "Citra"]

// ================================
// ANALOGI - PUSH/POP/SHIFT/UNSHIFT
// ================================

/\*
Bayangkan antrian orang di kasir:

PUSH → Orang baru masuk dari belakang antrian
POP → Orang paling belakang keluar (mundur)
UNSHIFT → Orang masuk dari depan (nyerobot! 😄)
SHIFT → Orang paling depan dilayani & keluar
\*/

// ================================
// MENGUBAH ELEMEN
// ================================

const nilai = [80, 75, 90, 85];
nilai[1] = 95; // Ubah index ke-1
console.log(nilai); // [80, 95, 90, 85]

// ================================
// SPREAD OPERATOR - SANGAT PENTING!
// ================================

// Spread = "sebar" isi array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Gabungkan 2 array (cara modern)
const gabungan = [...arr1, ...arr2];
console.log(gabungan); // [1, 2, 3, 4, 5, 6]

// Copy array (bukan reference!)
const original = [1, 2, 3];
const kopian = [...original];
kopian.push(4);
console.log(original); // [1, 2, 3] ← tidak berubah!
console.log(kopian); // [1, 2, 3, 4]

Ada 20+ array methods di JavaScript.
Tapi 80% pekerjaan sehari-hari hanya butuh 7:

1. forEach → Loop setiap elemen
2. map → Transformasi setiap elemen ⭐⭐⭐
3. filter → Saring elemen ⭐⭐⭐
4. reduce → Akumulasi jadi 1 nilai ⭐⭐⭐
5. find → Cari 1 elemen pertama
6. findIndex→ Cari index elemen
7. includes → Cek apakah elemen ada

Kuasai 7 ini = siap kerja! 🎯

// ================================
// forEach - Ganti for loop biasa
// ================================

const produk = ["Indomie", "Teh Botol", "Roti Tawar"];

// ❌ Cara lama (masih valid tapi verbose):
for (let i = 0; i < produk.length; i++) {
console.log(produk[i]);
}

// ✅ Cara modern dengan forEach:
produk.forEach((item) => {
console.log(item);
});

// ✅ Versi singkat (1 baris):
produk.forEach(item => console.log(item));

// forEach dengan INDEX:
produk.forEach((item, index) => {
console.log(`${index + 1}. ${item}`);
});
// Output:
// 1. Indomie
// 2. Teh Botol
// 3. Roti Tawar

// CONTOH NYATA - Tampilkan daftar belanja:
const belanja = [
{ nama: "Apel", harga: 15000 },
{ nama: "Susu", harga: 12000 },
{ nama: "Roti", harga: 8000 },
];

belanja.forEach((item, index) => {
console.log(`${index + 1}. ${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}`);
});
// Output:
// 1. Apel - Rp 15.000
// 2. Susu - Rp 12.000
// 3. Roti - Rp 8.000

// ⚠️ PENTING:
// forEach TIDAK return nilai baru
// forEach TIDAK bisa di-break (gunakan for...of jika perlu break)
// forEach hanya untuk MELAKUKAN sesuatu ke setiap elemen

// ================================
// MAP - Method PALING SERING dipakai!
// ================================

// map → Buat array BARU dengan transformasi setiap elemen
// Input : Array A
// Output : Array B (ukuran SAMA, isi BERBEDA)

// ANALOGI:
// Punya array telur mentah → map → array telur matang
// Setiap elemen "ditransformasi", jumlah tetap sama

const angka = [1, 2, 3, 4, 5];

// Kalikan setiap angka dengan 2:
const dikali2 = angka.map(num => num \* 2);
console.log(dikali2); // [2, 4, 6, 8, 10]
console.log(angka); // [1, 2, 3, 4, 5] ← TIDAK BERUBAH! (immutable)

// CONTOH NYATA 1 - Konversi harga dengan diskon:
const hargaAsli = [100000, 250000, 75000, 300000];

const hargaDiskon = hargaAsli.map(harga => harga \* 0.9);
console.log(hargaDiskon); // [90000, 225000, 67500, 270000]

// CONTOH NYATA 2 - Ambil properti tertentu dari array object:
const users = [
{ id: 1, nama: "Anas", email: "anas@email.com", umur: 28 },
{ id: 2, nama: "Budi", email: "budi@email.com", umur: 25 },
{ id: 3, nama: "Citra", email: "citra@email.com", umur: 30 },
];

// Ambil hanya nama:
const daftarNama = users.map(user => user.nama);
console.log(daftarNama); // ["Anas", "Budi", "Citra"]

// Tambahkan properti baru:
const usersWithGreeting = users.map(user => ({
...user, // Spread semua properti lama
greeting: `Halo, ${user.nama}!` // Tambah properti baru
}));
console.log(usersWithGreeting[0]);
// { id: 1, nama: "Anas", email: "...", umur: 28, greeting: "Halo, Anas!" }

// CONTOH NYATA 3 - Di React ini SANGAT sering:
// (Preview bagaimana map dipakai di React nanti)

const products = [
{ id: 1, nama: "Laptop", harga: 15000000 },
{ id: 2, nama: "Mouse", harga: 250000 },
{ id: 3, nama: "Keyboard", harga: 750000 },
];

// Di React, ini akan jadi JSX component
// Untuk sekarang, bayangkan ini sebagai "template":
const productCards = products.map(product =>
`<div class="card">

<h2>${product.nama}</h2>
<p>Rp ${product.harga.toLocaleString("id-ID")}</p>

   </div>`
);
productCards.forEach(card => console.log(card));

// ================================
// FILTER - Saring berdasarkan kondisi
// ================================

// filter → Buat array BARU hanya dengan elemen yang lolos kondisi
// Input : Array A
// Output : Array B (ukuran LEBIH KECIL atau SAMA)

// ANALOGI:
// Saringan kopi → hanya air kopi yang lolos, ampas tertahan

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter hanya angka genap:
const genap = angka.filter(num => num % 2 === 0);
console.log(genap); // [2, 4, 6, 8, 10]

// Filter hanya angka > 5:
const lebihDari5 = angka.filter(num => num > 5);
console.log(lebihDari5); // [6, 7, 8, 9, 10]

// CONTOH NYATA 1 - Filter produk yang tersedia:
const produk = [
{ nama: "Indomie", harga: 3500, stok: 50 },
{ nama: "Teh Botol", harga: 5000, stok: 0 },
{ nama: "Roti", harga: 12000, stok: 15 },
{ nama: "Kopi", harga: 2000, stok: 0 },
{ nama: "Air", harga: 4000, stok: 75 },
];

const tersedia = produk.filter(item => item.stok > 0);
console.log(tersedia);
// [
// { nama: "Indomie", harga: 3500, stok: 50 },
// { nama: "Roti", harga: 12000, stok: 15 },
// { nama: "Air", harga: 4000, stok: 75 },
// ]

// CONTOH NYATA 2 - Search/filter berdasarkan nama:
const cariProduk = (daftarProduk, keyword) => {
return daftarProduk.filter(item =>
item.nama.toLowerCase().includes(keyword.toLowerCase())
);
};

console.log(cariProduk(produk, "roti"));
// [{ nama: "Roti", harga: 12000, stok: 15 }]

// CONTOH NYATA 3 - Filter berdasarkan range harga:
const filterHarga = (daftarProduk, min, max) => {
return daftarProduk.filter(item =>
item.harga >= min && item.harga <= max
);
};

console.log(filterHarga(produk, 3000, 6000));
// [Indomie 3500, Teh Botol 5000, Air 4000]

// MAP + FILTER DIGABUNG (sangat sering di industri!):
// Ambil nama produk yang stoknya ada:
const namaProdukTersedia = produk
.filter(item => item.stok > 0)
.map(item => item.nama);

console.log(namaProdukTersedia); // ["Indomie", "Roti", "Air"]

// ================================
// REDUCE - Yang Paling Powerful!
// ================================

// reduce → Ubah array menjadi 1 nilai tunggal
// (bisa number, string, object, atau array baru)

// FORMAT:
// array.reduce((accumulator, currentValue) => {
// return nilai_baru_accumulator;
// }, nilaiAwal);

// ANALOGI:
// Snowball rolling down a hill
// accumulator = bola salju (makin lama makin besar)
// currentValue = salju baru yang ditambahkan

// CONTOH 1 - Jumlahkan semua angka:
const angka = [1, 2, 3, 4, 5];

const total = angka.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 15

// Step by step:
// acc=0, curr=1 → return 0+1 = 1
// acc=1, curr=2 → return 1+2 = 3
// acc=3, curr=3 → return 3+3 = 6
// acc=6, curr=4 → return 6+4 = 10
// acc=10, curr=5 → return 10+5 = 15 ✅

// CONTOH NYATA 1 - Total harga belanja:
const keranjang = [
{ nama: "Apel", harga: 15000, qty: 2 },
{ nama: "Susu", harga: 12000, qty: 1 },
{ nama: "Roti", harga: 8000, qty: 3 },
];

const totalBelanja = keranjang.reduce((acc, item) => {
return acc + (item.harga * item.qty);
}, 0);

console.log(totalBelanja); // 15000*2 + 12000*1 + 8000 * 3 = 78000

// CONTOH NYATA 2 - Hitung rata-rata:
const nilai = [85, 92, 78, 95, 88];

const rataRata = nilai.reduce((acc, curr) => acc + curr, 0) / nilai.length;
console.log(rataRata.toFixed(1)); // 87.6

// CONTOH NYATA 3 - Group data (Advanced):
const transaksi = [
{ tipe: "pemasukan", jumlah: 5000000 },
{ tipe: "pengeluaran", jumlah: 1500000 },
{ tipe: "pemasukan", jumlah: 3000000 },
{ tipe: "pengeluaran", jumlah: 750000 },
];

const ringkasan = transaksi.reduce((acc, item) => {
if (item.tipe === "pemasukan") {
acc.totalPemasukan += item.jumlah;
} else {
acc.totalPengeluaran += item.jumlah;
}
return acc;
}, { totalPemasukan: 0, totalPengeluaran: 0 }); // ← Initial value = object!

console.log(ringkasan);
// { totalPemasukan: 8000000, totalPengeluaran: 2250000 }

const saldo = ringkasan.totalPemasukan - ringkasan.totalPengeluaran;
console.log(`Saldo: Rp ${saldo.toLocaleString("id-ID")}`); // Rp 5.750.000
