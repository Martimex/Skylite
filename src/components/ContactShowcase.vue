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
})

</script>

<template>

    <div class="contact-showcase-layer h-screen">
        <div class="contact-showcase-box h-screen">
            <p class="contact-showcase-text cs-question"> Got more questions? </p>
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

    .contact-showcase-box.show  .cs-number {
        -webkit-text-stroke: .075rem #ddd;
        color: #0000;
        background: #000;
    }


    @media screen and (orientation: portrait)   {

        .contact-showcase-layer {
            height: calc(100vh - 0rem);
        }
        
        .cs-question {
            font-size: 5.75rem;
            margin-inline: 2.5rem;
        }

        .cs-number {
            font-size: 4rem;
        }
    }


    @media screen and (orientation: landscape) and (max-width: 986px) {
        .contact-showcase-layer {
            height: calc(100vh - 0rem);
        }
    }

</style>