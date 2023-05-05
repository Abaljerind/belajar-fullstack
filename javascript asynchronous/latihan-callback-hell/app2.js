// Mengelola Kondisi Error Dengan Async Await

// promise version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Error: connection timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  //   let result = await requestPromise("movie.com");
  //   jika output yang muncul di console log adalah error, maka baris hello dibawah ini tidak akan dijalankan.
  //   console.log("hello");
  // untuk menghandle / menangani error diatas, kita bisa gunakan try and catch seperti dibawah ini.

  try {
    let result = await requestPromise("movie.com");
    console.log(result);
    // variable result akan mengambil nilai jika proses 'berhasil' dari bagian 'resolve(`Success: ${url} (${delay}ms)`);'
  } catch (error) {
    console.log("Pesan Error", error);
    // dan error nya akan mengambil nilai jika proses 'gagal' dari bagian 'reject("Error: connection timeout");'
  }
}

console.log(requestHandler());
