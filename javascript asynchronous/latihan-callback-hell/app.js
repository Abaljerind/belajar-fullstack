// callback version, alasan kenapa tidak disarankan menggunakannya
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

// metode memanggil requestCallback diatas 1 kali
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
// memanggil requestCallback sebanyak 5 kali, dimana ketika terjadi success requestCallback nya akan terus berlanjut sampai proses ke 5 atau sampai error terjadi

requestCallback(
  "one-piece.com",
  function (response) {
    console.log(`success ${response}`);

    requestCallback(
      "one-piece.com",
      function (response) {
        console.log(`success ${response}`);

        requestCallback(
          "one-piece.com",
          function (response) {
            console.log(`success ${response}`);

            requestCallback(
              "one-piece.com",
              function (response) {
                console.log(`success ${response}`);

                requestCallback(
                  "one-piece.com",
                  function (response) {
                    console.log(`success ${response}`);
                  },
                  function (error) {
                    console.log(`failed ${error}`);
                  }
                );
              },
              function (error) {
                console.log(`failed ${error}`);
              }
            );
          },
          function (error) {
            console.log(`failed ${error}`);
          }
        );
      },
      function (error) {
        console.log(`failed ${error}`);
      }
    );
  },
  function (error) {
    console.log(`failed ${error}`);
  }
);
