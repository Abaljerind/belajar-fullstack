// async function hello() {}

// const req = hello();
// setelah ditambah 'async' otomatis function hello menjadi sebuah promise

// -------------------------------------------------------------
// contoh jika function nya punya data (catatan async part b.)
const hello = async () => {
  return "hello world!";
};

// memanggil function hello()
hello().then((res) => {
  console.log("response", res);
});

// -------------------------------------------------------------
