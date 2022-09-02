<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      product: []
    }
  },
  components: {
  },
  methods: {
    async getProduct() {
      const response = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
      this.product = response.data
      console.log(this.product)
    }
  },
  async mounted() {
    this.getProduct()
  }
}
</script>

<style>

</style>
