import VueNumerals from "vue-numerals";

// Impport Main SCSS Styles
import "./assets/scss/styles.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faBars,
  faCartShopping,
  faMinus,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMinus,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faBars,
  faCartShopping,
  faFacebook,
  faInstagram,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faPinterest,
  faTwitter,
  faTrash
);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueNumerals)
  .mount("#app");
