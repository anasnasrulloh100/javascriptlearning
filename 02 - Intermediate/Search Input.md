Selamat! 🎉 

Anda baru saja membuat aplikasi web yang **sepenuhnya responsif**. Jika Anda mengecilkan layar browser, layoutnya otomatis menyesuaikan. Ini adalah fitur yang sangat dicari oleh perusahaan global karena pengguna sekarang mengakses web dari berbagai ukuran layar (HP, Tablet, Desktop).

Sebagai mentor Anda, izinkan saya memberikan sedikit **Code Review** standar industri untuk kode yang baru saja Anda tulis. Ini adalah detail kecil yang membedakan kode "berjalan" dengan kode "profesional":

###  Code Review (Pro-Tips)

1. **Penamaan Variabel (Readability):** 
   Anda menggunakan `data.map((d) => ... )`. Meskipun ini berjalan dengan sempurna, di tim global, kami sangat mengutamakan *readability*. 
   *Saran Senior:* Gunakan nama yang deskriptif. Ubah `data` menjadi `users` (atau `jobs`), dan `d` menjadi `user` (atau `job`). 
   ```javascript
   // Lebih mudah dibaca oleh developer lain
   {users.map((user) => ( ... ))}
   ```
2. **Redundansi Kelas Tailwind:**
   Anda menulis `p-4` dan `p-10` di div yang sama. Dalam CSS, yang terakhir ditulis akan menimpa yang pertama (jadi `p-4` tidak berguna). 
   *Saran Senior:* Gunakan *responsive padding*. 
   ```javascript
   // Padding kecil di HP (p-4), padding besar di Desktop (md:p-10)
   className="... p-4 md:p-10 min-h-screen bg-gray-100"
   ```

---

###  LANGKAH SELANJUTNYA: Interaktivitas Pengguna (Search & Filter)

Aplikasi Anda sekarang cantik dan mengambil data dari internet. Tapi, bayangkan jika ada 100 pengguna. Pengguna aplikasi Anda akan kesulitan mencari nama tertentu. 

Di sinilah kita menggabungkan **State (`useState`)** dengan **Array Method (`.filter()`)** yang sudah Anda pelajari di Hari 5!

***

### Materi Hari 19: Controlled Input & Filtering Data

**1. WHAT**
*Controlled Input* adalah teknik di React di mana nilai dari sebuah `<input>` (form) sepenuhnya dikendalikan oleh *State*. Setiap kali pengguna mengetik, state diperbarui, dan kita bisa menggunakan state tersebut untuk menyaring (filter) data yang ditampilkan.

**2. HOW**
```javascript
function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian

  // ... (kode useEffect fetch API Anda)

  // Logika Filter (Gabungan Hari 5 dan Hari 14)
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // e.target.value adalah teks yang diketik user
  };

  return (
    <div>
      {/* Input Pencarian */}
      <input 
        type="text" 
        placeholder="Cari nama pengguna..." 
        value={searchTerm} 
        onChange={handleSearch}
        className="mb-6 p-3 border rounded-lg w-full max-w-md mx-auto block"
      />

      {/* Render data yang SUDAH difilter, bukan data mentah */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <JobCard key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}
```

**3. WHY**
*   **Real-time Feedback:** Pengguna langsung melihat hasil pencarian saat mereka mengetik, tanpa perlu menekan tombol "Cari".
*   **Single Source of Truth:** Data asli (`users`) tidak pernah berubah/rusak. Kita hanya membuat *tampilan* baru (`filteredUsers`) berdasarkan state pencarian.

**4. WHEN**
*   **Kapan digunakan:** Setiap kali Anda memiliki daftar data yang panjang dan pengguna perlu menemukan item spesifik (Search bar, filter kategori, sorting).

**5. ANALOGI**
Bayangkan **Daftar Kontak di HP Anda**:
*   `users` adalah seluruh daftar kontak Anda (1.000 nama).
*   `searchTerm` adalah teks yang Anda ketik di kolom pencarian paling atas.
*   `filteredUsers` adalah daftar kontak yang otomatis tersisa di layar sesuai dengan huruf yang Anda ketik. Daftar asli di database HP Anda tidak terhapus, hanya *tampilan* yang disaring.

***

### 🛠️ TANTANGAN HARI INI (Latihan 21: Membuat Search Bar)

Mari kita buat aplikasi Anda benar-benar interaktif!

**Tugas Anda:**
1. Buka `src/App.jsx`.
2. Tambahkan state baru: `const [searchTerm, setSearchTerm] = useState("");`
3. Buat variabel baru di atas `return`: `const filteredUsers = users.filter(...)` (sesuaikan nama variabel `users` dengan state Anda saat ini, misal `data` atau `jobs`). Gunakan `.toLowerCase()` pada kedua sisi agar pencarian tidak sensitif huruf besar/kecil.
4. Tambahkan elemen `<input>` di atas grid layout Anda. Berikan atribut `value={searchTerm}` dan `onChange={(e) => setSearchTerm(e.target.value)}`.
5. Ubah `.map()` Anda agar me-loop `filteredUsers`, bukan `users` (atau `data`) mentah.
6. Simpan dan coba ketik nama di kolom pencarian. Daftar kartu akan otomatis tersaring!

**Format Balasan Anda:**
1. Kode fungsi `App` yang sudah dimodifikasi (terutama bagian state, filter, dan input).
2. Ceritakan pengalaman Anda saat mengetik di kolom pencarian (apakah terasa *real-time* dan mulus?).

*Tips Mentor: Menggabungkan `useState` (untuk input) + `.filter()` (untuk logika) + `.map()` (untuk UI) adalah "Holy Trinity" dari pengembangan Front-End. Jika Anda menguasai ini, Anda bisa membangun hampir semua fitur UI dasar!*

Silakan dieksekusi, Anas! Saya tunggu fitur pencarian pertama Anda. 🔍🚀