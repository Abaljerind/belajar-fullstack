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
function jumlah(a = 0, b = 0) {
  let total = a + b;
  return total;
}

// contoh penggunaan return dengan kondisi yg memiliki return juga
function kurang(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "bukan number, masukkan number";
  }
  return a - b;
}
