//Counter Factory — Buat function buatCounter() yang return object dengan 3 method:
//tambah() → increment + return nilai baru
//kurang() → decrement + return nilai baru
//reset() → reset ke 0
//nilai() → return nilai saat ini
//Variabel counter-nya harus private (tidak bisa diakses langsung dari luar).
const buatCounter = () => {
  let counter = 0; // private variable
  return {
    tambah: () => ++counter,
    kurang: () => --counter,
    reset: () => {
      counter = 0;
      return counter;
    },
    nilai: () => counter
  };
};

// Greeter Factory — Buat function buatGreeter(bahasa) yang return function. Ketika dipanggil dengan nama, return greeting sesuai bahasa:


const buatGreeter = (bahasa) => {
  const greetings = {
    ID: "Halo, ",
    EN: "Hello, "
  };

  return (nama) => {
    return `${greetings[bahasa]}${nama}!`;
  };
};

const sapaID = buatGreeter("ID");
const sapaEN = buatGreeter("EN");

sapaID("Anas");   // "Halo, Anas!"
sapaEN("John");   // "Hello, John!"