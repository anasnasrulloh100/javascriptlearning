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
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const users = await response.json();

    const dataUser = users.forEach((user) => // ← ⚠️ forEach return undefined!
      console.log(`name: ${user.name}, 
            email: ${user.email}, 
            kota: ${user.address.city}`));

    console.log(dataUser); // ← Output: undefined

    return users;
  } catch (error) {
    console.log(`Gagal Ambil data:`, error.message);
    return [];
  }
};
getUsers();

// HASIL REVISI:
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const users = await response.json();

    console.log(`=== DAFTAR USERS (${users.length}) ===\n`);

    users.forEach(({ name, email, address: { city } }, index) => {
      console.log(`${index + 1}. ${name}`);
      console.log(`   ${"email".padEnd(8)}: ${email}`);
      console.log(`   ${"kota".padEnd(8)}: ${city}`);
      console.log("   ---");
    });

    return users;

  } catch (error) {
    console.error(`Gagal:`, error.message);
    return [];
  }
};

// Panggil dengan async wrapper
const main = async () => {
  const users = await getUsers();
  console.log(`\nTotal: ${users.length} users`);
};

main();



// SOAL 2 - Fetch dengan Parameter
// Buat function getUserById(id) yang:
// - Fetch user berdasarkan id
// - Jika tidak ada → tampilkan pesan error
// - Return data user
// Test: getUserById(1), getUserById(99)

const getUserById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    // ✅ Cek response.ok → throw error jika gagal

    const result = await response.json();
    // ✅ Parse JSON dengan benar

    return result;
    // ✅ Return data user

  } catch (error) {
    console.error(`User dengan id ${id} tidak ditemukan`, error.message);
    return {};
    // ✅ Return object kosong jika error
  }
};

//HASIL REVISI:
// Kode Anda return {} (object kosong) saat error
// Ini menimbulkan pertanyaan penting di industri!

// ❌ Masalah dengan return {}:
const user = await getUserById(99);
console.log(user.name); // undefined ← tidak crash, tapi misleading!
// Orang yang baca kode mengira user ditemukan!

if (user) {
  console.log("User ditemukan!"); // ← Ini SELALU true! {} = truthy!
}

// ✅ Lebih baik return null:
const user = await getUserById(99);
if (!user) {
  console.log("User tidak ditemukan!"); // ← Jelas!
  return;
}
console.log(user.name); // ← Aman, pasti ada datanya

// KENAPA null lebih baik dari {}?
// null  = "tidak ada data" → falsy → mudah dicek dengan if(!user)
// {}    = "object kosong"  → truthy → tidak bisa dicek dengan if(!user)!
const getUserById = async (id) => {
  // Validasi input sebelum fetch
  if (!id || typeof id !== "number" || id < 1) {
    console.error(`❌ ID tidak valid: ${id}`);
    return null;
  }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    // Handle 404 secara khusus
    if (response.status === 404) {
      console.error(`❌ User dengan id ${id} tidak ditemukan`);
      return null;
    }

    // Handle error lainnya
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    // Tampilkan setelah berhasil
    console.log(`✅ User ditemukan:`);
    console.log(`   ${"Nama".padEnd(8)}: ${user.name}`);
    console.log(`   ${"Email".padEnd(8)}: ${user.email}`);
    console.log(`   ${"Kota".padEnd(8)}: ${user.address.city}`);

    return user;

  } catch (error) {
    console.error(`❌ Gagal ambil data:`, error.message);
    return null;
  }
};

// Penggunaan yang benar:
const main = async () => {
  const user1 = await getUserById(1);
  if (user1) console.log(`\nData user: ${user1.name}`);

  const user99 = await getUserById(99);
  if (!user99) console.log(`\nUser 99 tidak ada!`);

  const userInvalid = await getUserById("abc");
  if (!userInvalid) console.log(`\nInput tidak valid!`);
};

main();




// SOAL 3 - Fetch Bersarang
// Buat function getUserWithPosts(userId) yang:
// - Fetch data user (GET /users/:id)
// - Fetch posts milik user itu (GET /posts?userId=:id)
// - Return: { user, totalPosts, posts }
// Test: getUserWithPosts(1)
// HINT Soal 3:
// Dua fetch yang bergantung satu sama lain:
// STEP 1: Fetch user → GET /users/${userId}
// STEP 2: Fetch posts → GET /posts?userId=${userId}
//                                    ↑ Query parameter!
// STEP 3: Return { user, totalPosts, posts }
const getUserWithPosts = async (userId) => {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userResponse.ok) throw new Error(`HTTP ${userResponse.status}`);

    const user = await userResponse.json();

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsResponse.ok) throw new Error(`HTTP ${postsResponse.status}`);

    const posts = await postsResponse.json();

    return {
      user,
      totalPosts: posts.length,
      posts
    };
  } catch (error) {
    console.error(`❌ Gagal ambil data:`, error.message);
    return null;
  }
};

// TAMPILKAN HASILNYA setelah function dipanggil!

const main = async () => {
  const hasil = await getUserWithPosts(1);

  if (!hasil) return console.log("Gagal ambil data!");

  // Destructuring hasil! ← Kebiasaan yang harus dibangun
  const { user, totalPosts, posts } = hasil;

  console.log(`\n👤 USER:`);
  console.log(`   Nama  : ${user.name}`);
  console.log(`   Email : ${user.email}`);
  console.log(`   Kota  : ${user.address.city}`);

  console.log(`\n📝 POSTS (${totalPosts} artikel):`);
  posts.forEach(({ title }, index) => {
    console.log(`   ${index + 1}. ${title}`);
  });
};

main();

// Kode Anda pakai SEQUENTIAL fetch:
const user  = await fetch(`/users/${userId}`);  // Tunggu selesai
const posts = await fetch(`/posts?userId=...`); // Baru fetch ini

// KENAPA ini BENAR untuk kasus ini?
// Karena posts membutuhkan userId yang valid dari user!
// Kalau user tidak ditemukan → tidak perlu fetch posts!

// Visualisasi:
// Timeline Sequential (BENAR untuk kasus ini):
// ├── Fetch user  ──────────── ✅
//                             └── Fetch posts ──────────── ✅
// Total: ~2 detik

// Kalau pakai Parallel (KURANG TEPAT di sini):
// ├── Fetch user  ──────────── ✅
// ├── Fetch posts ──────────── ✅ (dijalankan bersamaan)
// Masalah: Bagaimana kalau user tidak ditemukan?
//          Posts sudah terlanjur di-fetch!
//          Buang 1 network request!

// KESIMPULAN:
// Sequential → Ketika request B bergantung pada hasil request A
// Parallel   → Ketika semua request INDEPENDEN (seperti soal 4!)

// VERSI LENGKAP FINAL:
const getUserWithPosts = async (userId) => {
  // Validasi input
  if (!userId || typeof userId !== "number" || userId < 1) {
    console.error(`❌ userId tidak valid: ${userId}`);
    return null;
  }

  try {
    // Sequential fetch karena posts bergantung pada user
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!userResponse.ok) throw new Error(`User tidak ditemukan (${userResponse.status})`);
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!postsResponse.ok) throw new Error(`Posts gagal diambil (${postsResponse.status})`);
    const posts = await postsResponse.json();

    return { user, totalPosts: posts.length, posts };

  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};

// Test & Display:
const main = async () => {
  console.log("Mengambil data...\n");

  const hasil = await getUserWithPosts(1);
  if (!hasil) return;

  const { user, totalPosts, posts } = hasil; // ← Destructuring!

  console.log(`👤 ${user.name}`);
  console.log(`   Email : ${user.email}`);
  console.log(`   Kota  : ${user.address.city}\n`);
  console.log(`📝 Total Posts: ${totalPosts}`);
  posts.slice(0, 3).forEach(({ title }, i) => { // Tampilkan 3 saja
    console.log(`   ${i + 1}. ${title}`);
  });
  console.log(`   ... dan ${totalPosts - 3} post lainnya`);
};

main();

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
const getDashboardData = async () => {
  try {
    const [usersResponse, postsResponse, todosResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const todos = await todosResponse.json();

    // Hitung statistik
    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    // Temukan user dengan post terbanyak
    const postCount = {};
    posts.forEach(post => {
      postCount[post.userId] = (postCount[post.userId] || 0) + 1;
    });

    const topUserId = Object.keys(postCount).reduce((a, b) =>
      postCount[a] > postCount[b] ? a : b
    );
    const topUser = users.find(user => user.id === parseInt(topUserId));

    return {
      totalUsers,
      totalPosts,
      totalTodos,
      completedTodos,
      topUser
    };
  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};
// TAMPILKAN HASILNYA setelah function dipanggil!
const dashboard = async () => {
  const dashboardData = await getDashboardData();
  if (!dashboardData) return; 

  console.log("📊 DATA DASHBOARD:");
  console.log(`   Total Users: ${dashboardData.totalUsers}`);
  console.log(`   Total Posts: ${dashboardData.totalPosts}`);
  console.log(`   Total Todos: ${dashboardData.totalTodos}`);
  console.log(`   Completed Todos: ${dashboardData.completedTodos}`);
  console.log(`   Top User: ${dashboardData.topUser.name} (${dashboardData.topUser.email})`);
};
dashboard();
// VERSI LENGKAP FINAL:
// Helper function - reusable!
const safeFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
};

const getDashboardData = async () => {
  try {
    // ✅ Parallel fetch + parse + cek sekaligus!
    const [users, posts, todos] = await Promise.all([
      safeFetch("https://jsonplaceholder.typicode.com/users"),
      safeFetch("https://jsonplaceholder.typicode.com/posts"),
      safeFetch("https://jsonplaceholder.typicode.com/todos"),
    ]);

    // Kalkulasi - dengan destructuring!
    const completedTodos = todos.filter(({ completed }) => completed).length;

    // Top user dengan GROUP BY
    const postCount = posts.reduce((acc, { userId }) => {
      acc[userId] = (acc[userId] || 0) + 1;
      return acc;
    }, {});
    // ← Pakai reduce daripada forEach untuk lebih functional!

    const topUserId = parseInt(
      Object.keys(postCount).reduce((a, b) =>
        postCount[a] > postCount[b] ? a : b
      )
    );
    // ← parseInt di sini, bukan di find!

    const topUser = users.find(({ id }) => id === topUserId);
    // ← Destructuring di parameter find!

    return {
      totalUsers    : users.length,
      totalPosts    : posts.length,
      totalTodos    : todos.length,
      completedTodos,
      pendingTodos  : todos.length - completedTodos, // ← Bonus info!
      topUser: {
        nama  : topUser?.name,
        email : topUser?.email,
        posts : postCount[topUserId],
      },
    };

  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};

// Display yang lebih informatif:
const dashboard = async () => {
  console.log("⏳ Mengambil data dashboard...\n");

  const data = await getDashboardData();
  if (!data) return console.log("Gagal mengambil data!");

  const {
    totalUsers, totalPosts, totalTodos,
    completedTodos, pendingTodos, topUser
  } = data; // ← Destructuring hasil!

  console.log("📊 DASHBOARD STATISTIK");
  console.log("═".repeat(35));
  console.log(`👥 ${"Total Users".padEnd(20)}: ${totalUsers}`);
  console.log(`📝 ${"Total Posts".padEnd(20)}: ${totalPosts}`);
  console.log(`✅ ${"Total Todos".padEnd(20)}: ${totalTodos}`);
  console.log(`✔️  ${"Completed Todos".padEnd(20)}: ${completedTodos}`);
  console.log(`⏳ ${"Pending Todos".padEnd(20)}: ${pendingTodos}`);
  console.log("─".repeat(35));
  console.log(`🏆 TOP USER:`);
  console.log(`   Nama  : ${topUser.nama}`);
  console.log(`   Email : ${topUser.email}`);
  console.log(`   Posts : ${topUser.posts} artikel`);
  console.log("═".repeat(35));
};

dashboard();

// Output:
// ⏳ Mengambil data dashboard...
//
// 📊 DASHBOARD STATISTIK
// ═══════════════════════════════════
// 👥 Total Users         : 10
// 📝 Total Posts         : 100
// ✅ Total Todos         : 200
// ✔️  Completed Todos     : 90
// ⏳ Pending Todos       : 110
// ───────────────────────────────────
// 🏆 TOP USER:
//    Nama  : ...
//    Email : ...
//    Posts : 10 artikel
// ═══════════════════════════════════

// SOAL 5 - POST Request
// Buat function createPost(title, body, userId) yang:
// - Kirim POST request ke /posts
// - Handle success dan error
// - Return data post yang baru dibuat
// Test: createPost("Belajar Async JS", "Async sangat penting!", 1)
const createPost = async (title, body, userId) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body, userId })
    });

    if (!response.ok) throw new Error(`Failed to create post (${response.status})`);
    const newPost = await response.json();
    return newPost;
  } catch (error) {
    console.error(`❌ Error creating post:`, error.message);
    return null;
  }
};
const main = async () => {
  const post = await createPost("Belajar Async JS", "Async sangat penting!", 1);
  console.log("Post created:", post);
};
main();

// ====VERSI FINAL====

const createPost = async (title, body, userId) => {
  // Validasi input
  if (!title || typeof title !== "string") {
    return console.error("❌ Title harus berupa string!"), null;
  }
  if (!body || typeof body !== "string") {
    return console.error("❌ Body harus berupa string!"), null;
  }
  if (!userId || typeof userId !== "number") {
    return console.error("❌ UserId harus berupa number!"), null;
  }

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, userId }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create post (${response.status})`);
    }

    const newPost = await response.json();
    return newPost;

  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};

const main = async () => {
  console.log("📝 Membuat post baru...\n");

  const post = await createPost("Belajar Async JS", "Async sangat penting!", 1);

  if (!post) return console.log("Gagal membuat post!");

  // Destructuring hasil! ← Kebiasaan yang bagus
  const { id, title, body, userId } = post;

  console.log("✅ Post berhasil dibuat!");
  console.log("─".repeat(30));
  console.log(`${"ID".padEnd(10)}: ${id}`);
  console.log(`${"Title".padEnd(10)}: ${title}`);
  console.log(`${"Body".padEnd(10)}: ${body}`);
  console.log(`${"User ID".padEnd(10)}: ${userId}`);
  console.log("─".repeat(30));

  // Test validasi:
  console.log("\n🧪 Test validasi:");
  await createPost("", "body", 1);        // ← Title kosong
  await createPost("title", "body", "1"); // ← UserId string
};

main();

// Output:
// 📝 Membuat post baru...
//
// ✅ Post berhasil dibuat!
// ──────────────────────────────
// ID        : 101
// Title     : Belajar Async JS
// Body      : Async sangat penting!
// User ID   : 1
// ──────────────────────────────
//
// 🧪 Test validasi:
// ❌ Title harus berupa string!
// ❌ UserId harus berupa number!

// CHALLENGE BONUS:
// Buat function searchUsers(keyword) yang:
// - Fetch semua users
// - Filter berdasarkan keyword (nama atau email)
// - Untuk setiap user yang cocok, fetch juga posts-nya
// - Return array { user, totalPosts }
// - Gunakan Promise.all untuk fetch posts secara parallel!
// Test: searchUsers("Bret"), searchUsers("garcia")
const searchUsers = async (keyword) => {
  if (!keyword || typeof keyword !== "string") {
    console.error(`❌ Keyword harus berupa string!`);
    return [];
  } 
  try {
    const users = await safeFetch("https://jsonplaceholder.typicode.com/users");
    const filteredUsers = users.filter(({ name, email }) =>
      name.toLowerCase().includes(keyword.toLowerCase()) ||
      email.toLowerCase().includes(keyword.toLowerCase())
    );
    if (!filteredUsers || filteredUsers.length === 0) return console.log(`Tidak ada user yang cocok dengan keyword "${keyword}"`), [];

    const results = await Promise.all(  
      filteredUsers.map(async (user) => {
        const posts = await safeFetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        return { user, totalPosts: posts.length };
      })
    );
    return results;
    
  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};
const hasil = async() => {
  const results = await searchUsers("garcia");
  if (results && results.length > 0) {
    results.map(({ user, totalPosts }) => {
      console.log(`👤 ${user.name} (${user.email}): ${totalPosts} posts`);
    });
  }
}
hasil();
//===============
// VERSI FINAL YANG DIPOLES
// ============
const searchUsers = async (keyword) => {
  // Validasi
  if (!keyword || typeof keyword !== "string") {
    console.error(`❌ Keyword harus berupa string!`);
    return [];
  }

  try {
    const users = await safeFetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Filter by nama atau email
    const filteredUsers = users.filter(({ name, email }) =>
      name.toLowerCase().includes(keyword.toLowerCase()) ||
      email.toLowerCase().includes(keyword.toLowerCase())
    );

    if (filteredUsers.length === 0) {
      console.log(`🔍 Tidak ada user dengan keyword "${keyword}"`);
      return [];
    }

    console.log(`🔍 Ditemukan ${filteredUsers.length} user, mengambil posts...\n`);

    // Fetch posts semua user PARALLEL
    const results = await Promise.all(
      filteredUsers.map(async (user) => {
        const posts = await safeFetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        );
        return { user, totalPosts: posts.length };
      })
    );

    return results;

  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return [];  // ← [] lebih konsisten dari null untuk search
  }
};

// Display:
const main = async () => {
  const results = await searchUsers("garcia");

  if (!results || results.length === 0) return;

  console.log("📊 HASIL PENCARIAN:");
  console.log("─".repeat(50));

  results.forEach(({ user, totalPosts }, index) => {
  //     ↑ forEach bukan map untuk display!
    console.log(`${index + 1}. 👤 ${user.name}`);
    console.log(`   ${"Email".padEnd(10)}: ${user.email}`);
    console.log(`   ${"Kota".padEnd(10)}: ${user.address.city}`);
    console.log(`   ${"Total Post".padEnd(10)}: ${totalPosts} artikel`);
    console.log("─".repeat(50));
  });
};

main();


// Buat async function getUserDashboard(userId) yang:

//Fetch data user dulu dari https://jsonplaceholder.typicode.com/users/{userId} (tunggu selesai dulu)
// Setelah dapat data user, fetch secara paralel (Promise.all):
// https://jsonplaceholder.typicode.com/posts?userId={userId}
// https://jsonplaceholder.typicode.com/todos?userId={userId}
// Return object ringkasan:
// javascript
//  { nama: user.name, email: user.email, jumlahPost: posts.length, jumlahTodo: todos.length }
// Bungkus try/catch. Boleh reuse safeFetch dari latihan sebelumnya.
const safeFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}
const getUserDashboard = async (userId) => {
  try {
    const user = await safeFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const [posts, todos] = await Promise.all([
      safeFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
      safeFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    ]);

    return {
      nama: user.name,
      email: user.email,
      jumlahPost: posts.length,
      jumlahTodo: todos.length
    };
  } catch (error) {
    console.error(`❌ Error:`, error.message);
    return null;
  }
};
const main = async () => {
  const dashboard = await getUserDashboard(1);
  if (!dashboard) return console.log("Gagal ambil data dashboard!");
  console.log("📊 DASHBOARD USER");
  console.log("═".repeat(35));
  console.log(`👤 Nama: ${dashboard.nama}`);
  console.log(`✉️  Email: ${dashboard.email}`);
  console.log(`📝 Jumlah Post: ${dashboard.jumlahPost}`);
  console.log(`✅ Jumlah Todo: ${dashboard.jumlahTodo}`);
  console.log("═".repeat(35));
};
main();

// 2. Promise.allSettled() untuk Partial Failure

// Buat async function cekBeberapaTodo() yang fetch 3 todo sekaligus:

// https://jsonplaceholder.typicode.com/todos/1 (valid)
// https://jsonplaceholder.typicode.com/todos/2 (valid)
// https://jsonplaceholder.typicode.com/todos/99999 (sengaja salah — bakal dapat 404)

// Pakai Promise.allSettled() (bukan Promise.all()), lalu loop hasilnya:

// Kalau status === "fulfilled" → console.log data-nya
// Kalau status === "rejected" → console.log pesan error-nya (reason.message)

// (Hint: kalau pakai safeFetch yang sudah Anda buat sebelumnya, dia akan otomatis throw untuk todo yang 404 — itu yang bikin allSettled menangkapnya sebagai "rejected")
const cekBeberapaTodo = async () => {
  const results = await Promise.allSettled([
    safeFetch("https://jsonplaceholder.typicode.com/todos/1"),
    safeFetch("https://jsonplaceholder.typicode.com/todos/2"),
    safeFetch("https://jsonplaceholder.typicode.com/todos/99999")
  ]);
  return {
    fulfilled: results.filter(r => r.status === "fulfilled").map(r => r.value),
    rejected: results.filter(r => r.status === "rejected").map(r => r.reason.message)
  };
}
const main = async () => {
  const { fulfilled, rejected } = await cekBeberapaTodo();
  console.log("✅ Fulfilled:");
  fulfilled.forEach(todo => console.log(`   - ${todo.title}`));
  console.log("❌ Rejected:");
  rejected.forEach(error => console.log(`   - ${error}`));
};
main();

// Silakan kerjakan satu-satu, boleh mulai dari yang mana saja.
