// fetch("https://swapi.dev/api/people/12")
//   // then digunakan untuk kondisi jika berhasil. ingat materi javascript asynchronous
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource.");
//       //   kalau respon dari res bernilai bukan ok maka kembalikan Error
//     }
//     return res.json();
//     // kalau respon nya bernilai ok maka kembalikan data berupa json
//   })
//   .then((data) => {
//     console.log("json", data);
//     // kalau ada data yang bisa dikelola maka kembalikan dalam bentuk json
//   })
//   //   catch digunakan untuk kondisi jika gagal. ingat materi javascript asynchronous
//   .catch((err) => {
//     console.log("error", err);
//   });

//
// contoh penggunaan fetch dengan promise dan async function. Kenapa menggunakan await? karena kedua perintah tersebut sangat diperlukan dan jika terjadi delay pada saat dilakukan fetch maka akan ditunggu dulu sebelum melanjutkan ke proses selanjutnya.
const loadPeople = async () => {
  try {
    // proses pengambilan data harus dilakukan dulu sampai selesai sebelum proses selanjutnya dimulai
    const res = await fetch("https://swapi.dev/api/people/12");

    //   setelah proses diatas selesai, maka proses dibawah ini selanjutnya berjalan, dengan merubah hasil dari fetch nya diatas menjadi file json.
    const data = await res.json();
    console.log(data);

    //
    // menjalankan proses fetch kedua bisa dengan begini
    const res2 = await fetch("https://swapi.dev/api/people/22");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log("error", err);
    console.log("error", err);
  }
};

loadPeople();

// NOTE: Penambahan try and catch digunakan untuk menghandle error jika data yang diambil / fetch tidak ada atau disebabkan oleh masalah lainnya.
