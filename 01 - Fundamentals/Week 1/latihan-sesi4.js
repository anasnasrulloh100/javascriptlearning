Saya setorkan latiahn wajib sesi 4 dulu. Bonusnya menyusul.
Ini tugasnya:

// Buat file: latihan-sesi4.js

// DATA - Gunakan ini untuk semua soal:
const products = [
  {
    id: 1,
    nama: "Laptop Pro",
    kategori: "elektronik",
    harga: 15000000,
    stok: 5,
    rating: 4.8,
  },
  {
    id: 2,
    nama: "Mouse Wireless",
    kategori: "elektronik",
    harga: 350000,
    stok: 50,
    rating: 4.5,
  },
  {
    id: 3,
    nama: "Meja Kerja",
    kategori: "furniture",
    harga: 1200000,
    stok: 10,
    rating: 4.2,
  },
  {
    id: 4,
    nama: "Kursi Ergonomis",
    kategori: "furniture",
    harga: 2500000,
    stok: 8,
    rating: 4.7,
  },
  {
    id: 5,
    nama: "Headphone BT",
    kategori: "elektronik",
    harga: 850000,
    stok: 30,
    rating: 4.6,
  },
  {
    id: 6,
    nama: "Webcam HD",
    kategori: "elektronik",
    harga: 650000,
    stok: 0,
    rating: 4.3,
  },
  {
    id: 7,
    nama: "Lampu Meja",
    kategori: "furniture",
    harga: 180000,
    stok: 25,
    rating: 3.9,
  },
  {
    id: 8,
    nama: "Keyboard Mech",
    kategori: "elektronik",
    harga: 1250000,
    stok: 15,
    rating: 4.9,
  },
];

// SOAL 1 - forEach
// Tampilkan semua produk dengan format:
// "1. Laptop Pro | Rp 15.000.000 | ⭐ 4.8 | Stok: 5"
// Gunakan forEach!
products.forEach((product, index) =>
  console.log(
    `${index + 1}. ${product.nama} | Rp ${product.harga.toLocaleString("id-ID")} | ⭐ ${product.rating} | stok: ${product.stok}`,
  ),
);

// SOAL 2 - filter
// a. Filter produk yang stoknya > 0 (tersedia)
// b. Filter produk kategori "elektronik"
// c. Filter produk dengan harga antara 500.000 - 2.000.000
// d. Filter produk dengan rating >= 4.5
// Tampilkan hasil setiap filter!

// a.
const filterStok = products.filter((product) => product.stok > 0);
console.log(filterStok);
// b.
const filterElektronik = products.filter(
  (product) => product.kategori === "elektronik",
);
console.log(filterElektronik);
// c.
const filterHarga = products.filter(
  (product) => product.harga >= 500_000 && product.harga <= 2_000_000,
);
console.log(filterHarga);
// d.
const filterRating = products.filter((product) => product.rating >= 4.5);
console.log(filterRating);
// SOAL 3 - map
// a. Buat array baru berisi hanya nama semua produk
// b. Buat array baru berisi harga setelah diskon 10%
//    Format: { nama: "Laptop Pro", hargaAsli: 15000000, hargaDiskon: 13500000 }
// c. Tambahkan properti "tersedia" (boolean) ke setiap produk
//    true jika stok > 0, false jika stok = 0
// a.
const daftarNamaProduk = products.map((product) => product.nama);
console.log(daftarNamaProduk);
//b.
const hargaDiskon = products.map(
  (product) =>
    `nama: ${product.nama}, hargaAsli: ${product.harga}, hargaDiskon: ${product.harga * 0.9}`,
);
console.log(hargaDiskon);
// c.
const produkTersedia = products.map((product) => ({
  ...product,
  tersedia: product.stok > 0 ? "ya" : "tidak",
}));
console.log(produkTersedia);

// SOAL 4 - reduce
// a. Hitung total nilai semua stok produk
//    (harga × stok untuk setiap produk, lalu dijumlahkan)
// b. Hitung rata-rata rating semua produk
// c. Cari produk termahal menggunakan reduce
//    (tanpa sort, gunakan reduce saja!)
// 4. a
const totalNilaiProduk = products.reduce(
  (acc, product) => acc + (product.harga * product.stok),
  0,
);
console.log(totalNilaiProduk.toLocaleString("id-ID"));
// 4. b
const rataRataRating =
  products.reduce((acc, product) => acc + product.rating, 0) / products.length;
console.log(rataRataRating.toFixed(1));
// 4. c
const produkTermahal = products.reduce((max, product) =>
  product.harga > max.harga ? product : max,
);
console.log(produkTermahal);

// SOAL 5 - Method Chaining ⭐
// a. Tampilkan nama produk elektronik yang tersedia,
//    diurutkan berdasarkan harga termurah ke termahal
//
const sortProduk =  products.filter(product => product.kategori === "elektronik")
.filter(product => product.stok > 0).sort((a, b) => a.harga - b.harga);
console.log(sortProduk);


// b. Hitung total nilai stok khusus kategori furniture
//    (harga × stok, lalu total semua)
const totalFurniture = products.filter(product => product.kategori === "furniture")
.filter(product => product.stok > 0)
.reduce((acc, product) => acc + (product.harga * product.stok), 0);
console.log(totalFurniture.toLocaleString("id-ID"));
//
// c. Buat "featured products":
//    - Rating >= 4.5
//    - Stok > 0
//    - Tampilkan: nama, harga, rating
//    - Urutkan dari rating tertinggi

const featuredProducts = products => {
  const featuredFilter = products.filter(product => product.rating >= 4.5 && product.stok > 0)
  .sort((a, b) => b.rating - a.rating);
  return featuredFilter.forEach(product => console.log(`Nama: ${product.nama}, harga: Rp ${product.harga.toLocaleString("id-ID")}, rating: ${product.rating}`));
};
featuredProducts(products);


// SOAL 6 - Fungsi Pencarian
// Buat function searchProducts(keyword) yang:
// - Mencari produk berdasarkan nama (case insensitive)
// - Return array produk yang cocok
// - Jika tidak ada → return pesan "Produk tidak ditemukan"
// Test:
// searchProducts("laptop")   → [{ Laptop Pro... }]
// searchProducts("wireless") → [{ Mouse Wireless... }]
// searchProducts("kipas")    → "Produk tidak ditemukan"

const searchProducts = keyword => {
  const namaProduk = products.map(product => product.nama);
  for (const nama of namaProduk) {
    if (nama.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
      return products.filter(product => product.nama.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
      .map(product => product.nama);
    }
  }
  return `Produk tidak ditemukan`
};
console.log(searchProducts("laptop"));
console.log(searchProducts("wireless"))
console.log(searchProducts("kipas"))

//VERSI FINAL SETELAH KOREKSI

// SOAL 1 ✅
products.forEach((p, i) =>
  console.log(`${i + 1}. ${p.nama} | Rp ${p.harga.toLocaleString("id-ID")} | ⭐ ${p.rating} | Stok: ${p.stok}`)
);

// SOAL 2 ✅
const filterStok      = products.filter(p => p.stok > 0);
const filterElektronik = products.filter(p => p.kategori === "elektronik");
const filterHarga     = products.filter(p => p.harga >= 500_000 && p.harga <= 2_000_000);
const filterRating    = products.filter(p => p.rating >= 4.5);

// SOAL 3 ✅
const daftarNama  = products.map(p => p.nama);

const hargaDiskon = products.map(p => ({
  nama: p.nama,
  hargaAsli: p.harga,
  hargaDiskon: p.harga * 0.9,
}));

const produkTersedia = products.map(p => ({
  ...p,
  tersedia: p.stok > 0, // ← boolean, bukan string
}));

// SOAL 4 ✅
const totalNilaiStok = products.reduce((acc, p) => acc + p.harga * p.stok, 0);
const rataRataRating = products.reduce((acc, p) => acc + p.rating, 0) / products.length;
const produkTermahal = products.reduce((max, p) => p.harga > max.harga ? p : max, products[0]);

// SOAL 5 ✅
const elektronikTersedia = products
  .filter(p => p.kategori === "elektronik" && p.stok > 0)
  .sort((a, b) => a.harga - b.harga)
  .map(p => p.nama);

const totalFurniture = products
  .filter(p => p.kategori === "furniture")
  .reduce((acc, p) => acc + p.harga * p.stok, 0);

const getFeatured = () =>
  products
    .filter(p => p.rating >= 4.5 && p.stok > 0)
    .sort((a, b) => b.rating - a.rating)
    .map(p => ({ nama: p.nama, harga: p.harga, rating: p.rating }));

// SOAL 6 ✅
const searchProducts = (keyword) => {
  const hasil = products.filter(p =>
    p.nama.toLowerCase().includes(keyword.toLowerCase())
  );
  return hasil.length > 0 ? hasil : `Produk "${keyword}" tidak ditemukan`;
};

// ================================
// FINAS SETELAH KOREKSI
// ================================


// SOAL 1 ✅
products.forEach((p, i) =>
  console.log(`${i + 1}. ${p.nama} | Rp ${p.harga.toLocaleString("id-ID")} | ⭐ ${p.rating} | Stok: ${p.stok}`)
);

// SOAL 2 ✅
const filterStok      = products.filter(p => p.stok > 0);
const filterElektronik = products.filter(p => p.kategori === "elektronik");
const filterHarga     = products.filter(p => p.harga >= 500_000 && p.harga <= 2_000_000);
const filterRating    = products.filter(p => p.rating >= 4.5);

// SOAL 3 ✅
const daftarNama  = products.map(p => p.nama);

const hargaDiskon = products.map(p => ({
  nama: p.nama,
  hargaAsli: p.harga,
  hargaDiskon: p.harga * 0.9,
}));

const produkTersedia = products.map(p => ({
  ...p,
  tersedia: p.stok > 0, // ← boolean, bukan string
}));

// SOAL 4 ✅
const totalNilaiStok = products.reduce((acc, p) => acc + p.harga * p.stok, 0);
const rataRataRating = products.reduce((acc, p) => acc + p.rating, 0) / products.length;
const produkTermahal = products.reduce((max, p) => p.harga > max.harga ? p : max, products[0]);

// SOAL 5 ✅
const elektronikTersedia = products
  .filter(p => p.kategori === "elektronik" && p.stok > 0)
  .sort((a, b) => a.harga - b.harga)
  .map(p => p.nama);

const totalFurniture = products
  .filter(p => p.kategori === "furniture")
  .reduce((acc, p) => acc + p.harga * p.stok, 0);

const getFeatured = () =>
  products
    .filter(p => p.rating >= 4.5 && p.stok > 0)
    .sort((a, b) => b.rating - a.rating)
    .map(p => ({ nama: p.nama, harga: p.harga, rating: p.rating }));

// SOAL 6 ✅
const searchProducts = (keyword) => {
  const hasil = products.filter(p =>
    p.nama.toLowerCase().includes(keyword.toLowerCase())
  );
  return hasil.length > 0 ? hasil : `Produk "${keyword}" tidak ditemukan`;
};