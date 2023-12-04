<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const options = {
    rootMargin: '0px',
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
    }, options)

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    const main = gsap.timeline();
    main.to(`.bubble-section .bubble`, {scale: 1, duration: 3});

    ScrollTrigger.create({
        animation: main,
        trigger: '.bubble-section',
        endTrigger: '.bubble-section',
        start: 'center center',
        end: "+=1000",
        /* markers: true, */
        scrub: .7,
        pin: true,
        anticipatePin: 1,
    });

    // Employees section observers
    const targets = document.querySelectorAll(`.emp-main .emp-bio`);
    targets && targets.forEach(target => observer.observe(target));

})



</script>

<template>

    <div class="bubble-section">
        <div class="bubble"></div>
        <p class="emp-introduction"> 
            We are not just a regular PR company. We primarily perceive ourselves as a team of professionals willing to bring help to the others 
        </p>
    </div>
    
    <div class="emp-main">

        <!-- EMP #1 -->
        <div class="emp-bio" data-no="1">
            <div class="emp-visual">
                <div class="photo-wrapper">
                    <div class="photo-box">
                        <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/sarah.jpg" />
                    </div>
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Sarah Coehlo </p>
                    <p class="emp-role"> SEO specialist </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Sarah takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about. 
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>


        <!-- EMP #2 -->
        <div class="emp-bio" data-no="2">
            <div class="emp-visual">
                <div class="photo-wrapper">
                    <div class="photo-box">
                        <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/jack.jpg" />
                    </div>
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Jack Sohn </p>
                    <p class="emp-role"> Copywriter </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Jack takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about.
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>

        <!-- EMP #3 -->
        <div class="emp-bio" data-no="3">
            <div class="emp-visual">
                <div class="photo-wrapper">
                    <div class="photo-box">
                        <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/natalie.jpg" />
                    </div>
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Natalie Groth </p>
                    <p class="emp-role"> Web developer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Natalie takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about. 
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>


        <!-- EMP #4 -->
        <div class="emp-bio" data-no="4">
            <div class="emp-visual">
                <div class="photo-wrapper">
                    <div class="photo-box">
                        <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/julia.jpg" />
                    </div>
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Julia Reese </p>
                    <p class="emp-role"> UX designer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Julia takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about.
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>

    /* CURRENT version */

    .bubble-section {
        min-height: 100vh;
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 10%;
        overflow: hidden;
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
    }

    .emp-main {
        background: #eee;
        max-width: 100rem;
        margin: 0 auto;
        padding: 5vh 12vw;  /* WHEN USING MEDIA QUERIES, LOWER THE 12vw padding to some lower values */
        background-color: #eeeeee;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        box-shadow: 0 .25rem .5rem .3rem #eee;
    }

    .emp-bio {
        display: flex;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
        align-items: center;
        color: #111;
        padding-block: 10vh;
        margin-block: 1.5rem;
        /* min-height: clamp(10rem, 100%, 30rem); */

        transition: all 500ms ease-in-out;
            transform: translateX(-2rem);
            filter: grayscale(0%);
            opacity: .75;
            
    }

    .emp-bio.show {
        transform: translateX(0rem);
        filter: grayscale(0%);
        opacity: 1;
    }

    .emp-bio:nth-child(even) .emp-info {
        order: -1;
        margin-left: 0 !important;
        margin-right: 2rem !important;
    }

    .emp-bio:last-child {
        margin-bottom: 10vh;
    }

    .emp-bio:nth-child(even) .photo-wrapper {
        justify-content: end;
    }

    .emp-visual, .emp-info {
        min-height: 30rem !important;
    }

    .emp-visual {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .photo-wrapper {
        /* margin: 1.5rem; */
        margin-inline: 1.5rem;
        /* max-width: 30rem; */
        display: flex;
    }

    .photo-box {
        /* max-width: 50%; */
        font-size: 1rem;
        padding: .25em;
        background: #ddd;
        box-shadow:  0 .5em 1.4em .2em #111;
        border-radius: 50%;
        width: clamp(10rem, 100%, 30rem);
    }

    .emp-photo {
        font-size: 1rem;
        width: 100%;
        /* height: clamp(10rem, 100%, 30rem); */
        border-radius: 50%;
        /* border: .25em solid #222; */
        /* box-shadow: 0 0 .5em .25em #333; */
        filter: saturate(120%);
    }

    .emp-info {
        height: calc(100% - 3rem);
        /* min-height: clamp(10rem, 100%, 30rem); */
        margin-block: 3rem;
        margin-right: auto;
        margin-left: 2rem;
    }

    .emp-segment {
        display: flex;
        flex-direction: column;
        height: 50%;
    }

    .emp-info .emp-segment:nth-child(odd) {
        justify-content: center;
    }

    .emp-credentials {
        font-size: 3.6rem;
        font-weight: 750;
        line-height: 1.1;
    }

    .emp-role {
        font-size: 2.4rem;
        font-weight: 300;
        font-style: italic;
    }

    .emp-desc {
        font-size: 1.15rem;
    }

    .emp-button {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 2em;
        padding: .75em 1em .75em .75em;
        border-radius: 5% 9999px 9999px 5%;
        display: inline-block;
        max-width: max-content;
        color: #222;
        border: .15em solid #111;
    }
    

</style>