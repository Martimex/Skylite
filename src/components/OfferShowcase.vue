<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    /* 1 */

    gsap.to(`.offer-item[data-no="1"] .offer-content`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="1"]`,
            endTrigger: `.offer-item[data-no="1"]`,
            start: '10% 80%',
            end: '40% 40%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        backgroundImage: 'linear-gradient(135deg, #222, #111)',
    });

    gsap.to(`.offer-item[data-no="1"] .offer-dash`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="1"]`,
            endTrigger: `.offer-item[data-no="1"]`,
            start: '0% 30%',
            end: '35% 10%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        height: '100%',
    });


    /* 2 */

    gsap.to(`.offer-item[data-no="2"] .offer-content`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="2"]`,
            endTrigger: `.offer-item[data-no="2"]`,
            start: '10% 80%',
            end: '40% 40%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        /* background:'#222', */
        backgroundImage: 'linear-gradient(135deg, #222, #111)',
        /* width: '80vw', */
        /* height: '100vh', */
        /* borderRadius: '2rem', */
    });

    gsap.to(`.offer-item[data-no="2"] .offer-dash`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="2"]`,
            endTrigger: `.offer-item[data-no="2"]`,
            start: '0% 30%',
            end: '35% 10%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        height: '100%',
    });


    /* 3 */

    gsap.to(`.offer-item[data-no="3"] .offer-content`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="3"]`,
            endTrigger: `.offer-item[data-no="3"]`,
            start: '10% 80%',
            end: '40% 40%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        backgroundImage: 'linear-gradient(135deg, #222, #111)',
    });

    gsap.to(`.offer-item[data-no="3"] .offer-dash`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="3"]`,
            endTrigger: `.offer-item[data-no="3"]`,
            start: '0% 30%',
            end: '35% 10%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        height: '100%',
    });


    /* 4 */

    gsap.to(`.offer-item[data-no="4"] .offer-content`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="4"]`,
            endTrigger: `.offer-item[data-no="4"]`,
            start: '10% 80%',
            end: '40% 40%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        backgroundImage: 'linear-gradient(135deg, #222, #111)',
    });

    gsap.to(`.offer-item[data-no="4"] .offer-dash`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="4"]`,
            endTrigger: `.offer-item[data-no="4"]`,
            start: '0% 30%',
            end: '35% 10%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        height: '100%',
    });
    
})

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> How can we help you </p>

    <div class="offer-all">
        <div class="offer-item" data-no="1">
            <div class="offer-circle"></div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> ONLINE ADVERTISING </p>
            <div class="offer-content">

            </div>
        </div>
        <div class="offer-item" data-no="2">
            <div class="offer-circle"></div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> SEO PRINCIPLES </p>
            <div class="offer-content">
                
            </div>
        </div>
        <div class="offer-item" data-no="3">
            <div class="offer-circle"></div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> BRAND AWARENESS </p>
            <div class="offer-content">
                
            </div>
        </div>
        <div class="offer-item" data-no="4">
            <div class="offer-circle"></div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> MARKETING EVENTS </p>
            <div class="offer-content">
                
            </div>
        </div>

    </div>


    <div class="flex items-center justify-evenly h-screen">

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--ad"> ONLINE </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-rectangle-ad" class="custom-icon custom-icon--ad" />
            </div>
            <span class="section-title offer-text custom-icon--ad"> ADVERTISING </span>
        </div> <!--Online advertising-->  <!-- fa-rectangle-ad -->

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--glass"> SEO </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="custom-icon custom-icon--glass" />
            </div>
            <span class="section-title offer-text custom-icon--glass"> PRINCIPLES </span>
        </div> <!--SEO principles-->      <!-- fa-magnifying-glass -->

        <div class="offer-box flex flex-col items-center justify-evenly">  
            <span class="section-title offer-text custom-icon--globe"> BRAND </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-globe" class="custom-icon custom-icon--globe" />
            </div>
            <span class="section-title offer-text custom-icon--globe"> AWARENESS </span>
        </div> <!--Brand awareness-->     <!-- fa-globe -->

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--store"> MARKETING </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-store" class="custom-icon custom-icon--store" />
            </div>
            <span class="section-title offer-text custom-icon--store"> EVENTS </span>
        </div> <!--Marketing events-->    <!-- fa-store -->

    </div>
</template>

<style scoped>

    /* NEW STYLES */

    .offer-all {
        /* background: #111; */
        margin-inline: 10vw;
        min-height: 50vh;
    }

    .offer-item {
        --green: hsl(102, 80%, 78%);
        --green-lite: hsla(102, 100%, 68%, .5);
        --yellow: hsl(33, 80%, 78%);
        --yellow-lite: hsla(33, 100%, 68%, .5);
        --blue: hsl(177, 80%, 78%);
        --blue-lite: hsla(177, 100%, 68%, .5);
        --red: hsl(3, 80%, 78%);
        --red-lite: hsla(3, 100%, 68%, .5);

        font-size: 1rem;
        padding-bottom: 15vh;
        /* border-bottom: 2.5em solid pink; */
        position: relative;
       /*  margin-bottom: 50vh;  EITHER 50vh or 100vh */
    }

    .offer-circle {
        --padding-value: 3em;
        font-size: 1rem;
        position: absolute;
        /* top: calc(50% - var(--padding-value)); */
        top: 0;
        padding: var(--padding-value);
        border-radius: 4rem;
        background: #222;
    }

    .offer-dash {
        font-size: 1rem;
        position: absolute;
        top: 6em;
        padding: .12em;
        height: 0%; /* GSAP will animate this back to 100% */
        margin-left: calc(3em - .12em);
        border-radius: 9999px;
    }

    .offer-semititle {
        font-size: 4rem;
        margin-left: 2.5em;
        font-weight: 800;
        color: #000;
        display: inline-block;
        /* padding-block: 20vh; */
    }

    .offer-content {
        font-size: 1rem;
        margin-top: 5vh;
        margin-left: 6em;
        min-height: 75vh;
        /* background: #2220; */
        background-image: linear-gradient(45deg, #2221, #1111);
        border-radius: 1em;
    }

    .offer-icon {
        font-size: 2rem;
    }


    .offer-item[data-no="1"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--green));
        box-shadow: 0 0 1.2em .3em var(--green);
    }

    .offer-item[data-no="1"] .offer-dash {
        background: linear-gradient(135deg, var(--green-lite), var(--yellow-lite));
    }

    .offer-item[data-no="1"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--green);
    }

    .offer-item[data-no="2"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--yellow));
        box-shadow: 0 0 1.2em .3em var(--yellow);
    }

    .offer-item[data-no="2"] .offer-dash {
        background: linear-gradient(135deg, var(--yellow-lite), var(--blue-lite));
    }

    .offer-item[data-no="2"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--yellow);
    }

    .offer-item[data-no="3"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--blue));
        box-shadow: 0 0 1.2em .3em var(--blue);
    }

    .offer-item[data-no="3"] .offer-dash {
        background: linear-gradient(135deg, var(--blue-lite), var(--red-lite));
    }

    .offer-item[data-no="3"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--blue);
    }

    .offer-item[data-no="4"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--red));
        box-shadow: 0 0 1.2em .3em var(--red);
    }

    .offer-item[data-no="4"] .offer-dash {
        background: linear-gradient(135deg, var(--red-lite), #1110);
    }

    .offer-item[data-no="4"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--red);
    }



    /* OLD STYLES */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .all-offers {
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        /* background: #eee; */
    }

    .showcase-box {
        /* width: 50%; */
        border: .2rem solid pink;
    }

    .other-offers {
        /* width: 50%; */
        border: .2rem solid yellow;
    }

    .offer-box {
        height: 80%;
        width: 50%;
        /* margin: 20% 20%; */
        background: linear-gradient(135deg, #333, #222, #222);
        border-radius: 5%;
    }

    .offer-box:nth-child(1) {
        transform: translateX(0%) translateY(0%);
        box-shadow: inset 0em 0em .3em .3em hsl(102, 80%, 78%), 0em 0em 2.3em .3em hsl(102, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(102, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(2) {
        /* transform: translateX(-5%) translateY(-2%); */
        box-shadow: inset 0em 0em .3em .3em hsl(33, 80%, 78%), 0em 0em 2.3em .3em hsl(33, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(33, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(3) {
        /* transform: translateX(-10%) translateY(-4%); */
        box-shadow: inset 0em 0em .3em .3em hsl(177, 80%, 78%), 0em 0em 2.3em .3em hsl(177, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(177, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(4) {
        /* transform: translateX(-15%) translateY(-6%); */
        box-shadow: inset 0em 0em .3em .3em hsl(3, 80%, 78%), 0em 0em 2.3em .3em hsl(3, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(3, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-text {
        font-size: 1.8rem;
        font-weight: 650;
        letter-spacing: .125em;
    }

    .light {
        font-size: 1rem;
        padding: 3em;
        /* border: .1rem solid white; */
        border-radius: 50%;
        box-shadow: 0 0 1.2em .3em #111;
    }

    .custom-icon {
        font-size: 8rem;
    }

    .custom-icon--ad {
        color: hsl(102, 80%, 78%);
    }

    svg.custom-icon--ad {
        filter: drop-shadow(0 0 1rem hsla(102, 80%, 78%, .5));
    }

    .custom-icon--glass {
        color: hsl(33, 80%, 78%);
    }

    svg.custom-icon--glass {
        filter: drop-shadow(0 0 1rem hsla(33, 80%, 78%, .5));
    }

    .custom-icon--globe {
        color: hsl(177, 80%, 78%);
    }

    svg.custom-icon--globe {
        filter: drop-shadow(0 0 1rem hsla(177, 80%, 78%, .5));
    }

    .custom-icon--store {
        color: hsl(3, 70%, 68%);
    }

    svg.custom-icon--store {
        filter: drop-shadow(0 0 1rem hsla(3, 80%, 78%, .5));
    }

</style>