// create var untuk button dan display p1 & p2
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

// create var p1Score & p2Score untuk menyimpan score yang dimasukkan
let p1Score = 0;
let p2Score = 0;

// add addEventListener di p1Button agar tiap kali button p1 di klik nilainya bertambah
p1Button.addEventListener("click", function () {
  p1Score += 1;
  p1Display.textContent = p1Score;
  // textContent akan mengubah isi dari span dgn id p1Display sehingga text 0 di index.html akan berubah nilainya
});

p2Button.addEventListener("click", function () {
  p2Score += 1;
  p2Display.textContent = p2Score;
});
