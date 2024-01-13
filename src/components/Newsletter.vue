<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const emit = defineEmits(['redirectMessage']);

gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
/*         if(entry.target.classList.contains(`news-box`) && entry.intersectionRatio > 0) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.toggle('show', entry.isIntersecting);
        } */

        entry.target.classList.toggle('show', entry.isIntersecting);
        
    });
}, {threshold: 0.5})

onMounted(() => {

        const news_heading = document.querySelector(`.news-heading`);
        news_heading && observer.observe(news_heading);

        const news_box = document.querySelector(`.news-box`);
        news_box && observer.observe(news_box);


/*     gsap.from(`.news-content`, {
        scrollTrigger: {
            trigger: `.news-box`,
            start: `0% 50%`,
            end: `50% 50%`,
            scrub: true,
            markers: true,
        },
        opacity: 0,
        y: '-5rem',
    }) */
})


</script>

<template>

    <!-- NEW -->

    <div class="bg-layer-dark">
        <p class="news-heading"> Connect with us </p>

        <div class="news-box">
            <div class="news-content news-visual">
                <p class="content-title justify-start"> Join our newsletter </p>
                <div class="content-textbox">
                    <span class="textbox-desc"> 
                        Do you want to stay up-to-date with the recent marketing trends and news? We have got you covered. Join our weekly newsletter today and 
                        get access to our top quality content right in your inbox. Fill in the form and enjoy:
                    </span>
                    <ul>
                        <li class="qualities-item"> 
                            <font-awesome-icon icon="fa-solid fa-check" class="custom-icon" />
                            <span> Marketing related articles by Skylite Team </span>
                        </li>
                        <li class="qualities-item"> 
                            <font-awesome-icon icon="fa-solid fa-check" class="custom-icon" />
                            <span> Expert insights on current and future affairs </span>
                        </li>
                        <li class="qualities-item"> 
                            <font-awesome-icon icon="fa-solid fa-check" class="custom-icon" />
                            <span> Useful branding tips & tricks materials </span>
                        </li>
                        <li class="qualities-item"> 
                            <font-awesome-icon icon="fa-solid fa-check" class="custom-icon" />
                            <span> Weekly summaries of the buzziest PR topics </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="news-content">
                <p class="content-title justify-center"> Sign up </p>
                <div class="content-signup">
                    <input aria-required="true" type="text" autocomplete="off"  required aria-invalid="false" aria-placeholder="First name" placeholder="Name..." class="form-box" />
                    <input aria-required="true" type="text" autocomplete="off"  required aria-invalid="false" aria-placeholder="Last name"  placeholder="E-mail..." class="form-box" />
                    <button type="submit" class="content-cta" @click="emit('redirectMessage', 'newsletter signup confirmation page')"> SUBSCRIBE </button>
                </div>
            </div>
        </div>
    </div>



    <!-- OLD -->

<!--     <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Connect with us </p>

    <div class="newsletter-main min-h-screen flex text-white"> 
        <div class="newsletter-context grid grid-cols-1">
            
            <div class="newsletter-heading flex-col h-full">
                <p class="section-title newsletter-header text-5xl  text-center block"> Out of the box thinking in your inbox </p>
                <span class="section-title newsletter-desc text-2xl  text-center block"> 
                    Make sure to subscribe to our weekly newsletter for tips & tricks related to online marketing and building brand awarness. Cancel anytime.
                </span>
            </div>
            
            <div class="newsletter-action flex flex-col justify-evenly h-full">
                <div class="flex items-center content-evenly">
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="First name" placeholder="First name..." class="form-box valid bg-red-600 text-yellow-300" />
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="Last name"  placeholder="Last name..." class="form-box bg-red-600" />
                    <input aria-required="true" type="email" required aria-invalid="false" aria-placeholder="E-mail"  placeholder="E-mail..." class="form-box invalid bg-red-600" />
                </div>
                <div class="action-box flex justify-center w-full">
                    <button class="action-btn section-title"> Subscribe</button>
                </div>
            </div>
        </div>
    </div> -->

</template>

<style scoped>

    /* NEW */

    .bg-layer-dark {
        /* background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eeeeee' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
         */
/*         background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23999999' fill-opacity='0.18'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
        padding-block: 25vh;
        min-height: 100vh;
    }

    .news-heading {
        padding-bottom: 15vh;
        font-size: 5.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: .5em;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms ease-out ;
            opacity: 0;
            scale: .9;
            color: #000f;
    }

    .news-heading.show {
        opacity: 1;
        scale: 1;
        color: #0000;
    }

    .news-box {
        /* min-height: 100vh; */
        padding-block: 7.5%;
        background: linear-gradient(#111, #000);
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        box-shadow: 0 0 1rem .25rem #000, inset 0 0 1rem .25rem #000;
        border: .1rem double #aaa;
    
        transition: all 500ms ease-in-out;
            /* scale: .5;  SCALE EFFECT MAY CAUSE BUGS, AVOID USING IT WITH INTERSECTION OBSERVERS */
            scale: .95;
            opacity: .5;
            transform: translateY(1rem);
    }

    .news-box.show {
        opacity: 1;
        scale: 1;
        transform: translateX(0rem);
    }

    .news-box.show .news-content {
        opacity: 1;
    }


    .news-visual {
        border-right: .25rem solid #111;
        padding-inline: 12.5%;
    }


    .content-textbox {
        color: #ddd;
    }

    .textbox-desc {
        font-size: 1.2rem;
        line-height: 150%;
        font-weight: 500;
        display: inline-block;
        margin-block: 1.5em 2em;
    }

    .qualities-item {
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 200%;
    }

    .custom-icon {
        display: inline-block;
        margin-right: 1rem;
        color: hsl(120, 73%, 75%);
    }

    .news-content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 25% 75%;

        transition: all 750ms ease-out;
            opacity: 0;
    }

    .content-title {
        font-size: 3.2rem;
        line-height: 110%;
        font-weight: 600;
        /* letter-spacing: .2rem; */
        color: #ddd;
        text-shadow: 0 0 .5rem #bbb;
        display: flex;
        align-items: center;
    }

    .content-signup {
        font-size: 1.5rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;
        margin-block: 1.5em 25%;
    }

    .form-box {
        font-size: 1.05rem;
        box-sizing: border-box;
        /* width: 23%; */ /* 23% + (margin_left + margin-right) = 33%  */
        border-radius: 9999px;
        /* margin: 0 5%; */
        padding: 1.25em;
        box-shadow: inset 0em 0em .2em .3em #222, 0 0 .3em .5em #111;
        background: #333;
        /* color: #ccc; */
        /* text-shadow: .2em .2em .1em #222; */
        min-width: 60%;
        color: #ddd;
        margin-bottom: 2.5rem;
    }

    .valid1 {
        border: .1rem solid hsl(120, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(120, 53%, 75%);
    }

    .invalid {
        border: .1rem solid hsl(5, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(5, 73%, 75%);
    }

    .content-cta {
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
        padding: 1.5em;
        margin-top: 1.5em;
        min-width: 50%;
        letter-spacing: .1rem;
        border-radius: 5%;
        box-sizing: border-box;
        box-shadow: inset .1em .1em .2em .3em #222, 0 0 .3em .5em #111;
        /* text-shadow: .2em .2em .1em #222; */

        transition: all 500ms ease-in-out;
            background: #333;
            color: #ccc9;
    }

    .content-cta:hover {
        cursor: pointer;
        background: #222;
        color: #eeef;
        border-radius: 12.5%;
    }

    /* OLD */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .newsletter-main {
        /* margin: 10%; */ /* Looks fun ngl */
        padding: 5% 10%;
        background: #111;
        box-shadow: inset 0 0 .5em 1em #000;
    }

    .newsletter-context {
        /* height: 90vh; */
        grid-template-rows: 45% 55%;
        justify-content: space-between;
        /* border: .1rem solid wheat; */
        /* box-shadow: inset 0 0 .5em 1em #222; */
    }

    .newsletter-heading {
        /* height: 40%; */
        /* border: .1rem solid lightgoldenrodyellow; */
    }

    .newsletter-action {
        /* height: 80%; */
        /* border: .1rem solid greenyellow; */
        justify-content: space-around;
    }

    .newsletter-header {
        margin-bottom: 7.5%;
        text-decoration: underline;
    }

    .newsletter-desc {
        margin-bottom: 5%;
    }

    .action-box {
        /* border: .1rem solid black; */
        margin-top: 5%;
    }

    .action-btn {
        font-size: 1.2rem;
        color: #ccc;
        text-shadow: .2em .2em .1em #222;
        width: 33%;
        padding: 1.5rem;
        /* margin: 5%; */
        background: #444;
        border: .1em double #222;
        box-shadow: inset 0em 0em .4em .6em #333, 0 0 .5em .45em #222, 0 0 .6em 1em #111;
        /* color: #ade; */
        border-radius: 1rem;
    }

    @media screen and (orientation: portrait) and (max-height: 986px) {
        .news-heading {
            font-size: 6rem;
            padding-inline: 5%;
            padding-bottom: 7.5vh;
        }

        .news-box {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: repeat(2, auto);
            padding-block: 5vh;
            place-content: center;
        }

        .news-content {
            padding-inline: 7.5%;
        }

        .news-content:not(.news-visual) {
            margin-top: 3rem;
        }

        .content-title {
            font-size: 4rem;
            margin-bottom: 1em;
            line-height: 120%;
            justify-content: flex-start;
        }

        .textbox-desc {
            font-size: 1.45rem;
            line-height: 160%;
            margin-block: 1.25em 2em;
        }

        .qualities-item {
            font-size: 1.3rem;
            line-height: 200%;
            font-weight: 500;
        }

        .content-signup {
            display: block;
        }

        .form-box {
            font-size: 1.15rem;
            border-radius: 5%;
            margin-block: 1rem;
        }

        .content-cta, .form-box {
            min-width: 90%;
        }

        .content-cta {
            font-size: 1.25rem;
            margin-top: 2em;
        }

    }

    @media screen and (orientation: portrait) and (max-height: 800px) {

        .content-title {
            font-size: 3.2rem;
            margin-bottom: 1em;
            line-height: 120%;
        }

        .textbox-desc {
            font-size: 1.25rem;
            margin-top: .25em;
        }

        .qualities-item {
            font-size: 1.2rem;
            line-height: 180%;
        }
    }


    @media screen and (orientation: landscape) and (max-width: 986px) {

        .news-box {
            min-height: 100vh;
            padding-block: 2.5%;
        }

        .news-visual {
            padding-inline: 7.5%;
        }

        .textbox-desc {
            font-size: 1.15rem;
            line-height: 170%;
            margin-block: 1.25em 2em;
        }

        .content-signup {
            align-items: center;
            justify-content: space-evenly;
            margin-block: 0;
        }

        .form-box {
            font-size: 1.05rem;
            padding: 1.25em;
            min-width: 66%;
            margin-bottom: 0;
        }

        .content-cta {
            min-width: 60%;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {

        .textbox-desc {
            font-size: 1.15rem;
            line-height: 160%;
            margin-block: .75em 2em;
        }

    }

</style>