<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

    function toggleAnswer(event: MouseEvent) {
        event?.currentTarget instanceof Element && event.currentTarget.classList.toggle('active'); 
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.classList.toggle(`show`, entry.isIntersecting))
    }, {threshold: 0.5});

    const faqObserver = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0) {
                entry.target.classList.add(`show`);
                faqObserver.unobserve(entry.target);
            }
        })
    }, {threshold: .9});

    onMounted(() => {
        
        const faq_heading = document.querySelector(`.faq-heading`);
        faq_heading && observer.observe(faq_heading);

        const faq_box = document.querySelector( `.faq-box`);
        faq_box && faqObserver.observe(faq_box);

    })

</script>

<template>
    
    <div class="bg-layer-dark">

        <!-- <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> FAQs </p> -->

        <p class="faq-heading"> FAQs </p>

        <div class="faq-box"> 

            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> What is Javascript? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                        pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin. In sit amet mi mollis, bibendum felis at, ullamcorper
                        libero. Donec malesuada tempor ex at tempor. Sed posuere, turpis ac luctus pharetra, lorem lorem ultrices orci, non pharetra quam metus 
                        dignissim eros. Donec sed sapien vulputate, molestie nibh at, viverra odio. Sed malesuada, urna eu pulvinar ultricies, tortor quam facilisis 
                        mauris, sed tincidunt turpis ipsum eget magna.
                    </p>
                </div>
            </div>

            
            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> How to write a good CSS? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                        pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin.
                    </p>
                </div>
            </div>

            
            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> Why HTML is so easy to learn? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                        pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin. In sit amet mi mollis, bibendum felis at, ullamcorper
                        libero. Donec malesuada tempor ex at tempor.
                    </p>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

    .bg-layer-dark {
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eeeeee' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .faq-heading {
        padding-bottom: 7.5vh;
        font-size: 5.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: .5em;
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms ease-out;
            opacity: 0;
            scale: .9;
            color: #000f;
    }

    .faq-heading.show {
        opacity: 1;
        scale: 1;
        color: #0000;
    }

    .faq-box {
        width: 80%;
        max-width: 60rem;
        margin: 0 auto;
        padding-bottom: 15vh;
       /*  border: .1rem solid pink; */
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ddd;
    }

    .faq-item {
        font-size: 1rem;
        padding-top: 2em;
        border-bottom: .25em solid #ccc;
    
        transition: all 800ms ease-in-out;
            opacity: 0;
            transform: translateY(2rem) translateX(2rem);
    }

    .faq-item:nth-of-type(2n) {
        transform: translateY(2rem) translateX(-2rem);
    }

    .faq-box.show .faq-item {
        opacity: 1;
        transform: translateY(0rem) translateX(0rem);
    }

    .faq-question {
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .5em;
    }

    .p-question {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: .05em;
    }

    .custom-icon {
        font-size: 2.2rem;
    }

    .faq-answer {
        line-height: 1.5;
        /* Keeping the answer initially hidden */
        max-height: 0;
        overflow: hidden;
        transition: max-height 600ms ease-in-out;
    }

    .p-answer {
        font-size: 1.15rem;
        margin-bottom: .5em;
    }

    .faq-item.active .faq-answer {
        /* Once .active is applied, the answer shows up */
        max-height: 16rem;
    }

    .faq-item.active .custom-icon {
        transform: rotate(180deg);
    }

    .custom-icon {
        transition: transform 500ms ease-in;
    }

</style>