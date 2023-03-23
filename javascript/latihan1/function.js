console.log("contoh penggunaan function");

// function lemparDadu() {
//   console.log("hasil lempar dadu " + Math.floor(Math.random() * 6 + 1));
// }

// contoh argument dan parameter pada function
// function salam(name) {
//   console.log(`Halo, selamat pagi ${name}`);
// }

// salam("naruto");

// contoh multiple parameter & argument & default value
// function penjumlahan(a = 0, b = 0) {
//   let total = a + b;
//   console.log(total);
// }

// penjumlahan();
// penjumlahan(2, 2);

// contoh penggunaan return
// function jumlah(a = 0, b = 0) {
//   let total = a + b;
//   return total;
// }

// // contoh penggunaan return dengan kondisi yg memiliki return juga
// function kurang(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "bukan number, masukkan number";
//   }
//   return a - b;
// }

// contoh function scope
// console.log("contoh 1");

// let nama = "naruto";
// function namaAnggota() {
//   let nama = "sasuke";
//   console.log(nama);
// }

// namaAnggota();
// console.log(nama);

//
// console.log();
// console.log("contoh 2");

// let a = "tas";
// function barang() {
//   console.log(a);
// }

// barang();
// console.log(a);

//
// console.log();
// console.log("contoh 3");

// function system() {
//   let os = "linux";
//   console.log(os);
// }

// system();
// console.log(os); // ini akan kosong karna tidak ada variable yg dibuat di luar function.

//#
// function sebagai argument / function di dalam function
// function duaKali(func) {
//   func();
//   func();
// }

// function dadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// di console pada browser, bisa ketikkan "duaKali(dadu)"

//#
// function sebagai nilai return
// function sbgFunction() {
//   const nilaiAwal = Math.random();
//   if (nilaiAwal > 0.01) {
//     return function () {
//       console.log("nilai nya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("nilai nya lebih kecil");
//     };
//   }
// }

//#
// contoh penggunaan keyword this
// const saya = {
//   nama: "naruto",
//   hobi: "berlatih ninjutsu",
//   salam: function () {
//     return `Halo, saya ${this.nama}. Hobi saya ${this.hobi}.`;
//   },
// };

// console.log(saya.nama);
// console.log(saya.salam());

// console.log((saya.nama = "sasuke"));
// console.log((saya.hobi = "berlatih taijutsu"));
// console.log(saya.salam());

//#
// contoh try and catch
// try {
//   saya.kenalan();
// } catch {
//   console.log("error!!");
// }

// console.log("setelah proses try and catch");

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("masukkan tipe data string pada argument teriak()");
//   }
// }

// console.log(teriak("ojek!"));
// console.log(teriak(2132));

// forEach Method dengan function buatan
// console.log("forEach Method dengan function buatan");
// const angka = [1, 2, 3, 4, 5, 6];

// function print(elemen) {
//   console.log(elemen);
// }

// angka.forEach(print);

// forEach Method dengan function anonymous
// console.log("forEach Method dengan function anonymous");
// const nilai = [1, 2, 3, 4, 5];

// nilai.forEach(function (value) {
//   if (value % 2 === 0) {
//     console.log(value);
//   } else {
//     console.log("nilai " + value + " tidak bisa dibagi 2");
//   }
// });

// forEach Method dengan function anonymous
// console.log("forEach Method dengan function anonymous 2");

// const animes = [
//   {
//     title: "One piece",
//     rating: 90,
//   },
//   {
//     title: "Naruto",
//     rating: 87,
//   },
//   {
//     title: "Bleach",
//     rating: 85,
//   },
//   {
//     title: "New game!!",
//     rating: 85,
//   },
//   {
//     title: "Detective conan",
//     rating: 84,
//   },
// ];

// animes.forEach(function (anime) {
//   console.log(`${anime.title} - Rating ${anime.rating}/100`);
// });

// #
// contoh penggunaan function map
const nilai = [1, 2, 3, 4, 5, 6, 7];

const nilaiDouble = nilai.map(function (nums) {
  total = nums * 2;
  return total;
});

console.log(nilai);
console.log(nilaiDouble);

const animes = [
  {
    title: "One piece",
    rating: 90,
  },
  {
    title: "Naruto",
    rating: 87,
  },
  {
    title: "Bleach",
    rating: 85,
  },
  {
    title: "New game!!",
    rating: 85,
  },
  {
    title: "Detective conan",
    rating: 84,
  },
];

const animeTitle = animes.map(function (anime) {
  return anime.title.toUpperCase();
});

const animeRating = animes.map(function (rates) {
  return rates.rating;
});

console.log(animes);
console.log(animeTitle);
console.log(animeRating);
