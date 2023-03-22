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
function penjumlahan(a = 0, b = 0) {
  let total = a + b;
  console.log(total);
}

penjumlahan();
penjumlahan(2, 2);
