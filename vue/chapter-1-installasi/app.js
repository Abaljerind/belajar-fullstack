// salah satu fitur unggulan dari vue js, bagaimana mengelola virtual dom
// var app = new Vue({
//   el: "#app", // el: artinya elemen yang punya id "app".
//   data: {
//     name: "Naruto Uzumaki",
//   },
// });

// contoh data lagi
const narutoShippuden = {
  name: "naruto uzumaki shippuden",
  deskripsi: "bercerita tentang naruto uzumaki, seorang ninja asal konoha yang ingin menjadi hokage",
  price: "25000",
  image: "https://upload.wikimedia.org/wikipedia/id/9/94/NarutoCoverTankobon1.jpg",
};

var app = new Vue({
  el: "#app",
  data: narutoShippuden,
});
