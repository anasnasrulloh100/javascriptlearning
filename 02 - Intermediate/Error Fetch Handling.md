// KATEGORI 1: NETWORK ERROR
→ fetch() langsung THROW error
→ Masuk ke catch() block
→ Promise di-REJECT

// KATEGORI 2: HTTP ERROR  
→ fetch() BERHASIL (tidak throw!)
→ response.ok = false
→ Harus dicek MANUAL!

// Ini jebakan terbesar pemula!
fetch() tidak otomatis error meski server return 404!

// Visualisasi Alur//
fetch("https://api.com/data")
         ↓
    Apakah bisa konek?
    ↙              ↘
   TIDAK            YA
   ↓                ↓
Network Error    Ada Response
(catch!)         ↓
                 Cek status code
                 ↙           ↘
            200-299         400-599
            ✅ OK           ❌ HTTP Error
            response.ok     response.ok
            = true          = false
                            (TIDAK auto catch!)

// ==========================
// KATEGORI 1: Network Error
// ==========================
// Network error terjadi ketika:
// Tidak bisa terhubung ke server sama sekali

// ================================
// 1. No Internet Connection
// ================================
try {
  const response = await fetch("https://api.example.com/users");
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Failed to fetch"
  // → Tidak ada koneksi internet!
}


// ================================
// 2. DNS Error - Domain tidak ada
// ================================
try {
  const response = await fetch("https://domain-tidak-ada-xyz.com/api");
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Failed to fetch"
  // → Domain tidak ditemukan di DNS!
}


// ================================
// 3. CORS Error ⭐ (Paling Sering di Frontend!)
// ================================
try {
  const response = await fetch("https://api-lain.com/data");
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Failed to fetch"
  // → Server tidak izinkan request dari domain kita!
  // → Lihat di Console: "CORS policy" error
}

// CORS = Cross-Origin Resource Sharing
// Browser BLOKIR request ke domain berbeda
// kecuali server mengizinkan!

// SOLUSI CORS:
// 1. Server tambah header: Access-Control-Allow-Origin
// 2. Pakai proxy (di development)
// 3. Pakai API yang sudah support CORS
// (jsonplaceholder.typicode.com sudah support CORS ✅)


// ================================
// 4. Request Timeout
// ================================
// fetch() tidak punya timeout bawaan!
// Harus implement manual:

const fetchWithTimeout = async (url, ms = 5000) => {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), ms);

  try {
    const response = await fetch(url, {
      signal: controller.signal // ← Kirim signal abort
    });
    clearTimeout(timeoutId); // ← Batalkan timeout jika berhasil
    return response;

  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout setelah ${ms}ms`);
    }
    throw error;
  }
};

// Test:
try {
  const response = await fetchWithTimeout("https://api.example.com", 3000);
} catch (error) {
  console.log(error.message); // "Request timeout setelah 3000ms"
}


// ================================
// 5. AbortError - Request Dibatalkan Manual
// ================================
const controller = new AbortController();

// Batalkan setelah 2 detik:
setTimeout(() => controller.abort(), 2000);

try {
  const response = await fetch("https://api.example.com", {
    signal: controller.signal
  });
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Request dibatalkan!"); // Masuk sini
  }
}

// Contoh penggunaan nyata:
// User pindah halaman → batalkan request yang sedang berjalan
// User klik tombol Cancel → batalkan upload

//======================
//KATEGORI 2: HTTP Error
// =====================

// HTTP Error terjadi ketika:
// Berhasil konek ke server, tapi server return error status

// ================================
// STATUS CODE yang Perlu Diketahui
// ================================

/*
2xx = SUKSES
─────────────────────────────────
200 OK           → GET berhasil
201 Created      → POST berhasil (data dibuat)
204 No Content   → DELETE berhasil (tidak ada response body)

3xx = REDIRECT
─────────────────────────────────
301 Moved Permanently → URL pindah permanen
302 Found             → Redirect sementara

4xx = CLIENT ERROR (Salah dari kita!)
─────────────────────────────────
400 Bad Request  → Data yang dikirim salah format
401 Unauthorized → Belum login / token expired
403 Forbidden    → Sudah login tapi tidak punya izin
404 Not Found    → Data/endpoint tidak ditemukan
405 Method Not Allowed → Pakai GET padahal harusnya POST
408 Request Timeout    → Server tunggu terlalu lama
409 Conflict     → Data duplikat (email sudah terdaftar)
422 Unprocessable → Validasi gagal di server
429 Too Many Requests → Rate limit! Terlalu banyak request

5xx = SERVER ERROR (Salah dari server!)
─────────────────────────────────
500 Internal Server Error → Bug di server
502 Bad Gateway   → Server proxy error
503 Service Unavailable → Server down/maintenance
504 Gateway Timeout → Server tidak response tepat waktu
*/


// ================================
// CARA HANDLE HTTP ERROR
// ================================

// ❌ SALAH - Tidak cek response.ok:
const response = await fetch("https://api.example.com/users/999");
const data = await response.json();
// Kalau 404: data = { } atau error message
// Tidak ada error yang di-throw!
// Bug tersembunyi! 😱


// ✅ BENAR - Selalu cek response.ok:
const response = await fetch("https://api.example.com/users/999");

if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
}

const data = await response.json(); // Aman!


// ✅ LEBIH BAIK - Handle setiap status secara spesifik:
const handleResponse = async (response) => {
  if (response.ok) return response.json();

  // Handle per status code:
  switch (response.status) {
    case 400:
      throw new Error("Data yang dikirim tidak valid!");
    case 401:
      throw new Error("Sesi expired, silakan login ulang!");
    case 403:
      throw new Error("Anda tidak punya izin untuk ini!");
    case 404:
      throw new Error("Data tidak ditemukan!");
    case 429:
      throw new Error("Terlalu banyak request, coba lagi nanti!");
    case 500:
      throw new Error("Server sedang bermasalah, coba lagi nanti!");
    default:
      throw new Error(`HTTP Error: ${response.status}`);
  }
};

// Pakai:
try {
  const response = await fetch("https://api.example.com/users/999");
  const data = await handleResponse(response);
  console.log(data);
} catch (error) {
  console.log(error.message); // Pesan yang spesifik!
}

// ==============
Implementasi Error Handler Lengkap

// ================================
// PRODUCTION-READY FETCH WRAPPER
// ================================

const fetchAPI = async (url, options = {}) => {
  // Default options
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Merge options
  const finalOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, finalOptions);

    // Handle HTTP errors
    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      // ↑ Coba parse error body dari server
      // .catch(() => null) → jika body bukan JSON, return null

      const errorMessage = errorBody?.message
        ?? errorBody?.error
        ?? `HTTP Error: ${response.status}`;

      const error = new Error(errorMessage);
      error.status = response.status;      // ← Tambah status ke error!
      error.statusText = response.statusText;
      throw error;
    }

    // Handle 204 No Content (DELETE biasanya)
    if (response.status === 204) return null;

    return response.json();

  } catch (error) {
    // Bedakan Network Error vs HTTP Error
    if (error.status) {
      // HTTP Error (kita throw sendiri)
      console.error(`❌ HTTP ${error.status}: ${error.message}`);
    } else if (error.name === "AbortError") {
      console.error(`⏱️ Request dibatalkan`);
    } else {
      // Network Error
      console.error(`🌐 Network Error: ${error.message}`);
      console.error(`Cek koneksi internet Anda!`);
    }

    throw error; // Re-throw agar bisa di-handle di caller
  }
};

//===========================
Cara Handle di Aplikasi Nyata
//===========================

// ================================
// PATTERN: Tampilkan Error di UI
// ================================

const loadUsers = async () => {
  const container = document.querySelector("#container");
  const loading   = document.querySelector("#loading");

  // Tampilkan loading
  loading.classList.remove("hidden");
  container.innerHTML = "";

  try {
    const users = await fetchAPI(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Render data
    container.innerHTML = users.map(u => `
      <div class="card">${u.name}</div>
    `).join("");

  } catch (error) {
    // Tampilkan error yang user-friendly di UI!
    container.innerHTML = `
      <div class="error-card">
        <h3>😕 Gagal memuat data</h3>
        <p>${getUserFriendlyMessage(error)}</p>
        <button onclick="loadUsers()">Coba Lagi</button>
      </div>
    `;
  } finally {
    loading.classList.add("hidden"); // ← Selalu sembunyikan loading!
  }
};

// Konversi technical error → pesan yang user mengerti
const getUserFriendlyMessage = (error) => {
  if (!navigator.onLine) {
    return "Tidak ada koneksi internet. Periksa WiFi Anda!";
  }

  switch (error.status) {
    case 401: return "Sesi Anda expired. Silakan login ulang.";
    case 403: return "Anda tidak punya akses ke halaman ini.";
    case 404: return "Data yang dicari tidak ditemukan.";
    case 429: return "Terlalu banyak request. Tunggu sebentar.";
    case 500: return "Server sedang bermasalah. Coba lagi nanti.";
    default:  return "Terjadi kesalahan. Silakan coba lagi.";
  }
};

//=======================
//   Tabel Ringkasan
//=======================

┌──────────────────┬──────────────┬────────────────────────────┐
│ Jenis Error      │ Masuk Catch? │ Solusi                     │
├──────────────────┼──────────────┼────────────────────────────┤
│ No Internet      │ ✅ YA        │ Cek navigator.onLine       │
│ Domain tdk ada   │ ✅ YA        │ Cek URL                    │
│ CORS             │ ✅ YA        │ Server config / proxy      │
│ Timeout          │ ✅ YA        │ AbortController            │
│ Abort manual     │ ✅ YA        │ error.name === "AbortError"│
├──────────────────┼──────────────┼────────────────────────────┤
│ 400 Bad Request  │ ❌ TIDAK     │ Cek data yang dikirim      │
│ 401 Unauthorized │ ❌ TIDAK     │ Login / refresh token      │
│ 403 Forbidden    │ ❌ TIDAK     │ Cek permission user        │
│ 404 Not Found    │ ❌ TIDAK     │ Cek ID / endpoint          │
│ 429 Rate Limit   │ ❌ TIDAK     │ Tambah delay / retry       │
│ 500 Server Error │ ❌ TIDAK     │ Coba lagi / hubungi dev    │
└──────────────────┴──────────────┴────────────────────────────┘

SEMUA HTTP Error (4xx & 5xx):
→ fetch() TIDAK throw!
→ HARUS cek response.ok manual!
→ Atau gunakan wrapper seperti fetchAPI() di atas

//===================================
// Checklist Error Handling yang Baik
//===================================

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    // ✅ 1. Selalu cek response.ok
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    // ✅ 2. Handle 204 No Content
    if (response.status === 204) return null;

    // ✅ 3. Parse JSON dengan aman
    return await response.json();

  } catch (error) {
    // ✅ 4. Bedakan jenis error
    if (error.name === "AbortError") {
      console.log("Dibatalkan");
    } else if (!navigator.onLine) {
      console.log("Tidak ada internet");
    } else {
      console.log("Error:", error.message);
    }

    // ✅ 5. Return nilai default
    return null;

    // ✅ 6. ATAU re-throw untuk di-handle di caller
    // throw error;
  }

  // ✅ 7. Gunakan finally untuk cleanup
  // finally { hideLoading(); }
};