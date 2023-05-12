// Request data dari api menggunakan XMLHttpRequest

const req = new XMLHttpRequest();
let data;

// buat fungsi jika api berhasil dimuat
req.onload = function () {
  // membuat variable data yg menyimpan nilai berupa response atau responseText dari method onload dan req.
  data = JSON.parse(this.responseText); // JSON.parse akan mengubah text biasa menjadi object namun belum bisa diakses seperti object biasa di javascript.
  console.log(data);

  //   setelah diubah menjadi object seperti diatas dan diberikan nilai dengan responseText maka sudah bisa diakses seperti object biasanya.
  console.log("nama", data.name);
};

// kalau error menggunakan yang ini
req.onerror = function () {
  console.log("Error", this);
};

// memasukkan api endpoint + method nya yaitu GET
req.open("GET", "https://swapi.dev/api/people/12");

// menggunakan method send untuk mengirim request
req.send();
