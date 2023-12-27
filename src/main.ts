import './assets/main.css'
import '../dist/output.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faAirbnb, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faStackOverflow, faShopify, faTwitch, faFacebook, faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faGlobe, faStore, faMagnifyingGlass, faRectangleAd, faAngleDown, faCheck, faBars, faFileContract, faHourglassEnd, faVideo, faEnvelope, faUserPlus, faTag, faHashtag, faUserGroup, faSackDollar, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    /* Burger NAV manu icon */ faBars,
    /* Icons for 'comapny in numbers' */ faPhone,
    /* Brands for companies section */ faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faAirbnb, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faShopify, faTwitch,
    /* Icons for Offer Showcase section */ faGlobe, faStore, faMagnifyingGlass, faRectangleAd,
    /* Icons used for the 'benefits' part inside 'Stats' section */ faTag, faHashtag, faHandHoldingDollar,
    /* Icons for Stats Collaboration apply steps */ faEnvelope, faVideo, faHourglassEnd, faFileContract, faUserPlus,
    /* Icon for FAQ */ faAngleDown,
    /* Icons for Footer 'Follow us' section */ faFacebook, faXTwitter, faYoutube, faLinkedin,
    /* Icons for Newsletter section */ faCheck
);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
