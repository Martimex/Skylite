<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const emit = defineEmits(['redirectMessage']);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, {threshold: 0.5})

onMounted(() => {

    // Employees section observers
    const targets = document.querySelectorAll(`.emp-main .emp-bio`);
    targets && targets.forEach(target => observer.observe(target));

})



</script>

<template>
    
    <div class="emp-main">
        <div class="emp-top-wrapper component-layout-light-1"></div>

        <div class="emp-bios">
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
                            Sarah is our SEO team leader and web expert. She will care of your website to make it a better place for customers. Her aim is
                            to apply the best methods to make your site visible on the web and loved by all visitors. 
                        </span>
                        <a class="emp-button" href="./team" @click.prevent="emit('redirectMessage', '/team')" > Book a meeting </a>
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
                        <p class="emp-role"> Developer </p>
                    </div>
                    <div class="emp-segment">
                        <span class="emp-desc">
                            Jack is a passionate web developer with many years of professional experience. He is capable of creating stunning websites with a matter of
                            some good ideas and a dose of inspiration.
                        </span>
                        <a class="emp-button" href="./team" @click.prevent="emit('redirectMessage', '/team')" > Book a meeting </a>
                    </div>
                </div>
            </div>

            <!-- EMP #3 -->
            <div class="emp-bio" data-no="3">
                <div class="emp-visual">
                    <div class="photo-wrapper">
                        <div class="photo-box">
                            <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/anna.jpg" />
                        </div>
                    </div>
                </div>
                <div class="emp-info">
                    <div class="emp-segment">
                        <p class="emp-credentials"> Anna Smith </p>
                        <p class="emp-role"> Copywriter </p>
                    </div>
                    <div class="emp-segment">
                        <span class="emp-desc">
                            Anna has mastered the art of copywriting with the top marketing companies she worked with. She is able to quickly design
                            a powerful message that evokes a lot of positive emotions for customers.
                        </span>
                        <a class="emp-button" href="./team" @click.prevent="emit('redirectMessage', '/team')" > Book a meeting </a>
                    </div>
                </div>
            </div>


            <!-- EMP #4 -->
            <div class="emp-bio" data-no="4">
                <div class="emp-visual">
                    <div class="photo-wrapper">
                        <div class="photo-box">
                            <img loading="lazy" class="emp-photo shadow-black" src="../assets/emp-images/kate.jpg" />
                        </div>
                    </div>
                </div>
                <div class="emp-info">
                    <div class="emp-segment">
                        <p class="emp-credentials"> Kate Reese </p>
                        <p class="emp-role"> UX designer </p>
                    </div>
                    <div class="emp-segment">
                        <span class="emp-desc">
                            Kate knows exactly how to turn a usual product into an exceptional masterpiece. Her vast knowledge in the field and aesthetic sense turn
                            any commercial item into an enjoyable experience.
                        </span>
                        <a class="emp-button" href="./team" @click.prevent="emit('redirectMessage', '/team')" > Book a meeting </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    /* CURRENT version */

    .emp-main {
        margin: 0 auto;
        padding: 5vh 12vw;
        box-shadow: 0 .25rem .5rem .3rem #eee;
        transform: translateZ(-1px); /* It partially solves a (pinning?) problem, where a gray thick line appears between bubble and TeamShowcase main section - thanks to this declaration, the line becomes white  */
    }

    .emp-top-wrapper {
        /* This element solves visual issues caused by GSAP pinning */
        position: absolute;
        top: -1rem;
        left: 0;
        width: 100%;
        padding: 1rem;
    }

    .emp-bios {
        max-width: 100rem;
    }

    .emp-bio {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
        align-items: center;
        color: #111;
        padding-block: 10vh;
        margin-block: 1.5rem;

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
        justify-content: flex-end;
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
        margin-inline: 1.5rem;
        display: flex;
    }

    .photo-box {
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
        filter: saturate(120%);
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
        position: relative;
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 2em;
        padding: .75em 1em;
        border-radius: 5% 9999px 9999px 5%;
        display: inline-block;
        max-width: max-content;
        color: #222;
        border: .15em solid #111;
    }

    .emp-button::before, .emp-button::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
    }

    .emp-button::before {
        border: .2rem groove #222;
        border-left-width: .4rem;

        transition: all 400ms ease-out;
            width: 0%;
    }

    .emp-button:hover:before {
        width: 100%;
    }

    .emp-button::after {
        background: #222;
        width: 100%;

        transition: all 400ms ease-out 200ms;
            opacity: 0;
    }

    .emp-button:hover:after {
        opacity: 1;
        
    }

    .emp-button:hover {
        cursor: pointer;
        color: #ddd;
    }

    @media screen and (orientation: portrait)   {

        .emp-main {
            padding-inline: 5vw;
        }

        .emp-bio {
            grid-template-columns: 1fr;
            transform: translateX(0rem);
            padding-block: 5vh 10vh;
        }
        .emp-bio:nth-child(even) .emp-info {
            order: 0;
            margin-left: 2rem !important;
        }

        .emp-info {
            height: auto;
            margin-inline: 2rem;
        }

        .emp-segment {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-block: 1rem 2.5rem;
        }

        .photo-wrapper, .emp-bio:nth-child(even) .photo-wrapper {
            justify-content: center;
        }

        .emp-credentials {
            font-size: 4rem;
        }

        .emp-desc {
            font-size: 1.2rem;
            max-width: 500px;
        }

        .emp-button {
            font-size: 1.3rem;
        }
    }


    @media screen and (orientation: landscape) and (max-width: 986px) {

        .emp-main {
            padding-inline: 8vw;
        }

        .emp-bio {
            padding-block: 5vh;
        }

        .emp-info {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            row-gap: 2rem;
        }

        .emp-segment {
            height: unset;
            align-self: last baseline;
        }

        
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {

        .emp-main {
            padding-inline: 6.5vw;
        }
    }
    

</style>