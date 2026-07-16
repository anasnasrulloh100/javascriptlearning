// Tujuan latihan ini:
// → Menggabungkan variable, operator, control flow,
//  function, dan loop dalam satu kesatuan
// → Mensimulasikan problem solving dunia nyata
// → Melatih Anda berpikir seperti engineer profesional

// Tingkat kesulitan:
// Latihan 1 → ⭐⭐ Menengah
// Latihan 2 → ⭐⭐⭐ Menengah-Tinggi
// Latihan 3 → ⭐⭐⭐⭐ Tinggi

// KONTEKS:
// Anda diminta membuat logic inti sebuah ATM sederhana.
// Belum ada UI, cukup function dan console.log

// DATA AWAL - JANGAN DIUBAH
const namaUser = "Anas Nasrulloh";
const noPIN = 2408;
const saldoAwal = 2500000;

// ============================================
// YANG HARUS DIBUAT:
// ============================================

// FUNCTION 1: cekPIN(inputPIN)
// - Terima input PIN dari user
// - Return true jika PIN benar, false jika salah

// FUNCTION 2: cekSaldo(saldo)
// - Tampilkan saldo dengan format yang rapi
// - Contoh output: "Saldo Anda: Rp 2.500.000"
// - HINT: gunakan toLocaleString("id-ID") untuk format angka
//   Contoh: (2500000).toLocaleString("id-ID") → "2.500.000"

// FUNCTION 3: tarikTunai(saldo, jumlah)
// - Cek apakah jumlah penarikan valid:
//   ✅ Jumlah harus kelipatan 50.000
//   ✅ Jumlah tidak boleh melebihi saldo
//   ✅ Jumlah minimal 50.000
//   ✅ Jumlah maksimal 1.500.000 per transaksi
// - Jika valid → return saldo baru setelah penarikan
// - Jika tidak valid → return pesan error yang jelas

// FUNCTION 4: transferSaldo(saldo, jumlah, namaTujuan)
// - Cek apakah transfer valid:
//   ✅ Jumlah tidak boleh melebihi saldo
//   ✅ Jumlah minimal 10.000
// - Jika valid → return saldo baru + tampilkan konfirmasi
// - Jika tidak valid → return pesan error

// ============================================
// TEST SEMUA FUNCTION:
// ============================================

// Test cekPIN:
// cekPIN(1234)  → false
// cekPIN(2408)  → true

// Test cekSaldo:
// cekSaldo(2500000) → "Saldo Anda: Rp 2.500.000"

// Test tarikTunai:
// tarikTunai(2500000, 500000)  → saldo baru: 2000000
// tarikTunai(2500000, 300000)  → error: bukan kelipatan 50.000
// tarikTunai(2500000, 2000000) → error: melebihi batas per transaksi
// tarikTunai(2500000, 3000000) → error: saldo tidak cukup

// Test transferSaldo:
// transferSaldo(2500000, 500000, "Budi") → saldo baru: 2000000
// transferSaldo(2500000, 5000, "Budi")   → error: minimal 10.000
// transferSaldo(100000, 500000, "Budi")  → error: saldo tidak cukup

// ============================================
// BONUS: Simulasikan skenario ATM lengkap!
// ============================================
// 1. User masukkan PIN (benar/salah)
// 2. Jika PIN benar → tampilkan saldo
// 3. User tarik tunai 500.000
// 4. Tampilkan saldo terbaru
// 5. User transfer 300.000 ke "Siti"
// 6. Tampilkan saldo akhir

const formatSaldo = (angka) =>
  angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

const cekPIN = (inputPIN) => inputPIN === noPIN;

console.log(cekPIN(1234));
console.log(cekPIN(2408));

const cekSaldo = (saldo) => `Saldo Anda: ${formatSaldo(saldo)}`;

console.log(cekSaldo(2500000));
console.log(cekSaldo(1500000));

const tarikTunai = (saldo, jumlah) => {
  const isPenarikanValid =
    jumlah % 50_000 !== 0
      ? `Bukan kelipatan 50.000`
      : jumlah > saldo
        ? `Saldo Anda tidak cukup`
        : jumlah < 50_000
          ? `Minimal penarikan 50.000`
          : jumlah > 1_500_000
            ? `Maksimal penarikan 1.500.000`
            : saldo - jumlah;
  return isPenarikanValid;
};
console.log(tarikTunai(2_000_000, 200_000));
console.log(tarikTunai(2_000_000, 120_000));
console.log(tarikTunai(2_000_000, 2_000_000));
console.log(tarikTunai(2_000_000, 3_000_000));

const transferSaldo = (saldo, jumlah, namaTujuan) =>
  jumlah > saldo
    ? `Saldo Anda tidak cukup`
    : jumlah < 10_000
      ? `Minimal transfer 10.000`
      : saldo - jumlah;

console.log(transferSaldo(2_000_000, 500000, "Budi"));
console.log(transferSaldo(2_000_000, 5000, "Budi"));
console.log(transferSaldo(1_000_000, 3_000_0000, "Budi"));

const simulasiATM = () => {
  const PIN = 1234;
  const saldo = saldoAwal;
  const jumlahTarikTunai = 500000;
  const jumlahTransfer = 300000;
  const tujuanTransfer = "Budi";
  if (cekPIN(PIN) === true) {
    const tampilkanSaldo = `Selamat datang ${namaUser}. ${cekSaldo(saldo)}`;
    console.log(tampilkanSaldo);
    const saldoSetelahTarikTunai = tarikTunai(saldo, jumlahTarikTunai);
    if (typeof saldoSetelahTarikTunai === "number") {
      console.log(
        `Penarikan tunai sebesar ${formatSaldo(jumlahTarikTunai)} berhasil. ${cekSaldo(saldoSetelahTarikTunai)}`,
      );
      const saldoSetelahTransfer = transferSaldo(
        saldoSetelahTarikTunai,
        jumlahTransfer,
        tujuanTransfer,
      );

      if (typeof saldoSetelahTransfer === "number") {
        console.log(
          `Transfer sebesar ${formatSaldo(jumlahTransfer)} ke ${tujuanTransfer} berhasil. ${cekSaldo(saldoSetelahTransfer)}`,
        );
      } else {
        console.log(`Transfer gagal: ${saldoSetelahTransfer}`);
      }
    } else {
      console.log(`Penarikan tunai gagal: ${saldoSetelahTarikTunai}`);
    }
  } else {
    console.log(`PIN salah, akses ditolak`);
  }
};
simulasiATM();
