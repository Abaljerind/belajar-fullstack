// salah satu fitur unggulan dari vue js, bagaimana mengelola virtual dom
// var app = new Vue({
//   el: "#app", // el: artinya elemen yang punya id "app".
//   data: {
//     name: "Naruto Uzumaki",
//   },
// });

// contoh data lagi
// const dataProducts = {
//   maximum: 10,
//   products: [
//     {
//       id: "429",
//       name: "Strawberry Mineral Water",
//       description: "An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
//       price: "2.80",
//       image_title: "mineral-water-strawberry_600px",
//       image: "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png",
//     },
//     {
//       id: "440",
//       name: "Multi-Vitamin (90 capsules)",
//       description: "A daily dose of our Multi-Vitamins fulfills a day's nutritional needs for over 12 vitamins and minerals.",
//       price: "9.99",
//       image_title: "multi-vitamin_600px",
//       image: "https://hplussport.com/wp-content/uploads/2016/12/multi-vitamin_600px.png",
//     },
//     {
//       id: "528",
//       name: "Skater Graphic T-Shirt",
//       description: "Hip at the skate park or around down, our pre-shrunk organic cotton graphic T-shirt has you covered.",
//       price: "33",
//       image_title: "skater-knit-shirt_lynda_29939",
//       image: "https://hplussport.com/wp-content/uploads/2016/12/skater-knit-shirt_LYNDA_29939.jpg",
//     },
//     {
//       id: "479",
//       name: "In the Kitchen with H+ Sport",
//       description:
//         "Henry Twill, founder and CEO of H+ Sport, teams up with celebrity nutritionist Jill Bayner, CNS, to bring you recipes and tips designed to maximize your athletic performance, whileÂ minimizing your time in the kitchen.",
//       price: "24.99",
//       image_title: "in-the-kitchen-with-h-book-cover",
//       image: "https://hplussport.com/wp-content/uploads/2016/12/In-the-Kitchen-with-H-book-cover.png",
//     },
//   ],
// };

// var app = new Vue({
//   el: "#app",
//   data: dataProducts,
// });

// contoh akses data menggunakan api
var app = new Vue({
  el: "#app",
  data: {
    maximum: 50,
    products: null,
    cart: [],
    style: {
      label: ["font-weight-bold", "mr-2"],
      sliderStatus: false,
    },
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none";
      // kalau nilai sliderStatus nya bernilai true maka display nya flex, tapi jika slideStatus nya bernilai false maka display nya none dan slider dari HTML tidak akan muncul.
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },

    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 align-items-center animate_animated animate_fadeInRight";
      }, delay);
    },

    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 align-items-center animate_animated animate_fadeOutRight";
      }, delay);
    },
    addItem: function (product) {
      this.cart.push(product);
    },
  },
});
