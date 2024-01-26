<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const emit = defineEmits(['redirectMessage']);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const globalProps = getCurrentInstance()?.appContext.config.globalProperties;
    let mm = gsap.matchMedia();

    const t1 = gsap.timeline();
        t1.from(`.slide-1`, {xPercent: -110, opacity: 0.75})
            .from(`.slide-3`, {xPercent: 110, opacity: 0.75}, "<")
            .to(`.companies-introduction`, {scale: 0}, "<")
            .from(`.transition-layer`, {opacity: 0}, "<")


    mm.add(`${globalProps?.gsapBreakpoints.isTablet}, ${globalProps?.gsapBreakpoints.isDesktop}`, () => {
        ScrollTrigger.create({
            animation: t1,
            trigger: `.main-box`,
            start: 'top top',
            end: '+=2000',
            scrub: .5,
            pin: true,
        })
    });

    mm.add(`${globalProps?.gsapBreakpoints.isMobile_Portrait}, ${globalProps?.gsapBreakpoints.isMobile_Landscape}`, () => {
        ScrollTrigger.create({
            animation: t1,
            trigger: `.main-box`,
            start: 'top top',
            end: '+=850',
            scrub: .8,
            pin: true,
        })
    });



})

</script>

<template>

    <div class="bg-layer">
        <div class="main-box h-full flex justify-center items-center">
            <p class="companies-introduction"> Meet our <br/> Collab Allies </p>

            <div class="transition-layer"></div>

            <div class="slide slide-1 flex justify-evenly items-center">  
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-shopify" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-algolia" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-dribbble" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-quora" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-jira" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-speaker-deck" class="custom-icon scale-150" />
                    </a>
                </span>
            </div>

            <div class="slide slide-3 flex justify-evenly items-center">
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-sketch" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-airbnb" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-redhat" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-bandcamp" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-twitch" class="custom-icon scale-150" />
                    </a>
                </span>
                <span class="rd-box flex items-center justify-center">
                    <a href="/" target="_blank" @click.prevent="emit('redirectMessage', 'our collaborator official website')">
                        <font-awesome-icon icon="fa-brands fa-telegram" class="custom-icon scale-150" />
                    </a>
                </span>
            </div>
        </div>
    </div>

</template>

<style scoped>

    /* NEW */

    .bg-layer {
        min-height: 100vh;
        position: relative;
    }

    .main-box {
        padding-inline: 7.5vw;
        min-height: 100vh;
    }

    .companies-introduction {
        font-size: 6rem;
        font-weight: 700;
        color: #000;
        text-align: center;
        position: relative;
        line-height: 1.1;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #000;
        color: #0000;
        overflow: hidden;
    }

    .transition-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        background: #000;
    }

    .slide {
        position: absolute;
        height: 50%;
        width: 100%;
    }

    .slide-1 {
        top: 0;
        left: 0;
        background-image: linear-gradient(0deg, #000, #111, #111 50%, #111, #000);
        transform: rotate(-2.5deg);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
        border-bottom: .1em solid #222;
    }

    .slide-3 {
        bottom: 0;
        left: 0;
        background-image: linear-gradient(0deg, #000, #111, #111 50%, #111, #000);
        transform: rotate(2.5deg);
        box-shadow:  0 -.3em .5em 0 #000c,  0  -.6em .5em #0005, 0 -.75em  .4em #0003;
        border-top: .1em solid #222;
    }

    .custom-icon {
        font-size: 5rem;
        color: #ddd;

        transition: all 500ms ease-in-out;
            filter: drop-shadow(0rem 0rem .175rem #aaa);
    }

    .custom-icon:hover {
        cursor: pointer;
        color: #aaa;
        scale: 1.1;
    }

    .fa-shopify:hover {
        filter: drop-shadow(0rem 0rem .33rem #64943E) brightness(110%) saturate(125%);
    }

    .fa-algolia:hover {
        filter: drop-shadow(0rem 0rem .33rem #5468FF) brightness(110%) saturate(125%);
    }

    .fa-dribbble:hover {
        filter: drop-shadow(0rem 0rem .33rem #ea4c89) brightness(110%) saturate(125%);
    }

    .fa-quora:hover {
        filter: drop-shadow(0rem 0rem .33rem #B92b27) brightness(110%) saturate(125%);
    }

    .fa-jira:hover {
        filter: drop-shadow(0rem 0rem .33rem #0052CC) brightness(110%) saturate(125%);
    }

    .fa-speaker-deck:hover {
        filter: drop-shadow(0rem 0rem .33rem #008080) brightness(110%) saturate(125%);
    }

    .fa-sketch:hover {
        filter: drop-shadow(0rem 0rem .33rem #daa520) brightness(110%) saturate(125%);
    }

    .fa-airbnb:hover {
        filter: drop-shadow(0rem 0rem .33rem #FF5A5F) brightness(110%) saturate(125%);
    }

    .fa-redhat:hover {
        filter: drop-shadow(0rem 0rem .33rem #CC0000) brightness(110%) saturate(125%);
    }

    .fa-bandcamp:hover {
        filter: drop-shadow(0rem 0rem .33rem #629aa9) brightness(110%) saturate(125%);
    }

    .fa-twitch:hover {
        filter: drop-shadow(0rem 0rem .33rem #b9a3e3) brightness(110%) saturate(125%);
    }

    .fa-telegram:hover {
        filter: drop-shadow(0rem 0rem .33rem #229ED9) brightness(110%) saturate(125%);
    }

    .rd-box {
        font-size: 1rem;
        width: 15%;
        padding: 2em 0;
        border-radius: 10%; 
    }

    @media screen and (orientation: portrait)   {

        .companies-introduction {
            overflow-wrap: break-word;
            font-size: 8rem;
        }

        .custom-icon {
            font-size: 4.25rem;
        }

        .slide {
            padding-block: 1rem;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            place-items: center;
        }

    }

    @media screen and (orientation: portrait) and (max-height: 800px) {

        .companies-introduction {
            font-size: 7.2rem;
        }

        .custom-icon {
            font-size: 3.75rem;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 986px) {

        .custom-icon {
            font-size: 4.75rem;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {
        
        .custom-icon {
            font-size: 4.2rem;
        }
    }

</style>