// Soal 1
const angka1 = 150000;
const angka2 = 75000;

console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);
console.log(`${angka1} - ${angka2} = ${angka1 - angka2}`);
console.log(`${angka1} x ${angka2} = ${angka1 * angka2}`);
console.log(`${angka1} / ${angka1} = ${angka1 / angka2}`);
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

const isGajiEligible = gaji >= 5000000;
const isUsiaEligible = usia >= 21 && usia <= 60;
const isDebtFree = !isDebt
const isCreditApproved = isGajiEligible && isUsiaEligible && isDebtFree;

// Soal 3
const nilaiUjian = 85;
const hasilUjian = nilaiUjian >= 90 ? console.log(`Nilai: ${nilaiUjian} | Grade: A | Status: LULUS`)
: nilaiUjian >= 80 ? console.log(`Nilai: ${nilaiUjian} | Grade: B | Status: LULUS`)
: nilaiUjian >= 70 ? console.log(`Nilai: ${nilaiUjian} | Grade: C | Status: LULUS`)
: nilaiUjian >= 60 ? console.log(`Nilai: ${nilaiUjian} | Grade: D | Status: LULUS`)
: console.log(`Nilai: ${nilaiUjian} | Grade: E | Status: TIDAK LULUS`);

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
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
