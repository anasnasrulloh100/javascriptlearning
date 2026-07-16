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
//   const gaji = 6000000;
//   const usia = 28;
//   const isDebt = false;
// Tampilkan: "Kredit Disetujui ✅" atau "Kredit Ditolak ❌"


// SOAL 3 - Konverter Nilai ke Grade
// Input: const nilaiUjian = 85;
// Output menggunakan TERNARY operator:
// 90-100  → "A"
// 80-89   → "B"  
// 70-79   → "C"
// 60-69   → "D"
// < 60    → "F"
// Tampilkan: "Nilai: 85 | Grade: B | Status: LULUS"


// SOAL 4 - Kalkulator Ongkos Kirim
// Buat sistem ongkos kirim berdasarkan kota tujuan:
// Switch case untuk: "Jakarta", "Bandung", "Surabaya", 
//                    "Medan", "Makassar"
// Tentukan sendiri harga ongkirnya
// Tampilkan: "Ongkos kirim ke [kota]: Rp [harga]"


// Soal 1
const angka1 = 150000;
const angka2 = 75000;

console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);
console.log(`${angka1} - ${angka2} = ${angka1 - angka2}`);
console.log(`${angka1} x ${angka2} = ${angka1 * angka2}`);
console.log(`${angka1} / ${angka2} = ${angka1 / angka2}`);
console.log(`${angka1} % ${angka2} = ${angka1 % angka2}`)

// Soal 2
const gaji = 6000000;
const usia  = 28;
const isDebt = false;
if (gaji >= 5000000 && usia <= 50 && !isDebt) {
  console.log("Kredit Disetujui ✅")
} else {
  console.log("Kredit Ditolak ❌")
}

// versi sesuai standar industri
const isGajiEligible = gaji >= 5000000;
const isUsiaEligible = usia >= 21 && usia <= 60;
const isDebtFree = !isDebt
const isCreditApproved = isGajiEligible && isUsiaEligible && isDebtFree;
const creditApproval = isCreditApproved ? "Kredit Disetujui ✅" : "Kredit Ditolak ❌";
console.log(`Gaji eligible: ${isGajiEligible}\n
Usia eligible: ${isUsiaEligible} \n
Debt free: ${isDebtFree} \n
Status kredit: ${creditApproval}`)

// Soal 3
const nilaiUjian = 85;
const hasilUjian = nilaiUjian >= 90 ? console.log(`Nilai: ${nilaiUjian} | Grade: A | Status: LULUS`)
: nilaiUjian >= 80 ? console.log(`Nilai: ${nilaiUjian} | Grade: B | Status: LULUS`)
: nilaiUjian >= 70 ? console.log(`Nilai: ${nilaiUjian} | Grade: C | Status: LULUS`)
: nilaiUjian >= 60 ? console.log(`Nilai: ${nilaiUjian} | Grade: D | Status: LULUS`)
: console.log(`Nilai: ${nilaiUjian} | Grade: E | Status: TIDAK LULUS`);

// versi yang sudah diperbaiki:
const grade =
    nilaiUjian >= 90 ? "A" :
    nilaiUjian >= 80 ? "B" :
    nilaiUjian >= 70 ? "C" :
    nilaiUjian >= 60 ? "D" : "F";

const status = nilaiUjian >= 60 ? "LULUS" : "TIDAK LULUS";

console.log(`Nilai: ${nilaiUjian} | Grade: ${grade} | Status: ${status}`);

// Soal 4
const kotaTujuan = "Jakarta";
const tarif1 = 15000;
const tarif2 = 35000;
switch (kotaTujuan) {
  case "Jakarta":
  case "Bandung":
  case "Surabaya":
    console.log(`Ongkos kirim ke ${kotaTujuan}: Rp. ${tarif1}`);
  break;
  case "Medan":
  case "Makassar":
    console.log(`Ongkos kirim ke ${kotaTujuan}: Rp. ${tarif2}`);
  break;
  default:
    console.log(`Kota ${kotaTujuan} diluar jangkauan layanan Kami`); 
}

// Challange Bonus

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
