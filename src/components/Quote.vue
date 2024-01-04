<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add(`show`);
            observer.unobserve(entry.target);
        }
    })   
}, {threshold: .7});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const quote_layout = document.querySelector(`.quote-layout`);
    quote_layout && observer.observe(quote_layout);

/*     gsap.from(`.nav-burger`, {
        scrollTrigger: {
            trigger: `.quote-layout`,
            start: '0% 10%',
            end: '80% 20%',
            scrub: .25,
        },
        opacity: 0,
    }) */
})

</script>

<template>
    <div class="quote-layout">
<!-- 
        <div class="nav-burger" @click="sayHi">
            <font-awesome-icon icon="fa-solid fa-bars" class="burger-icon" />
        </div> -->

        <div class="quote-box-svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg5" width="288" height="204" version="1.1" viewBox="0 0 76.2 53.975">
                <defs id="defs5"><path id="rect406" d="M-.7632.3816h288.1128v203.3962H-.7632z"/>
                    <path id="rect6053" d="M97.411 109.8234h99.8395v37.2374H97.411z"/>
                    <path id="rect6047" d="M161.632 95.2523h109.2838v88.5064H161.632z"/>
                    <path id="rect6041" d="M162.9812 46.142h44.523v53.6975h-44.523z"/>
                    <path id="rect6035" d="M80.4113 106.8552h128.9818v75.824H80.4113z"/>
                    <path id="rect6005" d="M99.2998 41.5548h43.9833v39.3961H99.2998z"/>
                    <path id="rect5950" d="M88.9143 58.3858h80.1373v76.3213H88.9143z"/>
                    <path id="rect5944" d="M4.5793 6.4873H71.742v197.6721H4.5793z"/>
                    <path id="rect393" d="M1.0793-14.3013h287.106v44.523H1.0793z"/>
                    
                    <!-- <style id="style3" type="text/css"></style> -->
                    
                </defs>
                
                <defs id="defs2">
                    <linearGradient xlink:href="#linearGradient3991" id="linearGradient8431" x1="27.8892" x2="27.5168" y1="54.3963" y2="26.0515" gradientUnits="userSpaceOnUse" spreadMethod="reflect"/>
                    <linearGradient id="linearGradient3991">
                        <stop id="stop3987" offset="0" stop-color="#103836" stop-opacity="1"/>
                        <stop id="stop3989" offset="1" stop-color="#18797e" stop-opacity=".7176"/>
                    </linearGradient>
                </defs>
                
                <g id="layer1">
                    <g id="g8427" stroke="url(#linearGradient8431)" style="mix-blend-mode:normal" transform="translate(8.4414 -5.8482)"> <!--stroke-dasharray="[0-131],121" -->
                        <text xml:space="preserve" id="text404" fill="#000" fill-opacity="0" fill-rule="evenodd" stroke="#fff" stroke-dasharray="0,121" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="1" stroke-width=".5039" font-family="Rockwell Nova" font-size="32" opacity=".75" style="-inkscape-font-specification:&quot;Rockwell Nova, Normal&quot;;text-align:center;white-space:pre;shape-inside:url(#rect406)" transform="matrix(.7876 0 0 .7876 -83.6008 18.5186)">
                            <tspan id="tspan355" class="no-targetable" x="111.4642" y="28.0893">SKY</tspan>
                        </text>
                    </g>
                </g>        
            </svg>
        </div>
        <div class="quote-box-text">
            <p class="qbt-paragraph paragraph-1"> IS THE LIMIT </p>
            <p class="qbt-paragraph paragraph-2"> IT'S TRUE FOR US </p>
        </div>

    </div>
</template>

<style scoped>

    .qbt-paragraph__md {
        color: red !important;
        font-size: .1rem;
    }

    .quote-layout {
        position: relative;
        min-height: 100vh;
        /* background-color: #0000; */
/*         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 */        color: #ddd;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        /* justify-content: center; */
/*         background-color: #000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23eeeeee' fill-opacity='.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    }

    .nav-burger {
        position: fixed;
        top: 0;
        margin: 1rem;
        padding: 1.5rem;
        border-radius: 50%;
        /* background: #2220; */
        backdrop-filter: blur(4px);
        z-index: 1;
    }

    .burger-icon {
        font-size: 2.5rem;
        color: #bbb;
        filter: invert(100%);
    }

    .quote-box-svg {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .quote-box-text {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: column;
        margin-top: 1.5rem;
    }

    .qbt-paragraph {
        font-size: 4rem;
        display: inline-block;
        font-weight: 700;
        text-align: center;
       /*  margin-bottom: .5em; */
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;
    }

    .paragraph-1 {
        transition: all 500ms linear;
            transform: translateY(-1rem);
            scale: 0.85;
            opacity: 0;
    }

    .quote-layout.show .paragraph-1 {
        transform: translateY(0rem);
        scale: 1;
        opacity: 1;
    }

    .paragraph-2 {
        color: #000;
        padding-inline: 1.5rem;
        border-radius: 9999px;
        -webkit-text-stroke: .075rem #111;
        background: #ddd0;
        transition: all 500ms linear 500ms;
            transform: translateY(-1rem);
            scale: 0.85;
            opacity: 0;
            background: #ddd0;
    }

    .quote-layout.show .paragraph-2 {
        transform: translateY(0rem);
        scale: 1;
        opacity: 1;
        background: #bbb;
    }

    #svg5 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: .1em;
        /* font-size: 12rem; */
        scale: 2.5;
        filter: drop-shadow(0 0 0.75rem #eee) brightness(125%);
        text-shadow: 0rem 0rem 1em #eee;
        /* stroke-dashoffset: 200; */
        /* letter-spacing: .25rem; */
        /* -webkit-text-stroke: .0125em cyan; */
    }

    .quote-layout #text404 {
        transition: all 1500ms /* 200ms */ ease-in;
            stroke-dasharray: 0,121;
    }

    .quote-layout.show #text404 {
        stroke-dasharray: 131,121;
    }


    
    /* Lanscape mobiles */

    @media screen and (orientation: landscape) and (max-width: 1024px) {
        
        #svg5 {
            max-height: 33vh;
        }

        .quote-box-svg {
            margin-bottom: 0rem;
        }

        .quote-box-text {
            margin-top: 0rem;
        }
    }

</style>