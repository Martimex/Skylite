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
        position: relative;
        height: calc(100vh - 5rem); /* Could be calc(100vh - 10rem) aswell  */
    }

    .contact-showcase-box {
        position: absolute;
        top: 0;
        left: 0%;
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
            color: #000f;
    }

    .cs-number.show {
        transform: translateX(0rem);
        opacity: 1;
        color: #cccf;
    }

    /*  {yPercent: -30, opacity: 0, filter: 'blur(7px)', color: '#000f'} */

    .contact-showcase-box.show  .cs-number {
        -webkit-text-stroke: .075rem #ddd;
        color: #0000;
        background: #000;
    }


    @media screen and (orientation: landscape) and (max-width: 1024px) {
        .contact-showcase-layer {
            height: calc(100vh - 0rem);
        }
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {
        /* Nothing to change here */
    }

</style>