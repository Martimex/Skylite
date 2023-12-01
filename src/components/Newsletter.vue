<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="First name" placeholder="Name..." class="form-box valid bg-red-600 text-yellow-300" />
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="Last name"  placeholder="E-mail..." class="form-box bg-red-600" />
                    <div class="content-cta"> SUBSCRIBE </div>
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
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eeeeee' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
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
        min-height: 100vh;
        padding-block: 5%;
        background: #111;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        box-shadow: 0 0 1rem .25rem #000, inset 0 0 1rem .25rem #000;
    
        transition: all 500ms ease-in-out;
            /* scale: .5;  SCALE EFFECT MAY CAUSE BUGS, AVOID USING IT WITH INTERSECTION OBSERVERS */
            scale: .85;
            opacity: .5;
    }

    .news-box.show {
        opacity: 1;
        scale: 1;
    }

    .news-box.show .news-content {
        opacity: 1;
    }


    .news-visual {
        border-right: .25rem solid #222;
        padding-inline: 12.5%;
    }


    .content-textbox {
        color: #ddd;
    }

    .textbox-desc {
        font-size: 1.25rem;
        line-height: 150%;
        font-weight: 600;
        display: inline-block;
        margin-block: .75em 1.5em;
    }

    .qualities-item {
        font-size: 1.25rem;
        font-weight: 550;
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
        letter-spacing: .2rem;
        color: #ddd;
        display: flex;
        align-items: center;
    }

    .content-signup {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .form-box {
        font-size: 1.05rem;
        box-sizing: border-box;
        /* width: 23%; */ /* 23% + (margin_left + margin-right) = 33%  */
        /* border-radius: 9999px; */
        /* margin: 0 5%; */
        padding: 1.25em;
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .3em .5em #222;
        background: #444;
        color: #ccc;
        text-shadow: .2em .2em .1em #222;
        min-width: 60%;
    }

    .valid {
        border: .1rem solid hsl(120, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(120, 53%, 75%);
    }

    .invalid {
        border: .1rem solid hsl(5, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(5, 73%, 75%);
    }

    .content-cta {
        font-size: 1.1rem;
        text-align: center;
        padding: 1.5em;
        margin-top: 1.5em;
        color: #ccc;
        background: #444;
        min-width: 50%;
        box-sizing: border-box;
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .3em .5em #222;
        text-shadow: .2em .2em .1em #222;
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

</style>