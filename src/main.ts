import './assets/main.css'
import '../dist/output.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faJoomla, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faStackOverflow, faShopify, faFacebook, faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faGlobe, faStore, faMagnifyingGlass, faRectangleAd, faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    /* Icons for 'comapny in numbers' */ faPhone,
    /* Brands for companies section */ faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faJoomla, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faShopify,
    /* Icons for Offer Showcase section */ faGlobe, faStore, faMagnifyingGlass, faRectangleAd,
    /* Icon for FAQ */ faAngleDown,
    /* Icons for Footer 'Follow us' section */ faFacebook, faXTwitter, faYoutube, faLinkedin,
    /* Icons for Newsletter section */ faCheck
);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
