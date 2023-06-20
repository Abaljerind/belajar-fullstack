var app = new Vue({
  el: "#app",
  data: {
    slugText: "The Quick #(*!&@ Brown 29",
  },
  computed: {
    // now: function () {
    //   var date = new Date();
    //   return String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
    // },
    slugetize: function () {
      return (
        this.slugText
          .toLowerCase() // isi slugText akan diubah jadi lowercase
          .replace(/[^\w ]+/g, "") // setiap simbol akan dihapus dengan string kosong. baris kode didalam tanda kurung menggunakan regular expression.
          .replace(/ +/g, "-") +
        "-" +
        this.now()
      ); // mengubah setiap whitespace menjadi dash / - serta menambah dash dan juga function now dari property methods.
    },
  },
  methods: {
    now: function () {
      var date = new Date();
      return String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
    },
  },
});

// output dari function slugetize: the-quick-brown-29
// output terbaru dari slugetize jadinya: the-quick-brown-29-11453, dimana 11 adalah jam, 4 adalah menit, dan 53 adalah detik.
