
// ================================================
// LATIHAN 2 — Functions
// Kerjakan sendiri dulu!
// ================================================

// SOAL 1:
// Buat function "perkenalan" yang menerima
// nama, usia, dan kota, lalu return string:
// "Halo! Nama saya [nama], usia [usia] tahun, dari [kota]."
// Gunakan arrow function & template literal!
// Panggil dengan data kamu sendiri.



// SOAL 2:
// Buat function "hitungBMI" yang menerima
// berat (kg) dan tinggi (meter), lalu:
// - Hitung BMI = berat / (tinggi * tinggi)
// - Return object berisi { bmi, kategori }
// Kategori:
//   BMI < 18.5  → "Kurus"
//   BMI 18.5-24.9 → "Normal"
//   BMI 25-29.9 → "Gemuk"
//   BMI >= 30   → "Obesitas"
//
// Contoh: hitungBMI(70, 1.75)
// → { bmi: 22.86, kategori: "Normal" }



// SOAL 3:
// Buat object "konversiSuhu" yang berisi 3 method:
// - keCelsius(fahrenheit) → return hasil konversi
// - kefahrenheit(celsius) → return hasil konversi
// - keKelvin(celsius)     → return hasil konversi
//
// Rumus:
// C = (F - 32) × 5/9
// F = (C × 9/5) + 32
// K = C + 273.15
//
// Tampilkan hasilnya dengan console.log yang informatif
// Contoh: "100°C = 212°F"



// SOAL 4:
// Buat Higher Order Function "terapkanDiskon"
// Parameter: (harga, fnDiskon)
// fnDiskon adalah function yang menghitung diskon
//
// Buat 3 function diskon terpisah:
// - diskon10 → kurangi 10%
// - diskon25 → kurangi 25%
// - gratisOngkir → kurangi 15000 (flat)
//
// Lalu panggil terapkanDiskon dengan masing-masing



// SOAL 5 — CHALLENGE:
// Buat function "validasiPassword" yang menerima
// sebuah password (string) dan return object:
// {
//   valid: true/false,
//   pesan: "..."
// }
//
// Rules validasi:
// - Minimal 8 karakter
// - Mengandung angka
// - Mengandung huruf besar
//
// Hints yang boleh dipakai:
// password.length          → cek panjang
// /[0-9]/.test(password)  → cek ada angka
// /[A-Z]/.test(password)  → cek ada huruf besar

// 1#
const perkenalan = (nama, usia, kota) => `Halo! nama saya ${nama}, usia ${usia} tahun, dari ${kota}`;
console.log(perkenalan("Anas", 47, "Ciamis"));

//2#
const hitungBMI = (berat, tinggi) => {
    const angkaBMI = berat / tinggi ** 2;
    const kategori =
    angkaBMI >= 30 ? "Obesitas" :
    angkaBMI >= 25 ? "Gemuk" :
    angkaBMI >= 18.5 ? "Normal" : "Kurus";
    return {bmi: Number(angkaBMI.toFixed(2)), kategori}
}
console.log(hitungBMI(70, 1.75))

//#3
const konversiSuhu = {
    nama: "konversiShu",
    keCelsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
    keFahrenheit: (celsius) => (celsius * 9/5) + 32,
    keKelvin: (celsius) => celsius + 273.15
}
const {keCelsius, keFahrenheit, keKelvin} = konversiSuhu;
console.log(`52°F = ${keCelsius(52).toFixed(2)}°C`)

// 4#
const terapkanDiskon = (harga, fnDiskon) => harga - fnDiskon(harga);
const diskon10 = (harga) => harga *  0.1;
const diskon25 = (harga) => harga * 0.25;
const gratisOngkir = () => 15000;
const hargaSetlahDiskon = terapkanDiskon(250000, diskon25);
console.log(`Haerga 250000 setelah diskon menjadi ${hargaSetlahDiskon}`)

//Bonus
function validasiPassword(password) {
    if (password.length < 8) {
        return {
            valid: false,
            pesan: "Password minimal 8 karakter"
        };
    }
    if (!/[0-9]/.test(password)) {
        return {
            valid: false,
            pesan: "Password harus mengandung angka"
        };
    }
    if (!/[A-Z]/.test(password)) {
        return {
            valid: false,
            pesan: "Password harus mengandung huruf besar"
        };
    }
    return {
        valid: true,
        pesan: "Password valid"
    };
}
// Contoh penggunaan
console.log(validasiPassword("abc123"));
console.log(validasiPassword("abcdefgh"));
console.log(validasiPassword("abcdefg1"));
console.log(validasiPassword("Abcdefg1"));