<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

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
/*     const tl = gsap.timeline();
    gsap.to("._animation-block_1", {height: '50%', rotate: 45, scale: 1, duration: 1});
    gsap.to("._animation-block_2", {height: '50%', rotate: 135, duration: 1});
    gsap.to(".main-layout", {background: "#a0d", duration: 1});
    gsap.from("._pgraph_1", {opacity: 0, y: -50, duration: 1.5}); */

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

    gsap.from(`.gridbox-letter`, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.35,
        ease: "power2.out",
    })

/*     gsap.from(`.gridbox-side`, {
        scale: 0,
        duration: 4,
        ease: "power4.out",
    }) */

/*     gsap.from([`.bottom-text`, '#navbar-top'], {
        opacity: 0,
        duration: 3,
        ease: "power4.in",
    }) */
});

//window.addEventListener("scroll", setScrollState); // fire a listener for every scroll
//window.addEventListener("resize", setScrollState); // resize is also essential because it actually can affect scroll values

/* function setScrollState() {
    const htmlElem = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElem.scrollTop / htmlElem.clientHeight;
    htmlElem.style.setProperty("--scroll", `${Math.min(percentOfScreenHeightScrolled * 100, 100)}`);
} */

//setScrollState(); // Fire this initially - useful in cases where a page is refreshed when the page is being already scrolled

/* const emit = defineEmits(['changeComponent']);

function newComponent() {
    emit('changeComponent', 'piano');
}

defineProps<{
    msg: string
}>() */
</script>

<template>

    <header id="navbar-top">
        <!-- 1 -->
        <div class="nav-box--logo">
            <div>
                <a href="/"> <p class="link-text"> Logo </p> </a> 
            </div>
        </div>
        <!-- 2 -->
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

    <!-- THIS SECTION IS BELOW THE 'WELCOME' MESSAGE AND SLOWLY APPEARS RIGHT UNDER THE FADING TEXT & BG WHILE SCROLLING -->
    <main id="main-start" class="overflow-x-hidden">  <!-- #main-start is for  animating in Quote component, so do not remove the ID -->
        <div class="animation-block--initial _animation-block_1 --absolute"></div>
        <div class="animation-block--initial _animation-block_2 --absolute"></div>
        <div class="main-layout --flex-container overflow-x-hidden">
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

:root {
    --scroll: 0;
    --background-opacity: 1;
}

body {
    background: teal;
}

/* "Header" navbar */

#navbar-top {
    font-size: 1.1rem;
    color: #ddd;
    z-index: 3; /* At least 3, so it will not be covered by any other element */
    padding: 2em 3em;
    /* width: 100vw; */
    backdrop-filter: blur(2px);

    display: flex;
    align-items: center;
    justify-content: start;

    position: absolute;
    top: 0;
    left: 0;
    /* display: flex; */
    width: 100%;
    /* padding: 1em; */

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
    justify-content: end;
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



/* .link-text {
        position: relative;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 600;
        margin-block: .75em;
        transition:  all 350ms ease-in-out;
            opacity: .75;
    } */

/*     .link-text::after {
        content: '';
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 0%;
        padding: .1rem;
        background: #222;


        transition: all 400ms linear;
            opacity: 0;
    } */

/*     .link-text:hover {
        opacity: 1;
        color: #000;
    } */

/*     .link-text:hover:after {
        opacity: 1;
        width: 100%;
    } */


/* Landing page initial section */

#main-start {
    position: relative;
    z-index: -1;
}

.main-layout {
    min-height: 100vh;
    width: 100%;
    /* background: hsl(0, 0%, 87%, var(--background-opacity)); */
    color: #333;
    background: #000;
    background-image: url(../assets/sky1_minified.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 0;
    overflow: hidden;
    /* Dynamic, animated value here ! */
    /* formula is: (oldVal - oldMin) * newRange / oldRange  + newMin */
 /*    translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / (75 + 0));
    --background-opacity: calc(100%  - 1% * min(var(--scroll), 30) * 100 / (30 + 0)); */

    box-shadow: inset 0 0 1rem .125rem #222;

    z-index: 2;
}

/* .start-gridbox {
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    backdrop-filter: saturate(50%);
    background: #0004;
} */

.gridbox-side {
    position: absolute;
    width: 50vw;
    height: 100%;
    backdrop-filter: blur(1px) grayscale(50%);
    box-shadow: 0 0 1rem .2rem #222;
    /* padding: 10%; */

/*     transition: all 1000ms ease-out;
        scale: 0.5;  */
}

/* .main-layout.show .gridbox-side {
    scale: 1;
} */

.gs-1 {
    top: -50%;
    left: -35%;
    background: #0003;
    transform: rotate(45deg) scaleY(2);
    /* border-bottom-right-radius: 50%; */
}

.gs-2 {
    top: 50%;
    left: 85%;
    background: #0002;
    transform: rotate(45deg) scaleY(2);
    /* border-bottom-left-radius: 50%; */
}

.gridbox-content {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #0004; */
    /* backdrop-filter: blur(9px) hue-rotate(120deg); */
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
    /* padding: .2rem; */
    font-weight: 800;
    color: #1110;
    /* background: pink; */
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
    /* background: radial-gradient( hsla(180, 100%, 50%, .5), #1111); */
    color: #111;
    /* background: pink; */
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

.section-sec {
    margin-top: /* 30vh */ 0; /* Currently set to 0, so that there is no unnecessary spae between sections transition */
    background: #333;
}

.pgraph--3 {
    font-size: 3.6rem;
}

.pgraph--4 {
    font-size: 4.8rem;
}

.pgraph--5 {
    font-size: 6.0rem;
}

.pgraph--6 {
    font-size: 7.2rem;
}

.pgraph--7 {
    font-size: 8.4rem;
}
.animation-block--initial {
    /* background-image: conic-gradient(#2229, #4449, #bbb9,  #2229); */
    background-image: conic-gradient(#dddd, #cccc, #dddd,#eeee);
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 .25em .15em #3335, .12em .12em .4em .3em #2225;
    /* transform: rotate(45deg); */
    /* border-radius: 50%; */
}

/* Often used, generic declarations */

.--text-centered {
    text-align: center;
    vertical-align: middle;
}

.--flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.--absolute {
    position: absolute;
}

.--no-overflow-x {
    overflow-x: hidden;
}

._animation-block_1 {

}

._animation-block_2 {

}

/* Cutom styling parts */

._pgraph_1 {
    font-family: 'Audiowide', sans-serif;
    letter-spacing: .25em;
    text-shadow: .05em .05em 8px #2229;
    text-decoration: double;
    backdrop-filter: blur(3px);
}

/* .greetings h1,
.greetings h3 {
    text-align: center;
} */

/* @media (min-width: 986px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    } 
} */

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