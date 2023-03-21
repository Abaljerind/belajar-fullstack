console.log("ini contoh penggunaan javascript di dalam file");

// contoh penggunaan if pada javascript
console.log("contoh penggunaan if pada js");
if (1 + 1 === 3) {
  console.log("nilai 1 + 1 = 2 sudah betul!");
}

// contoh if dengan method math random
let angka = Math.random();

console.log(angka);

if (angka >= 0.05) {
  console.log("Contoh if dgn Math, angka lebih besar dari pada 0.05");
}

if (angka <= 0.5) {
  console.log("Contoh if dgn Math, angka lebih kecil dari pada 0.05");
}

console.log();

// contoh else if statement
// console.log("contoh contoh penggunaan else if");

// const iniHari = "rabu";

// if (iniHari === "senin") {
//   console.log("selamat bekerja lagi!");
// } else if (iniHari === "sabtu") {
//   console.log("semoga tidak cepat berlalu!");
// }

// console.log();

// const nilai = "40";

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 100) {
//   console.log("A");
// }

// console.log();

// contoh penggunaan else
// console.log("contoh penggunaan else untuk opsi terakhir");

// const hariIni = prompt("isikan hari ini!").toLowerCase();

// if (hariIni === "senin") {
//   console.log("selamat bekerja lagi!");
// } else if (hariIni === "sabtu") {
//   console.log("semoga tidak cepat berlalu!");
// } else {
//   console.log("yah biasa ajalah!");
// }

// console.log();

// contoh nested if / if berlapis untuk pengecekan password
// console.log("contoh penggunaan nested if");

// const password = prompt("silahkan masukkan password!");

// // password harus memilik panjang 6 karakter
// if (password.length >= 6) {
//   // mengecek apakah password memiliki spasi di dalamnya
//   if (password.indexOf(" ") === -1) {
//     console.log("password valid");
//   } else {
//     console.log("Tidak boleh ada spasi!");
//   }
// } else {
//   console.log("password invalid! Minimal harus 6 karakter");
// }

// console.log();

// contoh penggunaan operator logic AND
// console.log("contoh penggunaan operator AND");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("password valid!");
// } else {
//   console.log("password tidak memenuhi syarat");
// }

// console.log();

// contoh penggunaan operator logic OR
// console.log("contoh penggunaan operator OR");

// const role = prompt("masukkan data akses anda!");

// if (role === "admin" || role === "spv") {
//   console.log("selamat datang.");
// } else {
//   console.log("akses ditolak!");
// }

console.log();

// contoh penggunaan operator logic NOT
// console.log("contoh penggunaan operator NOT");

// const role = prompt("masukkan data akses anda");

// if (role != "admin") {
//   console.log("akses ditolak!");
// } else {
//   console.log("selamat datang admin");
// }

// contoh penggunaan switch sebagai pengganti if else yg banyak
// console.log("contoh penggunaan Switch");
// const balonku = prompt("masukkan warna balon kamu!");

// switch (balonku) {
//   case "merah":
//     console.log("warna merah");
//     break;
//   case "hijau":
//     console.log("dooorrrrr");
//     break;
//   case "biru":
//     console.log("warna biru");
//     break;
//   default:
//     console.log("bukan balonku");
// }

// contoh mengubah nilai pada array
console.log("contoh mengubah nilai pada array");
