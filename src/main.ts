import './assets/main.css'
import '../dist/output.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faJoomla, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faStackOverflow, faShopify } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    /* Icons for 'comapny in numbers' */ faPhone,
    /* Brands for companies section */ faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faJoomla, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faShopify
);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
