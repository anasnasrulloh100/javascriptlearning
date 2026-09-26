Sempurna, Anas! 

Kode Anda sangat bersih dan logis. Saya sangat mengapresiasi dua hal:
1. **Penggunaan Ternary Operator**: `{isRemote ? "🌍 Remote" : " On-site"}`. Ini adalah cara paling elegan dan standar industri untuk menangani logika kondisional sederhana di dalam JSX.
2. **Inisiatif Styling**: Anda secara proaktif menambahkan `margin: "10px"` agar kartu-kartu tersebut tidak menempel satu sama lain. Ini menunjukkan *eye for design* dan kepedulian terhadap *User Experience* (UX), yang sangat dihargai di perusahaan global.

---

###  Pertanyaan Kritis (The "Aha!" Moment)

Sekarang, bayangkan skenario dunia nyata: Anda mengambil data dari API dan ada **1.000 lowongan pekerjaan**. 

Apakah Anda akan menulis `<JobCard />` sebanyak 1.000 baris secara manual di `App.jsx`? Tentu tidak. Itu akan melelahkan dan tidak *maintainable*.

Di sinilah pengetahuan JavaScript Anda dari **Hari 5** (Array Methods) bertemu dengan React. Mari kita gabungkan keduanya!

***

### Materi Hari 12: Rendering Lists dengan `.map()` di React

**1. WHAT**
Rendering Lists adalah teknik menggunakan metode `.map()` pada sebuah Array untuk menghasilkan daftar komponen React secara otomatis dan dinamis.

**2. HOW**
Alih-alih menulis komponen secara manual, kita simpan data dalam Array of Objects, lalu gunakan `.map()` untuk mengubah setiap objek menjadi komponen `<JobCard />`.

```javascript
const daftarLowongan = [
  { id: 1, title: "React Dev", company: "Meta", isRemote: true },
  { id: 2, title: "Backend Eng", company: "GoTo", isRemote: false }
];

function App() {
  return (
    <div>
      {/* .map() akan me-loop array dan me-return komponen untuk setiap item */}
      {daftarLowongan.map((job) => (
        <JobCard 
          key={job.id} 
          title={job.title} 
          company={job.company} 
          isRemote={job.isRemote} 
        />
      ))}
    </div>
  );
}
```
*Catatan Penting: `key={job.id}` adalah atribut wajib saat menggunakan `.map()` di React. Ini membantu React mengidentifikasi setiap item secara unik agar update UI menjadi super efisien.*

**3. WHY**
*   **DRY (Don't Repeat Yourself)**: Kode Anda menjadi sangat ringkas. 1.000 data atau 1 data, kodenya tetap sama.
*   **Data-Driven UI**: UI Anda sepenuhnya dikendalikan oleh data. Jika data dari API berubah, tampilan Anda otomatis berubah. Ini adalah inti dari aplikasi modern.

**4. WHEN**
*   **Kapan digunakan**: SELALU, setiap kali Anda memiliki kumpulan data (array) yang perlu ditampilkan sebagai daftar, grid, atau tabel di UI.
*   **Kapan tidak**: Jika Anda hanya memiliki 1 atau 2 item yang benar-benar statis dan tidak akan pernah bertambah (misal: Header dan Footer), tidak perlu di-map.

**5. ANALOGI**
Bayangkan Anda memiliki **Cetakan Kue (Komponen `JobCard`)** dan **Adonan Kue (Array Data)**.
*   **Cara Manual**: Anda membuat 1 kue, membentuknya dengan tangan, lalu membuat kue kedua, dst. (Menulis `<JobCard />` manual).
*   **Cara `.map()`**: Anda menuangkan adonan ke dalam cetakan, dan mesin otomatis mencetak kue satu per satu sampai adonan habis. Cepat, seragam, dan efisien.

***

### 🛠️ TANTANGAN HARI INI (Latihan 14: Data-Driven UI)

Mari kita refactor kode Anda menjadi standar profesional!

**Tugas Anda:**
1. Buka `src/App.jsx`.
2. Di **luar** fungsi `App` (bisa di atasnya), buat sebuah `const` bernama `jobsData` yang berisi Array of Objects. Isi dengan 4 data lowongan (sesuai yang Anda buat tadi), dan tambahkan properti `id` unik untuk setiap objek (misal: 1, 2, 3, 4).
3. Di dalam fungsi `App`, hapus keempat `<JobCard />` yang ditulis manual.
4. Ganti dengan pemanggilan `jobsData.map(...)`.
5. Di dalam `.map()`, kembalikan (return) komponen `<JobCard />` yang menerima props dari setiap objek `job`. **Jangan lupa tambahkan `key={job.id}`!**
6. Simpan dan pastikan hasilnya di browser tetap sama (4 kartu muncul).

**Format Balasan Anda:**
1. Kode lengkap `src/App.jsx` yang sudah di-refactor.
2. Konfirmasi bahwa hasilnya tetap sama di browser.

*Tips Mentor: Refactoring (merapikan kode tanpa mengubah fungsinya) adalah kegiatan yang dilakukan Senior Developer setiap hari. Kode yang Anda tulis hari ini adalah fondasi dari bagaimana aplikasi seperti LinkedIn atau JobStreet bekerja di belakang layar!*

Silakan dieksekusi, Anas! Saya tunggu kode refactor Anda. 🚀