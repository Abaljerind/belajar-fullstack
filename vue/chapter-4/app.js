var app = new Vue({
  el: "#app",
  data: {
    slugText: "The Quick #(*!&@ Brown 29",
  },
  computed: {
    slugetize: function () {
      return this.slugText
        .toLowerCase() // isi slugText akan diubah jadi lowercase
        .replace(/[^\w ]+/g, "") // setiap simbol akan dihapus dengan string kosong. baris kode didalam tanda kurung menggunakan regular expression.
        .replace(/ +/g, "-"); // mengubah setiap whitespace menjadi dash / -
    },
  },
});

// output dari function slugetize: the-quick-brown-29
