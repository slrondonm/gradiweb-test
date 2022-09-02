<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0"
    >
      <div class="container">
        <a class="navbar-brand" href="#!"
          ><span style="color: #5e9693">StoreShopp</span
          ><span style="color: #fff">logist</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#!">Offer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item me-3 me-lg-0">
              <span v-if="cartItems > 0">{{ cartItems }}</span>
              <a class="nav-link" href="#!" @click="$emit('cartClicked')">
                <font-awesome-icon icon="fa-solid fa-shopping-cart" />
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#!">
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#!">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#!">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  name: "HeaderComponent",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    cartItems: {
      type: Number,
      default: 0,
    },
  },
  emits: ["cartClicked"],
};
</script>

<style>
/* Color of the links BEFORE scroll */
.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon,
.navbar-scroll .navbar-brand {
  color: #fff;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler-icon,
.navbar-scrolled .navbar-brand {
  color: #fff;
}

/* Color of the navbar AFTER scroll */
.navbar-scroll,
.navbar-scrolled {
  background-color: #cbbcb1;
}

.mask-custom {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.15);
}

.navbar-brand {
  font-size: 1.75rem;
  letter-spacing: 3px;
}
</style>
