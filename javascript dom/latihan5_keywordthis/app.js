// generate random color dibuat
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

// buat variable untuk menampung semua button yang ada
const buttons = document.querySelectorAll("button");

// buat perulangan for of dengan addEventListener di dalamnya agar semua button bisa men-generate warna nya masing masing
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = generateRandomColor();
//     button.style.color = generateRandomColor();
//   });
// }

const headings = document.querySelectorAll("h1");

// for (let heading of headings) {
//   heading.addEventListener("click", () => {
//     heading.style.backgroundColor = generateRandomColor();
//     heading.style.color = generateRandomColor();
//   });
// }

// karena kita memiliki nilai style background color & color dari function yg sama di bagian for of dari headings dan buttons, maka kita bisa gunakan keyword "this" untuk mempersingkat penulisannya, dengan cara membuat function baru yang nantinya akan menggantikan anonymous function dibagian for of setelah "click"

// setelah kedua for of diatas kita jadikan komentar, kita buat lagi yg baru seperti dibawah ini.

// kita buat dulu function colorize untuk style backgroundColor dan colornya
function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}

// lanjut kita buat for of yg baru dengan function colorize bukan lagi anonymous function seperti sebelumnya.
for (let button of buttons) {
  button.addEventListener("click", colorize);
}

for (let heading of headings) {
  heading.addEventListener("click", colorize);
}
