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

// for (i = 0; i < 10000; i++) {
//   console.log("nilai ke - " + i);
//   if (i === 100) break;
// }

// contoh perulangan for..of

let fruits = ["banana", "apple", "watermelon", "orange"];

// kalau dgn for biasa maka akan seperti ini,
// for (i = 0; i < fruits.length; i++) {
//   console.log(`Buah ${fruits[i]}`);
// }

// dengan for..of
// for (fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

// for..of dengan array di dalam array
const rowStudent = [
  ["olivia", "liam", "emma", "ussop"],
  ["amelia", "oliver", "ava", "eli"],
  ["sophia", "mateo", "isabela", "lucas"],
];

//   for (i = 0; i < rowStudent.length; i++) {
//     let row = rowStudent[i];
//     console.log("baris ke - " + i);
//     for (j = 0; j < row.length; j++) {
//       console.log("     " + row[j]);
//     }
//   }
for (baris of rowStudent) {
  console.log("ketua kelompok - " + baris[0]);
  for (kolom of baris) {
    console.log("     " + kolom);
  }
}
