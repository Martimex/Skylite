<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting));
}, {threshold: .5});

onMounted(() => {
    const contact_showcase_question = document.querySelector(`.cs-question`);
    contact_showcase_question && observer.observe(contact_showcase_question);

    const contact_showcase_number = document.querySelector(`.cs-number`);
    contact_showcase_number && observer.observe(contact_showcase_number);


/*     gsap.from(`.cs-number`, {
        scrollTrigger: {
            trigger: `.contact-showcase-box`,
            start: '25% 50%',
            end: '0% 0%',
            scrub: .5,
            toggleActions: 'play reverse restart pause',
        },
        yPercent: -30,
        opacity: 0,
        filter: 'blur(7px)',
        color: '#000f'
    }) */

/*     const timeline = gsap.timeline();
        timeline
            .from(`.cs-number`, {yPercent: -30, opacity: 0, filter: 'blur(7px)', color: '#000f'}) */
            /* .to(`.footer`, {y: '-10rem', }) */

/*     ScrollTrigger.create({
        animation: timeline,
        trigger: `.contact-showcase-box`,
        start: '0% 0%',
        end: "+=1000",
        scrub: 1,
        pin: true,
    }); */
})


/* Final animation idea (with JSAB ScrollTrigger) - might require use pinning first (pinning: true)

    1. First off, the .cs-question and .cs-number have to be initially off-screen -> .cs-question left-side off-screen, while .cs-number right-side off-screen.
    2. Start: the animation quickly brings back the elements to their original positions with opacity change from 0 to 1 (the .cs-number should finish this 
        animation just a bit later)
    3. Meanwhile, when above animation started, the footer should go slowly up, so that when previous animations are about to finish, the footer will
        slowly appear on the screen from bottom straight to the top
*/

</script>

<template>

    <div class="contact-showcase-layer h-screen">
        <div class="contact-showcase-box h-screen">
            <p class="contact-showcase-text cs-question"> Got some questions ? </p>
            <p class="contact-showcase-text cs-number"> (+1) 123 456 789 </p>
        </div>
    </div>



</template>

<style scoped>

    .contact-showcase-layer {
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eeeeee' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
        position: relative;
        height: calc(100vh - 10rem);

        /* border: 2px solid green; */
    }

    .contact-showcase-box {
        position: absolute;
        top: 0;
        left: 0%;
        /* border: 2px solid red; */

        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eeeeee' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-color: #000000;
        box-shadow: inset 0 -2rem 2rem .3rem #000;
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .contact-showcase-text {
        font-size: 5.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: .5em;
        color: #000;
        -webkit-text-stroke: .075rem #ddd;
    }

    .cs-question {
        transition: all 500ms ease-in-out;
            opacity: 0;
            scale: .9;
            color: #000f;
/*         transition: all 500ms ease-in-out;
            -webkit-text-stroke: .075rem #000;
            color: #0000; */
            /* transform: translateX(100%); */
    }

    .cs-question.show {
        opacity: 1;
        scale: 1;
        color: #0000;
    }

    .contact-showcase-box.show  .cs-question {
        -webkit-text-stroke: .075rem #ddd;
        color: #ddd3;
    }

    .cs-number {
        -webkit-text-stroke: .075rem #ccc;
        transition: all 750ms ease-in-out;
            transform: translateX(2rem);
            opacity: 0;
            /* filter: blur(7px); */
            color: #000f;
        }

    .cs-number.show {
        transform: translateX(0rem);
        opacity: 1;
        /* filter: blur(0px); */
        color: #cccf;
    }

    /*  {yPercent: -30, opacity: 0, filter: 'blur(7px)', color: '#000f'} */

    .contact-showcase-box.show  .cs-number {
        -webkit-text-stroke: .075rem #ddd;
        color: #0000;
        background: #000;
    }

</style>