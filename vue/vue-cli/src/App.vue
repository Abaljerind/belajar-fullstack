<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <!-- eslint-disable-next-line -->
    <p class="animate fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia vel nobis magnam. Eos nihil labore mollitia tempora amet assumenda.</p>

    <!-- memanggil icon faShoppingCart dari file main.js yang diimport dari font awesome -->
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
  },
};
</script>
