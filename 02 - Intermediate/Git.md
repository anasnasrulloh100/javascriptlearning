

### Materi : Git & GitHub (Version Control Modern)

**1. WHAT**
*   **Git**: Sistem kontrol versi (version control) yang berjalan di komputer Anda. Fungsinya melacak setiap perubahan pada kode Anda, memungkinkan Anda "kembali ke masa lalu" jika ada kesalahan.
*   **GitHub**: Platform berbasis cloud (milik Microsoft) yang menjadi tempat penyimpanan *remote* dari repository Git Anda. Ini adalah "CV" atau portofolio utama seorang developer di mata perusahaan global.

**2. HOW**
Berikut adalah alur kerja (workflow) harian yang akan Anda gunakan 99% dari waktu Anda:


# 1. Inisialisasi Git di folder proyek Anda (hanya sekali di awal)
git init

# 2. Menyiapkan perubahan untuk disimpan (staging)
git add .   # Titik (.) berarti "semua file yang berubah"

# 3. Menyimpan perubahan dengan pesan yang standar (Conventional Commits)
git commit -m "feat: inisialisasi proyek dan tambah struktur HTML dasar"

# 4. Menghubungkan ke repository GitHub (hanya sekali di awal)
git remote add origin https://github.com/username-anda/nama-repo.git

# 5. Mengirim kode ke GitHub (dilakukan setiap kali selesai bekerja)
git push -u origin main
```

*Catatan Standar Industri (Conventional Commits):*
Selalu awali pesan commit dengan prefiks:
- `feat:` (fitur baru)
- `fix:` (perbaikan bug)
- `docs:` (perubahan dokumentasi)
- `style:` (perubahan format kode, spasi, dll, tanpa mengubah logika)

**3. WHY**
*   **Safety Net**: Anda bisa bereksperimen dengan kode baru tanpa takut merusak kode yang sudah berjalan. Jika gagal, cukup `git reset`.
*   **Kolaborasi**: Di perusahaan global, puluhan developer bekerja di kode yang sama. Git memungkinkan penggabungan kode (merge) tanpa saling menimpa.
*   **Bukti Kompetensi**: Rekruter teknis di USA/Singapura akan melihat *commit history* GitHub Anda. Commit yang rapi dengan pesan yang jelas adalah "green flag" besar.

**4. WHEN**
*   **Kapan digunakan**: SELALU. Setiap kali Anda memulai proyek baru, atau setiap kali Anda menyelesaikan satu unit pekerjaan kecil (misal: "menyelesaikan tombol login").
*   **Kapan tidak**: Jangan pernah `commit` kode yang setengah jadi atau kode yang sedang *error* (kecuali Anda menggunakan fitur `git stash` atau *branch* terpisah, yang akan kita pelajari nanti).

**5. ANALOGI**
Bayangkan Git seperti **Fitur "Save Game" atau "Checkpoint" di Video Game**:
*   `git add` = Anda memilih slot save mana yang akan digunakan.
*   `git commit` = Anda menekan tombol "Save". Game mencatat posisi, darah, dan inventaris Anda tepat saat ini.
*   `git push` = Anda mengunggah save file tersebut ke Cloud, jadi jika komputer Anda rusak, Anda bisa lanjut bermain di komputer lain dari titik terakhir yang disimpan.
*   Pesan commit (`feat: ...`) = Nama save file Anda, misal: "Sebelum boss fight" atau "Setelah dapat senjata baru", agar Anda tahu apa isi save tersebut tanpa harus membukanya.

---

### 🛠️ TANTANGAN HARI INI (Latihan 9: Setup Workflow Profesional)

Mari kita praktikkan langsung. Pastikan Anda sudah menginstal [Git](https://git-scm.com/) dan memiliki akun [GitHub](https://github.com/).

**Tugas Anda:**
1. Buat folder baru di komputer Anda, beri nama `belajar-git-dasar`.
2. Buka folder tersebut di **VS Code**.
3. Buka **Terminal** di VS Code (`Ctrl + `` ` atau Menu > Terminal > New Terminal).
4. Ketik dan jalankan perintah berikut satu per satu:
   - `git init`
   - Buat file baru bernama `index.html` (boleh isi dengan kode HTML sederhana dari latihan DOM sebelumnya).
   - `git add .`
   - `git commit -m "feat: buat struktur HTML dasar untuk latihan DOM"`
5. *(Opsional tapi sangat disarankan)*: Buat repository baru di GitHub (beri nama `belajar-git-dasar`, jangan centang "Add README"), lalu ikuti instruksi GitHub untuk menghubungkan dan melakukan `git push`.

**Format Balasan Anda:**
1. Konfirmasi apakah Anda berhasil menjalankan perintah di atas.
2. Tunjukkan pesan output dari terminal saat Anda menjalankan `git commit` (atau screenshot teksnya).
3. Jika sudah di-push, berikan link repository GitHub Anda (jika Anda nyaman membagikannya). Jika belum, tidak apa-apa, cukup konfirmasi bahwa `git commit` berhasil.

*Tips Mentor: Membiasakan diri mengetik perintah ini di terminal (bukan hanya mengandalkan tombol UI di VS Code) akan membuat Anda jauh lebih cepat dan percaya diri saat bekerja di lingkungan profesional (yang seringkali hanya memiliki akses terminal).*

Silakan dieksekusi! Saya tunggu laporan misi Anda. Setelah ini, besok kita siap tempur React.js! 🚀


⚠️ Satu Catatan Kecil dari Mentor (Area for Improvement):
Saya melihat Anda menggunakan perintah: git commit -m "first commit".
Ini adalah default suggestion dari GitHub, tetapi di dunia kerja nyata, "first commit" adalah pesan commit yang dihindari. Mengapa? Karena ketika ada 1.000 commit di proyek tersebut, pesan ini tidak memberi tahu tim apa yang sebenarnya Anda tambahkan.
Ingat Prinsip Conventional Commits yang kita bahas tadi?
Untuk kasus Anda tadi, pesan commit yang akan dipuji oleh Senior Engineer adalah:
git commit -m "docs: add initial README file" atau git commit -m "chore: initialize repository".
(Pro-Tip: Jika di masa depan Anda salah ketik pesan commit dan belum melakukan git push, Anda bisa memperbaikinya dengan perintah: git commit --amend -m "pesan yang benar". Simpan trik ini untuk nanti!)


