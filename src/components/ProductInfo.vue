<template>
  <div class="col-lg-7 pb-5">
    <h3 class="fw-semibold text-start">{{ product.title }}</h3>
    <h5 class="fw-semibold text-start mb-4">
      {{ numeralFormat(product.price, "$0.00[,]00") + " COP " }}
      <small class="text-muted">
        {{
          numeralFormat(calcPercentage(product.price, 10), "$0.00[,]00") +
          " COP"
        }}
      </small>
    </h5>
    <p class="mb-4 text-start" v-html="product.description"></p>
    <div v-for="options in product.options" :key="options.position">
      <div class="d-flex mb-3">
        <p class="text-dark fw-medium mb-0 me-1">{{ options.name }}:</p>
        <form :id="options.name + '-' + options.position">
          <div
            v-for="(values, i) in options.values"
            class="form-check form-check-inline"
            :key="i"
          >
            <label class="form-check-label radio" :for="options.name + '-' + i">
              <input
                type="checkbox"
                class="form-check-input"
                :id="options.name + '-' + i"
                :name="options.name"
                :value="options.values[i]"
                v-model="variants"
              />
              <span>{{ values }}</span>
            </label>
          </div>
        </form>
      </div>
    </div>
    <div class="d-flex align-items-center mb-4 pt-2">
      <QuantityInput
        :quantity="quantity"
        @add-quantity="addQuantity"
        @remove-quantity="removeQuantity"
      />
      <button class="btn btn-primary mx-3 px-3" @click="addToCart">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" /><span class="ms-2"
          >Agregar al Carrito</span
        >
      </button>
    </div>
    <div class="d-flex pt-2">
      <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
      <div class="d-inline-flex">
        <a class="text-dark px-2" href="#">
          <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a class="text-dark px-2" href="">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a class="text-dark px-2" href="">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
        <a class="text-dark px-2" href="">
          <font-awesome-icon icon="fa-brands fa-pinterest" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityInput from "./QuantityInput.vue";
export default {
  data() {
    return {
      quantity: 0,
      variants: [],
      addVariant: [],
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ["addToCart"],
  methods: {
    calcPercentage(value, percent) {
      return (value * percent) / 100 + value;
    },
    addQuantity() {
      this.quantity++;
    },
    removeQuantity() {
      if (this.quantity >= 1) this.quantity--;
    },

    addToCart() {
      let obj = {
        variants: this.variants,
      };
      this.addVariant.push(obj);
      this.$emit("addToCart", this.product, this.quantity, this.addVariant);
      this.quantity = 0;
    },
  },
  components: { QuantityInput },
  computed: {},
};
</script>

<style></style>
