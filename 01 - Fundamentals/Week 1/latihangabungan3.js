// KONTEKS:
// Anda diminta membuat sistem penilaian siswa
// untuk sebuah lembaga kursus coding

// DATA SISWA - JANGAN DIUBAH
const siswa1 = { nama: "Anas", nilai: [85, 92, 78, 95, 88] };
const siswa2 = { nama: "Budi", nilai: [70, 65, 80, 75, 72] };
const siswa3 = { nama: "Citra", nilai: [95, 98, 92, 97, 96] };
const siswa4 = { nama: "Deni", nilai: [60, 55, 65, 58, 62] };
const siswa5 = { nama: "Eka", nilai: [78, 82, 79, 85, 80] };

// Catatan: Array nilai bisa diakses dengan:
// siswa1.nilai[0] → 85 (nilai pertama)
// siswa1.nilai[1] → 92 (nilai kedua)
// dst...

// ============================================
// YANG HARUS DIBUAT:
// ============================================

// FUNCTION 1: hitungRataRata(arrayNilai)
// - Hitung rata-rata dari array nilai
// - HINT: Gunakan for...of untuk jumlahkan semua nilai
// - Return rata-rata (bulatkan 1 desimal dengan .toFixed(1))
// - Test: hitungRataRata([85, 92, 78, 95, 88]) → 87.6

// FUNCTION 2:enentukanGrade(rataRata)
// - Return grade berdasarkan rata-rata:
//   90 - 100 → "A" + "Cumlaude 🏆"
//   80 - 89  → "B" + "Sangat Baik ⭐"
//   70 - 79  → "C" + "Baik 👍"
//   60 - 69  → "D" + "Cukup ⚠️"
//   < 60     → "E" + "Perlu Remedial ❌"

// FUNCTION 3: cekKelulusan(rataRata)
// - Nilai kelulusan minimal: 70
// - Return "LULUS ✅" atau "TIDAK LULUS ❌"

// FUNCTION 4: nilaiTertinggi(arrayNilai)
// - Cari nilai tertinggi dari array
// - Gunakan for...of loop! (belum boleh pakai Math.max)
// - Return nilai tertinggi

// FUNCTION 5: nilaiTerendah(arrayNilai)
// - Cari nilai terendah dari array
// - Gunakan for...of loop! (belum boleh pakai Math.min)
// - Return nilai terendah

// FUNCTION 6: cetakRaporSiswa(siswa)
// - Gabungkan SEMUA function di atas
// - Tampilkan rapor seperti format ini:

// ============================================
// OUTPUT YANG DIHARAPKAN:
// ============================================

/*
╔══════════════════════════════════════╗
║           RAPOR SISWA               ║
╠══════════════════════════════════════╣
║ Nama      : Anas                    ║
║ Nilai     : 85, 92, 78, 95, 88      ║
║ Tertinggi : 95                      ║
║ Terendah  : 78                      ║
║ Rata-rata : 87.6                    ║
║ Grade     : B - Sangat Baik ⭐      ║
║ Status    : LULUS ✅                ║
╚══════════════════════════════════════╝
*/

// ============================================
// TEST:
// ============================================
// cetakRaporSiswa(siswa1)
// cetakRaporSiswa(siswa3)
// cetakRaporSiswa(siswa4)

// ============================================
// BONUS - RANKING KELAS:
// ============================================
// Buat function rankingKelas() yang:
// 1. Hitung rata-rata semua siswa
// 2. Tampilkan ranking dari tertinggi ke terendah
// 3. Format output:

/*
==============================
      RANKING KELAS
==============================
🥇 Ranking 1 : Citra  (95.6)
🥈 Ranking 2 : Anas   (87.6)
🥉 Ranking 3 : Eka    (80.8)
   Ranking 4 : Budi   (72.4)
   Ranking 5 : Deni   (60.0)
==============================
*/

// HINT untuk ranking:
// Gunakan nested loop atau sorting manual
// (kita belum belajar .sort() jadi pakai loop biasa)
// Algoritma bubble sort sederhana:
// Bandingkan 2 angka, kalau salah urutan → tukar posisinya
// Ulangi sampai semua terurut

const hitungRataRata = (arrayNilai) => {
  let total = 0;
  for (const nilai of arrayNilai) {
    total += nilai;
  }
  return total / arrayNilai.length;
};
const menentukanGrade = (rataRata) => {
  if (rataRata >= 90) {
    return "A - Cumlaude 🏆";
  } else if (rataRata >= 80) {
    return "B - Sangat Baik ⭐";
  } else if (rataRata >= 70) {
    return "C - Baik 👍";
  } else if (rataRata >= 60) {
    return "D - Cukup ⚠️";
  } else {
    return "E - Perlu Remedial ❌";
  }
};
const cekKelulusan = (rataRata) => {
  return rataRata >= 70 ? "LULUS ✅" : "TIDAK LULUS ❌";
};
const nilaiTertinggi = (arrayNilai) => {
  let tertinggi = arrayNilai[0];
  for (const nilai of arrayNilai) {
    if (nilai > tertinggi) {
      tertinggi = nilai;
    }
  }
  return tertinggi;
};
const nilaiTerendah = (arrayNilai) => {
  let terendah = arrayNilai[0];
  for (const nilai of arrayNilai) {
    if (nilai < terendah) {
      terendah = nilai;
    }
  }
  return terendah;
};
const cetakRaporSiswa = (siswa) => {
  const rataRata = hitungRataRata(siswa.nilai);
  const grade = menentukanGrade(rataRata);
  const status = cekKelulusan(rataRata);
  const tertinggi = nilaiTertinggi(siswa.nilai);
  const terendah = nilaiTerendah(siswa.nilai);
  console.log("╔════════════════════════════════════╗");
  console.log("║           RAPOR SISWA                  ║");
  console.log("╠════════════════════════════════════╣");
  console.log(`║ Nama      : ${siswa.nama.padEnd(25)}║`);
  console.log(`║ Nilai     : ${siswa.nilai.join(", ").padEnd(25)}║`);
  console.log(`║ Tertinggi : ${tertinggi.toString().padEnd(25)}║`);
  console.log(`║ Terendah  : ${terendah.toString().padEnd(25)}║`);
  console.log(`║ Rata-rata : ${rataRata.toString().padEnd(25)}║`);
  console.log(`║ Grade     : ${grade.padEnd(25)}║`);
  console.log(`║ Status    : ${status.padEnd(25)}║`);
  console.log("╚════════════════════════════════════╝");
};
cetakRaporSiswa(siswa1);
cetakRaporSiswa(siswa3);
cetakRaporSiswa(siswa4);

// Sortir manual untuk ranking kelas dengan nested loop
const rankingKelas = () => {
  const siswaList = [siswa1, siswa2, siswa3, siswa4, siswa5];
  const n = siswaList.length;

  // Bubble sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const rataRataA = hitungRataRata(siswaList[j].nilai);
      const rataRataB = hitungRataRata(siswaList[j + 1].nilai);
      if (rataRataA < rataRataB) {
        [siswaList[j], siswaList[j + 1]] = [siswaList[j + 1], siswaList[j]];
      }
    }
  }

  console.log("==============================");
  console.log("      RANKING KELAS");
  console.log("==============================");
  siswaList.forEach((siswa, index) => {
    const emoji =
      index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "   ";
    const rataRata = hitungRataRata(siswa.nilai);
    console.log(
      `${emoji} Ranking ${index + 1} : ${siswa.nama.padEnd(10)} (${rataRata})`,
    );
  });
  console.log("==============================");
};
rankingKelas();
