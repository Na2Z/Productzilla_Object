console.log("Task Object");

// Buat 3 Object dengan 5 properti
//outputkan datanya satu persatu

// Shahnaz Ferdiansyah
// BE Class

let person = {
  Nama: "Maestro",
  Umur: 28,
  Jenis_Kelamin: "Laki-Laki",
  Pendidikan: "Diploma International Relationship",
  Alamat: {
    Jalan: "Wall Street",
    State: "New York",
  },
};

console.log(person.Nama);
console.log(person.Umur);
console.log(person.Jenis_Kelamin);
console.log(person.Pendidikan);
console.log(person.Alamat.Jalan);
console.log(person.Alamat.State);

let Laptop = {
  Nama: "ASUS",
  RAM: "8 GB",
  ROM: "SSD 512 GB",
  Baterry: "10000 mAh",
  CPU: "Intel I5-12400H",
  GPU: "Nvidia RTX 3060 Ti",
};
console.log(Laptop.Nama);
console.log(Laptop.RAM);
console.log(Laptop.ROM);
console.log(Laptop.Baterry);
console.log(Laptop.CPU);
console.log(Laptop.GPU);

let Kriteria = {
  Jenis_Kelamin: "laki-laki / Perempuan",
  Lulusan: "S1/D3 teknik sipil",
  Usia: "min 24 thn",
  Tinggi_badan: {
    Pria: 165,
    Wanita: 160,
  },
  Domisili: "Semarang",
};

console.log(Kriteria.Jenis_Kelamin);
console.log(Kriteria.Lulusan);
console.log(Kriteria.Usia);
console.log(Kriteria.Tinggi_badan.Pria);
console.log(Kriteria.Tinggi_badan.Wanita);
console.log(Kriteria.Domisili);
