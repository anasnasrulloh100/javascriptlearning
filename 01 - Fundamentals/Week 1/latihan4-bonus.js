// CHALLENGE - Shopping Cart System
const products = [
  {
    id: 1,
    nama: "Laptop Pro",
    kategori: "elektronik",
    harga: 15000000,
    stok: 5,
    rating: 4.8,
  },
  {
    id: 2,
    nama: "Mouse Wireless",
    kategori: "elektronik",
    harga: 350000,
    stok: 50,
    rating: 4.5,
  },
  {
    id: 3,
    nama: "Meja Kerja",
    kategori: "furniture",
    harga: 1200000,
    stok: 10,
    rating: 4.2,
  },
  {
    id: 4,
    nama: "Kursi Ergonomis",
    kategori: "furniture",
    harga: 2500000,
    stok: 8,
    rating: 4.7,
  },
  {
    id: 5,
    nama: "Headphone BT",
    kategori: "elektronik",
    harga: 850000,
    stok: 30,
    rating: 4.6,
  },
  {
    id: 6,
    nama: "Webcam HD",
    kategori: "elektronik",
    harga: 650000,
    stok: 0,
    rating: 4.3,
  },
  {
    id: 7,
    nama: "Lampu Meja",
    kategori: "furniture",
    harga: 180000,
    stok: 25,
    rating: 3.9,
  },
  {
    id: 8,
    nama: "Keyboard Mech",
    kategori: "elektronik",
    harga: 1250000,
    stok: 15,
    rating: 4.9,
  },
];

// Buat sistem keranjang belanja dengan function:

const cart = [
  {
    id: 5,
    nama: 'Headphone BT',
    kategori: 'elektronik',
    harga: 850000,
    stok: 30,
    rating: 4.6,
    qty: 5
  },
  {
    id: 1,
    nama: 'Laptop Pro',
    kategori: 'elektronik',
    harga: 15000000,
    stok: 5,
    rating: 4.8,
    qty: 3
  },
  {
    id: 8,
    nama: 'Keyboard Mech',
    kategori: 'elektronik',
    harga: 1250000,
    stok: 15,
    rating: 4.9,
    qty: 5
  }
]; // Keranjang belanja (array kosong)

// 1. addToCart(productId, qty)
//    - Cek apakah produk ada di products array
//    - Cek apakah stok cukup
//    - Jika produk sudah di cart → update qty
//    - Jika belum → tambahkan ke cart
//    - Return pesan sukses/gagal

// 2. removeFromCart(productId)
//    - Hapus produk dari cart
//    - Return cart terbaru

// 3. getCartSummary()
//    - Tampilkan ringkasan belanja:
/*
================================
       KERANJANG BELANJA
================================
1. Laptop Pro      × 1  = Rp 15.000.000
2. Mouse Wireless  × 2  = Rp    700.000
3. Headphone BT    × 1  = Rp    850.000
--------------------------------
Subtotal           : Rp 16.550.000
Diskon (rating≥4.5): Rp  1.655.000
Total              : Rp 14.895.000
================================
*/
//    - Produk dengan rating >= 4.5 dapat diskon 10%
const addToCart = (productId, qty) => {
  const product = products.find((p) => p.id === productId);
  if (product === undefined) return "Produk tidak ditemukan."; // Cek apakah produk ada di products array
  if (product.stok < qty) return "Stok tidak cukup."; // Cek stok cukup
  const existingCart = cart.find((item) => item.id === productId);
  if (existingCart) {
    existingCart.qty += qty;
  } else {
    const cartItem = { ...product, qty: qty };
    cart.push(cartItem);
    return "Produk berhasil ditambahkan ke keranjang.";
  }

};
console.log(addToCart(8, 5));
console.log(cart)


const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    cart.splice(index, 1);
    return "Produk berhasil dihapus dari keranjang.";
  }

console.log(removeFromCart(1));
console.log(cart)

const getCartSummary = () => {
  const subtotal = cart.reduce((acc, item) => acc + item.harga * item.qty, 0);
  const discount = cart.reduce((acc, item) => {
    if (item.rating >= 4.5) {
      return acc + item.harga * item.qty * 0.1;
    }
    return acc;
  }, 0);
  const total = subtotal - discount;
  console.log("================================");
  console.log("       KERANJANG BELANJA");
  console.log("================================");
  cart.forEach((item, index) => {
    const totalPrice = item.harga * item.qty;
    console.log(`${index + 1}. ${item.nama} × ${item.qty} = Rp ${totalPrice.toLocaleString("id-ID")}`);
  });
  console.log("--------------------------------");
  console.log(`Subtotal           : Rp ${subtotal.toLocaleString("id-ID")}`);
  console.log(`Diskon (rating≥4.5): Rp ${discount.toLocaleString("id-ID")}`);
  console.log(`Total              : Rp ${total.toLocaleString("id-ID")}`);
  console.log("================================");
};
getCartSummary()

//VERSI PRODUCTION READY (setelah koreksi)

// ================================
// addToCart - Diperbaiki
// ================================
const addToCart = (productId, qty) => {
  // Validasi: produk ada?
  const product = products.find(p => p.id === productId);
  if (!product) return `❌ Produk dengan id ${productId} tidak ditemukan.`;

  // Cek apakah sudah ada di cart
  const existingItem = cart.find(item => item.id === productId);
  
  // Hitung total qty (yang sudah ada + yang baru)
  const currentQty = existingItem ? existingItem.qty : 0;
  const totalQty = currentQty + qty;

  // Validasi: stok cukup untuk total qty?
  if (totalQty > product.stok) {
    return `❌ Stok tidak cukup. Stok tersedia: ${product.stok}, di cart: ${currentQty}`;
  }

  // Update atau tambah
  if (existingItem) {
    existingItem.qty = totalQty;
    return `✅ Qty ${product.nama} diupdate menjadi ${totalQty}.`;
  } else {
    cart.push({ ...product, qty });
    return `✅ ${product.nama} berhasil ditambahkan ke keranjang.`;
  }
};

// Test:
console.log(addToCart(2, 3));   // ✅ Mouse Wireless ditambahkan
console.log(addToCart(2, 2));   // ✅ Qty diupdate jadi 5
console.log(addToCart(2, 100)); // ❌ Stok tidak cukup
console.log(addToCart(99, 1));  // ❌ Produk tidak ditemukan


// ================================
// removeFromCart - Diperbaiki
// ================================
const removeFromCart = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  
  // ← Ini yang kurang di kode Anda!
  if (index === -1) return `❌ Produk tidak ditemukan di keranjang.`;
  
  const namaProduct = cart[index].nama;
  cart.splice(index, 1);
  return `✅ ${namaProduct} berhasil dihapus dari keranjang.`;
};

// Test:
console.log(removeFromCart(1));   // ✅ Laptop Pro dihapus
console.log(removeFromCart(999)); // ❌ Produk tidak ditemukan
console.log(removeFromCart(1));   // ❌ Sudah dihapus, tidak ada lagi


// ================================
// getCartSummary - Sudah sempurna!
// Hanya tambah handling cart kosong
// ================================
const getCartSummary = () => {
  // ← Tambahan handling edge case
  if (cart.length === 0) {
    console.log("🛒 Keranjang belanja kosong!");
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.harga * item.qty, 0);
  const discount = cart.reduce((acc, item) =>
    item.rating >= 4.5 ? acc + item.harga * item.qty * 0.1 : acc, 0
  );
  const total = subtotal - discount;

  console.log("================================");
  console.log("       KERANJANG BELANJA");
  console.log("================================");
  cart.forEach((item, index) => {
    const itemTotal = item.harga * item.qty;
    console.log(
      `${index + 1}. ${item.nama.padEnd(15)} × ${item.qty}  = Rp ${itemTotal.toLocaleString("id-ID")}`
    );
  });
  console.log("--------------------------------");
  console.log(`Subtotal           : Rp ${subtotal.toLocaleString("id-ID")}`);
  console.log(`Diskon (rating≥4.5): Rp ${discount.toLocaleString("id-ID")}`);
  console.log(`Total              : Rp ${total.toLocaleString("id-ID")}`);
  console.log("================================");
};