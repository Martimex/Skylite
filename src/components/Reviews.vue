<script setup lang="ts">
    import { gsap } from 'gsap';
    import ScrollTrigger from 'gsap/src/ScrollTrigger';
    import { onMounted, ref } from 'vue';
    import ReviewsBox from './ReviewsBox.vue';
    import ReviewsContent from '../assets/reviewsContent';

    const data = ref(ReviewsContent);

    const options = {
        threshold: .9,
        rootMargin: '20% 0% 0% 0%',
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
    }, options);

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {

        const targets = document.querySelectorAll('.heading-content');
        targets && targets.forEach(target => observer.observe(target));

        gsap.to(`.heading-wall`, {
            scrollTrigger: {
                trigger: `.heading-wall`,
                start: '-50% 50%',
                end: '25% 25%',
                scrub: true,
                /* markers: true, */
                toggleActions: 'play reverse restart pause',
            },
            y: '100%',
        });

        const [reviewsBlock1, reviewsBlock2] = [document.querySelector(`.reviews-block[data-no="1"]`), document.querySelector(`.reviews-block[data-no="2"]`)];

        console.warn(reviewsBlock1, reviewsBlock2);

        console.log(document.querySelectorAll(`.weird-box`));

/*         const [reviews_odd, reviews_even] = reviewsBlock2?.classList.contains(`hidden`)?
            [document.querySelectorAll('.reviews-block[data-no="1"] .weird-box:nth-child(odd)'), document.querySelectorAll('.reviews-block[data-no="1"] .weird-box:nth-child(even)')] // it's a mobile / mid-screen view
            :
            [document.querySelectorAll('.reviews-block[data-no="1"] .weird-box'), document.querySelectorAll('.reviews-block[data-no="2"] .weird-box')];  // it's a desktop (huge) viewport
 */

        const [reviews_odd, reviews_even] = [document.querySelectorAll(`.reviews-block .weird-box:nth-child(odd)`), document.querySelectorAll(`.reviews-block .weird-box:nth-child(even)`)]

        console.warn('reviews odd: ', reviews_odd, '   and reviews even: ', reviews_even);

        reviews_odd.forEach(review => {
            gsap.to(review, {
                scrollTrigger: {
                    trigger: review,
                    start: '-50% 0%',
                    end: '50% 0%',
                    scrub: 1,
                    /* markers: true, */
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

/*         const boxes = gsap.utils.toArray('.box');
        boxes.forEach(box => {
            gsap.to(box, { 
                x: 300,
                scrollTrigger: {
                trigger: box,
                scrub: true
                }
            })
        }); */

/*         gsap.from(`.weird-box`, {
            scrollTrigger: {
                trigger: `.weird-box`,
            }
        }) */

    })


</script>

<template>
    
    <div class="heading-box">
        <div class="heading-wall"></div>
        <div class="heading-content"> 
            <span class="heading-text text-center"> A few words </span>
            <div class="flex">
                <span class="heading-text text-center"> from our </span>
                <div class="relative color-container">
                    <span class="heading-text heading-color text-center"> customers </span>
                    <div class="color-box"></div>
                </div>
                
            </div> 
        </div>
    </div>

    <div class="bg-layer place-items-center grid grid-cols-1 lg:grid-cols-2 grid-rows-none">
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
        <!-- <ul class="reviews-block hidden lg:block">
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
        </ul> -->

    </div>
</template>

<style scoped>
    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

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
        /* opacity: 0; */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
        background: linear-gradient(45deg, #ddd, #eee);
        gap: 10vh;
        box-shadow: 0 -.25rem .5rem .3rem #eee;

        background-color: #eeeeee;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}

.reviews-block {
/*         display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto; */
        /* row-gap: 1rem; */
        max-width: 650px;
    }

</style>