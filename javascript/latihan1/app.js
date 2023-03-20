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
console.log("contoh contoh penggunaan else if");

const iniHari = "rabu";

if (iniHari === "senin") {
  console.log("selamat bekerja lagi!");
} else if (iniHari === "sabtu") {
  console.log("semoga tidak cepat berlalu!");
}

console.log();

const nilai = "40";

if (nilai < 50) {
  console.log("E");
} else if (nilai < 60) {
  console.log("D");
} else if (nilai < 70) {
  console.log("C");
} else if (nilai < 80) {
  console.log("B");
} else if (nilai < 100) {
  console.log("A");
}

console.log();

// contoh penggunaan else
console.log("contoh penggunaan else untuk opsi terakhir");

const hariIni = prompt("isikan hari ini!").toLowerCase();

if (hariIni === "senin") {
  console.log("selamat bekerja lagi!");
} else if (hariIni === "sabtu") {
  console.log("semoga tidak cepat berlalu!");
} else {
  console.log("yah biasa ajalah!");
}

console.log();

// contoh nested if / if berlapis untuk pengecekan password
console.log("contoh penggunaan nested if");

const password = prompt("silahkan masukkan password!");

// password harus memilik panjang 6 karakter
if (password.length >= 6) {
  // mengecek apakah password memiliki spasi di dalamnya
  if (password.indexOf(" ") === -1) {
    console.log("password valid");
  } else {
    console.log("Tidak boleh ada spasi!");
  }
} else {
  console.log("password invalid! Minimal harus 6 karakter");
}
