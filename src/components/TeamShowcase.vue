<script setup lang="ts">

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    const main = gsap.timeline();
    main.to(`.bubble-section .bubble`, {scale: 1, duration: 3});

    ScrollTrigger.create({
        animation: main,
        trigger: '.bubble-section',
        endTrigger: '.bubble-section',
        start: 'center center',
        end: "+=1500",
        /* markers: true, */
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

/*     gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.from(`.emp-container[data-order="1"] .emp-box`, {xPercent: 100, opacity: 0, ease: "none", duration: 1})
        .to(`.emp-container[data-order="2"]`, {yPercent: -100, ease: "none", duration: 2})
        .to(`.emp-container[data-order="3"]`, {yPercent: -200, ease: "none", duration: 2})

    ScrollTrigger.create({
        animation: tl,
        trigger: `.emp-all`,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    }); */

})



</script>

<template>

    <div class="bubble-section">
        <div class="bubble"></div>
        <p class="emp-introduction"> 
            We are not just a regular PR company. We primarily perceive ourselves as a team of professionals willing to bring help to the others 
        </p>
    </div>
    
    <div class="emp-main">

        <!-- EMP #1 -->
        <div class="emp-bio">
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Sarah Coehlo </p>
                    <p class="emp-role"> SEO specialist </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Sarah takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about. 
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>


        <!-- EMP #2 -->
        <div class="emp-bio">
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Jack Sohn </p>
                    <p class="emp-role"> Copywriter </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Jack takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about.
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>

        <!-- EMP #3 -->
        <div class="emp-bio">
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Adrien Groth </p>
                    <p class="emp-role"> Web developer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Adrien takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about. 
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>


        <!-- EMP #4 -->
        <div class="emp-bio">
            <div class="photo-wrapper">
                <div class="photo-box">
                    <img loading="lazy" class="emp-photo shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                </div>
            </div>
            <div class="emp-info">
                <div class="emp-segment">
                    <p class="emp-credentials"> Monica Reese </p>
                    <p class="emp-role"> UX designer </p>
                </div>
                <div class="emp-segment">
                    <span class="emp-desc">
                        Monica takes care of the aesthetic side of things, from tiny details to huge ideas. He works closely with our partners to direct & produce work
                        you can shout about.
                    </span>
                    <div class="emp-button">
                        Book a meeting
                    </div>
                </div>
            </div>
        </div>

    </div>






    <div class="emp-all">
        <div class="emp-container" data-order="1" >
            <div class="emp-box">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Sarah Coehlo </p>
                <span class="emp-title"> SEO specialist </span>
            </div>
            <div class="emp-box">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Sarah Coehlo </p>
                <span class="emp-title"> SEO specialist </span>
            </div>
        </div>


        
        <div class="emp-container" data-order="2" >
            <div class="emp-box" >
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Jack Sohn </p>
                <span class="emp-title"> Copywriter </span>
            </div>
            <div class="emp-box">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Jack Sohn </p>
                <span class="emp-title"> Copywriter </span>
            </div>
        </div>


        <div class="emp-container" data-order="3" >
            <div class="emp-box">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Henry Moore </p>
                <span class="emp-title"> Creative designer </span>
            </div>
            <div class="emp-box">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                <p class="emp-name"> Henry Moore </p>
                <span class="emp-title"> Creative designer </span>
            </div>
        </div>

    </div>
    



    <p class="section-title matt text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Hosted by the experts </p>

    <div class="grid grid-cols-2 grid-rows-1 h-screen">
        <div class="teamsc-box-1 bg-gradient-to-r from-blue-300 to-blue-400 h-full rounded-r-lg">
            <p class="section-title heading-text tracking-wide"> Get to know us </p>
            <span class="section-title content-text leading-relaxed block">
                We are not just a regular PR company. We primarily perceive ourselves as a team of professionals willing to bring help to the others.
                If that seems interesting to you, make sure to check out the Team tab, and book a free online meeting with one of our experts. 
            </span>
            <div class="section-title action-box rounded-full bg-blue-200 inline-block"> 
                <span class="section-title action-text font-semibold"> Check our Team </span> 
            </div>
        </div>
        <div class="teamsc-box-2 bg-black h-full grid grid-cols-2 grid-rows-2 justify-around place-items-center">
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
<!--             <div class="team-profile">
                <img loading="lazy" class="img-shadow rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-shadow rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div> -->
        </div>
    </div>
</template>

<style scoped>

    /* CURRENT version */

    .bubble-section {
        min-height: 100vh;
        background: #000;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 10%;
        overflow: hidden;
    }

    .bubble {
        font-size: 1rem;
        position: absolute;
        top: 0%;
        left: -5%;
        height: 100%;
        width: 110%;
        background: #eee;
        border-radius: 5%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        overflow: hidden;
        /* Will be animated back to 1 */
        scale: 0;
    }

    .emp-introduction {
        font-size: 4rem;
        font-weight: 700;
        /* font-family: Playpen Sans,  Geneva, Tahoma, sans-serif; */
        color: #000;
        text-align: center;
        position: relative;
        line-height: 1.1;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #000;
        color: #0000;
        overflow: hidden;
    }

    .emp-main {
        background: #eee;
        max-width: 100rem;
        margin: 0 auto;
        padding: 5vh 12vw;  /* WHEN USING MEDIA QUERIES, LOWER THE 12vw padding to some lower values */
        background-color: #eeeeee;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222222' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }

    .emp-bio {
        display: flex;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
        align-items: center;
        color: #111;
        padding-block: 10vh;
    }

    .emp-bio:nth-child(even) .emp-info {
        order: -1;
        margin-left: 0 !important;
        margin-right: 2rem !important;
    }

    .emp-bio:nth-child(even) .photo-wrapper {
        justify-content: end;
    }

    .photo-wrapper {
        margin: 1.5rem;
        max-width: 30rem;
        display: flex;
    }

    .photo-box {
        /* max-width: 50%; */
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
        /* border: .25em solid #222; */
        /* box-shadow: 0 0 .5em .25em #333; */
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
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 2em;
        padding: .75em 1em .75em .75em;
        border-radius: 5% 9999px 9999px 5%;
        display: inline-block;
        max-width: max-content;
        color: #222;
        border: .15em solid #111;
    }

    /* BAD styles */

    .emp-all {
        display: none;
        overflow-x: hidden;
    }

    .emp-container {
        height: 100vh;
        background: #000;
        display: flex;
    }

/*     .emp-line {
        height: 50%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        background: #eee;
    } */

    .emp-box {
        background: #eee;
        font-size: 1rem;
        border: .4em solid #000;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin-inline: 5%;
        /* border-radius: 5%; */
    }

    .img-team {
        font-size: 1rem;
        width: 50%;
        border: .25em solid #222;
        box-shadow: 0 0 .5em .25em #333;
/*         border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0; */
    }

    .emp-name {
        font-size: 3.5rem;
        font-weight: 700;
        color: #111;
    }

    .emp-title {
        font-size: 2.1rem;
        font-weight: 400;
        color: #111;
    }

    /* OLD STYLES */

    .matt {
        margin-top: 40vh;
    }

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .heading-text{
        margin-bottom: 12.5%;
        font-size: 6vmin;
    }

    .content-text {
        font-size: 2.8vmin;
        /* margin-bottom: 12.5%; */
    }

    .action-box {
        margin-top: 12.5%;
        padding: 2em 4em;
    }

    .action-text {
        font-size: 2.5vmin;
    }

    .teamsc-box-1 {
        padding: 10%;
    }

    .teamsc-box-2 {
        position: relative;
        background-color: #000000;
/*         background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
 */    }
    
    .teamsc-box-2::before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0%;
        left: 0%;
        padding: 1.5em 0;
        background: linear-gradient(0deg, #000, #111);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
    }

    .teamsc-box-2::after {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0%;
        left: 0%;
        padding: 1.5em 0;
        background: linear-gradient(0deg, #111, #000);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
    }

    .team-profile {
        position: relative;
        transition: .3s all linear;
        width: 1em;
        /* Instead of padding 15vh, which prevents from showing images up, we're gonna use the scale trick */
        scale: 15;
        /* padding: 15vh; */
        border-radius: 50%;
        /* border: calc(.15em / 15) solid #ddd; */
        box-shadow: 0 0 calc(.1em / 15) calc(.25em / 15) #111, 0 0 calc(.6em / 15) calc(.45em / 15) #ccc, 0 0 calc(.9em / 15) calc(.55em / 15) #555;
    }

    .team-profile::after {
        /* This will be a separate <div> which will show up on hover and will show the employee name, role and a slight button to book a meeting */
        font-size: calc(1rem / 15);
        width: 1em;
        color: #ddd;
        content: 'Martha Smith \n Marketing manager \n Book a meeting';
        position: absolute;
        top: 0%;
        bottom: 0%;
        width: 100%;
        height: 100%;
        border-radius: 50%;

    }

    .team-profile:hover {
        scale: 16;
    }
    

</style>