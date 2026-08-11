Setelah sesi ini, JavaScript Anda akan "hidup"!
Anda bisa:
→ Ambil data dari API nyata di internet
→ Komunikasi dengan server/database
→ Membangun aplikasi seperti aplikasi sungguhan

Ini fondasi dari SEMUA web app modern:
Tokopedia, Gojek, Instagram → semuanya pakai Async JS!

// ================================
// KENAPA PERLU ASYNC?
// ================================

// JavaScript berjalan SINGLE THREAD
// Artinya: 1 tugas selesai dulu, baru tugas berikutnya

// ANALOGI MASALAH:
// Bayangkan warung mie ayam dengan 1 pelayan:

// ❌ SYNCHRONOUS (Blocking):
// Pelanggan 1 pesan → masak → tunggu 5 menit → sajikan
// Baru boleh layani pelanggan 2!
// Pelanggan 2, 3, 4... mengantri → BURUK!

// ✅ ASYNCHRONOUS (Non-blocking):
// Pelanggan 1 pesan → mulai masak → sambil tunggu layani pelanggan 2
// Pelanggan 2 pesan → mulai masak → sambil tunggu layani pelanggan 3
// Masakan 1 selesai → sajikan → lanjut
// Semua dilayani tanpa harus tunggu! → EFISIEN!

// Contoh kode:
console.log("Mulai");

setTimeout(() => {
  console.log("Selesai masak (butuh waktu)"); // Simulasi operasi lambat
}, 2000);

console.log("Lanjut kerja lain");

// Output:
// "Mulai"
// "Lanjut kerja lain"    ← Tidak nunggu setTimeout!
// "Selesai masak"        ← Baru muncul setelah 2 detik


// ================================
// CALLBACK - Cara Pertama Async
// ================================
// Callback = function yang dikirim sebagai argument
// dan dipanggil NANTI setelah operasi selesai

// ANALOGI:
// Kamu pesan ojek online
// Kasih nomor HP ke driver (= callback)
// Driver antar barang → sampai → hubungi kamu (= panggil callback)
// Kamu tidak perlu diam menunggu, bisa ngerjain hal lain!

// Contoh sederhana:
const pesanMakanan = (menu, callback) => {
  console.log(`Memasak ${menu}...`);

  setTimeout(() => {
    const makanan = { menu, status: "siap" };
    callback(makanan); // ← Panggil callback setelah selesai
  }, 1000);
};

pesanMakanan("Mie Ayam", (hasil) => {
  console.log(`${hasil.menu} sudah ${hasil.status}!`);
});
console.log("Sambil menunggu, bisa ngerjain hal lain...");

// Output:
// "Memasak Mie Ayam..."
// "Sambil menunggu, bisa ngerjain hal lain..."
// (1 detik kemudian...)
// "Mie Ayam sudah siap!"


// ================================
// CALLBACK HELL - Masalah Callback
// ================================
// Ketika callback bersarang terlalu dalam

// ❌ Callback Hell - susah dibaca & maintain:
loginUser("anas", "password", (user) => {
  getUserProfile(user.id, (profile) => {
    getUserPosts(profile.id, (posts) => {
      getPostComments(posts[0].id, (comments) => {
        getCommentLikes(comments[0].id, (likes) => {
          console.log(likes); // ← 5 level dalam!
          // Ini disebut "Pyramid of Doom" 😱
        });
      });
    });
  });
});

// Solusinya → PROMISE! ✅

// ================================
// PROMISE - Solusi Callback Hell
// ================================

// ANALOGI:
// Kamu beli produk online
// Seller kasih "bukti pembayaran" (= Promise)
// Promise punya 3 state:
//   PENDING  → Barang sedang dikirim
//   FULFILLED → Barang sampai (sukses)
//   REJECTED  → Barang hilang (gagal)

// MEMBUAT PROMISE:
const janjiBayar = new Promise((resolve, reject) => {
  const uangCukup = true;

  if (uangCukup) {
    resolve("Pembayaran berhasil! ✅"); // ← Sukses
  } else {
    reject("Saldo tidak cukup! ❌");   // ← Gagal
  }
});

// MENGGUNAKAN PROMISE:
janjiBayar
  .then(pesan => console.log(pesan))   // ← Jika resolve
  .catch(error => console.log(error))  // ← Jika reject
  .finally(() => console.log("Transaksi selesai")); // ← Selalu jalan


// ================================
// PROMISE DENGAN ASYNC OPERATION
// ================================

const ambilDataUser = (userId) => {
  return new Promise((resolve, reject) => {
    // Simulasi delay network (seperti fetch ke server)
    setTimeout(() => {
      const users = {
        1: { nama: "Anas", email: "anas@email.com" },
        2: { nama: "Budi", email: "budi@email.com" },
      };

      const user = users[userId];

      if (user) {
        resolve(user);         // ← Data ketemu → sukses
      } else {
        reject(`User ${userId} tidak ditemukan`); // ← Gagal
      }
    }, 1000); // Simulasi 1 detik network delay
  });
};

// Pakai promise:
ambilDataUser(1)
  .then(user => {
    console.log("User ditemukan:", user);
    return user; // ← Bisa chain ke .then berikutnya!
  })
  .then(user => console.log(`Email: ${user.email}`))
  .catch(error => console.log("Error:", error));


// ================================
// PROMISE CHAINING - Solusi Callback Hell
// ================================

// ✅ Jauh lebih bersih dari callback hell!
ambilDataUser(1)
  .then(user => ambilPostUser(user.id))     // ← Chain promise
  .then(posts => ambilKomentarPost(posts[0].id)) // ← Chain lagi
  .then(komentar => console.log(komentar))
  .catch(error => console.log(error));      // ← Satu catch untuk semua!

  // ================================
// ASYNC/AWAIT - Cara Modern & Terbersih
// ================================

// async/await = "Syntactic sugar" di atas Promise
// Membuat kode async terlihat seperti synchronous!
// Ini yang PALING SERING dipakai di industri!

// ATURAN:
// 1. Function harus diberi keyword "async"
// 2. "await" hanya bisa dipakai di dalam "async" function
// 3. "await" = "tunggu promise ini selesai dulu"

// Tanpa async/await (promise chain):
const getDataLama = () => {
  return ambilDataUser(1)
    .then(user => {
      console.log(user);
      return ambilPostUser(user.id);
    })
    .then(posts => console.log(posts))
    .catch(error => console.log(error));
};

// Dengan async/await (jauh lebih bersih!):
const getData = async () => {
  try {
    const user  = await ambilDataUser(1); // ← Tunggu sampai selesai
    console.log(user);

    const posts = await ambilPostUser(user.id); // ← Tunggu lagi
    console.log(posts);

  } catch (error) {
    console.log("Error:", error); // ← Tangkap error
  }
};

getData();


// ================================
// CONTOH LENGKAP - Simulasi API
// ================================

// Simulasi function yang return Promise
// (Nanti diganti dengan fetch() sungguhan)
const simulasiAPI = (data, delay = 1000, berhasil = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (berhasil) {
        resolve(data);
      } else {
        reject(new Error("Gagal mengambil data!"));
      }
    }, delay);
  });
};

// Async function yang pakai simulasiAPI:
const prosesDataUser = async (userId) => {
  try {
    console.log("Mengambil data user...");
    const user = await simulasiAPI(
      { id: userId, nama: "Anas", role: "admin" },
      1000
    );

    console.log("Mengambil profile...");
    const profile = await simulasiAPI(
      { userId, bio: "Frontend Developer", kota: "Ciamis" },
      500
    );

    console.log("Mengambil posts...");
    const posts = await simulasiAPI(
      [{ id: 1, judul: "Belajar JS" }, { id: 2, judul: "React Hooks" }],
      800
    );

    // Semua data sudah siap!
    return { user, profile, posts };

  } catch (error) {
    console.error("Terjadi error:", error.message);
    return null;
  }
};

// Panggil dan gunakan hasilnya:
const main = async () => {
  const hasil = await prosesDataUser(1);
  if (hasil) {
    const { user, profile, posts } = hasil; // ← Destructuring!
    console.log(`User    : ${user.nama}`);
    console.log(`Bio     : ${profile.bio}`);
    console.log(`Posts   : ${posts.length} artikel`);
  }
};

main();

// ================================
// FETCH API - Ambil Data dari Internet
// ================================

// fetch() adalah function bawaan browser
// untuk melakukan HTTP request ke server/API

// FORMAT DASAR:
fetch("https://url-api.com/data")
  .then(response => response.json()) // ← Convert response ke JSON
  .then(data => console.log(data))
  .catch(error => console.log(error));


// ================================
// FETCH DENGAN ASYNC/AWAIT
// ================================
// Ini cara yang PALING SERING dipakai di industri!

const ambilDataDariAPI = async () => {
  try {
    // Fetch ke API publik (gratis, tidak perlu auth)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Cek apakah response OK (status 200)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Convert response body ke JavaScript object
    const users = await response.json();

    console.log(`Berhasil ambil ${users.length} users!`);
    return users;

  } catch (error) {
    console.error("Gagal ambil data:", error.message);
    return [];
  }
};

ambilDataDariAPI();


// ================================
// FETCH - GET, POST, PUT, DELETE
// ================================

// GET - Ambil data (default)
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// POST - Kirim data baru
const createPost = async (postData) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // ← Beritahu server: kita kirim JSON
    },
    body: JSON.stringify(postData), // ← Convert object ke string JSON
  });

  if (!response.ok) throw new Error("Gagal membuat post!");
  return response.json();
};

// PUT - Update data
const updatePost = async (id, updateData) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) throw new Error("Gagal update post!");
  return response.json();
};

// DELETE - Hapus data
const deletePost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Gagal hapus post!");
  return { success: true, message: `Post ${id} berhasil dihapus` };
};



// PART 5: PATTERN INDUSTRI
// Error Handling yang Baik

// ================================
// PATTERN 1: Result Pattern
// ================================
// Return { data, error } daripada throw

const safeFetch = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        data: null,
        error: `HTTP Error: ${response.status} ${response.statusText}`
      };
    }

    const data = await response.json();
    return { data, error: null };

  } catch (error) {
    return { data: null, error: error.message };
  }
};

// Pakai:
const { data, error } = await safeFetch("https://api.example.com/users");
if (error) {
  console.log("Error:", error);
} else {
  console.log("Data:", data);
}


// ================================
// PATTERN 2: Loading State
// ================================
// Selalu handle 3 state: loading, success, error

const fetchWithState = async (url) => {
  let state = {
    loading: true,
    data: null,
    error: null,
  };

  console.log("Loading..."); // ← Tampilkan loading

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    state.data = await response.json();
    console.log("Sukses!", state.data);

  } catch (error) {
    state.error = error.message;
    console.log("Error:", state.error);

  } finally {
    state.loading = false;
    console.log("Loading selesai");
  }

  return state;
};

// ================================
// PROMISE.ALL - Fetch Sekaligus!
// ================================

// ❌ Sequential - lambat! (menunggu satu per satu)
const getUserSequential = async () => {
  const users   = await fetch("https://api/users").then(r => r.json());
  const posts   = await fetch("https://api/posts").then(r => r.json());
  const photos  = await fetch("https://api/photos").then(r => r.json());
  // Total: 3 detik (jika masing-masing 1 detik)
};

// ✅ Parallel - cepat! (semua dijalankan bersamaan)
const getUserParallel = async () => {
  const [users, posts, photos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/photos").then(r => r.json()),
  ]);
  // Total: ~1 detik (semua jalan bersamaan!)

  console.log(`Users: ${users.length}`);
  console.log(`Posts: ${posts.length}`);
  console.log(`Photos: ${photos.length}`);
};
//=================================
// Ada pertanyaan. Di Promise.all jika salah satu fetch gagal, apakah fungsi berjalan normal?
// ================================

// TIDAK! Jika salah satu fetch gagal →
// Promise.all LANGSUNG GAGAL SEMUA!
// Meskipun 2 fetch lainnya berhasil!

// Ini disebut: "Fail Fast" behavior

// Simulasi: 1 dari 3 fetch gagal
const main = async () => {
  try {
    const [users, posts, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
      fetch("https://url-yang-salah-tidak-ada.com/posts").then(r => r.json()), // ← GAGAL!
      fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json()),
    ]);

    // Baris ini TIDAK PERNAH dieksekusi!
    console.log(users, posts, todos);

  } catch (error) {
    // Langsung masuk sini!
    console.log("Salah satu gagal, semua dibatalkan:", error.message);
  }
};

// Visualisasi:
// ├── Fetch users  ──────── ✅ Berhasil
// ├── Fetch posts  ── ❌ GAGAL! → Promise.all langsung REJECT!
// ├── Fetch todos  ──────── ✅ Berhasil (tapi diabaikan!)
//
// Hasil: catch() dipanggil, users & todos dibuang! 😱

// ANALOGI DUNIA NYATA
// Promise.all = Proyek tim dengan 3 anggota

Ketua tim bilang:
"Kita SEMUA harus selesai tepat waktu!"

├── Anggota A → Selesai ✅
├── Anggota B → Sakit, tidak bisa ❌
└── Anggota C → Selesai ✅

Hasil: Proyek GAGAL TOTAL!
Meskipun 2 orang sudah selesai,
karena 1 orang gagal → semuanya batal!

Ini "Fail Fast" → Gagal secepatnya jika ada masalah

// Ada 4 varian Promise untuk kasus berbeda:

// 1. Promise.all → FAIL FAST
//    Gagal jika SALAH SATU gagal
//    Pakai jika: SEMUA data wajib ada!

// 2. Promise.allSettled → TUNGGU SEMUA
//    Tetap tunggu semua selesai meski ada yang gagal
//    Pakai jika: Boleh sebagian gagal

// 3. Promise.race → AMBIL YANG TERCEPAT
//    Return hasil pertama yang selesai (sukses atau gagal)
//    Pakai jika: Butuh response tercepat

// 4. Promise.any → AMBIL YANG PERTAMA SUKSES
//    Return hasil pertama yang SUKSES
//    Gagal hanya jika SEMUA gagal
//    Pakai jika: Ada beberapa sumber backup


// PERBANDINGAN LANGSUNG:
const promises = [
  Promise.resolve("✅ Data A"),
  Promise.reject("❌ Error B"),
  Promise.resolve("✅ Data C"),
];

// Promise.all → Fail Fast
try {
  const hasil = await Promise.all(promises);
} catch (error) {
  console.log(error); // "❌ Error B"
  // Data A dan C dibuang! 😱
}


// Promise.all vs Promise.allSettled
// Promise.allSettled → Tunggu semua
const hasil = await Promise.allSettled(promises);
console.log(hasil);
// [
//   { status: "fulfilled", value: "✅ Data A" },
//   { status: "rejected",  reason: "❌ Error B" },
//   { status: "fulfilled", value: "✅ Data C" },
// ]
// Semua hasil tersedia! ✅

// Promise.race → Tercepat menang
const tercepat = await Promise.race(promises);
console.log(tercepat); // "✅ Data A" (yang pertama resolve)

// Promise.any → Sukses pertama
const pertamaSukses = await Promise.any(promises);
console.log(pertamaSukses); // "✅ Data A"

// =================
//Kapan Pakai Mana?
//==================

SITUASI                              GUNAKAN
─────────────────────────────────────────────────────
Semua data WAJIB ada                 Promise.all
(dashboard yang butuh semua data)

Boleh sebagian gagal                 Promise.allSettled
(load widget, boleh 1-2 widget error)

Butuh response tercepat              Promise.race
(timeout: batalkan jika > 5 detik)

Ada beberapa sumber backup           Promise.any
(coba server 1, 2, 3 → ambil pertama yang sukses)

// ==================================
// Implementasi Nyata di Industri
// ==================================

// ================================
// KASUS 1: Dashboard - WAJIB semua ada
// Pakai Promise.all
// ================================
const getDashboard = async () => {
  try {
    const [users, posts, todos] = await Promise.all([
      safeFetch("/users"),
      safeFetch("/posts"),
      safeFetch("/todos"),
    ]);
    // Kalau salah satu gagal → tampilkan error page
    return { users, posts, todos };
  } catch (error) {
    return null; // ← Gagal total, tampilkan error
  }
};


// ================================
// KASUS 2: Load Widget - Boleh sebagian gagal
// Pakai Promise.allSettled
// ================================
const loadWidgets = async () => {
  const results = await Promise.allSettled([
    safeFetch("/weather"),      // Widget cuaca
    safeFetch("/news"),         // Widget berita
    safeFetch("/stock-price"),  // Widget saham
  ]);

  // Proses setiap hasil
  const [weather, news, stock] = results;

  return {
    weather : weather.status === "fulfilled"
                ? weather.value
                : null,   // Widget cuaca error → tampilkan "-"

    news    : news.status === "fulfilled"
                ? news.value
                : null,   // Widget berita error → tampilkan "-"

    stock   : stock.status === "fulfilled"
                ? stock.value
                : null,   // Widget saham error → tampilkan "-"
  };
};

// Hasilnya: 2 widget tampil, 1 widget error → masih OK!
// Tidak perlu matikan semua karena 1 gagal!


// ================================
// KASUS 3: Timeout - Batalkan jika lambat
// Pakai Promise.race
// ================================
const fetchWithTimeout = async (url, timeoutMs = 5000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout!")), timeoutMs)
  );

  return Promise.race([
    fetch(url).then(r => r.json()),  // Fetch asli
    timeoutPromise,                   // Timer timeout
  ]);
  // Siapapun yang selesai duluan → menang!
  // Kalau fetch > 5 detik → timeout menang → error!
};

try {
  const data = await fetchWithTimeout("/slow-api", 3000);
  console.log(data);
} catch (error) {
  console.log(error.message); // "Request timeout!"
}


// ================================
// KASUS 4: Backup Server
// Pakai Promise.any
// ================================
const fetchFromAnyServer = async (endpoint) => {
  return Promise.any([
    fetch(`https://server1.com${endpoint}`).then(r => r.json()),
    fetch(`https://server2.com${endpoint}`).then(r => r.json()),
    fetch(`https://server3.com${endpoint}`).then(r => r.json()),
  ]);
  // Server 1 down → coba server 2
  // Server 2 lambat → server 3 lebih cepat → pakai server 3!
  // Return data dari server pertama yang sukses!
};

//Fix untuk Kode Soal 4 Anda
//===========================

// ================================
// OPSI A: Tetap Promise.all + safeFetch
// (Jika semua data wajib ada)
// ================================
const safeFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
};

const getDashboardData = async () => {
  try {
    const [users, posts, todos] = await Promise.all([
      safeFetch("https://jsonplaceholder.typicode.com/users"),
      safeFetch("https://jsonplaceholder.typicode.com/posts"),
      safeFetch("https://jsonplaceholder.typicode.com/todos"),
    ]);
    // Kalau salah satu gagal → catch!
    return { users, posts, todos };
  } catch (error) {
    console.error("❌ Dashboard gagal:", error.message);
    return null;
  }
};


// ================================
// OPSI B: Promise.allSettled
// (Jika boleh sebagian gagal)
// ================================
const getDashboardDataSafe = async () => {
  const results = await Promise.allSettled([
    safeFetch("https://jsonplaceholder.typicode.com/users"),
    safeFetch("https://jsonplaceholder.typicode.com/posts"),
    safeFetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  const [usersResult, postsResult, todosResult] = results;

  return {
    users : usersResult.status === "fulfilled"
              ? usersResult.value
              : [],   // ← Fallback: array kosong

    posts : postsResult.status === "fulfilled"
              ? postsResult.value
              : [],

    todos : todosResult.status === "fulfilled"
              ? todosResult.value
              : [],

    errors: results
      .filter(r => r.status === "rejected")
      .map(r => r.reason.message), // ← Kumpulkan semua error!
  };
};

const data = await getDashboardDataSafe();
console.log(data.users);   // Data atau [] jika gagal
console.log(data.errors);  // ["HTTP 404: /posts"] jika ada error

// ┌─────────────────┬──────────┬────────────────┬───────────┬─────────────┐
│                 │  .all()  │ .allSettled()  │  .race()  │   .any()    │
├─────────────────┼──────────┼────────────────┼───────────┼─────────────┤
│ Jika semua ✅   │ Return   │ Return semua   │ Return    │ Return      │
│                 │ semua    │ fulfilled      │ tercepat  │ tercepat    │
├─────────────────┼──────────┼────────────────┼───────────┼─────────────┤
│ Jika 1 ❌       │ GAGAL    │ Return semua   │ Tergantung│ Lanjut cari │
│                 │ SEMUA    │ + info error   │ siapa     │ yang sukses │
│                 │          │                │ tercepat  │             │
├─────────────────┼──────────┼────────────────┼───────────┼─────────────┤
│ Jika semua ❌   │ GAGAL    │ Return semua   │ GAGAL     │ GAGAL       │
│                 │          │ rejected       │           │             │
├─────────────────┼──────────┼────────────────┼───────────┼─────────────┤
│ Use case        │ Semua    │ Widget/partial │ Timeout/  │ Backup      │
│                 │ wajib    │ boleh gagal    │ race      │ server      │
└─────────────────┴──────────┴────────────────┴───────────┴─────────────┘




// LATIHAN
// Gunakan API publik ini (gratis, tidak perlu key):
// https://jsonplaceholder.typicode.com

// Endpoint yang tersedia:
// GET /users          → 10 users
// GET /users/1        → 1 user
// GET /posts          → 100 posts
// GET /posts/1        → 1 post
// GET /posts/1/comments → comments dari post 1
// GET /todos          → 200 todos
// POST /posts         → buat post baru (simulasi)


// SOAL 1 - Fetch Dasar
// Buat function getUsers() yang:
// - Fetch semua users dari /users
// - Tampilkan: nama, email, kota (dari address.city)
// - Handle error dengan baik
// - Gunakan async/await!


// SOAL 2 - Fetch dengan Parameter
// Buat function getUserById(id) yang:
// - Fetch user berdasarkan id
// - Jika tidak ada → tampilkan pesan error
// - Return data user
// Test: getUserById(1), getUserById(99)


// SOAL 3 - Fetch Bersarang
// Buat function getUserWithPosts(userId) yang:
// - Fetch data user (GET /users/:id)
// - Fetch posts milik user itu (GET /posts?userId=:id)
// - Return: { user, totalPosts, posts }
// Test: getUserWithPosts(1)


// SOAL 4 - Promise.all
// Buat function getDashboardData() yang:
// - Fetch users, posts, dan todos SECARA BERSAMAAN
// - Return:
// {
//   totalUsers: 10,
//   totalPosts: 100,
//   totalTodos: 200,
//   completedTodos: ..., // todos yang completed: true
//   topUser: ...         // user dengan post terbanyak
// }


// SOAL 5 - POST Request
// Buat function createPost(title, body, userId) yang:
// - Kirim POST request ke /posts
// - Handle success dan error
// - Return data post yang baru dibuat
// Test: createPost("Belajar Async JS", "Async sangat penting!", 1)


// CHALLENGE BONUS:
// Buat function searchUsers(keyword) yang:
// - Fetch semua users
// - Filter berdasarkan keyword (nama atau email)
// - Untuk setiap user yang cocok, fetch juga posts-nya
// - Return array { user, totalPosts }
// - Gunakan Promise.all untuk fetch posts secara parallel!
// Test: searchUsers("Bret"), searchUsers("garcia")