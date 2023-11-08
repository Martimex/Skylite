<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const options = {
    rootMargin: '0px',
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("show", entry.isIntersecting));
}, options);

onMounted(() => {

    const targets = [...document.querySelectorAll('.offer-item'), ...document.querySelectorAll('.outro')];
    targets && targets.forEach(target => observer.observe(target));
    

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
        opacity: 1,
    });

    gsap.to(`.offer-item[data-no="1"] .offer-dash`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="1"]`,
            endTrigger: `.offer-item[data-no="1"]`,
            start: '-20% 30%',
            end: '45% 10%',
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
            start: '-20% 30%',
            end: '45% 10%',
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
            start: '-20% 30%',
            end: '45% 10%',
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
            start: '-20% 30%',
            end: '45% 10%',
            /* markers: true, */
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        height: '100%',
    });

    /* Outro */
    
    gsap.to(`.outro-heading`, {
        scrollTrigger: {
            trigger: `.outro-box`,
            endTrigger: `.outro-box`,
            start: '-100% 25%',
            end: '50% 25%',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '-25vh',
    });

    gsap.to(`.outro-button`, {
        scrollTrigger: {
            trigger: `.outro-box`,
            endTrigger: `.outro-box`,
            start: '-100% 25%',
            end: '50% 25%',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '-25vh',
    });

})

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> How can we help you </p>

    <div class="offer-all">
        <div class="offer-item" data-no="1">
            <div class="offer-circle">
                <font-awesome-icon icon="fa-solid fa-rectangle-ad" class="offer-icon" />
            </div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> ONLINE ADVERTISING </p>
            <div class="offer-content">
                <p class="offer-heading"> Sell more products online </p>
                <span class="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae maximus erat, rutrum rutrum massa. Nulla facilisi. Proin rhoncus facilisis
                    turpis, id aliquam tellus malesuada sed. Aliquam in porttitor nisi. Nullam eu magna nunc. Phasellus rutrum mauris nec auctor egestas. Nulla mattis
                    libero nec ex ullamcorper porttitor. Aenean rhoncus tortor id neque placerat accumsan. Phasellus dui augue, iaculis vitae ornare at, malesuada a
                    diam. In imperdiet varius felis, non ultricies dolor venenatis nec. Nunc neque eros, semper vitae massa quis, suscipit fringilla erat. Nullam a
                    suscipit.
                </span>
                <div class="buttons-box">
                    <div class="offer-button button-get"> Get offer </div>
                    <div class="offer-button button-learn"> Learn more </div>
                </div>
            </div>
        </div>
        <div class="offer-item" data-no="2">
            <div class="offer-circle">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="offer-icon" />
            </div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> SEO PRINCIPLES </p>
            <div class="offer-content">
                <p class="offer-heading"> Reach the top of search results </p>
                <span class="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae maximus erat, rutrum rutrum massa. Nulla facilisi. Proin rhoncus facilisis
                    turpis, id aliquam tellus malesuada sed. Aliquam in porttitor nisi. Nullam eu magna nunc. Phasellus rutrum mauris nec auctor egestas. Nulla mattis
                    libero nec ex ullamcorper porttitor. Aenean rhoncus tortor id neque placerat accumsan. Phasellus dui augue, iaculis vitae ornare at, malesuada a
                    diam. In imperdiet varius felis, non ultricies dolor venenatis nec. Nunc neque eros, semper vitae massa quis, suscipit fringilla erat. Nullam a
                    suscipit.
                </span>
                <div class="buttons-box">
                    <div class="offer-button button-get"> Get offer </div>
                    <div class="offer-button button-learn"> Learn more </div>
                </div>
            </div>
        </div>
        <div class="offer-item" data-no="3">
            <div class="offer-circle">
                <font-awesome-icon icon="fa-solid fa-globe" class="offer-icon" />
            </div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> BRAND AWARENESS </p>
            <div class="offer-content">
                <p class="offer-heading"> Establish a well-known brand </p>
                <span class="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae maximus erat, rutrum rutrum massa. Nulla facilisi. Proin rhoncus facilisis
                    turpis, id aliquam tellus malesuada sed. Aliquam in porttitor nisi. Nullam eu magna nunc. Phasellus rutrum mauris nec auctor egestas. Nulla mattis
                    libero nec ex ullamcorper porttitor. Aenean rhoncus tortor id neque placerat accumsan. Phasellus dui augue, iaculis vitae ornare at, malesuada a
                    diam. In imperdiet varius felis, non ultricies dolor venenatis nec. Nunc neque eros, semper vitae massa quis, suscipit fringilla erat. Nullam a
                    suscipit.
                </span>
                <div class="buttons-box">
                    <div class="offer-button button-get"> Get offer </div>
                    <div class="offer-button button-learn"> Learn more </div>
                </div>
            </div>
        </div>
        <div class="offer-item" data-no="4">
            <div class="offer-circle">
                <font-awesome-icon icon="fa-solid fa-store" class="offer-icon" />
            </div>
            <div class="offer-dash"></div>
            <p class="offer-semititle"> MARKETING EVENTS </p>
            <div class="offer-content">
                <p class="offer-heading"> Make things happen </p>
                <span class="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae maximus erat, rutrum rutrum massa. Nulla facilisi. Proin rhoncus facilisis
                    turpis, id aliquam tellus malesuada sed. Aliquam in porttitor nisi. Nullam eu magna nunc. Phasellus rutrum mauris nec auctor egestas. Nulla mattis
                    libero nec ex ullamcorper porttitor. Aenean rhoncus tortor id neque placerat accumsan. Phasellus dui augue, iaculis vitae ornare at, malesuada a
                    diam. In imperdiet varius felis, non ultricies dolor venenatis nec. Nunc neque eros, semper vitae massa quis, suscipit fringilla erat. Nullam a
                    suscipit.
                </span>
                <div class="buttons-box">
                    <div class="offer-button button-get"> Get offer </div>
                    <div class="offer-button button-learn"> Learn more </div>
                </div>
            </div>
        </div>

        <div class="outro">
            <div class="outro-box">
                <p class="outro-heading"> AND MANY MORE </p>
                <div class="outro-button"> See full offer </div>
            </div>
        </div>

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
        --green-heading: hsl(102, 70%, 68%);
        --green-lite: hsla(102, 100%, 68%, .5);
        --yellow: hsl(33, 80%, 78%);
        --yellow-heading: hsl(33, 70%, 68%);
        --yellow-lite: hsla(33, 100%, 68%, .5);
        --blue: hsl(177, 80%, 78%);
        --blue-heading: hsl(177, 70%, 68%);
        --blue-lite: hsla(177, 100%, 68%, .5);
        --red: hsl(3, 80%, 78%);
        --red-heading: hsl(3, 70%, 68%);
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
        padding: .15em;
        height: 0%; /* GSAP will animate this back to 100% */
        margin-left: calc(3em - .15em);
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
        padding: 5% 7.5%;
    }

    .offer-heading {
        font-size: 2.7rem;
        font-weight: 750;
        text-align: center;
        line-height: 1.2;
        color: var(--green-heading);
        text-shadow: 0 0 .2rem #111;
        /* -webkit-text-stroke: .05rem #444; */
        /* margin-bottom: 3.75vh; */

        transition: all 500ms linear;
            opacity: 0;
            filter: grayscale(60%);
            transform: translateY(-.5rem);
    }

    .offer-description {
        font-size: 1.2rem;
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        text-align: center;
        display: inline-block;
        line-height: 1.5;
        color: #ccc;
        margin-block: 7.5vh;
        margin-inline: 5%; /* ONLY FOR HUGE SCREENS */

        transition: all 600ms linear;
            opacity: 0;
    }

    .buttons-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .offer-button {
        font-size: 1.2rem;
        font-weight: 600;
        display: inline-block;
        text-align: center;
        padding: 1em;
        min-width: max(9rem, 30%);
        border-radius: 9999px;
        border: .1em solid #000;
        background: #111;
        box-shadow:  0 0 .6em .3em #111;
        color: var(--green-heading);

        transition: all 600ms linear;
            opacity: 0;
    }

    .offer-icon {
        font-size: 2rem;
        position: absolute;
        top: calc(50% - .5em);
        left: calc(50% - .5em);

        transition: all 400ms ease-in-out;
            scale: .8;
            opacity: 0;
    }

    .outro {
        margin-block: 50vh 50vh;
    }

    .outro-box {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .outro-heading {
        font-size: 5.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: .5em;
        color: #000;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms linear;
            opacity: 0;
    }

    .outro-button {
        font-size: 1.5rem;
        font-weight: 650;
        text-align: center;
        margin-inline: auto;
        padding: 1em;
        min-width: 20vw;
        color: #222;
        background: linear-gradient(110deg, #fff, #eee);
        border-radius: 5%;
        border: .1em solid #bbb;
        box-shadow: 0 0 .22em .1em #ccc;

        transition: all 600ms linear;
            opacity: 0;
    }

    .outro-button:hover {
        cursor: pointer;
        filter: invert(100%);
        border-radius: 10%;
        
    }

    /* An utility class for intersection observer purposes */

    .show {
        opacity: 1 !important;
    }

    .show .offer-icon {
        scale: 1;
        opacity: 1 !important;
    }

    .show .offer-heading {
        opacity: 1 !important;
        transform: translateY(0rem);
        filter: grayscale(0%);
    }
    .show .offer-description {
        opacity: 1 !important;
    }

    .show .offer-button {
        opacity: 1 !important;
    }

    .show .outro-heading {
        opacity: 1 !important;
        /* transform: translateY(0em); */
    }

    .show .outro-button {
        opacity: 1 !important;
    }

    /* And finally - some color based styling */

    .offer-item[data-no="1"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--green));
        box-shadow: 0 0 1.2em .3em var(--green);
    }

    .offer-item[data-no="1"] .offer-dash {
        background: linear-gradient(135deg, var(--green-lite), #000 85%);
    }

    .offer-item[data-no="1"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--green);
    }

    .offer-item[data-no="1"] .offer-heading, .offer-item[data-no="1"] .offer-button {
        color: var(--green-heading);
    }

    .offer-item[data-no="1"] .offer-icon {
        color: var(--green);
    }

    .offer-item[data-no="1"] .offer-button:hover {
        cursor: pointer;
        scale: 1.1;
        transform: translateY(.25rem);
        border-color: var(--green-lite);
    }

    .offer-item[data-no="2"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--yellow));
        box-shadow: 0 0 1.2em .3em var(--yellow);
    }

    .offer-item[data-no="2"] .offer-dash {
        background: linear-gradient(135deg, var(--yellow-lite), #000 85%);
    }

    .offer-item[data-no="2"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--yellow);
    }

    .offer-item[data-no="2"] .offer-heading, .offer-item[data-no="2"] .offer-button {
        color: var(--yellow-heading);
    }

    .offer-item[data-no="2"] .offer-icon {
        color: var(--yellow);
    }

    .offer-item[data-no="2"] .offer-button:hover {
        cursor: pointer;
        scale: 1.1;
        transform: translateY(.25rem);
        border-color: var(--yellow-lite);
    }

    .offer-item[data-no="3"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--blue));
        box-shadow: 0 0 1.2em .3em var(--blue);
    }

    .offer-item[data-no="3"] .offer-dash {
        background: linear-gradient(135deg, var(--blue-lite), #000 85%);
    }

    .offer-item[data-no="3"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--blue);
    }

    .offer-item[data-no="3"] .offer-heading, .offer-item[data-no="3"] .offer-button {
        color: var(--blue-heading);
    }

    .offer-item[data-no="3"] .offer-icon {
        color: var(--blue);
    }

    .offer-item[data-no="3"] .offer-button:hover {
        cursor: pointer;
        scale: 1.1;
        transform: translateY(.25rem);
        border-color: var(--blue-lite);
    }

    .offer-item[data-no="4"] .offer-circle {
        background-image: radial-gradient(#000 55%, var(--red));
        box-shadow: 0 0 1.2em .3em var(--red);
    }

    .offer-item[data-no="4"] .offer-dash {
        background: linear-gradient(135deg, var(--red-lite), #000 85%);
    }

    .offer-item[data-no="4"] .offer-semititle {
        -webkit-text-stroke: .05rem var(--red);
    }

    .offer-item[data-no="4"] .offer-heading, .offer-item[data-no="4"] .offer-button {
        color: var(--red-heading);
    }

    .offer-item[data-no="4"] .offer-icon {
        color: var(--red);
    }

    .offer-item[data-no="4"] .offer-button:hover {
        cursor: pointer;
        scale: 1.1;
        transform: translateY(.25rem);
        border-color: var(--red-lite);
    }



    /* OLD STYLES */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

</style>