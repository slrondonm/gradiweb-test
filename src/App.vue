<template>
  <HeaderComponent
    :cart-items="cart.length"
    @cart-clicked="toggleCart"
    @open-menu="cartOpen = false"
  />
  <CartButton
    v-if="cartOpen"
    v-click-outside="onClickOutsideCart"
    :cart="cart"
    @cartItemDeleted="removeFromCart(id)"
  />
  <BreadcrumbLayout />
  <div class="container-fluid py-5">
    <div class="row px-xl-5">
      <CarouselComponent :slides="product.media" />
      <ProductInfo :product="product" @add-to-cart="addProductToCart" />
      <ModalCart :visible="showModal" :cart="cart" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Importando Componentes
import HeaderComponent from "./components/layouts/HeaderComponent.vue";
import BreadcrumbLayout from "./components/layouts/BreadcrumbLayout.vue";
import CarouselComponent from "./components/CarouselComponent.vue";
import ProductInfo from "./components/ProductInfo.vue";
import CartButton from "./components/CartButton.vue";
import ModalCart from "./components/ModalCart.vue";

import vClickOutside from "click-outside-vue3";

export default {
  name: "App",
  data() {
    return {
      cartOpen: false,
      product: {
        type: Array,
        default() {
          return [];
        },
      },
      cart: [],
      showModal: Boolean,
    };
  },
  components: {
    HeaderComponent,
    BreadcrumbLayout,
    CarouselComponent,
    ProductInfo,
    CartButton,
    ModalCart,
  },
  methods: {
    async getProduct() {
      const response = await axios.get(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      this.product = response.data;
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },
    onClickOutsideCart() {
      this.cartOpen = false;
    },
    addProductToCart(product, quantity) {
      if (quantity < 1) return;

      const item = this.cart.findIndex((x) => x.productId === product.id);

      if (item !== -1) {
        this.cart[item].quantity += quantity;
      } else {
        const cartItem = {
          productId: product.id,
          title: product.title,
          thumbnail: product.featured_image,
          price: product.price,
          quantity: quantity,
          variants: product.options,
        };

        this.cart = [...this.cart, cartItem];
        this.showModal = !this.showModal;
      }
    },
    getRealPrice(price, discount) {
      return price * (discount / 100);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
  async mounted() {
    this.getProduct();
    this.showModal = false;
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style>
.main {
  margin-top: 5%;
}
</style>
