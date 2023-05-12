// axios
//   .get("https://swapi.dev/api/people/12")
//   .then((res) => {
//     console.log(res.data);
//     // data bisa langsung dituliskan seperti diatas tanpa perlu deklarasi
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//     // message diatas juga merupakan bagian dari err yang ditampilkan di console log jadi kita bisa mengakses nya seperti itu.
//   });

//
// contoh axios dengan async await + contoh penggunaan error dengan value yang berbeda.
const getPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};

console.log(getPeople(1));
