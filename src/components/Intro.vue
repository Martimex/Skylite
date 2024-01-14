<script setup lang="ts">
import '../../dist/output.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: 0.5});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add(`show`);
            observer2.unobserve(entry.target);
        }
    })
}, {threshold: 0.67})

onMounted(() => {

    const targets = document.querySelectorAll('.grid-container');
    targets && targets.forEach(target => observer.observe(target));

    const questionBox = document.querySelector(`.question-box`);
    questionBox && observer2.observe(questionBox);

    gsap.registerPlugin(ScrollTrigger);

    const photos = document.querySelectorAll('.photo-content');

    photos && photos.forEach((el, i) => {
        if(i < photos.length - 1) {
            ScrollTrigger.create({
                trigger: el,
                start: "bottom bottom",
                pin: true,
                pinType: "fixed",
                scrub: 1,
                pinSpacing: false,
            })
        }
    })

    gsap.from(`.question-box`, {
        scrollTrigger: {
            trigger: `.question-box`,
            start: '0% 100%',
            end: '0% 0%',
            scrub: 1,
            toggleActions: 'play pause reverse pause',
        },
        filter: 'invert(20%)',
    });

})



</script>

<template>
    <div class="bg-layer-dark">
        <section class="section-sec bg-black min-h-screen">
            <!-- 1 -->
            <div class="photo-content">
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6" data-grid-order="normal" data-no="1">
                    <div class="grid-img items-center justify-center bg-cover bg-center shadow-md shadow-slate-100"></div>
                    <div class="grid-content">
                        <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> Who we are </p>
                        <span class="grid-text items-center justify-center text-large leading-loose">
                            Formally, a team of professionals, who have over 10 years of experience in  marketing, online advertising, SEO and more. On a
                            private field, we are a group of friends, who one day decided to change their life and make their first step to change the world.
                            Always ready to help you with your upcoming project.
                        </span>
                    </div>
                </div>
            </div>
            <!-- 2 -->
            <div class="photo-content">
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6" data-grid-order="reverse" data-no="2">
                    <div class="grid-img items-center justify-center bg-cover bg-center shadow-md shadow-slate-100"></div>
                    <div class="grid-content">
                        <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> What do we do </p>
                        <span class="grid-text items-center justify-center text-large leading-loose">
                            In short - we help others shine bright. Our mission is to provide a strategy on how to increase popularity and online presence for both
                            individual clients as well as for companies. Our SEO and PR experts are ready to help you, despite how far you have already come.
                        </span>
                    </div>
                </div>
            </div>
            <!-- 3 -->
            <div class="photo-content">
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6" data-grid-order="normal" data-no="3">
                    <div class="grid-img items-center justify-center bg-cover bg-center shadow-md shadow-slate-100"></div>
                    <div class="grid-content">
                        <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> Why to hire us </p>
                        <span class="grid-text items-center justify-center text-large leading-loose">
                            No matter how good you are at what you do - if noone knows about you, that means no clients, no sold products or services, no outcomes.
                            Therefore, we strongly believe that nowadays the presence means success. Since many people are unsure where to start - we are here to assist them. 
                        </span>
                    </div>
                </div>
            </div>
            <!-- 4 but it's quite surprising -->
            <div class="photo-content">
                <div class="question-box component-layout-dark">
                    <div class="question-box-item">
                        <p class="question-text"> HOW CAN WE </p>
                    </div>
                    <div class="question-box-item">
                        <p class="question-text"> HELP YOU  </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

    .grid-container.show .heading-name {
        transform: translateY(0vh);
        opacity: 1 !important;
    }

    .grid-container.show .grid-text {
        transform: translateX(0vw);
        opacity: 1 !important;
    }

    .bg-layer-dark {
        background-color: #000000;
    }

    .section-sec {
        overflow: hidden; /* Very important when we are to make those scroll based animations, do not remove this line ! */
        position: relative;
        display: grid;
        place-content: center;
        background-color: #0000;
    }

    .grid-container {
        position: relative;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: 15vh 5vw 15vh 10vw;
        box-shadow: 0 0 2rem .2rem #111;
        transition: all 400ms ease-in-out;
    }

    .grid-img {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0 auto auto 0;
        background-size: cover;
        filter: saturate(105%) brightness(60%) blur(2px);
        margin-top: -.2rem; /* Solves a weird pinning issue, where the very slight part a top screen was visible beneath the image despite being pinned to the top of screen */
    }


    .grid-content {
        height: 100%;
    }

    .heading-name {
        z-index: 1;
        line-height: 120%;
        position: relative;
        font-size: 6rem;
        color: #ddd0;
        font-weight: 800;
        text-shadow: .1rem .1rem .4rem #222;
        letter-spacing: -.2rem;
        -webkit-text-stroke: .1rem #222;
        filter: invert(100%);

        transition: all 900ms ease-in-out;
            transform: translateY(-3vh);
            opacity: 0;
    }

    .grid-text {
        z-index: 1;
        line-height: 170%;
        position: relative;
        display: inline-block;
        color: #ddd;
        font-size: 1.35rem;
        font-weight: 500;
        margin-top: 7.5vh;
        max-width: 66%;
        border-radius: 1rem;
    
        transition: all 600ms ease-in-out;
            transform: translateX(-3vw);
            opacity: 0;
    }

    .question-box {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        width: 100%;
        height: 120vh; /* Adding extra 20vh helps dealing with GSAP pinning flicker issue when scrolling fast - do not modify this to 100vh, or else the glitch will reappear */
        padding-inline: 10vw;
        box-shadow: 0 0 2rem .2rem #111;
    }

    .question-box-item:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .question-text {
        font-size: 7.2rem;
        letter-spacing: -.25rem;
        text-align: center;
        font-weight: 700;
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms ease-in-out;
            opacity: 0;
            scale: .85;
            transform: translateY(2rem) skewX(10deg);
    }

    .question-box-item:nth-child(2) .question-text {
        transform: translateY(-2rem);
        color: #ccc;
        -webkit-text-stroke: .075rem #ddd;
    }

    .question-box.show .question-text {
        opacity: 1;
        scale: 1;
        transform: translateY(0rem);
    }


    .grid-container[data-no="1"] .grid-img{
        background-image: url('../assets/intro-1.jpg');
    }

    .grid-container[data-no="2"] .grid-img {
        background-image: url('../assets/intro-2.jpg');
    }

    .grid-container[data-no="3"] .grid-img {
        background-image: url('../assets/intro-3.jpg');
    }


    /* Portrait mobiles */

    @media screen and (orientation: portrait) and (max-width: 986px) {

        .grid-container {
            padding: 12.5vh 7.5vw 12.5vh 7.5vw;
        }

        .heading-name {
            line-height: 105%;
            font-size: 7rem;
        }

        .grid-text {
            max-width: 100%;
            margin-top: 8.5vh;
            font-size: 1.55rem;
        }

        .question-box {
            padding-inline: 2.5vw;
        }

        .question-text {
            font-size: 9rem;
            line-height: 120%;
            margin-block: .05em;
            letter-spacing: -.4rem; 
        }

        .question-box-item:nth-child(2n) .question-text {
            letter-spacing: .2rem;
        }

    }

    @media screen and (orientation: portrait) and (max-height: 800px) {

        .question-text {
            font-size: 8rem;
        }
    } 

    /* Landscape mobiles */

    @media screen and (orientation: landscape) and (max-width: 986px) {

        .grid-text {
            max-width: 90%;
        }
    }

</style>