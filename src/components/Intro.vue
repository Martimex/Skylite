<script setup lang="ts">
import '../../dist/output.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: 0.5});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: 0.67})

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: 0.1})

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
                /* anticipatePin: (i === photos.length - 2)? 0 : 1, */
                scrub: 1,
                pinSpacing: false,
            })
        }

        
    })

/*     ScrollTrigger.create({
        trigger: `.photo-content-last`,
        start: "bottom bottom",
        pin: true,
        pinType: "transform",
        scrub: 1,
        pinSpacing: false,
    }) */

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

    //    yPercent: 50, scale: 0, // nice ScrollTrigger combo lol

    // Learn scroll trigger here:  https://gsap.com/docs/v3/Plugins/ScrollTrigger/

/*  gsap.from(`.grid-container[data-no="2"]`, {
        scrollTrigger: {
            trigger: `.grid-container[data-no="2"]`,
            endTrigger:  `.grid-container[data-no="2"]`,
            start: 'top center',
            end: 'top bottom',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '12.5%',
        duration: 5000,
    });

    gsap.from(`.grid-container[data-no="3"]`, {
        scrollTrigger: {
            trigger: `.grid-container[data-no="3"]`,
            endTrigger:  `.grid-container[data-no="3"]`,
            start: 'top center',
            end: 'top bottom',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '12.5%',
        duration: 5000,
    }); */


})



</script>

<template>
    <div class="bg-layer-dark">
        <section class="section-sec bg-black min-h-screen">
            <!-- <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide"> Who we are </p> -->
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
                        <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> Why us </p>
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
                        <p class="question-text"> HELP YOU ? </p>
                    </div>
                </div>
            </div>

            <!-- IN ORDER FOR TAILWIND TO WORK, DON'T FORGET TO RECOMPILE IT WITH THIS COMMAND: npm run tailwind-custom-start -->
            <!-- tailwind-custom-start  is the semi-created alias for:  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch  (which will work fine aswell)-->
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
        /* padding-top: 25vh; */
        background-color: #000000;
/*         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 */    }

    .section-sec {
        overflow: hidden; /* Very important when we are to make those scroll based animations, do not remove this line ! */
        position: relative;
        display: grid;
        place-content: center;
        background-color: #0000;
        /* padding-bottom: 100vh; */
        /* padding-bottom: 50vh; */
    }

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .photo-content {
        /* will-change: transform; */
    }

    .grid-container {
        position: relative;
        /* top:0; */
        /* position: absolute; */
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: 15vh 5vw 15vh 10vw;
        box-shadow: 0 0 2rem .2rem #111;
        /* margin-block: 20vh; */
        transition: all 400ms ease-in-out;
            /* opacity: .5;  *//* ANIMATED BACK TO 1 WITH AN INTERSECTION OBSERVER FEATURE */

        /* display: grid; */
        /* border: .2rem solid pink; */
        /* height: 90vh; */
/*         padding: 7vw;
        margin: 3.5vw 0;
        column-gap: 8rem;
        grid-template-columns: 45fr 55fr; */
/*         background-image: url('../assets/intro-1.jpg');
        backdrop-filter: saturate(40%) opacity; */
    }

    .grid-img {
        /* display: flex; */
/*         display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 25% 75%; */
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0 auto auto 0;
        background-size: cover;
        /* filter: invert(100%); */
        filter: saturate(105%) brightness(60%) blur(2px);
    }


    .grid-content {
        height: 100%;
/*         display: grid;
        align-items: center; */
        /* grid-template-columns: 1fr; */
        /* grid-template-rows: 25% 75%; */
    }

    .heading-name {
        z-index: 1;
        line-height: 120%;
        position: relative;
        font-size: 6rem;
        /* letter-spacing: -.075em; */
        /* color: black; */
        /* filter: drop-shadow(0 0, .5rem, red); */
/*         margin-top: min(12.5vh, 12.5vw);
        margin-left: min(12.5vh, 12.5vw); */

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
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        /* font-family: Lato, 'Courier New', Courier, monospace; */
        /* display: block; */
        /* display: flex; */
        font-size: 1.35rem;
        font-weight: 500;
        /* padding-bottom: 2em; */
        margin-top: 7.5vh;
/*         margin-left: min(12.5vh, 12.5vw);
        margin-right: min(12.5vh, 12.5vw); */
        max-width: 66%;
        /* background: #ddd4; */
        /* backdrop-filter: blur(6px); */
        border-radius: 1rem;
        /* transform: translateY(-10%); */
    
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
        
/*         background-color: #eeeeee;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23000000' fill-opacity='0.9' %3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E"); */
    
/*         background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23dddddd44' fill-opacity='0.2' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E"); */
    }

    .question-box-item:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .question-text {
        /* font-size: 3rem; */
        /* color: #ddd; */
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

    .grid-container[data-no="1"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-75% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) 0; */
        /* opacity: calc(0% + 1% * (min(var(--scroll), 40), - 40) * 100 / 60); */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }

    .grid-container[data-no="2"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-55% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) -100vh; */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }

    .grid-container[data-no="3"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-35% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) -200vh; */
        /* opacity: min(calc(0% + 1% * min(var(--scroll), 10) * 100 / (10 + 0)), 100%); */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }



/*     [data-grid-order="reverse"] {
        background-color: #111;
        grid-template-columns: 55fr 45fr;
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23fdfdfd' fill-opacity='0.5'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    
    } */

/*     [data-grid-order="reverse"] .grid-text {
        order: 1;
    } */

    @media screen and (orientation: landscape) and (max-width: 1024px) {

        .grid-text {
            max-width: 90%;
        }
    }

</style>