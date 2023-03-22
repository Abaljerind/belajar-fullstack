console.log("perulangan dengan while");

// contoh while loop sederhana
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let password = "password";

// let user = prompt("masukkan password");

// while (user !== password) {
//   user = prompt("masukkan password");
// }

// alert("selamat datang");

// contoh while dan for dengan break

// let input = prompt("coba ketik sesuatu");

// while (true) {
//   input = prompt("ketik lagi coba deh..");
//   if (input.toLowerCase() === "stop") break;
// }

// alert("ok");

for (i = 0; i < 10000; i++) {
  console.log("nilai ke - " + i);
  if (i === 100) break;
}
