// create var untuk button dan display p1 & p2
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

// create var p1Score & p2Score untuk menyimpan score yang dimasukkan
let p1Score = 0;
let p2Score = 0;

// create var untuk batas poin (winPoint) dan isGameOver untuk mengakhiri skor
let winPoint = 5; //batas nya 5
let isGameOver = false; // isinya false karna kalau true score sudah tidak bisa ditambah

// add addEventListener di p1Button agar tiap kali button p1 di klik nilainya bertambah. Penambahan kondisi pengecekan batas dan game over
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
  // textContent akan mengubah isi dari span dgn id p1Display sehingga text 0 di index.html akan berubah nilainya
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
