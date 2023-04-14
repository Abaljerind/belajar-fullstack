const form = document.querySelector("#form");

// contoh praktek input data secara realtime dengan event dan dom
// create variable baru untuk input dan juga ul dengan id notes
const input = document.querySelector("input");
const list = document.querySelector("#notes");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // create variable baru untuk menerima data dari const input dan dimasukkan ke dalam console.log
  const newInput = input.value;
  // NOTES: properti value yang ada diatas akan mendapatkan nilai yang kita input dibagian "input" di halaman web.

  // buat elemen li, lalu assign nilai dari input ke dalam newList dengan innerText, selanjutnya kita tambahkan newList yang sudah punya nilai tadi ke dalam html dengan append melalui const list. terakhir tambah string kosong pada variable input agar isi "input" di dalam web kosong kembali.
  const newList = document.createElement("li");
  newList.innerText = newInput;
  list.append(newList);
  input.value = "";
});

// preventDefault(); digunakan untuk mencegah properti "action" yang ada di file html, yang mana sekarang valuenya "/destination" agar tidak dijalankan, jadi nantinya saat kita melakukan submit dgn menekan button nya, tampilan halaman web tidak akan berpindah tetapi submit nya akan berhasil.

// ----------------------------------------------------------------------
// dibawah ini mencegah halaman berpindah ke web google.com

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("harusnya ke web google");
});
