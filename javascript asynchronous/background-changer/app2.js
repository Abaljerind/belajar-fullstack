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
