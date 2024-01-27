<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted, ref, getCurrentInstance } from 'vue';
import ReviewsBox from './ReviewsBox.vue';
import ReviewsContent from '../assets/reviewsContent';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const data = ref(ReviewsContent);

const options = {
    threshold: .9,
    rootMargin: '20% 0% 0% 0%',
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, options);

onMounted(() => {

    const globalProps = getCurrentInstance()?.appContext.config.globalProperties;
    let mm = gsap.matchMedia();

    const targets = document.querySelectorAll('.heading-content');
    targets && targets.forEach(target => observer.observe(target));

    const [reviews_odd, reviews_even] = [document.querySelectorAll(`.reviews-block .weird-box:nth-child(odd)`), document.querySelectorAll(`.reviews-block .weird-box:nth-child(even)`)];

    mm.add(`${globalProps?.gsapBreakpoints.isTablet}, ${globalProps?.gsapBreakpoints.isDesktop}`, () => { 

        gsap.to(`.heading-wall`, {
            scrollTrigger: {
                trigger: `.heading-wall`,
                start: '-50% 50%',
                end: '25% 25%',
                scrub: .8,
                toggleActions: 'play reverse restart pause',
            },
            y: '100%',
        });

        reviews_odd.forEach(review => {
            gsap.to(review, {
                scrollTrigger: {
                    trigger: review,
                    start: '-50% 0%',
                    end: '50% 0%',
                    scrub: 1,
                },
                x: '-15vw',
                y: '-5vh',
                scale: .8,
                opacity: .65
            })
        })

        reviews_even.forEach(review => {
            gsap.to(review, {
                scrollTrigger: {
                    trigger: review,
                    start: '-50% 0%',
                    end: '50% 0%',
                    scrub: 1,
                },
                x: '15vw',
                y: '-5vh',
                scale: .8,
                opacity: .65
            })
        })
    });

    mm.add(`${globalProps?.gsapBreakpoints.isMobile_Portrait}, ${globalProps?.gsapBreakpoints.isMobile_Landscape}`, () => {

        gsap.set(`.heading-wall`, {opacity: 0});

        reviews_odd.forEach(review => {
            gsap.to(review, {
                scrollTrigger: {
                    trigger: review,
                    start: '25% 0%',
                    end: '25% 0%',
                    scrub: 2,
                },
                x: '-15vw',
                y: '-5vh',
                scale: .8,
                opacity: .65
            })
        })

        reviews_even.forEach(review => {
            gsap.to(review, {
                scrollTrigger: {
                    trigger: review,
                    start: '25% 0%',
                    end: '25% 0%',
                    scrub: 2,
                },
                x: '15vw',
                y: '-5vh',
                scale: .8,
                opacity: .65
            })
        })
    });
    

})

</script>

<template>
    
    <div class="heading-box component-layout-dark">
        <div class="heading-wall component-layout-light-1"></div>
        <div class="heading-content"> 
            <span class="heading-text text-center"> A few words </span>
            <div class="second-line-box">
                <span class="heading-text text-center"> from our </span>
                <div class="relative color-container">
                    <span class="heading-text heading-color text-center"> customers </span>
                    <div class="color-box"></div>
                </div>
                
            </div> 
        </div>
    </div>

    <div class="bg-layer component-layout-light-1 place-items-center grid grid-cols-1 lg:grid-cols-2 grid-rows-none">
        <ul class="reviews-block" data-no="1">
            <ReviewsBox :data="data" :no="0" />
            <ReviewsBox :data="data" :no="1" />
            <ReviewsBox :data="data" :no="2" />
            <ReviewsBox :data="data" :no="3" />
            <ReviewsBox :data="data" :no="4" />
        </ul>
        <ul class="reviews-block hidden lg:block" data-no="2">
            <ReviewsBox :data="data" :no="5" />
            <ReviewsBox :data="data" :no="6" />
            <ReviewsBox :data="data" :no="7" />
            <ReviewsBox :data="data" :no="8" />
            <ReviewsBox :data="data" :no="9" />
            <ReviewsBox :data="data" :no="10" />
        </ul>
    </div>
</template>

<style scoped>

    .heading-box {
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        position: relative;
        z-index: 0;
    }

    .heading-wall {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    .heading-text {
        display: block;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        position: relative;
        line-height: 1.5;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #eee;
        color: #0000;
        overflow: hidden;
    }

    .heading-text:not(.heading-color) {
        transition: all 1.1s ease-out;
            scale: .5;
            opacity: 0;
    }

    .heading-content.show .heading-text {
        scale: 1;
        opacity: 1;
    }

    .heading-content.show .color-box {
        width: calc(100% - 1.5rem);
        opacity: 1;
    }

    .second-line-box {
        display: flex;
    }

    .color-container {
        z-index: 0;
    }

    .heading-color {
        font-weight: 800;
        margin-left: 1.5rem;
        padding-inline: 1rem;
        -webkit-text-stroke: .12rem #000;
        z-index: 2;
    }

    .color-box {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        margin-left: 1.5rem;
        padding-inline: 1rem;
        border-radius: 5%;
        background: #ddd;
        z-index: 1;

        transition: all 1.1s ease-in-out;
            width: 0%;
            opacity: 0;
    }

    .bg-layer {
        position: relative;
        padding-block: 20vh;
        padding-inline: 10vh;
        gap: 10vh;
    }

    .reviews-block {
        max-width: 650px;
    }

    @media screen and (orientation: portrait)   {

        .second-line-box {
            flex-flow: column;
        }

        .heading-color, .color-box {
            margin-left: 0;
            transform: translateY(1.25rem);
        }

        .heading-content.show .color-box {
            width: 100%;
            opacity: 1;
        }

        .bg-layer {
            padding-block: 15vh 20vh;
            padding-inline: 5vw;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 986px) {
        .reviews-block {
            max-width: min(520px, 66vw);
        }
    }

</style>