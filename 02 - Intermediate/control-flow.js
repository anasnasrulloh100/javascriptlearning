// ================================================
// LATIHAN 3 — Control Flow
// ================================================

// SOAL 1:
// Buat function "cekTiket" yang menerima:
// - usia (number)
// - punyaKTP (boolean)
// Return string pesan berdasarkan kondisi:
// - Usia < 5               → "Gratis!"
// - Usia 5-11              → "Tiket Anak: Rp 25.000"
// - Usia 12-17 DAN punyaKTP  → "Tiket Remaja: Rp 50.000"
// - Usia 12-17 tanpa KTP   → "Butuh KTP untuk tiket remaja"
// - Usia >= 18 DAN punyaKTP → "Tiket Dewasa: Rp 100.000"
// - Usia >= 18 tanpa KTP   → "Tunjukkan KTP untuk masuk"
const cekTiket = (usia, punyaKTP) => {
  if (usia < 5) {
    return "Gratis!";
  } else if (usia >= 5 && usia <= 11) {
    return "Tiket Anak: Rp 25.000";
  } else if (usia >= 12 && usia <= 17) {
    if (punyaKTP) {
      return "Tiket Remaja: Rp 50.000";
    } else {
      return "Butuh KTP untuk tiket remaja";
    }
  } else if (usia >= 18) {
    if (punyaKTP) {
      return "Tiket Dewasa: Rp 100.000";
    } else {
      return "Tunjukkan KTP untuk masuk";
    }
  }
};

// SOAL 2:
// Buat function "fizzbuzz" — soal klasik interview!
// Loop dari 1 sampai 50:
// - Kelipatan 3 DAN 5 → print "FizzBuzz"
// - Kelipatan 3       → print "Fizz"
// - Kelipatan 5       → print "Buzz"
// - Selain itu        → print angkanya
const fizzbuzz = () => {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};  

// SOAL 3:
// Buat function "rekomendasiFilm" menggunakan switch
// Parameter: genre (string)
// Case:
// "action"  → ["John Wick", "Mad Max", "Top Gun"]
// "comedy"  → ["The Hangover", "Superbad", "Knives Out"]
// "horror"  → ["Get Out", "Hereditary", "A Quiet Place"]
// "drama"   → ["The Shawshank", "Forrest Gump", "Interstellar"]
// default   → ["Tidak ada rekomendasi untuk genre ini"]
// Return array film, lalu tampilkan dengan loop for...of
const rekomendasiFilm = (genre) => {
  let film;
  switch (genre) {
    case "action":
      film = ["John Wick", "Mad Max", "Top Gun"];
      break;
    case "comedy":
      film = ["The Hangover", "Superbad", "Knives Out"];
      break;
    case "horror":
      film = ["Get Out", "Hereditary", "A Quiet Place"];
      break;
    case "drama":
      film = ["The Shawshank", "Forrest Gump", "Interstellar"];
      break;
    default:
      film = ["Tidak ada rekomendasi untuk genre ini"];
  }

  return film;
};
const tampilkanRekomendasiFilm = (genre) => {
  const film = rekomendasiFilm(genre);
  for (const f of film) {
    console.log(f);
  }
};

// SOAL 4:
// Gunakan optional chaining (?.) dan nullish coalescing (??)
// Diberikan array users:
const users = [
    { nama: "Anas", alamat: { kota: "Ciamis", provinsi: "Jawa Barat" } },
    { nama: "Budi", alamat: null },
    { nama: "Siti" },   // tidak punya property alamat sama sekali
    { nama: "Reza", alamat: { kota: "Bandung" } }  // tidak punya provinsi
]
// Loop semua users, tampilkan:
// "Anas tinggal di Ciamis, Jawa Barat"
// "Budi — Alamat tidak tersedia"
// "Siti — Alamat tidak tersedia"
// "Reza tinggal di Bandung, Provinsi tidak diketahui"
const tampilkanAlamatUsers = (users) => {
  for (const user of users) {
    const kota = user.alamat?.kota ?? "Alamat tidak tersedia";
    if (!kota) {
      console.log(`${user.nama} — Alamat tidak tersedia`);
    } else  {
      const provinsi = user.alamat?.provinsi ?? "Provinsi tidak diketahui";
      console.log(`${user.nama} tinggal di ${kota}, ${provinsi}`);
    }
  }
};

// SOAL 5 — CHALLENGE:
// Buat "mesinATM" — simulasi sederhana
// Punya state: saldo = 1500000
// Buat function "tarikTunai(jumlah)" yang:
// - Jumlah harus kelipatan 50000, jika tidak → "Masukkan kelipatan Rp 50.000"
// - Jumlah > saldo → "Saldo tidak mencukupi. Saldo: Rp [saldo]"
// - Jumlah <= 0    → "Jumlah tidak valid"
// - Jika valid → kurangi saldo, return "Berhasil tarik Rp [jumlah]. Sisa: Rp [saldo]"
// Test dengan beberapa skenario!
const saldoAwal = 1500000;
const tarikTunai = jumlah => {
  let saldo = saldoAwal; // private variable
  if (jumlah % 50000 !== 0) {
    return "Masukkan kelipatan Rp 50.000";
  }
  if (jumlah > saldo) {
    return `Saldo tidak mencukupi. Saldo: Rp ${saldo}`;
  }
  if (jumlah <= 0) {
    return "Jumlah tidak valid";
  }
  saldo -= jumlah;
  return `Berhasil tarik Rp ${jumlah}. Sisa: Rp ${saldo}`;
};