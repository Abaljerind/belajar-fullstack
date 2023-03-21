console.log("perulangan dengan while");

// contoh while loop sederhana
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

let password = "password";

let user = prompt("masukkan password");

while (user !== password) {
  user = prompt("masukkan password");
}

alert("selamat datang");
