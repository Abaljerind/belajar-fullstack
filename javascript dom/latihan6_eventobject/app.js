document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

// create variable input dengan selector input
const input = document.querySelector("input");

// menambahkan addEventListener pada inputan, berupa "keydown" untuk memberikan event saat tombol keyboard di tekan
// input.addEventListener("keydown", () => {
//   console.log("Tombol keyboard ditekan.");
// });

// "keyup", untuk memberikan event saat tombol keyboard yang ditekan kita lepaskan
// input.addEventListener("keyup", () => {
//   console.log("Tombol keyboard di lepas.");
// });

// menggunakan event 'keydown' untuk melihat tombol di keyboard yang mana yang ditekan
// input.addEventListener("keydown", (keys) => {
//   console.log(keys.key);
//   console.log(keys);
// });

// menggunakan event 'keydown' dengan switch case untuk membatasi penggunaan tombol keyboard hanya untuk anak panah saja.
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol panah atas.");
      break;
    case "ArrowRight":
      console.log("Tombol panah kanan");
      break;
    case "ArrowDown":
      console.log("Tombol panah bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol panah kiri");
      break;
    default:
      console.log("Diabaikan");
      break;
  }
});
