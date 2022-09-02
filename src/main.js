// Impport Main SCSS Styles
import "/node_modules/bootstrap/scss/bootstrap.scss";
import "./assets/scss/styles.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faCartShopping, faFacebook, faInstagram, faTwitter);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
