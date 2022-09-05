<template>
  <article class="container">
    <div class="shopping-cart">
      <div class="shopping-cart-header">
        <span
          ><font-awesome-icon icon="fa-solid fa-shopping-cart" /><span
            class="badge"
            >{{
              !Object.keys(product.productId).length
                ? Object.keys(product.productId).length + 1
                : 0
            }}</span
          ></span
        >
        <div class="shopping-cart-total">
          <span class="lighter-text">Total: </span>
          <span class="main-color-text">{{
            numeralFormat(totalValue, "$0.00[,]00") + " COP "
          }}</span>
        </div>
      </div>
      <ul class="shopping-cart-items">
        <li class="clearfix">
          <img v-bind:src="getImgUrl(product.thumbnail)" alt="Product image" />
          <span class="item-name">{{ product.title }}</span>
          <div>
            <span class="item-price">{{
              numeralFormat(product.price, "$0.00[,]00") + " COP "
            }}</span>
            <span class="item-quantity mx-2">Qty: {{ product.quantity }} </span>
          </div>
          <button
            class="button-icon"
            @click="$emit('cartItemDeleted', product.productId)"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ["cartItemDeleted"],
  computed: {
    totalValue() {
      return this.product.price * this.product.quantity;
    },
  },
  methods: {
    getImgUrl(pic) {
      return pic;
    },
  },
};
</script>

<style scoped lang="scss">
$primary: #797979;
$light-text: #abb0be;
.lighter-text {
  color: #abb0be;
}
.main-color-text {
  color: $primary;
}

.container {
  margin: auto;
  display: block;
  position: fixed;
}

.badge {
  background-color: #9f9f9f;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}
.shopping-cart {
  margin: 20px 0;
  float: right;
  background: white;
  width: 380px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
  &-header {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
  }
  &-total {
    float: right;
  }
  &-items {
    padding-top: 20px;
    ul {
      list-style-type: none;
      li {
        list-style-type: none;
        margin-bottom: 18px;
      }
    }
    img {
      float: left;
      margin-right: 12px;
      height: auto;
      max-width: 25%;
    }
    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }
    .item-price {
      color: $primary;
      margin-right: 8px;
    }
    .item-quantity {
      color: $light-text;
    }
  }
}

.shopping-cart:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}

.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background: $primary;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
  &:hover {
    background: lighten($primary, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
