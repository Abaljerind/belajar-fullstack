console.log("contoh perulangan");

// for (let x = 1; x <= 10; x++) {
//   console.log("perulangan ke - " + x);
// }

// perulangan dengan ganjil dan genap
// for (let y = 0; y <= 20; y += 2) {
//   console.log("perulangan genap ke - " + y);
// }

// for (let z = 1; z <= 20; z += 2) {
//   console.log("perulangan ganjil ke - " + z);
// }

// for (let x = 20; x >= 0; x--) {
//   console.log("perulangan ke - " + x);
// }

// for (let y = 20; y >= 0; y -= 2) {
//   console.log("perulangan genap ke - " + y);
// }

// for (let z = 19; z >= 0; z -= 2) {
//   console.log("perulangan ganjil ke - " + z);
// }

// perulangan dengan increment perkalian
// for (let i = 10; i <= 100000; i *= 10) {
//   console.log("perulangan perkalian ke - " + i);
// }

// perulangan dengan array
// const games = ["rdr2", "god of war 2018", "spider-man 2018", "subnautica"];

// for (i = 0; i < games.length; i++) {
//   console.log("index ke - " + i, "berisi " + games[i]);
// }

// perulangan nested loop
// const jawaban = ["a", "b", "c", "d"];

// for (i = 1; i <= 10; i++) {
//   console.log("soal ke - " + i);
//   for (j = 0; j < jawaban.length; j++) {
//     console.log("      jawaban " + jawaban[j]);
//   }
// }

// perulangan nested loop dengan array di dalam array
const rowStudent = [
  ["olivia", "liam", "emma", "ussop"],
  ["amelia", "oliver", "ava", "eli"],
  ["sophia", "mateo", "isabela", "lucas"],
];

for (i = 0; i < rowStudent.length; i++) {
  let row = rowStudent[i];
  console.log("baris ke - " + i);
  for (j = 0; j < row.length; j++) {
    console.log("     " + row[j]);
  }
}
