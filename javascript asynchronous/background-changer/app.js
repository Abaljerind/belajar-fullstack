// contoh lain membuat promise
const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve(); // resolve juga bisa digunakan seperti ini, dengan premis: resolve() untuk kondisi jika berhasil.
    }, delay);
  });
};

// contoh pemanggilan promise. '.then' digunakan untuk menambah pemanggilan promise nya
delayColorChange("salmon", 1000)
  .then(() => delayColorChange("lightgreen", 1000))
  .then(() => delayColorChange("lightskyblue", 1000))
  .then(() => delayColorChange("lightblue", 1000))
  .then(() => delayColorChange("grey", 1000));

//   menambah style pada body
document.body.style.transition = "1s";
