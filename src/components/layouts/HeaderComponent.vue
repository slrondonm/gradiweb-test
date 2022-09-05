<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0 nav"
    >
      <div class="container">
        <a class="navbar-brand" href="#!"
          ><span
            ><img src="@/assets/logo-full.png" alt="Logo" height="40" /></span
          ><span style="color: #7f7f7f"> test</span></a
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
            <li v-if="cartItems > 0" class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                id="cart-item-dropdown"
                href="#!"
                @click="$emit('cartClicked')"
                alt="Car"
              >
                <font-awesome-icon icon="fa-solid fa-shopping-cart" />
                <span class="badge">{{ cartItems }}</span>
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
  emits: ["cartClicked", "openMenu"],
  data() {
    return {
      visibleCart: false,
    };
  },
  methods: {
    showMenu(event) {
      console.log(event);
      this.visibleCart = true;
      console.log("show menu");
      this.$emit("openMenu");
    },
    closeMenu(event) {
      console.log("close menu");
      console.log(event);

      this.visibleCart = false;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  z-index: 120;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

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
</style>
