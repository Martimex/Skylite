<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const emit = defineEmits(['redirectMessage']);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: .5});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: .5});

onMounted(() => {

    const targets = [...document.querySelectorAll('.offer-item')];
    targets && targets.forEach(target => observer.observe(target));

    const bubble_section = document.querySelector('.bubble-section');
    bubble_section && observer2.observe(bubble_section);
    

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
        backgroundImage: 'linear-gradient(135deg, #111b, #000b)',
        opacity: 1,
    });

    gsap.to(`.offer-item[data-no="1"] .neon-layer`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="1"] .offer-content`,
            start: '-20% 0%',
            end: '100% 0%',
            scrub: 1,
            toggleActions: `play pause reverse pause`,
        },
        backgroundImage: `
        radial-gradient(at 72% 83%, hsl(102, 80%, 68%) 0, transparent 59%), 
        radial-gradient(at 100% 100%, hsla(102, 100%, 68%, .5) 0, transparent 55%)`,

        /*
            radial-gradient(at 47% 83%, hsl(65.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 82% 100%, hsl(38, 44%, 39%) 0, transparent 55%);
         */
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
        backgroundImage: 'linear-gradient(135deg, #000b, #111b)',
        /* width: '80vw', */
        /* height: '100vh', */
        /* borderRadius: '2rem', */
    });

    gsap.to(`.offer-item[data-no="2"] .neon-layer`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="2"] .offer-content`,
            start: '-20% 0%',
            end: '100% 0%',
            scrub: 1,
            toggleActions: `play pause reverse pause`,
        },
        backgroundImage: `
            radial-gradient(at 28% 83%, hsl(33, 80%, 68%) 0, transparent 59%), 
            radial-gradient(at 0% 100%, hsla(33, 100%, 68%, .5) 0, transparent 55%)`,
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
        backgroundImage: 'linear-gradient(135deg, #111b, #000b)',
    });

    gsap.to(`.offer-item[data-no="3"] .neon-layer`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="3"] .offer-content`,
            start: '-20% 0%',
            end: '100% 0%',
            scrub: 1,
            toggleActions: `play pause reverse pause`,
        },
        backgroundImage: `
            radial-gradient(at 72% 83%, hsl(177, 80%, 68%) 0, transparent 59%), 
            radial-gradient(at 100% 100%, hsla(177, 100%, 68%, .5) 0, transparent 55%)`,
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
        backgroundImage: 'linear-gradient(135deg, #000b, #111b)',
    });

    gsap.to(`.offer-item[data-no="4"] .neon-layer`, {
        scrollTrigger: {
            trigger: `.offer-item[data-no="4"] .offer-content`,
            start: '-20% 0%',
            end: '100% 0%',
            scrub: 1,
            toggleActions: `play pause reverse pause`,
        },
        backgroundImage: `
            radial-gradient(at 28% 83%, hsl(3, 80%, 68%) 0, transparent 59%), 
            radial-gradient(at 0% 100%, hsla(3, 100%, 68%, .5) 0, transparent 55%)`,
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
    
/*     gsap.to(`.outro-heading`, {
        scrollTrigger: {
            trigger: `.outro-box`,
            endTrigger: `.outro-box`,
            start: '-100% 25%',
            end: '50% 25%',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '-10vh',
    });

    gsap.from(`.outro-button`, {
        scrollTrigger: {
            trigger: `.outro-box`,
            endTrigger: `.outro-box`,
            start: '-100% 25%',
            end: '50% 25%',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
    }); */

    const main = gsap.timeline();
    main
        .to(`.bubble-section .outro`, {scale: 0.75, opacity: 0/* , duration: 3 */})
        .to(`.bubble-section .outro-button`, {pointerEvents: 'none'}, '<60%')
        .to(`.bubble-section .bubble`, {scale: 1, opacity: 1/* , duration: 3 */}, "<40%")
        
        

    ScrollTrigger.create({
        animation: main,
        trigger: '.bubble-section',
        endTrigger: '.bubble-section',
        start: 'center center',
        end: "+=2250",
        scrub: .75,
        pin: true,
        /* anticipatePin: 1, */
    });

})

</script>

<template>
    <!-- <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> How can we help you </p> -->

    <div class="bg-layer-dark">
        <div class="offer-all">
            <div class="offer-item" data-no="1">
                <div class="offer-circle">
                    <font-awesome-icon icon="fa-solid fa-rectangle-ad" class="offer-icon" />
                </div>
                <div class="offer-dash"></div>
                <p class="offer-semititle"> ONLINE ADVERTISING </p>
                <div class="offer-content">
                    <div class="neon-layer"></div>
                    <p class="offer-heading minimal-weight"> Sell more products online </p>
                    <div class="offer-details">
                        <span class="offer-description">
                            Do you struggle with promoting or selling your goods or services? If so, we will provide You a comprehensive guidelines on how to increase
                            the sale rate of your products. Furthermore, our advertising experts will help You to preapre the right advertising strategy to target the
                            desired audience, that will also fit your needs and budget.    
                        </span>
                        <div class="buttons-box">
                            <a class="offer-button button-get" href="/" @click.prevent="emit('redirectMessage', 'offer form')"> Get offer </a>
                            <a class="offer-button button-learn" href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> Learn more  </a>
                        </div>
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
                    <div class="neon-layer"></div>
                    <p class="offer-heading minimal-weight"> Reach the top of search results </p>
                    <div class="offer-details">
                        <span class="offer-description">
                            Nowadays, to get the deserved attention, a SEO friendly website is a must. Our team of experienced web developers would analyze the contents
                            of your site, and enhance it according to the best SEO practices, not only to achieve much better search results, but also to increase its
                            performance and overall user experience. 
                        </span>
                        <div class="buttons-box">
                            <a class="offer-button button-get" href="/" @click.prevent="emit('redirectMessage', 'offer form')"> Get offer </a>
                            <a class="offer-button button-learn" href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> Learn more  </a>
                        </div>
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
                    <div class="neon-layer"></div>
                    <p class="offer-heading minimal-weight"> Establish a well-known brand </p>
                    <div class="offer-details">
                        <span class="offer-description">
                            Despite your company size and current recognition, a fresh and well-defined branding is what your company stand out beyond the competition. 
                            Skylite's PR specialists not only may assist you with rebranding process, but also can provide you an in-depth business plan on how to
                            properly build the right communication within your brand. 
                        </span>
                        <div class="buttons-box">
                            <a class="offer-button button-get" href="/" @click.prevent="emit('redirectMessage', 'offer form')"> Get offer </a>
                            <a class="offer-button button-learn" href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> Learn more  </a>
                        </div>
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
                    <div class="neon-layer"></div>
                    <p class="offer-heading minimal-weight"> Make things happen </p>
                    <div class="offer-details">
                        <span class="offer-description">
                            What can increase your firm popularity better than a memorable event? We can help you organise and coordinate the happening to make you
                            reach the desired results and to increase your popularity on the market. Our team will make sure that the event will grant notability for
                            your company and bring more captivated customers.
                        </span>
                        <div class="buttons-box">
                            <a class="offer-button button-get" href="/" @click.prevent="emit('redirectMessage', 'offer form')"> Get offer </a>
                            <a class="offer-button button-learn" href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> Learn more  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
<!--         <div class="outro">
            <div class="outro-box">
                <p class="outro-heading"> AND MANY MORE </p>
                <div class="outro-button"> See full offer </div>
            </div>
        </div> -->

        <div class="bubble-section component-layout-dark">
            <div class="outro">
                <p class="outro-heading"> AND MANY MORE </p>
                <a class="outro-button" href="./offer" @click.prevent="emit('redirectMessage', '/offer')" > See full offer </a>
            </div>
            <div class="bubble component-layout-light-1"></div>
            <p class="emp-introduction no-targetable"> 
                We are not a regular PR company. We are a team of experts willing to support other companies
            </p>
        </div>

    </div>
    

</template>

<style scoped>

    /* NEW STYLES */

    .bg-layer-dark {
/*         background-color: #000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23eeeeee' fill-opacity='.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    }

    .offer-all {
        /* background: #111; */
        margin-inline: 10vw;
        padding-top: 10vh;
        min-height: 50vh;
    }

    .offer-item {
        --green: hsl(102, 80%, 68%);
        --green-heading: hsl(102, 50%, 48%);
        --green-desc: #bbb;
        --green-lite: hsla(102, 100%, 68%, .5);
        --yellow: hsl(33, 80%, 68%);
        --yellow-heading: hsl(33, 50%, 48%);
        --yellow-desc: #bbb;
        --yellow-lite: hsla(33, 100%, 68%, .5);
        --blue: hsl(177, 80%, 68%);
        --blue-heading: hsl(177, 50%, 48%);
        --blue-desc: #bbb;
        --blue-lite: hsla(177, 100%, 68%, .5);
        --red: hsl(3, 80%, 68%);
        --red-heading: hsl(3, 50%, 48%);
        --red-desc: #bbb;
        --red-lite: hsla(3, 100%, 68%, .5);

        font-size: 1rem;
        padding-bottom: 15vh;
        z-index: 0;
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

    .offer-item:nth-child(2n) .offer-circle {
        right: 0;
    }

    .offer-dash {
        font-size: 1rem;
        position: absolute;
        top: 6em;
        padding: .15em;
        height: 0%; /* GSAP will animate this back to 100% */
        margin-inline: calc(3em - .15em) 0;
        border-radius: 9999px;
    }

    .offer-item:nth-child(2n) .offer-dash {
        right: 0;
        margin-inline: 0 calc(3em - .15em) ;
    }

    .offer-semititle {
        font-size: 4rem;
        margin-inline: 2.5em 0;
        font-weight: 800;
        color: #000;
        /* display: inline-block; */
        /* padding-block: 20vh; */
    }

    .offer-item:nth-child(2n) .offer-semititle {
        text-align: right;
        margin-inline: 0 2.5em;
    }

    .offer-content {
        position: relative;
        font-size: 1rem;
        margin-top: 5vh;
        margin-inline: 6em 0;
        min-height: 75vh;
        /* background: #2220; */
        background-image: linear-gradient(45deg, #2221, #1111);
        border-radius: 1em;
        padding-block: 5%;
        padding-inline: 10% 7%;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 80%;

/*         backdrop-filter: blur(17px) saturate(176%);
        -webkit-backdrop-filter: blur(17px) saturate(176%);
        background-color: rgba(17, 25, 40, 0.68);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125); */
        
    }

    .offer-item:nth-child(2n) .offer-content {
        margin-inline: 0 6em;
    }

    .neon-layer {
        content: '';
        font-size: 1rem;
        border-radius: 1em;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #111927;
/*         background-image: 
        radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(198, 44%, 39%) 0, transparent 55%); */
        z-index: -1;

        transition: all 700ms ease-in-out;
            opacity: 0;
            filter: blur(0px);
    }

    .offer-item.show .neon-layer{
        opacity: 1;
        filter: blur(10px);
        /* transform: translateY(5%) scaleY(90%); */
    }

    .offer-heading {
        font-size: 2.7rem;
        /* font-weight: 700; */
        /* text-align: center; */
        line-height: 1.2;
        color: #0000;
        /* text-shadow: 0 0 .2rem #111; */
        /* -webkit-text-stroke: .05rem #444; */
        /* margin-bottom: 3.75vh; */
        align-self: flex-end;

        transition: all 500ms linear;
            opacity: 0;
            filter: grayscale(60%);
            transform: translateY(-.5rem);
    }

    .offer-details {

    }

    .offer-description {
        font-size: 1.2rem;
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        /* text-align: center; */
        display: inline-block;
        line-height: 1.5;
        color: #bbb;
        margin-block: 7.5vh;
        /* margin-inline: 5%; */ /* ONLY FOR HUGE SCREENS */

        transition: all 600ms linear;
            opacity: 0;
    }

    .buttons-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

        transition: all 500ms linear;
            opacity: 0;
    }

    .button-get {
        border-top-left-radius: 0%;
        border-bottom-left-radius: 0%;
    }

    .button-learn {
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
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
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
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

    .bubble-section {
        min-height: 100vh;
/*         background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23dddddd44' fill-opacity='0.2' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E"); */
        position: relative;
/*         display: flex;
        align-items: center;
        justify-content: center; */
        padding-inline: 10%;
        overflow: hidden;
       /*  border: 4px solid yellow; */
    }

    .bubble {
        font-size: 1rem;
        position: absolute;
        top: -5%;
        left: -5%;
        height: 110%;
        width: 110%;
        border-radius: 5%;
/*         background: #eee;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
        overflow: hidden;
        /* Will be animated back to 1 */
        scale: 0;
        opacity: 0;
    }

    .emp-introduction {
        font-size: 4rem;
        font-weight: 700;
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        color: #000;
        text-align: center;
        position: relative;
        line-height: 1.1;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #000;
        color: #0000;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    /* Adjustment class */

    .minimal-weight {
        font-weight: 300;
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

    .offer-item[data-no="1"] .neon-layer {
        background-image: 
            radial-gradient(at 37% 33%, var(--green) 0, transparent 59%), 
            radial-gradient(at 82% 65%, var(--green-lite) 0, transparent 55%);
    }

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

    .offer-item[data-no="1"] .offer-button {
        color: var(--green-heading);
    }

    .offer-item[data-no="1"] .offer-heading {
        -webkit-text-stroke: .05rem var(--green-heading);
        color: var(--green-heading)
    }

    .offer-item[data-no="1"] .offer-description {
        color: var(--green-desc);
    }

    .offer-item[data-no="1"] .offer-icon {
        color: var(--green);
    }

    .offer-item[data-no="1"] .offer-button:hover {
        cursor: pointer;
        transform: translateY(.35rem);
        border-color: var(--green-lite);
    }

    .offer-item[data-no="2"] .neon-layer {
        background-image: 
            radial-gradient(at 63% 33%, var(--yellow) 0, transparent 59%), 
            radial-gradient(at 18% 65%, var(--yellow-lite) 0, transparent 55%);
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

    .offer-item[data-no="2"] .offer-button {
        color: var(--yellow-heading);
    }

    .offer-item[data-no="2"] .offer-heading {
        -webkit-text-stroke: .05rem var(--yellow-heading); 
        color: var(--yellow-heading) 
    }

    .offer-item[data-no="2"] .offer-description {
        color: var(--yellow-desc);
    }


    .offer-item[data-no="2"] .offer-icon {
        color: var(--yellow);
    }

    .offer-item[data-no="2"] .offer-button:hover {
        cursor: pointer;
        transform: translateY(.35rem);
        border-color: var(--yellow-lite);
    }

    .offer-item[data-no="3"] .neon-layer {
        background-image: 
            radial-gradient(at 37% 33%, var(--blue) 0, transparent 59%), 
            radial-gradient(at 82% 65%, var(--blue-lite) 0, transparent 55%);
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

    .offer-item[data-no="3"] .offer-button {
        color: var(--blue-heading);
    }

    .offer-item[data-no="3"] .offer-heading {
        -webkit-text-stroke: .05rem var(--blue-heading);
        color: var(--blue-heading);
    }

    .offer-item[data-no="3"] .offer-description {
        color: var(--blue-desc);
    }

    .offer-item[data-no="3"] .offer-icon {
        color: var(--blue);
    }

    .offer-item[data-no="3"] .offer-button:hover {
        cursor: pointer;
        transform: translateY(.35rem);
        border-color: var(--blue-lite);
    }

    .offer-item[data-no="4"] .neon-layer {
        background-image: 
            radial-gradient(at 63% 33%, var(--red) 0, transparent 59%), 
            radial-gradient(at 18% 65%, var(--red-lite) 0, transparent 55%);
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

    .offer-item[data-no="4"] .offer-button {
        color: var(--red-heading);
    }

    .offer-item[data-no="4"] .offer-heading {
        -webkit-text-stroke: .05rem var(--red-heading);
        color: var(--red-heading);
    }

    .offer-item[data-no="4"] .offer-description {
        color: var(--red-desc);
    }

    .offer-item[data-no="4"] .offer-icon {
        color: var(--red);
    }

    .offer-item[data-no="4"] .offer-button:hover {
        cursor: pointer;
        transform: translateY(.35rem);
        border-color: var(--red-lite);
    }



    /* OLD STYLES */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    @media screen and (orientation: portrait) and (max-height: 1024px) {

        .offer-all {
            margin-inline: 5vw;
        }

        .offer-all:nth-child(1) {
            padding-top: 0vh;
        }

        .offer-item:not(:first-child) {
            margin-top: 8vh;
        }

        .offer-content, .offer-item:nth-child(2n) .offer-content {
            margin-inline: 0;
            min-height: unset;
            padding-inline: 5%;
            padding-block: 7.5vh 6vh;
            display: block;
        }

        .offer-dash {
            display: none;
        }

/*         .offer-item:nth-child(2n) .offer-semititle {
            text-align: left;
        } */

        .offer-circle {
            position: relative;
            width: fit-content;
            margin: 0 auto 3rem;
        }

        .offer-circle::before, .offer-circle::after {
            --elem-height-half: .125rem;
            --elem-width-half: 11vw;

            content: '';
            position: absolute;
            top: calc(50% - var(--elem-height-half));
            padding-inline: var(--elem-width-half);
            padding-block: var(--elem-height-half);

        }

        .offer-item[data-no="1"] .offer-circle::before,  .offer-item[data-no="1"] .offer-circle::after {
            background: var(--green-lite);
        }

        .offer-item[data-no="2"] .offer-circle::before,  .offer-item[data-no="2"] .offer-circle::after {
            background: var(--yellow-lite);
        }

        .offer-item[data-no="3"] .offer-circle::before,  .offer-item[data-no="3"] .offer-circle::after {
            background: var(--blue-lite);
        }

        .offer-item[data-no="4"] .offer-circle::before,  .offer-item[data-no="4"] .offer-circle::after {
            background: var(--red-lite);
        }

        .offer-circle::before {
            left: 160%;
        }

        .offer-circle::after {
            right: 160%;
        }

            
        .offer-semititle, .offer-item:nth-child(2n) .offer-semititle {
            text-align: center;
            margin-inline: 0;
            margin-inline: 10%;
        }

        .offer-heading, .offer-description, .buttons-box {
            margin-inline: 5%;
        }

        .offer-heading {
            font-size: 3rem;
            line-height: 130%;
        }

        .offer-description {
            font-size: 1.2rem;
            margin-block: 10% 17.5%;
            line-height: 170%;
        }

        .offer-button {
            min-width: max(9rem, 40%);
        }

        .offer-item[data-no="1"] .offer-button {
            border-color: var(--green-lite);
        }

        .offer-item[data-no="2"] .offer-button {
            border-color: var(--yellow-lite);
        }

        .offer-item[data-no="3"] .offer-button {
            border-color: var(--blue-lite);
        }

        .offer-item[data-no="4"] .offer-button {
            border-color: var(--red-lite);
        }


        .outro-heading {
            font-size: 8.2rem;
            line-height: 110%;
            margin-inline: 5%;
        }

        .outro-button {
            font-size: 2.2rem;
            margin-inline: auto;
            padding: 1em 2em;
            min-width: 66vw;
        }

        .emp-introduction {
            font-size: 4rem;
            line-height: 140%;
            overflow: hidden;
        }

    }

    @media screen and (orientation: portrait) and (max-height: 800px) {

        .outro-heading {
            font-size: 7.2rem;
        }

        .emp-introduction {
            font-size: 3.6rem;
        }

    }

    @media screen and (orientation: landscape) and (max-width: 1024px) {

        .offer-all {
            margin-inline: 5vw;
        }

        .offer-content {
            padding-block: 7.5%;
            margin-top: 10vh;
            min-height: unset;
            display: flex;
            flex-flow: column;
        }

        .offer-heading {
            display: inline-block;
            width: 100%;
            text-align: left;
        }

        .offer-description {
            margin-block: 10vh;
            line-height: 170%;
            font-weight: 450 !important;
        }

        .outro-button {
            padding: 1em 3em;
        }
    
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {

        /* This is a helper query for smaller mobiles screens (it applies alongside with above media query for max-width: 1024px ) */

        .offer-content, .offer-item:nth-child(2n) .offer-content {
            margin-inline: 0;
        }

        .offer-dash {
            display: none;
        } 
    }

</style>