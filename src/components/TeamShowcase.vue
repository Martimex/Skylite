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
        end: "+=1500",
        /* markers: true, */
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    // Employees section observers
    const targets = document.querySelectorAll(`.emp-main .emp-bio`);
    targets && targets.forEach(target => observer.observe(target))

    // Animations for employees sections
    // 1
    gsap.from(`.emp-main .emp-bio[data-no="1"]`, {
        scrollTrigger: {
            trigger: `.emp-main .emp-bio[data-no="1"]`,
            start: '-20% 50%',
            end: '-20% 25%',
            scrub: true,
            /* markers: true, */
            toggleActions: 'play pause restart pause',
        },
        opacity: 0.75,
        filter: 'grayscale(50%)',
    });

    // 2
    gsap.from(`.emp-main .emp-bio[data-no="2"]`, {
        scrollTrigger: {
            trigger: `.emp-main .emp-bio[data-no="2"]`,
            start: '-20% 50%',
            end: '-20% 25%',
            scrub: true,
            /* markers: true, */
            toggleActions: 'play pause restart pause',
        },
        opacity: 0.75,
        filter: 'grayscale(50%)',
    });

    // 3
    gsap.from(`.emp-main .emp-bio[data-no="3"]`, {
        scrollTrigger: {
            trigger: `.emp-main .emp-bio[data-no="3"]`,
            start: '-20% 50%',
            end: '-20% 25%',
            scrub: true,
            /* markers: true, */
            toggleActions: 'play pause restart pause',
        },
        opacity: 0.75,
        filter: 'grayscale(50%)',
    });

    // 4
    gsap.from(`.emp-main .emp-bio[data-no="4"]`, {
        scrollTrigger: {
            trigger: `.emp-main .emp-bio[data-no="4"]`,
            start: '-20% 50%',
            end: '-20% 25%',
            scrub: true,
            /* markers: true, */
            toggleActions: 'play pause restart pause',
        },
        opacity: 0.75,
        filter: 'grayscale(50%)',
    });

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
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
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
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
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
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Adrien Groth </p>
                    <p class="emp-role"> Web developer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Adrien takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
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
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Monica Reese </p>
                    <p class="emp-role"> UX designer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Monica takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
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
        background: #000;
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
        top: 0%;
        left: -5%;
        height: 100%;
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
    }

    .emp-bio {
        display: flex;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
        align-items: center;
        color: #111;
        padding-block: 10vh;

        transition: all 500ms ease-in-out;
            transform: translateX(-2rem);
            
    }

    .emp-bio.show {
        transform: translateX(0rem);
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

    .photo-wrapper {
        margin: 1.5rem;
        max-width: 30rem;
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
        border-radius: 50%;
        /* border: .25em solid #222; */
        /* box-shadow: 0 0 .5em .25em #333; */
    }

    .emp-info {
        height: calc(100% - 3rem);
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