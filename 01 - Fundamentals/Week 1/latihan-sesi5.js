//======================
// L A T I H A N
//=======================

// Buat file: latihan-sesi5.js

// DATA:
const employees = [
  {
    id: 1,
    nama: "Anas Nasrulloh",
    jabatan: "Senior Developer",
    departemen: "Engineering",
    gaji: 18000000,
    skills: ["JavaScript", "React", "Node.js"],
    alamat: { kota: "Ciamis", provinsi: "Jawa Barat" },
    kontak: { email: "anas@company.com", telepon: "08111111111" },
    aktif: true,
  },
  {
    id: 2,
    nama: "Budi Santoso",
    jabatan: "UI Designer",
    departemen: "Design",
    gaji: 12000000,
    skills: ["Figma", "Adobe XD", "CSS"],
    alamat: { kota: "Bandung", provinsi: "Jawa Barat" },
    kontak: { email: "budi@company.com", telepon: "08222222222" },
    aktif: true,
  },
  {
    id: 3,
    nama: "Citra Dewi",
    jabatan: "Project Manager",
    departemen: "Management",
    gaji: 20000000,
    skills: ["Agile", "Scrum", "Leadership"],
    alamat: { kota: "Jakarta", provinsi: "DKI Jakarta" },
    kontak: { email: "citra@company.com" }, // ← tidak punya telepon!
    aktif: true,
  },
  {
    id: 4,
    nama: "Deni Pratama",
    jabatan: "Junior Developer",
    departemen: "Engineering",
    gaji: 8000000,
    skills: ["HTML", "CSS", "JavaScript"],
    alamat: { kota: "Bekasi", provinsi: "Jawa Barat" },
    kontak: { email: "deni@company.com", telepon: "08444444444" },
    aktif: false, // ← tidak aktif
  },
  {
    id: 5,
    nama: "Eka Putri",
    jabatan: "Data Analyst",
    departemen: "Data",
    gaji: 15000000,
    skills: ["Python", "SQL", "Tableau"],
    alamat: { kota: "Surabaya", provinsi: "Jawa Timur" },
    kontak: { email: "eka@company.com", telepon: "08555555555" },
    aktif: true,
  },
];


// SOAL 1 - Destructuring
// Destructure employee pertama (Anas) dan tampilkan:
// "Nama    : Anas Nasrulloh"
// "Jabatan : Senior Developer"
// "Kota    : Ciamis"  ← dari nested object alamat
// "Email   : anas@company.com" ← dari nested object kontak
// Gunakan SATU destructuring statement saja!
const [firstEmployee] = employees;
const { nama, jabatan, alamat: { kota }, kontak: { email } } = firstEmployee; 
console.log(`Nama    : ${nama}`);
console.log(`Jabatan : ${jabatan}`);
console.log(`Kota    : ${kota}`);
console.log(`Email   : ${email}`);

// SOAL 2 - Optional Chaining & Nullish Coalescing
// Buat function getKontak(employee) yang:
// - Tampilkan email dan telepon setiap karyawan
// - Jika telepon tidak ada → tampilkan "Tidak tersedia"
// - Gunakan optional chaining dan nullish coalescing!
// Test dengan semua employee (termasuk Citra yang tidak punya telepon)


const getKontak = employee => {
    const employeeName = employees.map(e => e.nama);
    if (!employeeName.includes(employee)) return `Data karyawan tidak ditemukan`;
    const employeeData = employees.filter(e => e.nama === employee);
    const [{nama, kontak:{email, telepon}}] = employeeData;
    return `
    Nama: ${nama}
    Email: ${email ?? "Tidak tersedia"}
    Telepon: ${telepon ?? "Tidak tersedia"}
  ` 
    }

console.log(getKontak("Anas Nasrulloh"))
console.log(getKontak("Citra Dewi"))
console.log(getKontak("Rudi"))

// SOAL 3 - Object Methods
// Menggunakan Object.keys(), Object.values(), Object.entries():
// a. Tampilkan semua KEY dari employee pertama
Object.keys(firstEmployee).forEach(key => console.log(key));

// b. Buat function hitungTotalGaji(employees) 
//    menggunakan Object.values() atau reduce
const hitungTotalGaji = (employees) => employees.reduce((acc, e) => acc + e.gaji, 0);
console.log(hitungTotalGaji(employees).toLocaleString("id-ID"));

// c. Gunakan Object.entries() untuk tampilkan
//    semua property employee pertama dengan format:
//    "nama        → Anas Nasrulloh"
//    "jabatan     → Senior Developer"
//    dst...
Object.entries(firstEmployee).forEach(([key, value]) => console.log(`${key.padEnd(10)} -> ${value}`));


// SOAL 4 - Spread & Update
// a. Buat function updateGaji(employee, kenaikanPersen)
//    - Return employee BARU dengan gaji yang sudah diupdate
//    - JANGAN ubah object asli! (immutable update)
//    - Tampilkan gaji lama dan gaji baru
const updateGaji = (employee, kenaikanPersen) => {
  const gajiLama = employee.gaji;
  const gajiBaru = gajiLama + (gajiLama * kenaikanPersen / 100);  
  const employeeBaru = { ...employee, gaji: gajiBaru };
  console.log(`Gaji lama: Rp ${gajiLama.toLocaleString("id-ID")}`);
  console.log(`Gaji baru: Rp ${gajiBaru.toLocaleString("id-ID")}`);
  return employeeBaru;
};
//
// b. Buat function tambahSkill(employee, skillBaru)
//    - Return employee BARU dengan skill ditambahkan
//    - JANGAN ubah array skills asli!
//    - Test: tambahSkill(employees[0], "TypeScript")
const tambahSkill = (employee, skillBaru) => {
  const skillsBaru = [...employee.skills, skillBaru];
  const employeeBaru = { ...employee, skills: skillsBaru };
  return employeeBaru;
}   


// SOAL 5 - Gabungkan Semua!
// Buat function generateLaporanKaryawan(employees) yang:
// - Filter hanya karyawan AKTIF
// - Gunakan destructuring di parameter function
// - Tampilkan laporan dengan format:
/*
╔══════════════════════════════════════════╗
║         LAPORAN KARYAWAN AKTIF          ║
╠══════════════════════════════════════════╣
║ Total Karyawan Aktif : 4                ║
║ Total Pengeluaran    : Rp 65.000.000    ║
║ Rata-rata Gaji       : Rp 16.250.000   ║
╠══════════════════════════════════════════╣
║ DAFTAR KARYAWAN:                        ║
║                                         ║
║ 1. Anas Nasrulloh                       ║
║    Jabatan : Senior Developer           ║
║    Dept    : Engineering                ║
║    Gaji    : Rp 18.000.000             ║
║    Skills  : JavaScript, React, Node.js ║
║    Kota    : Ciamis                     ║
║                                         ║
║ 2. dst...                               ║
╚══════════════════════════════════════════╝
*/

const generateLaporanKaryawan = (employees) => {
  const karyawanAktif = employees.filter(({ aktif }) => aktif);
  const totalKaryawan = karyawanAktif.length;
  const totalPengeluaran = karyawanAktif.reduce((acc, { gaji }) => acc + gaji, 0);
  const rataRataGaji = totalPengeluaran / totalKaryawan;

  console.log("╔══════════════════════════════════════════╗");  
  console.log("║         LAPORAN KARYAWAN AKTIF          ║");
  console.log("╠══════════════════════════════════════════╣");
  console.log(`║ Total Karyawan Aktif : ${totalKaryawan.toString().padEnd(20)}║`);  
  console.log(`║ Total Pengeluaran    : Rp ${totalPengeluaran.toLocaleString("id-ID").padEnd(20)}║`);
  console.log(`║ Rata-rata Gaji       : Rp ${rataRataGaji.toLocaleString("id-ID").padEnd(20)}║`);
  console.log("╠══════════════════════════════════════════╣");
  console.log("║ DAFTAR KARYAWAN:                        ║");
  console.log("║                                         ║");
  const daftarKaryawan = karyawanAktif.map(({ nama, jabatan, departemen, gaji, skills, alamat: { kota } }, index) => {
    return `║ ${index + 1}. ${nama.padEnd(35)}║\n` +
           `║    Jabatan : ${jabatan.padEnd(25)}║\n` +  
           `║    Dept    : ${departemen.padEnd(25)}║\n` +
            `║    Gaji    : Rp ${gaji.toLocaleString("id-ID").padEnd(25)}║\n` +
            `║    Skills  : ${skills.join(", ").padEnd(25)}║\n` +
            `║    Kota    : ${kota.padEnd(25)}║\n` +
            `║                                         ║`;
  });
  console.log(daftarKaryawan.join("\n"));
  console.log("╚══════════════════════════════════════════╝");
};

  // CHALLENGE - Config Manager
// Buat sistem konfigurasi aplikasi:

// 1. Buat DEFAULT_CONFIG dengan Object.freeze():
//    - appName: "MyApp"
//    - version: "1.0.0"
//    - apiUrl: "https://api.myapp.com"
//    - timeout: 5000
//    - features: { darkMode: false, notifications: true }

const DEFAULT_CONFIG = Object.freeze({
  appName: "MyApp",
  version: "1.0.0",
  apiUrl: "https://api.myapp.com",
  timeout: 5000,
  features: { darkMode: false, notifications: true }
});
console.log(DEFAULT_CONFIG);
// 2. Buat function updateConfig(currentConfig, updates)
//    - Return config BARU (jangan ubah yang lama!)
//    - Handle nested object update dengan benar
//    - Test:
//      updateConfig(DEFAULT_CONFIG, { timeout: 3000 })
//      updateConfig(DEFAULT_CONFIG, { features: { darkMode: true } })
const updateConfig = (currentConfig, updates) => {
  return {
    ...currentConfig,
    ...updates,
    features: {
      ...currentConfig.features,
      ...updates.features
    }
  };
};
const newConfig1 = updateConfig(DEFAULT_CONFIG, { timeout: 3000 });
console.log(newConfig1);
const newConfig2 = updateConfig(DEFAULT_CONFIG, { features: { darkMode: true } });
console.log(newConfig2);

// 3. Buat function validateConfig(config)
//    - Cek semua required fields ada
//    - Required: appName, version, apiUrl, timeout
//    - Return { isValid: true } atau { isValid: false, missing: [...] }   
const validateConfig = (config) => {
  const requiredFields = ["appName", "version", "apiUrl", "timeout"];
  const missingFields = requiredFields.filter(field => !(field in config));
  return missingFields.length === 0 ? { isValid: true } : { isValid: false, missing: missingFields };
}
const validation1 = validateConfig(newConfig1);
console.log(validation1);
const validation2 = validateConfig({ version: "1.0.0" });
console.log(validation2);      
           
// Koreksi No. 3
// Kode Anda sudah bagus, tapi bisa ditambah:
// 1. Validasi tipe data
// 2. Pesan error lebih informatif

const validateConfig = (config) => {
  const requiredFields = ["appName", "version", "apiUrl", "timeout"];
  const missingFields = requiredFields.filter(field => !(field in config));

  // Enhancement: validasi tipe data
  const typeErrors = [];
  if ("appName"  in config && typeof config.appName  !== "string") 
    typeErrors.push("appName harus string");
  if ("version"  in config && typeof config.version  !== "string") 
    typeErrors.push("version harus string");
  if ("apiUrl"   in config && typeof config.apiUrl   !== "string") 
    typeErrors.push("apiUrl harus string");
  if ("timeout"  in config && typeof config.timeout  !== "number") 
    typeErrors.push("timeout harus number");

  if (missingFields.length === 0 && typeErrors.length === 0) {
    return { isValid: true };
  }

  return {
    isValid: false,
    missing: missingFields,
    typeErrors: typeErrors,
  };
};

// Test:
console.log(validateConfig({ version: "1.0.0" }));
// { isValid: false, missing: ["appName", "apiUrl", "timeout"], typeErrors: [] }

console.log(validateConfig({ appName: 123, version: "1.0.0", apiUrl: "https://...", timeout: "lama" }));
// { isValid: false, missing: [], typeErrors: ["appName harus string", "timeout harus number"] }   
// ..
//=========================
//HASIL SETELAH KOREKSI
//==========================



