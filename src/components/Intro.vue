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

onMounted(() => {
    const targets = document.querySelectorAll('.grid-container');
    targets && targets.forEach(target => observer.observe(target));

    const questionBox = document.querySelector(`.question-box`);
    questionBox && observer2.observe(questionBox);

    gsap.registerPlugin(ScrollTrigger);

    const photos = document.querySelectorAll('.photo-content');
    console.log(photos.length);

    photos && photos.forEach((el, i) => {
        if(i < photos.length - 1) {
            ScrollTrigger.create({
                trigger: el,
                start: "bottom bottom",
                pin: true,
                scrub: true,
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
            /* markers: true, */
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
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-gray-700" data-grid-order="normal" data-no="1">
                    <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
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
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="reverse" data-no="2">
                    <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
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
                <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="normal" data-no="3">
                    <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
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
                <div class="question-box">
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

    .show {
        opacity: 1 !important;
    }

    .show .heading-name {
        transform: translateY(0vh);
        opacity: 1 !important;
    }

    .show .grid-text {
        transform: translateX(0vw);
        opacity: 1 !important;
    }

    .bg-layer-dark {
        padding-top: 25vh;
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

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

    .grid-container {
        position: relative;
        /* top:0; */
        /* position: absolute; */
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: 15vh 5vw 15vh 10vw;
        box-shadow: 0 0 1.2rem .4rem #333;
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
        filter: saturate(125%) brightness(70%) blur(2px);
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
        line-height: 160%;
        position: relative;
        display: inline-block;
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        /* font-family: Lato, 'Courier New', Courier, monospace; */
        /* display: block; */
        /* display: flex; */
        font-size: 1.35rem;
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
        height: 100vh;
        padding-inline: 10vw;
        box-shadow: 0 0 1.2rem .4rem #333;
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .question-box-item:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .question-text {
        /* font-size: 3rem; */
        /* color: #ddd; */
        font-size: 5.8rem;
        text-align: center;
        font-weight: 700;
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms ease-in-out;
            opacity: 0;
            scale: .85;
            transform: translateY(2rem);
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

</style>