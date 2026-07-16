// SOAL 1 - Function BMI Calculator
// Buat function hitungBMI(berat, tinggi)
// - berat dalam kg
// - tinggi dalam meter
// - Rumus: berat / (tinggi * tinggi)
// Return kategori:
//   BMI < 18.5        → "Kurus"
//   BMI 18.5 - 24.9   → "Normal"
//   BMI 25 - 29.9     → "Gemuk"
//   BMI >= 30         → "Obesitas"
// Test dengan: hitungBMI(70, 1.75)

// Jawab:
function hitungBMI(berat, tinggi) {
  const bmi = berat / (tinggi * tinggi);
  const kategori =
    bmi >= 30
      ? "Obesitas"
      : bmi >= 25
        ? "Gemuk"
        : bmi >= 18.5
          ? "Normal"
          : "Kurus";
  return `BMI Anda: ${bmi}, -> ${kategori}`;
}
console.log(hitungBMI(70, 1.75));

// SOAL 2 - Function Diskon
// Buat arrow function hitungDiskon(harga, persenDiskon)
// - Return harga setelah diskon
// - Gunakan default parameter: persenDiskon = 10
// Test:
//   hitungDiskon(100000)      → 90000
//   hitungDiskon(200000, 20)  → 160000
//
// Jawab:
const hitungDiskon = (harga, persenDiskon = 10) => {
  const diskon = (harga * persenDiskon) / 100;
  const hargaSetelahDiskon = harga - diskon;
  return hargaSetelahDiskon;
};
console.log(hitungDiskon(100000));
console.log(hitungDiskon(200000, 20));

// SOAL 3 - Loop Bintang (Star Pattern)
// Buat pattern seperti ini menggunakan for loop:
// *
// **
// ***
// ****
// *****
// HINT: Gunakan nested loop atau string repeat
// Jawab:
const star = "*";
for (let i = 1; i <= 5; i++) {
  console.log(star.repeat(i));
}

// SOAL 4 - Function + Loop
// Buat function tampilkanTabelPerkalian(angka)
// yang menampilkan tabel perkalian dari 1 sampai 10
// Contoh output tampilkanTabelPerkalian(7):
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
// Jawab:
function tampilkanTabelPerkalian(angka) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
  }
}
console.log(tampilkanTabelPerkalian(7));

// SOAL 5 - Sum of Numbers
// Buat function jumlahAngka(sampai)
// yang menghitung total dari 1 sampai n
// Contoh: jumlahAngka(5) → 1+2+3+4+5 = 15
// Test: jumlahAngka(100) → berapa hasilnya?
// Jawab:
const jumlahAngka = (sampai) => {
  let total = 0;
  for (let i = 1; i <= sampai - 1; i++) {
    total += i;
  }
  return total;
};

console.log(jumlahAngka(5)); // 15   (1+2+3+4+5)
console.log(jumlahAngka(100)); // 5050 (jawaban: 5050!)
// Tambahan bonus:
// Ada rumus matematika dari Gauss (matematikawan legendaris):
// Total 1 sampai n = n * (n + 1) / 2

const jumlahAngkaCepat = (n) => (n * (n + 1)) / 2;

console.log(jumlahAngkaCepat(5)); // 15
console.log(jumlahAngkaCepat(100)); // 5050

// Sama hasilnya, tapi tanpa loop!
// Ini contoh bahwa mengerti matematika
// bisa buat kode Anda jauh lebih efisien

// CHALLENGE 1 - Prime Number Checker
// Buat function isPrime(number) yang return true/false
// Prima = angka yang hanya bisa dibagi 1 dan dirinya sendiri
// (2, 3, 5, 7, 11, 13, 17, ...)
// Test: isPrime(7) → true, isPrime(10) → false
// Jawab:
const isPrima = function (number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

// CHALLENGE 2 - Reverse String
// Buat function reverseString(str)
// yang membalik urutan huruf
// Gunakan for loop!
// Test: reverseString("Anas") → "sanA"
// HINT: bisa dengan for loop mundur atau menyusun dari belakang
// jAWAB:
function reverseString(str) {
  let stringDibalik = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringDibalik += str[i];
  }
  return stringDibalik;
}
console.log(reverseString(Javascript));

// CHALLENGE 3 - Fibonacci Sequence
// Buat function fibonacci(n) yang menampilkan
// n angka pertama dari deret Fibonacci
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// (angka berikutnya = jumlah 2 angka sebelumnya)
// Test: fibonacci(10) → tampilkan 10 angka pertama
// Jawab:
const fibonacci = (n) => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const deretFibonacci = [0, 1];
  for (let i = 2; i <= n - 1; i++) {
    deretFibonacci[i] = deretFibonacci[i - 1] + deretFibonacci[i - 2];
  }
  return deretFibonacci;
};
console.log(fibonacci(5));

const fibonacciPrime = (n) => {
  const fibonacciArray = fibonacci(n);
  for (const num of fibonacciArray) {
    let result = [];
    if (isPrime(num)) {
      result.push(num);
    }
  }
  return result;
};
