<template>
  <HeaderComponent />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import axios from "axios";
// Importando Componentes
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  data() {
    return {
      product: [],
    };
  },
  components: {
    HeaderComponent,
  },
  methods: {
    async getProduct() {
      const response = await axios.get(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      this.product = response.data;
      console.log(this.product);
    },
  },
  async mounted() {
    this.getProduct();
  },
};
</script>

<style></style>
