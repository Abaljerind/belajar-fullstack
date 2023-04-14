// create button & container
const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

// tambah addEventListener pada button dan isikan function generateRandomColor
button.addEventListener("click", function (e) {
  // add backgroundColor pada container
  container.style.backgroundColor = generateRandomColor();
  e.stopPropagation();
});
// event stopPropagration() mirip preventDefault(), tapi stopPropagation akan menghentikan proses selanjutnya yang dimana saat ini adalah event yang dimiliki oleh parent element button yaitu container (untuk hide). Jadi setelah kita klik button maka event miliki container yg sama sama merupakan event 'click' akan dicegah untuk dijalankan. Inti urutan prosesnya adalah ketika button diklik maka background Color container akan berubah tapi karena container punya event click juga yaitu toggle dgn class hide maka otomatis button dan container akan menghilang, tapi dengan menambahkan stopPropagation() di button, maka event container tidak akan dijalankan sehingga container dan isinya button tidak akan hilang. Event container akan dijalankan ketika kita 'click' bagian container baik di teks maupun di bagian kosong yang ada di dalam container.

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

// tambah addEventListener pada container agar menghilang, sebelum itu perlu ditambahkan class hide pada app.css yang nantinya kita tambahkan juga class hide itu ke dalam file html lewat js.

container.addEventListener("click", function () {
  container.classList.toggle("hide");
});
