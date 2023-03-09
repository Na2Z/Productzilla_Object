console.log("Object");
console.log("");

let mobilFerarri = {
  bankanandepan: "R17",
  bankiridepan: "R17",
  bankananbelakang: "R18",
  bankiribelakang: "R18",
  merek: "Frarri",
  CC: "5000",
  tipe: "Sport",
  warna: "Merah",
  "Panjang Mobil": "5 Meter",
};

console.log(mobilFerarri);
console.log(mobilFerarri["Panjang Mobil"]);
console.log(mobilFerarri.CC);
mobilFerarri.Lebar = "2 Meter"; //buat ganti atau nambahin data pada key
mobilFerarri.Lebar = "1.8 Meter";
console.log(mobilFerarri);

let produk = {
  Nama: "Biskuit",
  Harga: 5000,
  hitungbiskuit: function (Nilai) {
    return Nilai;
  },
  vendor: {
    Nama: "Nestllay Corp",
    Alamat: "NY City",
  },
  ukuran: ["5 gr", "10 gr", "25 gr"],
  childhoodproduct: [
    { Nama: "Biskuit", Harga: "5000" },
    { Nama: "Roti", Harga: "6000" },
  ],
};

console.log(produk.vendor);
