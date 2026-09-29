Mengamankan tampilan (UI) agar terlihat profesional *sebelum* menghubungkan ke API nyata adalah langkah yang sangat strategis. Mengapa? Karena saat Anda nanti mengambil data dari API sungguhan, Anda ingin langsung melihat hasilnya dalam tampilan yang cantik, bukan berantakan.

Mari kita upgrade "wardrobe" aplikasi Anda dengan **Tailwind CSS**, standar *styling* nomor 1 di industri saat ini (digunakan oleh GitHub, Shopify, Twitch, dan banyak startup global).

---

### Materi Hari 16: Tailwind CSS (Utility-First Styling)

**1. WHAT**
Tailwind CSS adalah *framework* CSS yang memberikan kelas-kelas utilitas (utility classes) siap pakai. Alih-alih menulis nama kelas semantik seperti `.card-container` lalu mendefinisikannya di file CSS terpisah, Anda langsung menulis kelas kecil yang spesifik (seperti `p-4`, `bg-blue-500`, `rounded-lg`) langsung di elemen HTML/JSX Anda.

**2. HOW**
Berikut adalah ritual instalasi standar untuk proyek Vite + React:

**Langkah 1: Instalasi Package**
Jalankan ini di terminal VS Code Anda (pastikan Anda berada di folder `my-first-react`):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
*(Perintah kedua akan membuat dua file baru: `tailwind.config.js` dan `postcss.config.js`)*

**Langkah 2: Konfigurasi Path**
Buka file `tailwind.config.js` yang baru dibuat, dan ubah bagian `content` agar Tailwind tahu di mana harus mencari kelas-kelasnya:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Pastikan baris ini ada!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Langkah 3: Tambahkan Direktif Tailwind**
Buka file `src/index.css`, hapus semua isinya, dan ganti dengan 3 baris ajaib ini:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**3. WHY**
*   **Kecepatan Development**: Anda tidak perlu lagi berpindah-pindah antara file `.jsx` dan `.css`. Semuanya ada di depan mata.
*   **Ukuran File Final Kecil**: Saat di-*build* untuk produksi, Tailwind secara otomatis menghapus semua kelas yang tidak Anda gunakan (tree-shaking), membuat file CSS akhir sangat kecil.
*   **Responsif Secara Alami**: Menambahkan tampilan mobile-friendly semudah menambahkan prefix `md:` atau `lg:` (misal: `md:w-1/2`).

**4. WHEN**
*   **Kapan digunakan**: Hampir di **semua** proyek React/Vue/Next.js modern. Ini adalah *default stack* di industri.
*   **Kapan tidak**: Jika Anda bekerja di proyek warisan (legacy) yang sudah memiliki framework CSS custom yang sangat ketat, atau jika Anda membangun library komponen yang benar-benar *headless* (tanpa style bawaan).

**5. ANALOGI**
Bayangkan Anda sedang **Merakit Furniture**:
*   **CSS Tradisional**: Anda harus membeli kayu mentah, memotongnya, mengamplas, dan mengecatnya sendiri sesuai ukuran yang Anda ukur. (Fleksibel, tapi lambat).
*   **Tailwind CSS**: Anda pergi ke toko perkakas dan langsung mengambil rak yang sudah jadi dengan ukuran "Sedang", warna "Biru", dan sudut "Melengkung". Anda tinggal menyusunnya. Sangat cepat dan konsisten.

---

### 🛠️ TANTANGAN HARI INI (Latihan 18: Refactor ke Tailwind)

Mari kita bersihkan kode `JobCard` Anda dari *inline style* yang berantakan dan ganti dengan kelas Tailwind yang elegan.

**Tugas Anda:**
1. Ikuti **3 Langkah Instalasi** di atas di terminal VS Code Anda.
2. Buka file `src/App.jsx`.
3. Ubah komponen `JobCard` Anda. Hapus semua properti `style={{ ... }}`, dan ganti dengan atribut `className="..."` menggunakan kelas Tailwind berikut sebagai panduan:
   - Container utama: `border border-gray-200 p-5 rounded-xl m-3 bg-white shadow-sm hover:shadow-md transition-shadow`
   - Badge Remote: `bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold`
   - Tombol Simpan (saat belum tersimpan): `bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors`
   - Tombol Simpan (saat tersimpan): `bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors`
4. Pastikan Anda mengganti logika *inline style* pada tombol menjadi penggabungan *string* kelas Tailwind, atau gunakan library seperti `clsx` (tapi untuk sekarang, *template literal* sederhana sudah cukup).
   
   *Contoh penggabungan kelas dinamis:*
   ```javascript
   className={`px-4 py-2 rounded-md transition-colors ${
     isSaved ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
   }`}
   ```
5. Simpan dan lihat hasilnya di browser.

**Format Balasan Anda:**
1. Konfirmasi bahwa instalasi Tailwind berhasil (tidak ada error merah di terminal).
2. Kode fungsi `JobCard` yang sudah di-refactor menggunakan `className`.
3. Ceritakan perbedaan kecepatan dan kerapian yang Anda rasakan dibandingkan menggunakan *inline style*!

*Tips Mentor: Jika VS Code Anda tidak memberikan *autocomplete* (saran kelas) saat Anda mengetik `className`, instal ekstensi **"Tailwind CSS IntelliSense"** di VS Code. Ini adalah "senjata rahasia" yang wajib dimiliki setiap developer yang menggunakan Tailwind.*

Silakan dieksekusi, Anas! Mari kita buat aplikasi ini terlihat seperti produk senilai jutaan dolar. 🚀
