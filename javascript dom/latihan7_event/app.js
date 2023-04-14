const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
});

// preventDefault(); digunakan untuk mencegah properti "action" yang ada di file html, yang mana sekarang valuenya "/destination" agar tidak dijalankan, jadi nantinya saat kita melakukan submit dgn menekan button nya, tampilan halaman web tidak akan berpindah tetapi submit nya akan berhasil.

// ----------------------------------------------------------------------
// dibawah ini mencegah halaman berpindah ke web google.com

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("harusnya ke web google");
});
