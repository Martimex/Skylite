<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted, getCurrentInstance } from 'vue';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const emit = defineEmits(['redirectMessage']);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.add(`show`));
}, {threshold: .9});

const navBurgerObserver = new IntersectionObserver((entries => {
    /* This observer helps dealing with clicking on burger navbar too early (being partially inside this and Start components, which causes a bug obviously).
    The .no-click class is defined in the NavBurger Component, since this approach make the whole solution working   */

    entries.forEach(entry => {
        if(entry.target.classList.contains(`main-layout`)) {
            const navBurgerIcon = document.querySelector(`.burger-icon`);
            navBurgerIcon?.classList.toggle(`no-click`, entry.isIntersecting);
        }
    })
}), {threshold: 0.001});

onMounted(() => {

    const globalProps = getCurrentInstance()?.appContext.config.globalProperties;
    let mm = gsap.matchMedia();

    const targetElems = [...document.querySelectorAll(`.main-layout`), ...document.querySelectorAll(`#navbar-top`)];
    targetElems && targetElems.forEach(el => observer.observe(el));

    const main_layout = document.querySelector(`.main-layout`);
    main_layout && navBurgerObserver.observe(main_layout);

    gsap.to((`.gridbox-side`), {
        scrollTrigger: {
            trigger: `.main-layout`,
            start: '0% 0%',
            end: '90% 0%',
            scrub: 1,
            toggleActions: 'play pause reverse pause',
        },
        scale: 1.15,
    })

    mm.add(`${globalProps?.gsapBreakpoints.isTablet}, ${globalProps?.gsapBreakpoints.isDesktop}`, () => {
        gsap.from(`.gridbox-letter`, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            stagger: 0.35,
            ease: "power2.out",
        })
    })

    mm.add(`${globalProps?.gsapBreakpoints.isMobile_Portrait}, ${globalProps?.gsapBreakpoints.isMobile_Landscape}`, () => {
        gsap.from(`.gridbox-letter`, {
            opacity: 0,
            scale: 0.75,
            duration: 1.5,
            ease: 'linear',
        })
    })


});

</script>

<template>

    <header id="navbar-top">
        
        <div class="nav-box--logo">
            <div>
                <a href="/"> <p class="link-text"> Logo </p> </a> 
            </div>
        </div>
        
        <div class="nav-box--links">
            <ul class="hyperlink-box">
                <a href="./story" @click.prevent="emit('redirectMessage', '/story')"> <li class="link-text"> Our story </li> </a>
                <a href="./team" @click.prevent="emit('redirectMessage', '/team')"> <li class="link-text"> Team </li> </a>
                <a href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> <li class="link-text"> Offer </li> </a>
            </ul>

            <div class="contact-box">
                <div> 
                    <a href="./contact" @click.prevent="emit('redirectMessage', '/contact')"> <p class="link-text"> Contact >> </p> </a> 
                </div>
            </div>
        </div>
    </header>

    <main id="main-start" class="overflow-x-hidden">  <!-- #main-start is for  animating in Quote component, so do not remove the ID -->
        <div class="main-layout overflow-x-hidden">
            <div class="gridbox-side gs-1"></div>
            <div class="gridbox-content">
                <div class="gridbox-row__mobile">
                    <p class="gridbox-letter no-targetable" data-r="1"> S </p>
                    <p class="gridbox-letter no-targetable" data-r="1"> K </p>
                    <p class="gridbox-letter no-targetable" data-r="1"> Y </p>
                </div>
                <div class="gridbox-row__mobile">
                    <p class="gridbox-letter no-targetable" data-r="2"> L </p>
                    <p class="gridbox-letter no-targetable" data-r="2"> I </p>
                    <p class="gridbox-letter no-targetable" data-r="2"> T </p>
                    <p class="gridbox-letter no-targetable" data-r="2"> E </p>
                </div>
            </div>
            <div class="gridbox-side gs-2"></div>
            <a href="https://github.com/Martimex" target="_blank"> <p class="bottom-text"> Designed by MTX</p> </a>
        </div>
    </main>
</template>

<style scoped>

/* "Header" navbar */

#navbar-top {
    font-size: 1.1rem;
    color: #ddd;
    z-index: 3; /* At least 3, so it will not be covered by any other element */
    padding: 2em 3em;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    transition: all 2000ms ease-in;
        opacity: 0;
}

#navbar-top.show {
    opacity: 1;
}

.nav-box--logo {
    width: 40%;
}

.nav-box--links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
}

.hyperlink-box {
    display: block;
    list-style: none;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.contact-box {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.link-text {
    position: relative;
    display: inline-block;
    font-size: 1.25rem;
    letter-spacing: .1rem;
    font-weight: 600;
    color: #eee;
    border-bottom: .1em solid transparent;
    border-bottom-width: 0;
    opacity: 0.85;
}

.link-text::after {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 0%;
    padding: .1rem;
    background: #ddd;

    transition: all 400ms linear;
        opacity: 0;
}

.link-text:hover {
    opacity: 1;
    cursor: pointer;
}

.link-text:hover:after {
    opacity: 1;
    width: 100%;
}

/* Landing page initial section */

#main-start {
    position: relative;
    z-index: -1;
}

.main-layout {
    min-height: 100vh;
    width: 100%;
    color: #333;
    background: #000;
    background-image: url(../assets/sky1_minified.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 1rem .125rem #222;
    z-index: 2;
}

.gridbox-side {
    position: absolute;
    width: 50vw;
    height: 100%;
    backdrop-filter: blur(1px) grayscale(50%);
    box-shadow: 0 0 1rem .2rem #222;
}

.gs-1 {
    top: -50%;
    left: -35%;
    background: #0003;
    transform: rotate(45deg) scaleY(2);
}

.gs-2 {
    top: 50%;
    left: 85%;
    background: #0002;
    transform: rotate(45deg) scaleY(2);
}

.gridbox-content {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 44rem 44rem #2220;
    backdrop-filter: saturate(50%);
    background: #0004;
    overflow: hidden;
}

.gridbox-letter {
    position: relative;
    z-index: 1;
    display: inline-block;
    font-size: 12rem;
    font-weight: 800;
    color: #1110;
    filter: drop-shadow(0 0 0.75rem cyan);
    text-shadow: 0rem 0rem 1em #000;
    letter-spacing: .25rem;
    -webkit-text-stroke: .0125em cyan;
}

.gridbox-letter::before {
    content: '';
    z-index: 0;
    position: absolute;
    font-size: 10rem;
    top: 0%;
    left: 0%;
    padding: 1rem;
    border-radius: 50%;
    color: #111;
    filter: drop-shadow(0 0 0.75rem cyan);
    text-shadow: -.2rem -.2rem .25rem red;
    letter-spacing: -.1rem;
    -webkit-text-stroke: .01em cyan;
}

.bottom-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ddd;
    position: absolute;
    bottom: 0%;
    left: 0%;
    display: inline-block;
    margin: 5vh 5vw;
    text-decoration: underline;

    transition: all 2000ms ease-in;
        opacity: 0;
}

.main-layout.show .bottom-text {
    opacity: 1;
}


@media screen and (orientation: portrait)   {

    #navbar-top {
        display: none;
    }

    .gridbox-content {
        flex-flow: column;
    }

    .gridbox-row__mobile {
        display: flex;
        transform: translateY(-17.5%);
    }

    .gridbox-content .gridbox-row__mobile:nth-last-of-type(2n) {
        transform: translateY(17.5%);
    }

    .gridbox-letter {
        font-size: 16rem;
    }
    

    .bottom-text {
        font-size: 2rem;
        text-align: center;
        width: 100%;
        margin-inline: 0;
    }

    .gs-1 {
        top: -35%;
    }

    .gs-2 {
        top: 35%;
    }

}

@media screen and (orientation: portrait) and (max-height: 800px) {
    
    .gridbox-letter {
        font-size: 13rem;
    }
}


@media screen and (orientation: landscape) and (max-width: 986px) {

    .nav-box--links {
        width: 100%;
    }
}

@media screen and (orientation: landscape) and (max-width: 800px) {

    .gridbox-letter {
        font-size: 10rem;
    }
}

</style>