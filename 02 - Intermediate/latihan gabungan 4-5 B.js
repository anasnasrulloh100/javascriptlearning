Latihan 2 perbankan:
// DATA - Jangan diubah!
const accounts = [
  {
    id: "ACC-001",
    pemilik: { nama: "Anas Nasrulloh", kota: "Ciamis" },
    tipe: "tabungan",
    saldo: 15000000,
    transaksi: [
      {
        tipe: "kredit",
        jumlah: 5000000,
        keterangan: "Gaji",
        tanggal: "2024-01-01",
      },
      {
        tipe: "debit",
        jumlah: 1500000,
        keterangan: "Belanja",
        tanggal: "2024-01-05",
      },
      {
        tipe: "kredit",
        jumlah: 3000000,
        keterangan: "Bonus",
        tanggal: "2024-01-10",
      },
      {
        tipe: "debit",
        jumlah: 500000,
        keterangan: "Listrik",
        tanggal: "2024-01-15",
      },
    ],
    aktif: true,
  },
  {
    id: "ACC-002",
    pemilik: { nama: "Budi Santoso", kota: "Bandung" },
    tipe: "giro",
    saldo: 50000000,
    transaksi: [
      {
        tipe: "kredit",
        jumlah: 20000000,
        keterangan: "Transfer",
        tanggal: "2024-01-02",
      },
      {
        tipe: "debit",
        jumlah: 5000000,
        keterangan: "Operasional",
        tanggal: "2024-01-08",
      },
      {
        tipe: "debit",
        jumlah: 3000000,
        keterangan: "Sewa",
        tanggal: "2024-01-12",
      },
    ],
    aktif: true,
  },
  {
    id: "ACC-003",
    pemilik: { nama: "Citra Dewi", kota: "Jakarta" },
    tipe: "tabungan",
    saldo: 8000000,
    transaksi: [
      {
        tipe: "kredit",
        jumlah: 4000000,
        keterangan: "Gaji",
        tanggal: "2024-01-01",
      },
      {
        tipe: "debit",
        jumlah: 2000000,
        keterangan: "Belanja",
        tanggal: "2024-01-07",
      },
      {
        tipe: "debit",
        jumlah: 500000,
        keterangan: "Internet",
        tanggal: "2024-01-20",
      },
    ],
    aktif: true,
  },
  {
    id: "ACC-004",
    pemilik: { nama: "Deni Pratama", kota: "Bekasi" },
    tipe: "tabungan",
    saldo: 2000000,
    transaksi: [
      {
        tipe: "kredit",
        jumlah: 3000000,
        keterangan: "Gaji",
        tanggal: "2024-01-01",
      },
      {
        tipe: "debit",
        jumlah: 1000000,
        keterangan: "Cicilan",
        tanggal: "2024-01-10",
      },
    ],
    aktif: false, // ← Akun tidak aktif
  },
];

// ============================================
// SOAL 1: Analisis Transaksi
// ============================================

// a. Buat function getRingkasanAkun(account) yang:
//    - Gunakan destructuring di parameter!
//    - Hitung total kredit dan total debit
//    - Hitung selisih (kredit - debit)
//    - Return object: { nama, totalKredit, totalDebit, selisih }
//    Test dengan semua account!
const rp = angka => typeof(angka) === "number" ? `Rp. ${angka.toLocaleString("id-ID")}` : angka;
const getRingkasanAkun = (account) => {
  const dataAccount = accounts.find(a => a.id === account);
  if (!dataAccount) return `Rekening ${account} tidak ditemukan`;
  
  const { pemilik, transaksi } = dataAccount;
  
  // Guard Clause: Jika tidak ada transaksi, langsung stop fungsi di sini
  if (!transaksi || transaksi.length === 0) {
    return { nama: pemilik.nama, data: "Tidak ada transaksi" };
  }
  
  const totalTrx = transaksi.reduce((acc, t) => {
    if (t.tipe === "kredit") {
      acc.totalKredit += t.jumlah;
      acc.selisih += t.jumlah;
    } else {
      acc.totalDebit += t.jumlah;
      acc.selisih -= t.jumlah;
    }
    return acc;
  }, { totalKredit: 0, totalDebit: 0, selisih: 0 });

  return { nama: pemilik.nama, ...totalTrx };
};
console.log(getRingkasanAkun("ACC-003"))
console.log(getRingkasanAkun("ACC-001"));


// b. Buat function getTransaksiTerbesar(account) yang:
//    - Cari transaksi dengan jumlah terbesar (kredit atau debit)
//    - Gunakan reduce!
//    - Return: "Transaksi terbesar: Gaji (Rp 5.000.000) - kredit"

const getTransaksiTerbesar = (account) => {
  const dataAccount = accounts.find((a) => a.id === account);
  const {transaksi} = dataAccount;
  const transaksiTerbesar = transaksi.reduce((max, t) =>
    t.jumlah > max.jumlah ? t : max,
  );
  return `Transaksi terbesar: ${transaksiTerbesar.keterangan} (${rp(transaksiTerbesar.jumlah)}) - ${transaksiTerbesar.tipe}`;
} 
console.log(getTransaksiTerbesar("ACC-004"));

// c. Buat function filterTransaksi(account, tipe) yang:
//    - Filter transaksi berdasarkan tipe ("kredit" atau "debit")
//    - Return array transaksi yang difilter
//    - Tampilkan dengan format:
//      "✅ Gaji       : +Rp 5.000.000 (2024-01-01)"  ← kredit
//      "❌ Belanja    : -Rp 1.500.000 (2024-01-05)"  ← debit
const filterTransaksi = (account, tipe) => {
    const dataAccount = accounts.find((a) => a.id === account);
  if (!dataAccount) return `Rekening ${account} tidak ditemukan`;
  const { transaksi } = dataAccount;
  const filter = transaksi.filter(t => t.tipe === tipe);
  return filter; 
}


filterTransaksi("ACC-001", "kredit").forEach(i => {
    if (i.tipe === "kredit") {
       console.log(`✅ ${i.keterangan.padEnd(12)}: +${rp(i.jumlah)} (${i.tanggal})`);
    } else {
       console.log(`❌ ${i.keterangan.padEnd(12)}: -Rp ${rp(i.jumlah)} (${i.tanggal})`);
    }   
});
// ============================================
// SOAL 2: Laporan Bank
// ============================================

// Buat function generateLaporanBank(accounts) yang:
// - Filter hanya akun AKTIF
// - Gunakan destructuring di setiap operasi
// - Tampilkan:

/*
╔═══════════════════════════════════════════╗
║          LAPORAN REKENING BANK           ║
╠═══════════════════════════════════════════╣
║ Total Rekening Aktif : 3                 ║
║ Total Dana Kelolaan  : Rp 73.000.000    ║
║ Rekening Terkaya     : Budi Santoso     ║
║ Rekening Termiskin   : Citra Dewi       ║
╠═══════════════════════════════════════════╣
║ DETAIL REKENING:                         ║
║                                          ║
║ [ACC-001] Anas Nasrulloh                 ║
║ Tipe     : Tabungan                      ║
║ Saldo    : Rp 15.000.000                ║
║ Kota     : Ciamis                        ║
║ Transaksi: 4 transaksi                   ║
║                                          ║
║ [ACC-002] dst...                         ║
╚═══════════════════════════════════════════╝
*/
const generateLaporanBank = (accounts) => {
     const rekeningAktif = accounts.filter(({aktif}) => aktif);
    const totalDanaKelolaan = rekeningAktif.reduce((acc, {saldo}) => acc + saldo, 0);
    const saldoSortir = rekeningAktif.map(({pemilik:{nama}, saldo}) => ({nama, saldo})).sort((a,b) => b.saldo - a.saldo); // sort descending
    
    const saldoTertinggi= saldoSortir[0];
    const saldoTerendah = saldoSortir[saldoSortir.length - 1];
    

  
  // Helper format baris agar konsisten
  const baris = (konten) => `║ ${konten.padEnd(41)}║`;
  const garis = (kiri, tengah, kanan) =>
    `${kiri}${"═".repeat(42)}${kanan}`;
   
console.log(garis("╔", "═", "╗"));
console.log(baris('           LAPORAN REKENING BANK  '));
console.log(garis("╠", "═", "╣"));
console.log(baris(`Total Rekening Aktif : ${rekeningAktif.length}`));
console.log(baris(`Total Dana Kelolaan  : ${rp(totalDanaKelolaan)}`));
console.log(baris(`Rekening Terkaya     : ${saldoTertinggi.nama}`));
console.log(baris(`Rekening Termiskin   : ${saldoTerendah.nama}`));
console.log(garis("╠", "═", "╣"));

console.log(baris(`DETAIL REKENING`))
    console.log(baris(" "))
    rekeningAktif.forEach((a) => {
    console.log(baris(`${a.id} ${a.pemilik.nama}`));
    console.log(baris(`Tipe     : ${a.tipe}`));
    console.log(baris(`Saldo    : ${rp(a.saldo)}`));
    console.log(baris(`Kota     : ${a.pemilik.kota}`));
    console.log(baris(`Transaksi: ${a.transaksi.length}`));
    console.log(baris(" "));
   });
   console.log(garis("╚", "═", "╝"));
}
generateLaporanBank(accounts)
     
 
   

// ============================================
// SOAL 3: Optional Chaining & Nullish
// ============================================

// Data tidak sempurna (simulasi data dari API):
const nasabahBaru = [
  { id: "ACC-005", pemilik: { nama: "Eka Putri" }, saldo: 5000000 },
  // ← Tidak punya tipe, transaksi, aktif, dan kota!

  { id: "ACC-006", pemilik: null, saldo: 0, tipe: "tabungan" },
  // ← pemilik = null!

  { id: "ACC-007" },
  // ← Hampir semua property tidak ada!
];

// Buat function safeGetInfo(account) yang:
// - Menggunakan optional chaining untuk semua akses
// - Menggunakan nullish coalescing untuk semua default value
// - TIDAK BOLEH crash meski data tidak lengkap!
// - Output:
//   "ID     : ACC-005"
//   "Pemilik: Eka Putri"`
//   "Saldo  : Rp 5.000.000"
//   "Tipe   : Tidak tersedia"
//   "Kota   : Tidak tersedia"
nasabahBaru.forEach((item) => {
 
    console.log(`ID      :${item?.id}`);
    console.log(`Pemilik : ${item?.pemilik?.nama ?? `Data belum tersedia`}`);
    console.log(`Saldo   : ${rp(item?.saldo ?? `Data belum tersedia`)}`)
    console.log(`Tipe    : ${item?.tipe ?? `Data belum tersedia`}`)
    console.log(`Kota    : ${item?.pemilik?.kota ?? `Data belum tersedia`}`)
    console.log(" ");
})
// ============================================

//VERSI SETELAH REVIIEW MENTOR  
// ============================================

// Soal minta: destructuring di PARAMETER
// Kode Anda: destructuring di body ← masih OK, tapi bisa lebih

// 1. a.  
// ✅ Destructuring di parameter:
function getRingkasanAkun(accountId) {
  const dataAccount = accounts.find(({ id }) => id === accountId); // ← destructuring di find!
  if (!dataAccount) return `Rekening ${accountId} tidak ditemukan`;

  const {
    pemilik: { nama }, // ← nested destructuring
    transaksi = [], // ← default value jika tidak ada!
  } = dataAccount;

  if (transaksi.length === 0) {
    return { nama, data: "Tidak ada transaksi" };
  }

  const totalTrx = transaksi.reduce((acc, { tipe, jumlah }) => {
    if (tipe === "kredit") {
      acc.totalKredit += jumlah;
      acc.selisih += jumlah;
    } else {
      acc.totalDebit += jumlah;
      acc.selisih -= jumlah;
    }
    return acc;
  }, { totalKredit: 0, totalDebit: 0, selisih: 0 });

  return { nama, ...totalTrx };
}

// 1.b
// ✅ Versi dengan guard clause + full destructuring:
const getTransaksiTerbesar = (accountId) => {
  const dataAccount = accounts.find(a => a.id === accountId);
  if (!dataAccount) return `❌ Rekening ${accountId} tidak ditemukan`;

  const {
    pemilik: { nama },
    transaksi = [],
  } = dataAccount;

  if (transaksi.length === 0) return `${nama} belum memiliki transaksi`;

  const { keterangan, jumlah, tipe } = transaksi.reduce(
    (max, t) => t.jumlah > max.jumlah ? t : max
  );

  return `Transaksi terbesar: ${keterangan} (${rp(jumlah)}) - ${tipe}`;
};

// Test:
console.log(getTransaksiTerbesar("ACC-001"));
// "Transaksi terbesar: Gaji (Rp. 5.000.000) - kredit"

console.log(getTransaksiTerbesar("ACC-999"));
// "❌ Rekening ACC-999 tidak ditemukan"

// 1.c
// CATATAN 1: if/else di forEach tidak perlu!
// Karena sudah difilter berdasarkan tipe,
// semua item pasti tipe yang sama!

// ❌ Redundant check:
filterTransaksi("ACC-001", "kredit").forEach(i => {
  if (i.tipe === "kredit") { ... }  // ← Sudah pasti kredit karena difilter!
  else { ... }
});

// ✅ Lebih bersih - pakai parameter tipe langsung:
const tampilkanTransaksi = (account, tipe) => {
  const hasil = filterTransaksi(account, tipe);

  // Handle jika return string error (bukan array)
  if (typeof hasil === "string") return console.log(hasil);

  hasil.forEach(({ keterangan, jumlah, tanggal }) => {
    const simbol  = tipe === "kredit" ? "✅" : "❌";
    const arahRp  = tipe === "kredit" ? "+" : "-";
    console.log(`${simbol} ${keterangan.padEnd(12)}: ${arahRp}${rp(jumlah)} (${tanggal})`);
  });
};

// CATATAN 2: Soal minta return array transaksi
// tapi display dilakukan di luar function ← ini BENAR!
// Separation of concerns yang bagus!



//2. laporan bank

// ✅ Destructuring di filter:
const rekeningAktif = accounts.filter(({ aktif }) => aktif);

// ✅ Destructuring di reduce:
const totalDanaKelolaan = rekeningAktif.reduce((acc, { saldo }) => acc + saldo, 0);

// ✅ Destructuring nested di map:
const saldoSortir = rekeningAktif
  .map(({ pemilik: { nama }, saldo }) => ({ nama, saldo }))
  .sort((a, b) => b.saldo - a.saldo);

// ✅ Helper function baris & garis → DRY principle!
const baris = (konten) => `║ ${konten.padEnd(41)}║`;
const garis = (kiri, tengah, kanan) => `${kiri}${"═".repeat(42)}${kanan}`;

// 1. Destructuring di forEach bisa lebih dalam:
rekeningAktif.forEach((a) => {
  console.log(baris(`${a.id} ${a.pemilik.nama}`));
  // ↑ Masih akses manual

  // ✅ Lebih baik dengan destructuring:
  rekeningAktif.forEach(({
    id,
    pemilik: { nama, kota },
    tipe,
    saldo,
    transaksi,
  }) => {
    console.log(baris(`[${id}] ${nama}`));
    console.log(baris(`Tipe     : ${tipe}`));
    console.log(baris(`Saldo    : ${rp(saldo)}`));
    console.log(baris(`Kota     : ${kota}`));
    console.log(baris(`Transaksi: ${transaksi.length} transaksi`));
    console.log(baris(" "));
  });
});

// 2. "Rekening Terkaya/Termiskin" bisa pakai reduce
//    daripada sort (lebih efisien untuk data besar):
const terkaya   = rekeningAktif.reduce((max, a) => a.saldo > max.saldo ? a : max);
const termiskin = rekeningAktif.reduce((min, a) => a.saldo < min.saldo ? a : min);

// 3. Bisa juga pakai optional chaining & nullish coalescing

nasabahBaru.forEach((item) => {
  console.log(`ID      : ${item?.id}`);                                    // ✅
  console.log(`Pemilik : ${item?.pemilik?.nama ?? "Data belum tersedia"}`);// ✅
  console.log(`Saldo   : ${rp(item?.saldo ?? "Data belum tersedia")}`);    // ⚠️
  console.log(`Tipe    : ${item?.tipe ?? "Data belum tersedia"}`);         // ✅
  console.log(`Kota    : ${item?.pemilik?.kota ?? "Data belum tersedia"}`);// ✅
});

// Masalah:
console.log(`Saldo : ${rp(item?.saldo ?? "Data belum tersedia")}`);

// Trace untuk ACC-007 (tidak punya saldo):
// item?.saldo → undefined
// undefined ?? "Data belum tersedia" → "Data belum tersedia" ✅
// rp("Data belum tersedia") → dipanggil dengan STRING!

// Fungsi rp Anda:
const rp = angka =>
  typeof angka === "number"
    ? `Rp. ${angka.toLocaleString("id-ID")}`
    : angka; // ← Return string apa adanya

// Jadi rp("Data belum tersedia") = "Data belum tersedia"
// Kebetulan tidak crash, tapi logikanya kurang tepat!
// rp() seharusnya hanya menerima number!

// ✅ Yang lebih benar:
nasabahBaru.forEach((item) => {
  const saldo  = item?.saldo;
  const saldoDisplay = typeof saldo === "number"
    ? rp(saldo)
    : "Data belum tersedia";
  // Cek tipe SEBELUM masuk ke rp()

  console.log(`ID      : ${item?.id      ?? "Tidak ada ID"}`);
  console.log(`Pemilik : ${item?.pemilik?.nama  ?? "Data belum tersedia"}`);
  console.log(`Saldo   : ${saldoDisplay}`);
  console.log(`Tipe    : ${item?.tipe    ?? "Data belum tersedia"}`);
  console.log(`Kota    : ${item?.pemilik?.kota  ?? "Data belum tersedia"}`);
  console.log("");
});

// ACC-005:
ID      : ACC-005
Pemilik : Eka Putri
Saldo   : Rp. 5.000.000
Tipe    : Data belum tersedia
Kota    : Data belum tersedia

// ACC-006 (pemilik: null):
ID      : ACC-006
Pemilik : Data belum tersedia  ← null?.nama = undefined → ?? bekerja! ✅
Saldo   : Rp. 0               ← saldo 0, bukan null → ditampilkan ✅
Tipe    : tabungan
Kota    : Data belum tersedia

// ACC-007 (hampir kosong):
ID      : ACC-007
Pemilik : Data belum tersedia
Saldo   : Data belum tersedia
Tipe    : Data belum tersedia
Kota    : Data belum tersedia