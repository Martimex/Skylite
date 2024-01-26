import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faAirbnb, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faStackOverflow, faShopify, faTwitch, faFacebook, faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faGlobe, faStore, faMagnifyingGlass, faRectangleAd, faAngleDown, faCheck, faBars, faFileContract, faHourglassEnd, faVideo, faEnvelope, faUserPlus, faTag, faHashtag, faUserGroup, faSackDollar, faHandHoldingDollar, faDollarSign, faCoins, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    /* Burger NAV manu icon */ faBars,
    /* Icons for 'comapny in numbers' */ faPhone,
    /* Brands for companies section */ faDropbox, faVk, faViacoin, faQuora, faBandcamp, faTwitter, faUnity, faTelegram, faSlack, faXing, faRedhat, faAirbnb, faSketch, faSpeakerDeck, faJira, faRev, faDribbble, faAlgolia, faShopify, faTwitch,
    /* Icons for Offer Showcase section */ faGlobe, faStore, faMagnifyingGlass, faRectangleAd,
    /* Icons used for the 'benefits' part inside 'Stats' section */ faTag, faHashtag, faCalendarCheck,
    /* Icons for Stats Collaboration apply steps */ faEnvelope, faVideo, faHourglassEnd, faFileContract, faUserPlus,
    /* Icon for FAQ */ faAngleDown,
    /* Icons for Footer 'Follow us' section */ faFacebook, faXTwitter, faYoutube, faLinkedin,
    /* Icons for Newsletter section */ faCheck
);

const app = createApp(App)

const [breakpoint_main, breakpoint_strict] = [800, 986];

app.config.globalProperties.gsapBreakpoints = {
    isDesktop: `(orientation: landscape) and (min-width: ${breakpoint_strict}px)`,
    isTablet: `(orientation: portrait) and (min-height: ${breakpoint_strict}px)`, 

    isMobile_Landscape: `(orientation: landscape) and (max-width: ${breakpoint_strict - 1}px)`,  // Strict landscape mobile check
    isMobile_Portrait: `(orientation: portrait) and (max-height: ${breakpoint_strict - 1}px)`  // Strict portrait mobile check
}

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')