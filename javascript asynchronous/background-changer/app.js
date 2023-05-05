// contoh lain membuat promise
// const delayColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve(); // resolve juga bisa digunakan seperti ini, dengan premis: resolve() untuk kondisi jika berhasil.
//     }, delay);
//   });
// };

// // contoh pemanggilan promise. '.then' digunakan untuk menambah pemanggilan promise nya
// delayColorChange("salmon", 1000)
//   .then(() => delayColorChange("lightgreen", 1000))
//   .then(() => delayColorChange("lightskyblue", 1000))
//   .then(() => delayColorChange("lightblue", 1000))
//   .then(() => delayColorChange("grey", 1000));

// //   menambah style pada body
// document.body.style.transition = "1s";

// akhir contoh membuat dan memanggil promise
// -----------------------------------------------------------

//  contoh async await
const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// dengan menambahkan 'await' seperti dibawah, maka baris kedua yang lightskyblue tidak akan dijalankan 'sebelum' baris pertama lightgreen berhasil dijalankan.
async function changeColor() {
  await delayColorChange("lightgreen", 1000);
  await delayColorChange("lightskyblue", 1000);
  await delayColorChange("salmon", 1000);
  await delayColorChange("grey", 1000);
  return "All done!";
}

// karena ada 'return' atau nilai balik di dalam function changeColor() di atas, maka kita bisa tambahkan .then seperti dibawah, yang akan muncul di saat 'sebelum' warna grey muncul karena warna grey nya kita berikan kata 'await' yg menyebabkan nilai nya ditahan dulu di memory sebelum ditampilkan di layar.
changeColor().then((res) => console.log(res));

document.body.style.transition = "1s";

// contoh lagi, kita buat function async baru yang berisi function changeColor().
async function printRainbow() {
  await changeColor();
  console.log("All done! dari fungsi printRainbow");
}

printRainbow();
