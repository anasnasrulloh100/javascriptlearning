// KONTEKS:
// Anda diminta membuat sistem kasir sederhana
// untuk warung/toko kecil

// DATA PRODUK - JANGAN DIUBAH
const produk1 = { nama: "Indomie Goreng", harga: 3500, stok: 50 };
const produk2 = { nama: "Teh Botol Sosro", harga: 5000, stok: 30 };
const produk3 = { nama: "Roti Tawar", harga: 12000, stok: 15 };
const produk4 = { nama: "Kopi Sachet", harga: 2000, stok: 100 };
const produk5 = { nama: "Air Mineral", harga: 4000, stok: 75 };

// Catatan: Object & property akan dipelajari detail di Sesi 5
// Untuk sekarang, akses data dengan:
// produk1.nama  → "Indomie Goreng"
// produk1.harga → 3500
// produk1.stok  → 50

// ============================================
// YANG HARUS DIBUAT:
// ============================================

// FUNCTION 1: cekStok(produk)
// - Return true jika stok > 0
// - Return false jika stok habis

// FUNCTION 2: hitungHarga(harga, jumlah)
// - Return total harga (harga × jumlah)

// FUNCTION 3: hitungDiskon(total)
// - Aturan diskon bertingkat:
//   Total >= 100.000 → diskon 15%
//   Total >= 50.000  → diskon 10%
//   Total >= 20.000  → diskon 5%
//   Total < 20.000   → tidak ada diskon
// - Return jumlah diskon (bukan total setelah diskon!)

// FUNCTION 4: hitungPajak(total)
// - PPN 11% dari total setelah diskon
// - Return jumlah pajak

// FUNCTION 5: cetakStruk(namaProduk, jumlah, harga)
// - Gabungkan semua function di atas
// - Tampilkan struk belanja seperti ini:

// ============================================
// OUTPUT YANG DIHARAPKAN (format struk):
// ============================================

/*
===================================
        STRUK BELANJA
===================================
Produk    : Roti Tawar
Jumlah    : 5 pcs
Harga     : Rp 12.000 / pcs
-----------------------------------
Subtotal  : Rp 60.000
Diskon 10%: Rp 6.000
Pajak 11% : Rp 5.940
-----------------------------------
TOTAL     : Rp 59.940
===================================
Terima kasih telah berbelanja!
===================================
*/

// ============================================
// TEST FUNCTION cetakStruk:
// ============================================
// cetakStruk(produk3, 5)
// cetakStruk(produk1, 3)
// cetakStruk(produk2, 10)

// ============================================
// BONUS:
// ============================================
// Tambahkan validasi di cetakStruk:
// - Jika jumlah beli > stok → tampilkan pesan error
// - Jika stok habis → tampilkan pesan error
// Contoh: cetakStruk(produk3, 20)
// → "Maaf, stok Roti Tawar tidak mencukupi. Stok tersisa: 15"
const formatSaldo = (angka) =>
  angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
const cekStockProduk = (produk) => produk.stok > 0;
const hitungHarga = (harga, jumlah) => harga * jumlah;

const hitungDiskon = (total) => {
  if (total >= 100_000) {
    return total * 0.15;
  } else if (total >= 50_000) {
    return total * 0.1;
  } else if (total >= 20_000) {
    return total * 0.05;
  } else {
    return 0;
  }
};
const hitungPajak = (total) => total * 0.11;
const cetakStruk = (produk, jumlah) => {
  if (!cekStockProduk(produk)) {
    console.log("Maaf, produk habis.");
    return;
  } else if (jumlah > produk.stok) {
    console.log(
      `Maaf, stok ${produk.nama} tidak mencukupi. Stok tersisa: ${produk.stok}`,
    );
    return;
  }
  console.log("===================================");
  console.log("        STRUK BELANJA");
  console.log("===================================");
  console.log(`Produk    : ${produk.nama}`);
  console.log(`Jumlah    : ${jumlah} pcs`);
  console.log(`Harga     : ${formatSaldo(produk.harga)} / pcs`);
  console.log("-----------------------------------");
  console.log(`Subtotal  : ${formatSaldo(hitungHarga(produk.harga, jumlah))}`);
  console.log(
    `Diskon ${hitungDiskon(hitungHarga(produk.harga, jumlah)) > 0 ? `${((hitungDiskon(hitungHarga(produk.harga, jumlah)) / hitungHarga(produk.harga, jumlah)) * 100).toFixed(0)}%` : "0%"}: ${formatSaldo(hitungDiskon(hitungHarga(produk.harga, jumlah)))}`,
  );
  console.log(
    `Pajak 11% : ${formatSaldo(hitungPajak(hitungHarga(produk.harga, jumlah) - hitungDiskon(hitungHarga(produk.harga, jumlah))))}`,
  );
  console.log("-----------------------------------");
  console.log(
    `TOTAL     : ${formatSaldo(hitungHarga(produk.harga, jumlah) - hitungDiskon(hitungHarga(produk.harga, jumlah)) + hitungPajak(hitungHarga(produk.harga, jumlah) - hitungDiskon(hitungHarga(produk.harga, jumlah))))}`,
  );
  console.log("===================================");
  console.log("Terima kasih telah berbelanja!");
  console.log("===================================");
};
cetakStruk(produk3, 5);
cetakStruk(produk1, 3);
cetakStruk(produk2, 10);
