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
// const nilai = [1, 2, 3, 4, 5, 6, 7];

// const nilaiDouble = nilai.map(function (nums) {
//   total = nums * 2;
//   return total;
// });

// console.log(nilai);
// console.log(nilaiDouble);

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

// const animeTitle = animes.map(function (anime) {
//   return anime.title.toUpperCase();
// });

// const animeRating = animes.map(function (rates) {
//   return rates.rating;
// });

// console.log(animes);
// console.log(animeTitle);
// console.log(animeRating);

// contoh penggunaan arrow function
// console.log("contoh arrow function");

// const random = () => {
//   return Math.floor(Math.random() * 1000);
// };

// console.log(random());

// const kali = (x, y) => {
//   return x * y;
// };

// console.log(kali(4, 2));

// #
// contoh setTimeout & setInterval

// setTimeout(() => {
//   console.log("heii...");
// }, 5000);
// console.log("whatsupp brother????");

// setInterval(() => {
//   for (x = 0; x < 10; x++) console.log("nilai x saat ini " + x);
// }, 2500);

// cara menghentikan interval
// const stop = setInterval(() => {
//   for (x = 0; x < 10; x++) console.log("nilai x saat ini " + x);
// }, 2500);

// untuk menghentikan interval,
// clearInterval(stop);

// #
// contoh filter
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const ganjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// console.log(ganjil);

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

// const animeBagus = animes.filter((rates) => {
//   hasil = rates.rating >= 85;
//   return hasil;
// });

// const judulAnimeBagus = animeBagus.map(function (anime) {
//   return anime.title.toUpperCase();
// });

// console.log(animeBagus);
// console.log(judulAnimeBagus);

// #
// contoh every dan some
// const nilaiLulus = [88, 83, 90, 77, 80];
// const lulus = nilaiLulus.every((nilai) => nilai >= 75);

// console.log(lulus);

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

// const animeBagus = animes.some((anime) => anime.rating >= 87);

// console.log(animeBagus);

// #
// contoh penggunaan reduce
const subtotal = [1500, 20000, 4000, 19000, 32000];

const total = subtotal.reduce((currentTotal, singleSubTotal) => {
  return currentTotal + singleSubTotal;
});

console.log(total);

// #
const nilaiLulus = [80, 85, 70, 90, 93, 77];

const score = nilaiLulus.reduce((totalAwal, scores) => {
  return totalAwal + scores;
});

console.log(score);
