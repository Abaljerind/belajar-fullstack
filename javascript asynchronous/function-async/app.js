// async function hello() {}

// const req = hello();
// setelah ditambah 'async' otomatis function hello menjadi sebuah promise

// -------------------------------------------------------------
// contoh jika function nya punya data (catatan async part b.)
// const hello = async () => {
//   return "hello world!";
// };

// // memanggil function hello()
// hello().then((res) => {
//   console.log("response", res);
// });

// -------------------------------------------------------------
// contoh jika function nya punya object throw error (catatan async part c.)
const hello = async () => {
  throw "Error, ada kesalahan di baris kode anda";
};

hello()
  .then((res) => {
    console.log("response", res);
  })
  //   agar kita bisa jelas mendapatkan kejelasan dari pesan error nya, maka bisa ditambahkan .catch seperti dibawah.
  .catch((err) => {
    console.log("error", err);
  });
