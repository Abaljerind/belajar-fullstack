// function untuk membuat elemen li
const addJoke = async () => {
  const jokeText = await getJokes();
  //   karna di function getJokes menggunakan async await maka saat kita memanggil function tersebut juga harus menambahkan async await seperti diatas.
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  document.querySelector("#jokes").append(newLi);
};

// function untuk mengambil data dari url api joke.
const getJokes = async () => {
  try {
    const config = {
      // bagian sini untuk mengambil format response dari api nya / data yang dikirim balik oleh api.
      headers: {
        Accept: "application/json",
      },
    };
    // dengan menambah await berarti request ke api ini harus benar benar selesai bekerja dulu baru bisa melanjutkan proses selanjutnya. dan untuk parameter kedua nya digunakan untuk mengirimkan data di dalam headers. walaupun memang isi dari config bisa bebas bukan hanya headers saja, tapi itu tergantung dari api nya sendiri. bisa cek tutorial di tiap website api karna berbeda beda.
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    //   data dan joke nya diatas itu berdasarkan dari headers yang didapatkan dari api.
  } catch (error) {
    return `Error: ${error.message}`;
    // data message diatas juga dari headers nya.
  }
};

// membuat variable untuk button agar ketika button di klik akan menambahkan elemen li dari function addJoke.

const btn = document.querySelector("button");
btn.addEventListener("click", addJoke);
