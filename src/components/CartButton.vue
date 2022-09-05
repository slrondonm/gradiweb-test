<template>
  <div class="cart">
    <div
      v-if="Object.keys(cart).length"
      class="cart-item-container padding-x--small padding-y--small"
    >
      <CartComponent
        v-for="(product, index) in cart"
        :key="index"
        :product="product"
        @cart-item-deleted="$emit('cartItemDeleted', id)"
      />

      <div
        v-if="!Object.keys(cart).length"
        class="cart__item-container-empty padding-x--small padding-y--small"
      >
        <p class="cart__empty">Your cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartComponent from "@/components/CartComponent.vue";
export default {
  components: {
    CartComponent,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ["cartItemDeleted"],
};
</script>

<style>
.cart-item-container {
  display: block;
  float: left;
}
</style>
