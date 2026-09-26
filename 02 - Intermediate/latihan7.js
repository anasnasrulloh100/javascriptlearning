// latihan7.js

// ============================================
// SOAL 1: Counter App
// ============================================
// Buat counter dengan ketentuan:
// - Tombol "+ Tambah" → angka naik 1
// - Tombol "- Kurang" → angka turun 1
// - Tombol "Reset"    → kembali ke 0
// - Angka TIDAK boleh kurang dari 0 (minimum 0)
// - Warna angka:
//   = 0        → hitam (default)
//   > 0        → hijau
// Gunakan classList untuk warna!
const counterOutput = document.getElementById("count");
let counter = Number(counterOutput.textContent);
const btnTambah = document.getElementById("btnTambah");
const btnKurang = document.getElementById("btnKurang");
const btnReset = document.getElementById("btnReset");
const updateCounter = () => {
  counterOutput.textContent = counter;
  counterOutput.classList.toggle("positive", counter > 0);
};
const handleTambah = () => {
  counter++;
  updateCounter();
};

const handleKurang = () => {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
};
const handleReset = () => {
  counter = 0;
  updateCounter();
};
btnTambah.addEventListener("click", handleTambah);
btnKurang.addEventListener("click", handleKurang);
btnReset.addEventListener("click", handleReset);
updateCounter(); // Inisialisasi warna saat load

// ============================================
// SOAL 2: Form Validation
// ============================================
// Buat form dengan validasi:
// - Nama  : tidak boleh kosong, minimal 3 karakter
// - Email : harus mengandung "@" dan "."
// - Umur  : harus angka, antara 1-120
//
// Jika INVALID:
// - Input border merah (classList.add("error"))
// - Tampilkan pesan error di bawah input
//
// Jika VALID:
// - Tampilkan data di #formOutput:
//   "✅ Halo [Nama]! Email: [email], Umur: [umur] tahun"
// - Reset semua input

// Cache Elements
const inputNama = document.querySelector("#inputNama");
const inputEmail = document.querySelector("#inputEmail");
const inputUmur = document.querySelector("#inputUmur");
const btnSubmit = document.querySelector("#btnSubmit");
const formOutput = document.querySelector("#formOutput");

// Error Elements (dibuat sekali)
const errNama = document.createElement("p");
errNama.textContent = "Minimal 3 karakter, hanya huruf & spasi";
const errEmail = document.createElement("p");
errEmail.textContent = "Format email tidak valid";
const errUmur = document.createElement("p");
errUmur.textContent = "Umur harus angka antara 1 - 120";

// Single Source of Truth
const formState = { nama: false, email: false, umur: false };

// Helper: Tampilkan/Sembunyikan Error
const showError = (input, errorEl, show) => {
  input.classList.toggle("error", show);
  if (show && !errorEl.isConnected) {
    input.insertAdjacentElement("afterend", errorEl);
  } else if (!show && errorEl.isConnected) {
    errorEl.remove();
  }
};

// Validators
const validateNama = (val) => {
  const isValid = /^[a-zA-Z\s]{3,}$/.test(val.trim());
  showError(inputNama, errNama, !isValid);
  formState.nama = isValid;
};

const validateEmail = (val) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  showError(inputEmail, errEmail, !isValid);
  formState.email = isValid;
};

const validateUmur = (val) => {
  const num = Number(val);
  const isValid = val !== "" && !isNaN(num) && num >= 1 && num <= 120;
  showError(inputUmur, errUmur, !isValid);
  formState.umur = isValid;
};

// Event: Validasi saat blur (keluar input)
inputNama.addEventListener("blur", (e) => validateNama(e.target.value));
inputEmail.addEventListener("blur", (e) => validateEmail(e.target.value));
inputUmur.addEventListener("blur", (e) => validateUmur(e.target.value));

// Event: Hapus error saat user mulai mengetik ulang
[inputNama, inputEmail, inputUmur].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
    const errEl = input.nextElementSibling;
    if (errEl && errEl.tagName === "P") errEl.remove();
  });
});

// Submit Handler
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // Paksa validasi ulang semua field
  validateNama(inputNama.value);
  validateEmail(inputEmail.value);
  validateUmur(inputUmur.value);

  // Cek state
  if (formState.nama && formState.email && formState.umur) {
    formOutput.insertAdjacentHTML(
      "beforeend",
      `<p>✅ Halo ${inputNama.value.trim()}! Email: ${inputEmail.value.trim()}, Umur: ${inputUmur.value} tahun</p>`,
    );
    // Reset form
    inputNama.value = "";
    inputEmail.value = "";
    inputUmur.value = "";
    // Reset state
    formState.nama = formState.email = formState.umur = false;
  }
});

// ============================================
// SOAL 3: Todo List
// ============================================
// Buat todo list dengan fitur:
// - Tambah todo dengan button ATAU tekan Enter
// - Setiap todo punya checkbox (done/undone)
// - Setiap todo punya tombol hapus
// - Todo yang done → text strike-through
// - Counter: "X todo tersisa" (yang belum done)
// - Jika input kosong saat tambah → jangan tambah!
const inputTodo = document.getElementById("inputTodo");
const btnAddTodo = document.getElementById("btnAddTodo");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");

const updateCount = () => {
  const todos = todoList.querySelectorAll("span");
  const done = todoList.querySelectorAll(".done");
  let remainigTodo = todos.length - done.length;
  todoCount.textContent = `${remainigTodo} todo tersisa`;
};

const inputTodoHandler = () => {
  const todo = inputTodo.value.trim();
  if (todo) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li data-id="todo"><input type="checkbox"><span>${todo}</span> <button class="btn-hapus">Hapus</button>
      </li>`,
    );
  }
  inputTodo.value = "";
  updateCount();
};
inputTodo.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    inputTodoHandler();
  }
});
btnAddTodo.addEventListener("click", inputTodoHandler);

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-hapus")) {
    const list = e.target.closest("li");
    list.remove();
    updateCount();
  }
});

todoList.addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const done = e.target.parentElement.querySelector("span");
    done.classList.toggle("done");
    updateCount();
  }
});

//
// HINT struktur HTML todo item:
// <li data-id="...">
//   <input type="checkbox">
//   <span>Teks todo</span>
//   <button class="btn-hapus">Hapus</button>
// </li>

// ============================================
// SOAL 4: User List dari API + Search
// ============================================
// Buat user list yang:
// - Klik "Load Users" → fetch dari API
// - Tampilkan loading indicator saat fetch
// - Render setiap user sebagai card
// - Search box → filter user by nama (real-time!)
// - Setiap card punya tombol "Lihat Posts"
//   → Fetch posts user tersebut
//   → Tampilkan jumlah posts di card

const API_URL = "https://jsonplaceholder.typicode.com";
let state = {
  users: [],
  posts: {},
};
const renderUsers = (users) => {
  const container = document.getElementById("userContainer");
  if (!users || users.length === 0) {
    container.innerHTML = "<p>Tidak ada user</p>";
  }
  const cards = users.map((user) => {
    return `
      <div class="card">
        <h3>👤 ${user.name}</h3>
        <p>📧 ${user.email}</p>
        <p>📍 ${user.address.city}</p>
        <button class="btn-lihat-posts" data-user-id="${user.id}">Lihat Posts</button>
      </div>
    `;
  });
  container.innerHTML = cards.join("");
};

const btnLoadUsers = document.getElementById("btnLoad");
const loadUserHandling = async () => {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    state.users = users;
    renderUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.classList.add("hidden");
  }
};
btnLoadUsers.addEventListener("click", loadUserHandling);
const inputSearch = document.getElementById("searchUser");
const searchUserHandling = (e) => {
  const searchTerm = e.target.value;
  const filteredUsers = state.users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  if (!filteredUsers || filteredUsers.length === 0) {
    document.getElementById("userContainer").innerHTML =
      `<p>User dengan nama "${searchTerm}" tidak ditemukan</p>`;
    return;
  }
  renderUsers(filteredUsers);
};
inputSearch.addEventListener("input", searchUserHandling);

const userContainer = document.getElementById("userContainer");
userContainer.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-lihat-posts")) {
    const userId = e.target.dataset.userId;
    await loadUserPosts(userId);
  }
});
const loadUserPosts = async (userId) => {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");
  try {
    const response = await fetch(`${API_URL}/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    state.posts[userId] = posts;
    // Update card dengan number of posts
    const userCard = document
      .querySelector(`[data-user-id="${userId}"]`)
      .closest(".card");
    userCard.insertAdjacentHTML(
      "beforeend",
      `<p>📝 Jumlah Posts: ${posts.length}</p>`,
    );
  } catch (error) {
    console.error("Error fetching user posts:", error);
  } finally {
    loading.classList.add("hidden");
  }
};
//
// Format card:
// ┌─────────────────────────┐
// │ 👤 Leanne Graham        │
// │ 📧 Sincere@april.biz   │
// │ 📍 Gwenborough          │
// │ [Lihat Posts]           │
// └─────────────────────────┘
