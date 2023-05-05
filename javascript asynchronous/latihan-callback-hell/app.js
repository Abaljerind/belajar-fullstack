// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: connection timeout");
    } else {
      success(`Success ${url} (${delay}ms)`);
    }
  }, delay);
};

// dibawah ini adalah metode memanggil requestCallback yang ada diatas 1 kali
// requestCallback(
//   "movie.com", // param pertama dari url
//   function (response) {
//     // param kedua dari success
//     console.log(`success ${response}`);
//   },
//   function (error) {
//     // param ketiga dari failure
//     console.log(`failed ${error}`);
//   }
// );

//
// dibawah ini cara memanggil requestCallback sebanyak 5 kali, dimana ketika terjadi success requestCallback nya akan terus berlanjut sampai proses ke 5 atau sampai error terjadi

// requestCallback(
//   "one-piece.com",
//   function (response) {
//     console.log(`success ${response}`);

//     requestCallback(
//       "one-piece.com",
//       function (response) {
//         console.log(`success ${response}`);

//         requestCallback(
//           "one-piece.com",
//           function (response) {
//             console.log(`success ${response}`);

//             requestCallback(
//               "one-piece.com",
//               function (response) {
//                 console.log(`success ${response}`);

//                 requestCallback(
//                   "one-piece.com",
//                   function (response) {
//                     console.log(`success ${response}`);
//                   },
//                   function (error) {
//                     console.log(`failed ${error}`);
//                   }
//                 );
//               },
//               function (error) {
//                 console.log(`failed ${error}`);
//               }
//             );
//           },
//           function (error) {
//             console.log(`failed ${error}`);
//           }
//         );
//       },
//       function (error) {
//         console.log(`failed ${error}`);
//       }
//     );
//   },
//   function (error) {
//     console.log(`failed ${error}`);
//   }
// );

//
//
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

// cara memanggil promise version, karna requestPromise ini merupakan sebuah object maka kita bisa tambahkan .then seperti dibawah.
// requestPromise("movie.com")
//   .then((response) => {
//     // .then digunakan untuk kondisi yang berhasil
//     console.log("success", response);
//   })
//   .catch((error) => {
//     // .catch digunakan untuk kondisi yang gagal
//     console.log("error", error);
//   });

// promise juga sebenarnya masih bisa mengalami callback hell seperti requestCallback sebelumnya, seperti berikut kode nya kalau pada promise.

// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);

//     requestPromise("movie.com")
//       .then((response) => {
//         console.log("success", response);

//         requestPromise("movie.com")
//           .then((response) => {
//             console.log("success", response);

//             requestPromise("movie.com")
//               .then((response) => {
//                 console.log("success", response);

//                 requestPromise("movie.com")
//                   .then((response) => {
//                     console.log("success", response);
//                   })
//                   .catch((error) => {
//                     console.log("error", error);
//                   });
//               })
//               .catch((error) => {
//                 console.log("error", error);
//               });
//           })
//           .catch((error) => {
//             console.log("error", error);
//           });
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

//
//
//
// cara yang benar menggunakan fungsi promise
// requestPromise("movie.com")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// perbedaan dengan requestCallback adalah:
// 1. requestPromise dapat digunakan untuk bagian yang berhasil di halaman (page) berbeda seperti dibawah ini, dengan tampilan yang lebih mudah dibaca.
// 2. bagian "catch nya kita hanya butuh 1 saja".
requestPromise("movie.com")
  .then((result) => {
    console.log("page 1");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then(() => {
    console.log("page 2");
    return requestPromise("movie.com");
  })
  .then(() => {
    console.log("page 3");
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.log(err);
  });
