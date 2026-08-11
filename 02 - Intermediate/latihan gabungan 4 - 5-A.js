// DATA - Jangan diubah!
const movies = [
  {
    id: 1,
    judul: "Inception",
    genre: ["sci-fi", "thriller", "action"],
    tahun: 2010,
    rating: 8.8,
    durasi: 148,
    bahasa: "English",
    tersedia: true,
  },
  {
    id: 2,
    judul: "Parasite",
    genre: ["drama", "thriller"],
    tahun: 2019,
    rating: 8.6,
    durasi: 132,
    bahasa: "Korean",
    tersedia: true,
  },
  {
    id: 3,
    judul: "The Dark Knight",
    genre: ["action", "crime", "drama"],
    tahun: 2008,
    rating: 9.0,
    durasi: 152,
    bahasa: "English",
    tersedia: false,
  },
  {
    id: 4,
    judul: "Spirited Away",
    genre: ["animation", "adventure", "fantasy"],
    tahun: 2001,
    rating: 8.6,
    durasi: 125,
    bahasa: "Japanese",
    tersedia: true,
  },
  {
    id: 5,
    judul: "Interstellar",
    genre: ["sci-fi", "drama", "adventure"],
    tahun: 2014,
    rating: 8.6,
    durasi: 169,
    bahasa: "English",
    tersedia: true,
  },
  {
    id: 6,
    judul: "The Godfather",
    genre: ["crime", "drama"],
    tahun: 1972,
    rating: 9.2,
    durasi: 175,
    bahasa: "English",
    tersedia: true,
  },
  {
    id: 7,
    judul: "Your Name",
    genre: ["animation", "drama", "romance"],
    tahun: 2016,
    rating: 8.4,
    durasi: 112,
    bahasa: "Japanese",
    tersedia: false,
  },
  {
    id: 8,
    judul: "Avengers: Endgame",
    genre: ["action", "adventure", "sci-fi"],
    tahun: 2019,
    rating: 8.4,
    durasi: 181,
    bahasa: "English",
    tersedia: true,
  },
];



// ============================================
// SOAL 1: Array Methods
// ============================================

// a. Tampilkan semua film yang tersedia
//    Format: "1. Inception (2010) ⭐ 8.8 - 148 menit"
//    Gunakan filter + forEach!
movies.filter(({tersedia}) => tersedia).forEach((m, index) => console.log(`${index +1}. ${m.judul} (${m.tahun}) ⭐ ${m.rating} - ${m.durasi} menit`));

// b. Cari film dengan rating tertinggi
//    Gunakan reduce! (tanpa sort)
//    Output: "Film terbaik: The Godfather (9.2)"
const topRating = movies.reduce((acc, movie) => movie.rating > acc.rating ? movie : acc, movies[0]);
console.log(`Film terbaik: ${topRating.judul} (${topRating.rating})`)

// c. Hitung total durasi semua film yang tersedia
//    Output: "Total durasi: X jam Y menit"
//    Gunakan filter + reduce!
const totalDurasiFilm = (movies) => {
    const durasi = movies.filter(({tersedia}) => tersedia).reduce((acc, m) => acc + m.durasi, 0);
    const jam = Math.floor(durasi / 60);
    const menit = Math.floor((durasi % 60) / 60);
    return `Total durasi: ${jam} jam ${menit} menit`;
}
console.log(totalDurasiFilm(movies));

// d. Buat daftar semua genre unik dari semua film
//    Output: ["sci-fi", "thriller", "action", "drama", ...]
//    HINT: Gunakan reduce + includes untuk hindari duplikat!
const daftarGenreUnik = movies.reduce((acc, movie) => {
  movie.genre.forEach((g) => {
    if (!acc.includes(g)) {
      acc.push(g);
    }
  });
  return acc;
}, []);
console.log(daftarGenreUnik);

// ============================================
// SOAL 2: Object Destructuring & Methods
// ============================================

// a. Gunakan destructuring untuk tampilkan info film pertama:
//    "Judul    : Inception"
//    "Tahun    : 2010"
//    "Rating   : 8.8"
//    "Genre    : sci-fi, thriller, action"
//    "Bahasa   : English"
const [{judul, tahun, rating, genre, bahasa}] = movies;
console.log(`
Judul   : ${judul}
Tahun   : ${tahun}
Rating  : ${rating}
Genre   : ${genre.join(", ")}
Bahasa  : ${bahasa}
`)


// b. Buat function updateRating(movie, ratingBaru)
//    - Return film BARU dengan rating diupdate (immutable!)
//    - Validasi: rating harus antara 0-10
//    - Tampilkan rating lama dan baru
//    - Test: updateRating(movies[0], 9.1)
const updateRating = (movie, ratingBaru) => {
  if (ratingBaru < 0 || ratingBaru > 10) {
    console.log("Rating harus antara 0-10");
    return movie;
  }
  console.log(`Rating lama: ${movie.rating}`);
  console.log(`Rating baru: ${ratingBaru}`);
  return { ...movie, rating: ratingBaru };
};

console.log(updateRating(movies[2], 11))


// c. Gunakan Object.entries() untuk tampilkan
//    semua property film ke-2 (Parasite) kecuali "id"
//    Format: "judul    → Parasite"

Object.entries(movies[1]).forEach(([key, value]) => {
  if (key !== "id") {
    console.log(`${key.padEnd(10)} → ${value}`);
  }
});
// ============================================
// SOAL 3: Method Chaining
// ============================================

// a. Tampilkan judul film action yang tersedia,
//    diurutkan dari rating tertinggi
//    HINT: genre adalah array, gunakan .includes()!
const filmAction = movies.filter(m => m.genre.includes("action") && m.tersedia).sort((a, b) => b.rating - a.rating);
filmAction.forEach((m, index) => console.log(`${index +1}. ${m.judul}, Rating: ${m.rating}`)
);



// b. Hitung rata-rata rating film per bahasa
//    Output:
//    "English  → rata-rata: 8.9"
//    "Korean   → rata-rata: 8.6"
//    "Japanese → rata-rata: 8.5"
//    HINT: Gunakan reduce untuk group by bahasa!
const rataRataRatingPerBahasa = movies.reduce((acc, movie) => {
  if (!acc[movie.bahasa]) {
    acc[movie.bahasa] = { totalRating: 0, count: 0 };
  }
  acc[movie.bahasa].totalRating += movie.rating;
  acc[movie.bahasa].count++;
  return acc;
}, {});

Object.entries(rataRataRatingPerBahasa).forEach(([bahasa, { totalRating, count }]) => {
  const rataRata = totalRating / count;
  console.log(`${bahasa} → rata-rata: ${rataRata.toFixed(1)}`);
});

// c. Buat fungsi rekomendasiFilm(genre, minRating) yang:
//    - Filter film berdasarkan genre (case insensitive)
//    - Filter rating >= minRating
//    - Filter hanya yang tersedia
//    - Return array { judul, rating, durasi }
//    - Urutkan dari rating tertinggi
//    Test:
//    rekomendasiFilm("sci-fi", 8.5)
//    rekomendasiFilm("drama", 8.6)
//    rekomendasiFilm("action", 9.0)
// const genrePilihan = "Laga"
// const minRating = 2;
const pilihGenre = (genre, minRating) => {
         if (!daftarGenreUnik.includes(genre.toLowerCase())) return `Genre ${genre} tidak ditemukan`;
   
    const hasil = movies.filter(m => m.genre.includes(genre.toLowerCase()) && m.rating >= minRating && m.tersedia)
    .map(m => ({judul: m.judul, rating: m.rating, durasi: m.durasi }));

     return hasil;
}
console.log(pilihGenre("drama", 8))
