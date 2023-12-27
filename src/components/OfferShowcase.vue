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
        backgroundImage: 'linear-gradient(135deg, #222b, #111b)',
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
        radial-gradient(at 72% 83%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 100% 100%, hsl(198, 44%, 29%) 0, transparent 55%)`,

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
        backgroundImage: 'linear-gradient(135deg, #222b, #111b)',
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
            radial-gradient(at 28% 83%, hsl(52.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 0% 100%, hsl(1, 44%, 29%) 0, transparent 55%)`,
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
        backgroundImage: 'linear-gradient(135deg, #222b, #111b)',
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
            radial-gradient(at 72% 83%, hsl(199.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 100% 100%, hsl(235, 44%, 29%) 0, transparent 55%)`,
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
        backgroundImage: 'linear-gradient(135deg, #222b, #111b)',
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
            radial-gradient(at 28% 83%, hsl(333.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 0% 100%, hsl(222, 44%, 29%) 0, transparent 55%)`,
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
        .to(`.bubble-section .bubble`, {scale: 1, opacity: 1/* , duration: 3 */}/* , "<50%" */)
        

    ScrollTrigger.create({
        animation: main,
        trigger: '.bubble-section',
        endTrigger: '.bubble-section',
        start: 'center center',
        end: "+=2250",
        scrub: .7,
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
                            <div class="offer-button button-get"> Get offer </div>
                            <div class="offer-button button-learn"> Learn more </div>
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
                            <div class="offer-button button-get"> Get offer </div>
                            <div class="offer-button button-learn"> Learn more </div>
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
                            <div class="offer-button button-get"> Get offer </div>
                            <div class="offer-button button-learn"> Learn more </div>
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
                            <div class="offer-button button-get"> Get offer </div>
                            <div class="offer-button button-learn"> Learn more </div>
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

        <div class="bubble-section">
            <div class="outro">
                <p class="outro-heading"> AND MANY MORE </p>
                <div class="outro-button"> See full offer </div>
            </div>
            <div class="bubble"></div>
            <p class="emp-introduction"> 
                We are not a regular PR company. We are a team of professionals willing to support other companies
            </p>
        </div>

    </div>
    

</template>

<style scoped>

    /* NEW STYLES */

    .bg-layer-dark {
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .offer-all {
        /* background: #111; */
        margin-inline: 10vw;
        padding-top: 10vh;
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

    .offer-content * {
        /* border: 1px solid white; */
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
        color: #ccc;
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

        transition: all 600ms linear;
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
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
        background: #eee;
        border-radius: 5%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
            radial-gradient(at 37% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 82% 65%, hsl(198, 44%, 29%) 0, transparent 55%);
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

    .offer-item[data-no="1"] .offer-icon {
        color: var(--green);
    }

    .offer-item[data-no="1"] .offer-button:hover {
        cursor: pointer;
        scale: 1.05;
        transform: translateY(.25rem);
        border-color: var(--green-lite);
    }

    .offer-item[data-no="2"] .neon-layer {
        background-image: 
            radial-gradient(at 63% 33%, hsl(52.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 18% 65%, hsl(1, 44%, 29%) 0, transparent 55%);
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

    .offer-item[data-no="2"] .offer-icon {
        color: var(--yellow);
    }

    .offer-item[data-no="2"] .offer-button:hover {
        cursor: pointer;
        scale: 1.05;
        transform: translateY(.25rem);
        border-color: var(--yellow-lite);
    }

    .offer-item[data-no="3"] .neon-layer {
        background-image: 
            radial-gradient(at 37% 33%, hsl(199.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 82% 65%, hsl(235, 44%, 29%) 0, transparent 55%);
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

    .offer-item[data-no="3"] .offer-icon {
        color: var(--blue);
    }

    .offer-item[data-no="3"] .offer-button:hover {
        cursor: pointer;
        scale: 1.05;
        transform: translateY(.25rem);
        border-color: var(--blue-lite);
    }

    .offer-item[data-no="4"] .neon-layer {
        background-image: 
            radial-gradient(at 63% 33%, hsl(333.00, 77%, 40%) 0, transparent 59%), 
            radial-gradient(at 18% 65%, hsl(222, 44%, 29%) 0, transparent 55%);
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

    .offer-item[data-no="4"] .offer-icon {
        color: var(--red);
    }

    .offer-item[data-no="4"] .offer-button:hover {
        cursor: pointer;
        scale: 1.05;
        transform: translateY(.25rem);
        border-color: var(--red-lite);
    }



    /* OLD STYLES */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

</style>