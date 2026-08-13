Selama 6 sesi, output kita hanya di CONSOLE.
Sekarang saatnya JavaScript mengubah tampilan di BROWSER!

DOM = Document Object Model
    = Representasi HTML sebagai OBJECT di JavaScript
    = Jembatan antara JavaScript dan HTML

Setelah sesi ini:
→ Anda bisa membuat halaman yang INTERAKTIF
→ Klik tombol → sesuatu terjadi
→ Input data → tampil di layar
→ Fetch API → tampil di halaman (bukan console!)

Ini fondasi dari REACT yang akan dipelajari selanjutnya!

<!-- index.html -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Belajar DOM</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .highlight { background: yellow; }
    .hidden { display: none; }
    .active { color: green; font-weight: bold; }
    button { padding: 8px 16px; cursor: pointer; margin: 4px; }
    input { padding: 8px; margin: 4px; border: 1px solid #ccc; }
    .card {
      border: 1px solid #ddd;
      padding: 16px;
      margin: 8px;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <h1 id="judul">Belajar DOM Manipulation</h1>
  <p id="deskripsi">Ini adalah paragraf pertama</p>

  <div id="container"></div>

  <input type="text" id="inputNama" placeholder="Masukkan nama...">
  <button id="btnSapa">Sapa!</button>

  <div id="output"></div>

  <!-- Script selalu di BAWAH body! -->
  <script src="dom.js"></script>
</body>
</html>


// PART 1: SELECTING ELEMENTS
// ================================
// CARA PILIH ELEMEN HTML
// ================================

// 1. getElementById - pilih by ID (paling cepat)
const judul = document.getElementById("judul");
console.log(judul); // <h1 id="judul">Belajar DOM...</h1>

// 2. querySelector - pilih by CSS selector (paling fleksibel)
const judulQ  = document.querySelector("#judul");     // by ID
const paraQ   = document.querySelector("p");          // by tag (pertama)
const cardQ   = document.querySelector(".card");      // by class (pertama)
const inputQ  = document.querySelector("input[type='text']"); // by attribute

// 3. querySelectorAll - pilih SEMUA yang cocok
const semuaP  = document.querySelectorAll("p");       // Semua <p>
const semuaBtn = document.querySelectorAll("button"); // Semua <button>

// querySelectorAll return NodeList (mirip array)
semuaP.forEach(p => console.log(p.textContent));


// ================================
// PERBEDAAN getElementById vs querySelector
// ================================

// getElementById:
// ✅ Lebih cepat (browser optimized)
// ✅ Langsung return element atau null
// ❌ Hanya bisa by ID

// querySelector:
// ✅ Lebih fleksibel (semua CSS selector)
// ✅ Satu cara untuk semua kebutuhan
// ❌ Sedikit lebih lambat

// RULE INDUSTRI:
// querySelector untuk kebanyakan kasus
// getElementById untuk element yang sering diakses (performa)


//=================================
// PART 2: MANIPULATING CONTENT
// ================================
// MENGUBAH ISI ELEMEN
// ================================

const judul = document.querySelector("#judul");

// textContent → Hanya teks, AMAN dari XSS
judul.textContent = "Halo Dunia!";
// <h1>Halo Dunia!</h1>

// innerHTML → Bisa HTML, tapi hati-hati XSS!
judul.innerHTML = "Halo <strong>Dunia</strong>!";
// <h1>Halo <strong>Dunia</strong>!</h1>

// ⚠️ KAPAN PAKAI MANA?
// textContent → Untuk teks biasa (lebih aman!)
// innerHTML   → Untuk inject HTML (hati-hati user input!)

// CONTOH XSS DANGER:
const userInput = "<script>alert('hacked!')</script>";
// ❌ BERBAHAYA:
element.innerHTML = userInput; // Script dieksekusi!
// ✅ AMAN:
element.textContent = userInput; // Ditampilkan sebagai teks biasa


// ================================
// MENGUBAH ATTRIBUTE
// ================================

const link = document.querySelector("a");

// getAttribute & setAttribute
link.getAttribute("href");        // Ambil nilai attribute
link.setAttribute("href", "https://google.com"); // Set attribute
link.setAttribute("target", "_blank"); // Tambah attribute baru
link.removeAttribute("target");   // Hapus attribute

// Shortcut untuk attribute umum:
const img = document.querySelector("img");
img.src = "photo.jpg";       // Sama dengan setAttribute("src", "...")
img.alt = "Foto profil";     // Sama dengan setAttribute("alt", "...")

const input = document.querySelector("input");
input.value = "Anas";        // Value input field
input.placeholder = "Nama...";
input.disabled = true;       // Disable input


//=======================================
//PART 3: MANIPULATING STYLES & CLASSES
// ================================
// MANIPULASI CLASS ⭐ (Cara Industri!)
// ================================

const element = document.querySelector("#judul");

// classList methods - cara MODERN
element.classList.add("highlight");      // Tambah class
element.classList.remove("highlight");   // Hapus class
element.classList.toggle("active");      // Toggle (ada→hapus, tidak ada→tambah)
element.classList.contains("active");    // Cek apakah punya class (true/false)
element.classList.replace("old", "new"); // Ganti class

// CONTOH NYATA - Dark mode toggle:
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

// CONTOH NYATA - Validasi form:
const inputEmail = document.querySelector("#email");
if (!inputEmail.value.includes("@")) {
  inputEmail.classList.add("error");     // Tambah style error
} else {
  inputEmail.classList.remove("error");  // Hapus style error
}


// ================================
// INLINE STYLE (Hindari jika bisa!)
// ================================

// ❌ Kurang dianjurkan - inline style susah di-maintain:
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "24px";

// ✅ Lebih baik - pakai class:
// Di CSS: .error { color: red; }
element.classList.add("error");
// Lebih mudah di-maintain dan di-override!

// ====================================
// PART 4: MEMBUAT & MENGHAPUS ELEMEN
// ================================
// CREATE ELEMENT
// ================================

// Buat elemen baru
const newCard = document.createElement("div");
newCard.className = "card";
newCard.innerHTML = `
  <h3>Judul Card</h3>
  <p>Isi card...</p>
`;

// Tambahkan ke DOM
const container = document.querySelector("#container");
container.appendChild(newCard);    // Tambah di AKHIR
container.prepend(newCard);        // Tambah di AWAL
container.insertBefore(newCard, referenceNode); // Sisipkan sebelum elemen


// ================================
// CARA MODERN - insertAdjacentHTML ⭐
// ================================

container.insertAdjacentHTML("beforeend", `
  <div class="card">
    <h3>Card Baru</h3>
    <p>Isi card baru</p>
  </div>
`);

// Position options:
// "beforebegin" → Sebelum element itu sendiri
// "afterbegin"  → Di dalam, sebelum child pertama
// "beforeend"   → Di dalam, setelah child terakhir ← Paling sering!
// "afterend"    → Setelah element itu sendiri


// ================================
// RENDER LIST - Pola yang Sangat Sering!
// ================================

const users = [
  { id: 1, nama: "Anas",  email: "anas@email.com"  },
  { id: 2, nama: "Budi",  email: "budi@email.com"  },
  { id: 3, nama: "Citra", email: "citra@email.com" },
];

const renderUsers = (users) => {
  const container = document.querySelector("#container");

  // ✅ Cara efisien - build string dulu, set innerHTML sekali
  container.innerHTML = users.map(({ id, nama, email }) => `
    <div class="card" data-id="${id}">
      <h3>${nama}</h3>
      <p>${email}</p>
      <button onclick="deleteUser(${id})">Hapus</button>
    </div>
  `).join(""); // ← join("") hapus koma antar string!
};

renderUsers(users);


// ================================
// HAPUS ELEMEN
// ================================

const card = document.querySelector(".card");
card.remove(); // ← Cara modern, hapus elemen langsung!

// Atau hapus child:
container.innerHTML = ""; // ← Hapus SEMUA child (clear container)



// =====================================
// PART 5: EVENT HANDLING ⭐⭐⭐
// ================================
// addEventListener - Cara Standar
// ================================

// FORMAT:
// element.addEventListener("event", handlerFunction)

const btn = document.querySelector("#btnSapa");

// ❌ Cara lama (hindari):
btn.onclick = () => console.log("Diklik!");

// ✅ Cara modern (industri standard):
btn.addEventListener("click", () => {
  console.log("Tombol diklik!");
});

// Kenapa addEventListener lebih baik?
// Bisa attach BANYAK handler ke 1 event:
btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2); // ← Keduanya jalan!
// onclick hanya bisa 1 handler!


// ================================
// EVENT TYPES yang Sering Dipakai
// ================================

// MOUSE EVENTS:
element.addEventListener("click", handler);       // Klik
element.addEventListener("dblclick", handler);    // Double klik
element.addEventListener("mouseover", handler);   // Mouse masuk
element.addEventListener("mouseout", handler);    // Mouse keluar

// KEYBOARD EVENTS:
input.addEventListener("keydown", (e) => {
  console.log(e.key);    // Tombol yang ditekan
  console.log(e.code);   // Kode fisik tombol
  if (e.key === "Enter") {
    // Lakukan sesuatu saat Enter!
  }
});

input.addEventListener("keyup", handler);    // Saat tombol dilepas
input.addEventListener("keypress", handler); // Saat tombol ditekan (deprecated)

// FORM EVENTS:
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ← WAJIB! Cegah reload halaman!
  // Proses form...
});

input.addEventListener("input", (e) => {
  console.log(e.target.value); // Real-time saat user ketik
});

input.addEventListener("change", handler);  // Saat value berubah & blur
input.addEventListener("focus", handler);   // Saat input di-klik
input.addEventListener("blur", handler);    // Saat input ditinggalkan

// WINDOW EVENTS:
window.addEventListener("load", handler);   // Halaman selesai load
window.addEventListener("resize", handler); // Window di-resize
window.addEventListener("scroll", handler); // User scroll


// ================================
// EVENT OBJECT ⭐
// ================================

btn.addEventListener("click", (event) => {
  // 'event' berisi info tentang kejadian:
  console.log(event.type);          // "click"
  console.log(event.target);        // Element yang diklik
  console.log(event.target.id);     // ID element
  console.log(event.target.value);  // Value (untuk input)
  console.log(event.clientX);       // Posisi X mouse
  console.log(event.clientY);       // Posisi Y mouse

  // Mencegah default behavior:
  event.preventDefault();  // Cegah form submit/link navigate
  event.stopPropagation(); // Cegah event bubble ke parent
});


// ================================
// EVENT DELEGATION ⭐ (Sangat Penting!)
// ================================

// ❌ Cara buruk - attach event ke setiap elemen:
const buttons = document.querySelectorAll(".btn-hapus");
buttons.forEach(btn => {
  btn.addEventListener("click", handler); // 100 button = 100 event listener!
});

// ✅ Event delegation - 1 listener di parent:
const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
  // Cek apakah yang diklik adalah button hapus
  if (e.target.classList.contains("btn-hapus")) {
    const id = e.target.dataset.id; // Ambil data-id attribute
    console.log(`Hapus item: ${id}`);
  }
});
// 1 event listener untuk semua button! ✅
// Bahkan untuk button yang ditambah SETELAH render!

// ==============================
//PART 6: POLA LENGKAP - FETCH + DOM
// ================================
// FETCH DATA → TAMPILKAN DI DOM
// ================================
// Ini pola yang PALING SERING di industri!

const API_URL = "https://jsonplaceholder.typicode.com";

// State sederhana
let state = {
  users: [],
  loading: false,
  error: null,
};

// Render function
const renderUsers = (users) => {
  const container = document.querySelector("#container");

  if (users.length === 0) {
    container.innerHTML = `<p>Tidak ada data user</p>`;
    return;
  }

  container.innerHTML = users.map(({ id, name, email, address }) => `
    <div class="card" data-id="${id}">
      <h3>${name}</h3>
      <p>📧 ${email}</p>
      <p>📍 ${address.city}</p>
      <button class="btn-detail" data-id="${id}">Detail</button>
      <button class="btn-hapus" data-id="${id}">Hapus</button>
    </div>
  `).join("");
};

// Fetch & render
const loadUsers = async () => {
  const container = document.querySelector("#container");

  // Tampilkan loading
  container.innerHTML = `<p>⏳ Memuat data...</p>`;

  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const users = await response.json();
    state.users = users;

    renderUsers(users); // ← Render ke DOM!

  } catch (error) {
    container.innerHTML = `<p>❌ Gagal: ${error.message}</p>`;
  }
};

// Event delegation untuk tombol
document.querySelector("#container").addEventListener("click", (e) => {
  const { id } = e.target.dataset; // Ambil data-id

  if (e.target.classList.contains("btn-detail")) {
    console.log(`Detail user ${id}`);
  }

  if (e.target.classList.contains("btn-hapus")) {
    state.users = state.users.filter(u => u.id !== parseInt(id));
    renderUsers(state.users); // Re-render!
  }
});

// Jalankan saat halaman load
loadUsers();