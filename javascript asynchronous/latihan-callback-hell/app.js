// setTimeout(function () {
//   document.body.style.backgroundColor = "lightskyblue";
// }, 2000);

// setTimeout(function () {
//   document.body.style.backgroundColor = "salmon";
// }, 4000);

// setTimeout(function () {
//   document.body.style.backgroundColor = "lime";
// }, 6000);

// bisa diubah jadi seperti dibawah ini
// kode dibawah ini disebut "callback hell"
// dan ini "tidak disarankan"

setTimeout(function () {
  document.body.style.backgroundColor = "lightskyblue";
  setTimeout(function () {
    document.body.style.backgroundColor = "salmon";
    setTimeout(() => {
      document.body.style.backgroundColor = "lime";
      setTimeout(() => {
        document.body.style.backgroundColor = "lightgreen";
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// pengganti dari "callback hell" adalah "promise"
