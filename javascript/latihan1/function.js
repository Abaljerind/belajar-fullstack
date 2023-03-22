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
console.log("contoh 1");

let nama = "naruto";
function namaAnggota() {
  let nama = "sasuke";
  console.log(nama);
}

namaAnggota();
console.log(nama);

//
console.log();
console.log("contoh 2");

let a = "tas";
function barang() {
  console.log(a);
}

barang();
console.log(a);

//
console.log();
console.log("contoh 3");

function system() {
  let os = "linux";
  //   console.log(os);
}

system();
console.log(os); // ini akan kosong karna tidak ada variable yg dibuat di luar function.
