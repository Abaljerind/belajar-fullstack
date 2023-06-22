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
      // prefix: "Rp",
      // value: 34.09,
      // precision: 2, // jumlah angka dibelakang koma
    };
  },
  // membuat properti props, karena di file index.html yang digunakan pada v-bind adalah value, prefix, dan precision maka isi array didalam props nya adalah value, prefix, dan precision juga.
  // props: ["value", "prefix", "precision"],

  // props dengan default value menggunakan tipe object
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "Rp",
    },
    precision: {
      type: Number,
      default: 2,
    },
  },

  template: "<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>",
  // sekarang value, prefix, dan precision yang ada di dalam template akan mengarah ke value, prefix, dan precision milik dari props tersebut.
});

// membuat component baru
Vue.component("product-list", {
  props: ["products", "maximum"],
  // karena function before, enter dan leave sebelumnya ada di bagian parent (var app) maka perlu dipindahkan ketiga fungsi tersebut ke dalam component product-list, karena jika tidak dipindahkan ketiganya akan ada error.
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
  },
  template: `
  <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
        <!-- tag menunjukkan bahwa efek transisi ini akan kita berikan didalam elemen div, karena transition-group secara default akan mencari elemen span dan kita akan arahkan transition-group ini di dalam elemen div didalamnya. Jadi harus diberikan tag dengan value 'div' -->
        <div class="row d-none mb-3 align-items-center" v-for="(item, index) in products" :key="item.id" v-if="item.price <= maximum" :data-index="index">
          <!-- :key="item.id" digunakan untuk memberikan nilai unik dari id / nilai unik lain didalam temporary variable nya. Karena disini ada id maka kita bisa gunakan id. -->
          <div class="col-1 m-auto">
            <button class="btn btn-info" v-on:click="addItem(item)">+</button>
            <!-- addItem(item) adalah function yang ada didalam object app, dengan argument variable bernama 'item' sementara yg berasal dari for in diatas. -->
          </div>
          <div class="col-sm-4">
            <img :src="item.image" :alt="item.name" class="img-fluid d-block" />
          </div>
          <div class="col">
            <h3 class="text-info">{{ item.name }}</h3>
            <p class="mb-0">{{ item.description }}</p>

            <div class="h5 float-right">
              <!-- memanggil component dari app.js, karena nama component nya price maka kita buat tag html dengan nama price juga. Menambah banyak props dengan v-bind.  -->
              <price v-bind:value="Number(item.price)" v-bind:prefix="'Rp'" :precision="2"></price>
            </div>
          </div>
        </div>
      </transition-group>
  `,
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
