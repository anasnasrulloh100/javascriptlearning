// DATA - Jangan diubah!
const articles = [
  {
    id: 1,
    judul: "Belajar JavaScript Modern",
    penulis: { nama: "Anas", email: "anas@blog.com" },
    kategori: "programming",
    tags: ["javascript", "es6", "web"],
    konten: "JavaScript adalah bahasa pemrograman yang powerful...",
    stats: { views: 15420, likes: 892, comments: 134 },
    status: "published",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    judul: "Tips Produktivitas Remote Work",
    penulis: { nama: "Budi", email: "budi@blog.com" },
    kategori: "lifestyle",
    tags: ["remote", "produktivitas", "wfh"],
    konten: "Bekerja dari rumah membutuhkan disiplin tinggi...",
    stats: { views: 8930, likes: 445, comments: 67 },
    status: "published",
    createdAt: "2024-01-20",
  },
  {
    id: 3,
    judul: "Panduan React Hooks",
    penulis: { nama: "Anas", email: "anas@blog.com" },
    kategori: "programming",
    tags: ["react", "hooks", "javascript"],
    stats: { views: 22150, likes: 1205, comments: 289 },
    status: "draft",
    createdAt: "2024-02-01",
  },
  {
    id: 4,
    judul: "Resep Masakan Sehat",
    penulis: { nama: "Citra", email: "citra@blog.com" },
    kategori: "food",
    tags: ["masakan", "sehat", "diet"],
    konten: "Makan sehat tidak harus mahal...",
    stats: { views: 5670, likes: 334, comments: 45 },
    status: "published",
    createdAt: "2024-02-05",
  },
  {
    id: 5,
    judul: "Investasi untuk Pemula",
    penulis: { nama: "Deni", email: "deni@blog.com" },
    kategori: "finance",
    tags: ["investasi", "saham", "finansial"],
    konten: "Mulai investasi tidak perlu modal besar...",
    stats: { views: 31200, likes: 1876, comments: 412 },
    status: "published",
    createdAt: "2024-02-10",
  },
];


// ============================================
// SOAL 1: Analytics Dashboard
// ============================================

// Buat function getAnalytics(articles) yang return object:
// {
//   totalArtikel: 5,
//   totalPublished: 4,
//   totalDraft: 1,
//   totalViews: ...,
//   totalLikes: ...,
//   rataRataViews: ...,
//   artikelTerpopuler: { judul, views },
//   penulisTeraktif: "Anas (2 artikel)",
// }
// Gunakan reduce, filter, map, find!
// Gunakan destructuring di setiap operasi yang bisa!
const getAnalytics = (articles) => {
  const totalArtikel = articles.length;
  const totalPublished = articles.filter((a) => a.status === "published").length;
  const totalDraft = articles.filter((a) => a.status === "draft").length;

  // Total views dan likes
  const { totalViews, totalLikes } = articles.reduce(
    (acc, article) => {
      acc.totalViews += article.stats.views;
      acc.totalLikes += article.stats.likes;
      return acc;
    },
    { totalViews: 0, totalLikes: 0 }
  );

  // Rata-rata views
  const rataRataViews = totalArtikel > 0 ? totalViews / totalArtikel : 0;

  // Artikel terpopuler
  const artikelTerpopuler = articles.reduce((max, article) => {
    return article.stats.views > max.stats.views ? article : max;
  });

  // Penulis teraktif
  const penulisTeraktif = articles.reduce((acc, article) => {
    const penulis = article.penulis.nama;
    acc[penulis] = (acc[penulis] || 0) + 1;
    return acc;
  }, {});

  const penulisTeraktifSorted = Object.entries(penulisTeraktif)
    .sort(([, a], [, b]) => b - a)
    .map(([nama, count]) => `${nama} (${count} artikel)`);

  return {
    totalArtikel,
    totalPublished,
    totalDraft,
    totalViews,
    totalLikes,
    rataRataViews,
    artikelTerpopuler: { judul: artikelTerpopuler.judul, views: artikelTerpopuler.stats.views },
    penulisTeraktif: penulisTeraktifSorted[0] || "Tidak ada",
  };
};

// ============================================
// SOAL 2: Content Management
// ============================================

// a. Buat function publishArtikel(articles, id) yang:
//    - Cari artikel berdasarkan id
//    - Return array articles BARU dengan status "published"
//    - IMMUTABLE! Jangan ubah array asli!
//    - Jika tidak ada → return pesan error
//    Test: publishArtikel(articles, 3)
const publishArtikel = (articles, id) => {
  const index = articles.findIndex((article) => article.id === id);   
  if (index === -1) throw new Error("Artikel tidak ditemukan");
  const updatedArticles = [...articles];
  updatedArticles[index] = { ...updatedArticles[index], status: "published" };
  return updatedArticles;
};  

// b. Buat function tambahTag(articles, id, tagBaru) yang:
//    - Cari artikel berdasarkan id
//    - Tambahkan tag baru ke array tags
//    - IMMUTABLE! Return array articles baru!
//    - Cek jika tag sudah ada → jangan duplikat!
//    Test: tambahTag(articles, 1, "nodejs")
//          tambahTag(articles, 1, "javascript") ← sudah ada!
const tambahTag = (articles, id, tagBaru) => {
  const index = articles.findIndex((article) => article.id === id);
  if (index === -1) {
    throw new Error("Artikel tidak ditemukan");
  }
  const updatedArticles = [...articles];
  if (!updatedArticles[index].tags.includes(tagBaru)) {
    updatedArticles[index] = { ...updatedArticles[index], tags: [...updatedArticles[index].tags, tagBaru] };
  }
  return updatedArticles;
};

// c. Buat function updateStats(articles, id, statsUpdate) yang:
//    - Update stats artikel (views, likes, atau comments)
//    - IMMUTABLE!
//    Test: updateStats(articles, 1, { views: 16000, likes: 900 })
const updateStats = (articles, id, statsUpdate) => {
  const index = articles.findIndex((article) => article.id === id);
  if (index === -1) {
    throw new Error("Artikel tidak ditemukan");
  }
  const updatedArticles = [...articles];
  updatedArticles[index] = { ...updatedArticles[index], stats: { ...updatedArticles[index].stats, ...statsUpdate } };
  return updatedArticles;
};

// ============================================
// SOAL 3: Search & Filter Engine
// ============================================

// Buat function searchEngine(articles, options) yang:
// options bisa berisi (semua optional!):
// {
//   keyword: "javascript",  // cari di judul atau tags
//   kategori: "programming",
//   status: "published",
//   minViews: 10000,
//   penulis: "Anas",
//   sortBy: "views" | "likes" | "comments" | "date"
// }

// - Gunakan destructuring + default value di parameter!
// - Setiap filter hanya aktif jika option-nya ada
// - Return array artikel yang cocok, sudah diurutkan

// Test:
// searchEngine(articles, { keyword: "javascript" })
// searchEngine(articles, { kategori: "programming", status: "published" })
// searchEngine(articles, { minViews: 10000, sortBy: "views" })
// searchEngine(articles, { penulis: "Anas", sortBy: "likes" })
// searchEngine(articles, {}) ← Tanpa filter, return semua!
const searchEngine = (articles, options = {}) => {
  const {
    keyword,
    kategori,
    status,
    minViews,
    penulis,
    sortBy
  } = options;
  const filteredArticles = articles.filter((article) => {
    let isMatch = true;

    if (keyword) {
      isMatch = isMatch && (article.judul.includes(keyword) || article.tags.includes(keyword));
    }

    if (kategori) {
      isMatch = isMatch && article.kategori === kategori;
    }

    if (status) {
      isMatch = isMatch && article.status === status;
    }

    if (minViews) {
      isMatch = isMatch && article.stats.views >= minViews;
    }

    if (penulis) {
      isMatch = isMatch && article.penulis.nama === penulis;
    }

    return isMatch;
  });

  // Urutkan hasil pencarian
  if (sortBy) {
    filteredArticles.sort((a, b) => b.stats[sortBy] - a.stats[sortBy]);
  }

  return filteredArticles;
};
console.log(searchEngine(articles, { keyword: "javascript" }));
console.log(searchEngine(articles, { kategori: "programming", status: "published" }));
console.log(searchEngine(articles, { minViews: 10000, sortBy: "views" }));
console.log(searchEngine(articles, { penulis: "Anas", sortBy: "likes" }));
console.log(searchEngine(articles, {}));

// ============================================
// SOAL 4: Generate Laporan CMS
// ============================================

// Buat function generateLaporanCMS(articles) yang tampilkan:
/*
╔══════════════════════════════════════════════╗
║           LAPORAN CMS - FEBRUARI 2024       ║
╠══════════════════════════════════════════════╣
║ RINGKASAN STATISTIK                         ║
║ Total Artikel    : 5                        ║
║ Total Views      : 83.370                   ║
║ Total Likes      : 4.752                    ║
║ Artikel Populer  : Investasi untuk Pemula   ║
╠══════════════════════════════════════════════╣
║ TOP 3 ARTIKEL (berdasarkan views):          ║
║                                             ║
║ 🥇 Investasi untuk Pemula                   ║
║    Views: 31.200 | Likes: 1.876             ║
║    Penulis: Deni | finance                  ║
║                                             ║
║ 🥈 Panduan React Hooks                      ║
║    Views: 22.150 | Likes: 1.205             ║
║    Penulis: Anas | programming              ║
║                                             ║
║ 🥉 Belajar JavaScript Modern                ║
║    Views: 15.420 | Likes: 892               ║
║    Penulis: Anas | programming              ║
╠══════════════════════════════════════════════╣
║ STATISTIK PER KATEGORI:                     ║
║ programming : 2 artikel | 37.570 views      ║
║ lifestyle   : 1 artikel | 8.930 views       ║
║ food        : 1 artikel | 5.670 views       ║
║ finance     : 1 artikel | 31.200 views      ║
╚══════════════════════════════════════════════╝
*/
const generateLaporanCMS = (articles) => {
  const totalArtikel = articles.length;
  const totalViews = articles.reduce((sum, article) => sum + article.stats.views, 0);
  const totalLikes = articles.reduce((sum, article) => sum + article.stats.likes, 0);   
  const artikelPopuler = articles.reduce((max, article) => (article.stats.views > max.stats.views ? article : max), articles[0]);

  const top3Artikel = [...articles]
    .sort((a, b) => b.stats.views - a.stats.views)
    .slice(0, 3);
  const kategoriStats = articles.reduce((acc, article) => {
    if (!acc[article.kategori]) {
      acc[article.kategori] = { count: 0, views: 0 };
    }  
    acc[article.kategori].count++;
    acc[article.kategori].views += article.stats.views;
    return acc;
  }, {}); 
 
  const baris = (konten) => `║ ${konten.padEnd(41)}║`;
  const garis = (kiri, tengah, kanan) =>
    `${kiri}${"═".repeat(42)}${kanan}`;
  

    console.log(garis("╔", "═", "╗"));
    console.log(baris("LAPORAN CMS - FEBRUARI 2024"));
    console.log(garis("╠", "═", "╣"));  
    console.log(baris("RINGKASAN STATISTIK"));
    console.log(baris(`Total Artikel    : ${totalArtikel}`));
    console.log(baris(`Total Views      : ${totalViews.toLocaleString()}`));
    console.log(baris(`Total Likes      : ${totalLikes.toLocaleString()}`));
    console.log(baris(`Artikel Populer  : ${artikelPopuler.judul}`));
    console.log(garis("╠", "═", "╣"));  
    console.log(baris("TOP 3 ARTIKEL (berdasarkan views):"));
    top3Artikel.forEach((article, index) => {
      const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";
      console.log(baris(""));
      console.log(baris(`${medal} ${article.judul}`));
      console.log(baris(`   Views: ${article.stats.views.toLocaleString()} | Likes: ${article.stats.likes.toLocaleString()}`));
      console.log(baris(`   Penulis: ${article.penulis.nama} | ${article.kategori}`));
    });
    console.log(garis("╠", "═", "╣"));  
    console.log(baris("STATISTIK PER KATEGORI:"));
    Object.entries(kategoriStats).forEach(([kategori, stats]) => {
      console.log(baris(`${kategori} : ${stats.count} artikel | ${stats.views.toLocaleString()} views`));
    });
    console.log(garis("╚", "═", "╝"));
  };  

generateLaporanCMS(articles);

