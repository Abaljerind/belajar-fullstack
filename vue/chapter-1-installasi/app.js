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

// membuat component dengan vue
Vue.component("price", {
  data: function () {
    return {
      prefix: "Rp",
      value: 34.09,
      precision: 2, // jumlah angka dibelakang koma
    };
  },
  template: "<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>",
});

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

  filters: {
    currencyFormat: function (value) {
      return "Rp. " + Number.parseFloat(value).toFixed(2);
    },
  },

  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none";
      // kalau nilai sliderStatus nya bernilai true maka display nya flex, tapi jika slideStatus nya bernilai false maka display nya none dan slider dari HTML tidak akan muncul.
    },

    // membuat fungsi total
    cartTotal: function () {
      let sum = 0;
      for (key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },

    // membuat fungsi quantitas barang
    cartQty: function () {
      let qty = 0;
      for (key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
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
      // this.cart.push(product);

      // pengkategorian data array
      var productIndex;
      var productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },

    // create fungsi delete item
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
});
