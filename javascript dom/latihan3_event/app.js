const button = document.querySelector("#clickme");

button.onclick = function () {
  console.log("you click me");
};

// button.onmouseover = function () {
//   console.log("don't touch me");
// };

// contoh event dengan variable

const say = () => {
  console.log("don't touch me");
};

button.onmouseover = say;

// -----------------------------------------------------------------------
// coba buat elemen p dan tambahkan class / id lalu tambahkan hasil button onclick ke dalam p
const newText = document.createElement("p");

// tambahkan newText ke dalam body
document.body.appendChild(newText);

// tambahkan class pada newText
newText.classList.add("isiText");

// buat variable buttonText dari button dgn id text
const buttonText = document.querySelector("#text");

// buat function onclick agar menambahkan text ke dalam newText
buttonText.onclick = function () {
  newText.append("ini isi dari newText yaa...");
};

// ------------------------------------------------------------------------

// function onclick juga bisa digunakan pada elemen tag html lain misal h1.
const heading = document.querySelector("h1");

heading.onclick = function () {
  console.log("h1 di klik!");
};
