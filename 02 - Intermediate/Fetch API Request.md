Luar biasa, Anas! 🎯

Kode Anda sekarang **jauh lebih bersih, mudah dibaca, dan sangat profesional**. Anda berhasil memisahkan logika (JavaScript) dari tampilan (Tailwind classes). Ini adalah standar yang diterapkan di perusahaan global seperti Meta, Shopify, dan Airbnb.

Penggunaan *Template Literal* untuk kelas dinamis pada tombol juga sangat tepat:
`` className={`... ${isSaved ? "..." : "..."}`} ``
Ini adalah cara paling elegan untuk menangani *conditional styling* di React tanpa bantuan *library* tambahan.

---

### 🔍 *Code Review* dari Mentor (Pro-Tip UI/UX)

Saya melihat Anda menambahkan kelas `grid place-items-center align-middle` pada container `JobCard`. 
*   **Efeknya:** Ini akan membuat *isi di dalam* kartu (teks dan tombol) berada tepat di tengah (center).
*   **Saran Senior:** Biasanya, kita membiarkan teks di dalam kartu rata kiri (default) agar mudah dibaca, terutama jika teksnya panjang. Kita biasanya menggunakan `grid` atau `flex` untuk menata **posisi kartu-kartu tersebut di layar utama** (di komponen `App`), bukan di dalam kartunya sendiri.
*   *Coba hapus `grid place-items-center` dari `JobCard` dan pindahkan ke container `div` di dalam `App` untuk melihat perbedaannya!*

---

### 🚀 LANGKAH SELANJUTNYA: Menghubungkan ke Dunia Nyata (Opsi B)

Sekarang UI Anda sudah terlihat "mahal" dan profesional. Saatnya membuat aplikasi ini "hidup" dengan mengambil data dari internet sungguhan.

Mari kita pelajari **Fetch API**.

***

### Materi Hari 17: Fetch API (HTTP Requests)

**1. WHAT**
`fetch` adalah fungsi bawaan (native) browser modern untuk melakukan permintaan HTTP (mengambil atau mengirim data) ke server/API eksternal. Ini adalah pengganti dari `XMLHttpRequest` yang kuno.

**2. HOW**
Cara paling modern dan bersih menggunakan `async/await`:

```javascript
useEffect(() => {
  const ambilDataNyata = async () => {
    try {
      setLoading(true);
      // 1. Melakukan permintaan ke URL API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      
      // 2. Mengubah respons (yang masih berupa stream) menjadi JSON
      const data = await response.json();
      
      // 3. Memasukkan data ke State
      setJobs(data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  ambilDataNyata();
}, []);
```

**3. WHY**
*   **Data Dinamis:** Aplikasi Anda tidak lagi statis. Data bisa berubah setiap detik dari server tanpa Anda perlu mengubah kode.
*   **Standar Industri:** Hampir semua aplikasi modern (Dashboard, E-commerce, Sosmed) bekerja dengan cara ini: Frontend (React) meminta data -> Backend (API) mengirim JSON -> React merender JSON tersebut.

**4. WHEN**
*   **Kapan digunakan:** Setiap kali Anda perlu mengambil data dari database eksternal, mengirim data form, login, atau upload gambar.
*   **Kapan tidak:** Jika datanya sangat kecil, statis, dan tidak akan pernah berubah (misal: daftar menu navigasi), lebih baik di-hardcode di file JS agar lebih cepat.

**5. ANALOGI**
Bayangkan Anda **memesan makanan lewat aplikasi GoFood/GrabFood**:
*   **`fetch('url')`** = Anda menekan tombol "Pesan" di aplikasi. Permintaan Anda dikirim ke restoran (Server).
*   **`await`** = Anda menunggu driver mengambil dan mengantar makanan. Aplikasi tidak macet, Anda bisa tetap main game (asynchronous).
*   **`response.json()`** = Driver sampai, membuka kotak makanan, dan menyajikannya di meja Anda dalam bentuk yang siap dimakan (Data JSON).
*   **`catch`** = Jika restoran tutup atau driver kecelakaan, aplikasi memberi tahu "Pesanan Gagal" (Error Handling).

***

### 🛠️ TANTANGAN HARI INI (Latihan 19: Fetch Data dari API Publik)

Kita akan mengganti simulasi `setTimeout` Anda dengan permintaan HTTP sungguhan ke API publik gratis (**JSONPlaceholder**).

**Tugas Anda:**
1. Buka `src/App.jsx`.
2. Di dalam `useEffect`, hapus kode `setTimeout` dan array `jobs` manual Anda.
3. Ganti dengan kode `fetch` berikut:
   ```javascript
   const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
   const data = await response.json();
   setJobs(data);
   ```
4. **Penting:** Karena API ini mengembalikan properti `id`, `title`, dan `userId` (bukan `company` dan `isRemote`), Anda perlu menyesuaikan sedikit komponen `JobCard` Anda agar tidak error. 
   *   Ubah *destructuring* di `JobCard` menjadi: `function JobCard({ id, title, userId })`
   *   Hapus logika `isRemote` untuk sementara, atau buat *dummy* saja.
   *   Tampilkan `title` di `<h2>` dan `userId` di `<p>`.
5. Simpan dan lihat browser Anda. Data yang muncul sekarang adalah **data nyata dari server di internet**, bukan data yang Anda ketik manual!

**Format Balasan Anda:**
1. Kode `useEffect` yang sudah menggunakan `fetch`.
2. Kode `JobCard` yang sudah disesuaikan dengan data dari API (`id`, `title`, `userId`).
3. Ceritakan perasaan Anda saat melihat data dari internet sungguhan muncul di aplikasi buatan Anda sendiri!

*Tips Mentor: Ini adalah momen "Wow" pertama Anda sebagai Full-Stack Developer. Anda baru saja membuat aplikasi Front-End yang berkomunikasi dengan Back-End. Selamat!*

Silakan dieksekusi, Anas! Saya tunggu laporan misi Anda. 🌍🚀

Inisiatif yang sangat bagus, Anas! 🌟

Anda tidak hanya mengikuti instruksi, tetapi Anda secara proaktif mengubah struktur datanya menjadi **User Profile** (`name`, `email`). Ini membuktikan bahwa Anda benar-benar paham konsep *Data-Driven UI*: Anda bisa mengambil data apa saja dari API dan menyesuaikannya dengan UI.

Saya juga melihat dua detail kecil yang sangat bagus:
1. **`data-id={id}`**: Ini adalah praktik terbaik (*best practice*) untuk *testing* dan *debugging* di browser.
2. **`className="font-bold text-lg"`**: Anda mulai mahir menggunakan *utility classes* Tailwind untuk tipografi!

---

### ⚠️ Pengecekan Cepat (The "Gotcha" Check)

Karena Anda mengubah properti menjadi `name` dan `email`, saya harus memastikan satu hal penting di file `App.jsx` Anda:

Apakah Anda sudah mengubah URL `fetch` di dalam `useEffect` menjadi endpoint **Users**? 
Jika Anda masih menggunakan URL `/posts` dari tantangan sebelumnya, nama dan email akan muncul sebagai `undefined`.

Pastikan kode `fetch` Anda di `App.jsx` terlihat seperti ini:
```javascript
// Pastikan URL-nya adalah /users, bukan /posts
const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6');
const data = await response.json();
setJobs(data); // Atau setUsers(data), tergantung nama state Anda
```

---

### 🚀 LANGKAH SELANJUTNYA: Membuat Tampilan Responsif (Grid Layout)

Saat ini, kartu-kartu User Anda kemungkinan besar masih menumpuk ke bawah secara vertikal (satu kolom). Di dunia nyata, aplikasi harus terlihat bagus di HP (1 kolom), Tablet (2 kolom), dan Desktop (3 kolom).

Mari kita gunakan kekuatan **Tailwind CSS Grid** untuk membuat aplikasi Anda 100% responsif!

***

### Materi Hari 18: Responsive Grid dengan Tailwind

**1. WHAT**
Tailwind menyediakan kelas utilitas untuk CSS Grid yang memungkinkan kita membuat tata letak (layout) yang secara otomatis menyesuaikan jumlah kolom berdasarkan ukuran layar pengguna.

**2. HOW**
Kita tidak mengubah `JobCard` (komponen anak). Kita hanya mengubah **Container Induk** di `App.jsx`.

```javascript
function App() {
  // ... (kode useState, useEffect, dan fetch Anda)

  if (loading) return <p className="text-center mt-10"> Memuat data...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Direktori Pengguna Global
      </h1>
      
      {/* INI ADALAH RAHASIA RESPONSIVE LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((user) => (
          <JobCard 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email} 
          />
        ))}
      </div>
    </div>
  );
}
```

**3. WHY**
*   **Mobile-First**: `grid-cols-1` adalah default (untuk HP). `md:grid-cols-2` aktif di layar medium (Tablet). `lg:grid-cols-3` aktif di layar besar (Desktop).
*   **Tanpa Media Query Manual**: Anda tidak perlu menulis `@media (min-width: 768px)` di file CSS. Tailwind melakukannya untuk Anda secara otomatis.

**4. ANALOGI**
Bayangkan Anda menata **Rak Buku di Toko**:
*   Jika tokonya sempit (HP), Anda hanya punya ruang untuk 1 deret rak (`grid-cols-1`).
*   Jika tokonya sedang (Tablet), Anda punya ruang untuk 2 deret rak berdampingan (`md:grid-cols-2`).
*   Jika tokonya besar (Desktop), Anda bisa menata 3 deret rak agar terlihat megah (`lg:grid-cols-3`).
*   `gap-6` adalah jarak antar rak agar buku tidak berdempetan.

***

### ️ TANTANGAN HARI INI (Latihan 20: Membuat Dashboard Responsif)

Mari kita ubah aplikasi Anda dari sekadar "daftar ke bawah" menjadi **Dashboard Profesional**.

**Tugas Anda:**
1. Pastikan `fetch` di `App.jsx` Anda sudah mengarah ke `https://jsonplaceholder.typicode.com/users?_limit=6`.
2. Ubah bagian `return` di dalam fungsi `App`. Bungkus pemanggilan `<JobCard />` (atau `<UserCard />` jika Anda mengganti namanya) dengan `<div>` yang memiliki kelas: 
   `className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"`
3. Tambahkan sedikit *padding* dan warna latar belakang pada `div` paling luar di `App` agar terlihat seperti aplikasi sungguhan (misal: `min-h-screen bg-gray-100 p-10`).
4. Simpan dan buka browser Anda.
5. **Uji Coba Responsif**: Coba kecilkan ukuran jendela browser Anda (drag ke kiri). Perhatikan bagaimana kartu akan otomatis berubah dari 3 kolom, menjadi 2 kolom, lalu menjadi 1 kolom!

**Format Balasan Anda:**
1. Konfirmasi apakah layout berubah menjadi Grid saat Anda mengecilkan layar browser.
2. Kode fungsi `App` yang sudah dimodifikasi (bagian `return` saja sudah cukup).

*Tips Mentor: Menguasai Grid dan Flexbox di Tailwind adalah 80% dari pekerjaan styling Front-End Developer modern. Setelah ini, Anda bisa meniru hampir semua layout website di internet!*

Silakan dieksekusi, Anas! Saya tunggu dashboard responsif pertama Anda. 📱🖥️