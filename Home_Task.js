console.log("Home Task Object");
console.log("");

// 1. Bikin 5 object masing masing minimal ada:
//     - 2 property string
//     - 2 property number
//     - 1 property object lain
//     - 1 property array
// * Object pada nomor 1 boleh dimasukkan ke dalam array

// 2. Bikin 1 object yang berisi sebuah function untuk melakukan perhitungan matematika
// (tambah, kurang, kali, bagi, pangkat, modulus)

// Shahnaz Ferdiansyah
// BE Class

console.log("No 1");

let konsol = {
  Nama: "Playstasion",
  Seri: 2,
  Perusahaan: "Sony",
  Harga: 1500000,
  set: {
    Console: 1,
    Stick: 2,
    "Kabel DC": 1,
    HDMI: 1,
  },
  Type: ["Slim", "Normal (+300000)", "Normal + Hardisk (+500000)"],
};

// console.log("Pertama : ");
// console.log(konsol);

let Mabel = {
  Nama: "Meja",
  Produk: "Polymare",
  Harga: 2600000,
  Stock: 3,
  set: {
    Meja: 1,
    kursi: 4,
  },
  Bahan: ["Kayu", "Kaca", "Besi"],
};

// console.log("Kedua : ");
// console.log(Mabel);

let Properti = {
  Jenis: "Apartemen",
  Tipe: "Modern",
  Harga: 1400000,
  Unit: 21,
  Alamat: {
    jalan: "Soedirman No 56",
    Kab: "Jakarta Selatan",
    Prov: "DKI Jakarta",
  },
  Ruangan: [
    "Ruang Tamu",
    "Ruang Keluarga",
    "Kamar tidur",
    "Kamar mandi",
    "Balkon",
  ],
};

// console.log("Ketiga : ");
// console.log(Properti);

let kendaraan = {
  Merek: "Honda",
  Nama: "CBR",
  Harga: 38000000,
  Unit: 4,
  Alamat: {
    Jalan: "Sokarno no 13",
    Kab: "Semarang",
    Prov: "Jawa Tengah",
  },
  set: ["Helem", "Skrup +-", "Jacket", "Paket Service 4x Gratis"],
};

// console.log("Keempat : ");
// console.log(kendaraan);

let Wisata = {
  Nama: "Water Park Center",
  Kategori: "Wisata Air",
  HTM: 45000,
  min_Usia: 3,
  Alamat: {
    Jalan: "Kenanga no 67",
    Kab: "Bandung",
    Prov: "jawa Barat",
  },
  Kolam: [
    "Kolam Olympic",
    "Kolam Air Panas",
    "Kolam Anak 5, 8, dan 12 thn",
    "Kolam Terapi Ikan",
  ],
};

// console.log("Kelima :");
// console.log(Wisata);

let Objek = [konsol, Mabel, Properti, kendaraan, Wisata];

console.log(Objek);

const perhitungan = {
  tambah: function (a, b) {
    return a + b;
  },
  kurang: function (a, b) {
    return a - b;
  },
  kali: function (a, b) {
    return a * b;
  },
  bagi: function (a, b) {
    return a / b;
  },
  pangkat: function (a, b) {
    return a ** b;
  },
  modulus: function (a, b) {
    return a % b;
  },
};

console.log(perhitungan.tambah(2, 3));
console.log(perhitungan.kurang(5, 2));
console.log(perhitungan.kali(4, 6));
console.log(perhitungan.bagi(10, 2));
console.log(perhitungan.pangkat(10, 3));
console.log(perhitungan.modulus(10, 2));

// Done
