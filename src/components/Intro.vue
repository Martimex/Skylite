<script setup lang="ts">
import '../../dist/output.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const options = {
    /* root: document.querySelector('body'), */
    rootMargin: '0px',
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
}, options);

onMounted(() => {
    const targets = document.querySelectorAll('.grid-container');
    targets && targets.forEach(target => observer.observe(target));
    console.log(targets);

    gsap.registerPlugin(ScrollTrigger);

    // Learn scroll trigger here:  https://gsap.com/docs/v3/Plugins/ScrollTrigger/

    gsap.from(`.grid-container[data-no="2"]`, {
        scrollTrigger: {
            trigger: `.grid-container[data-no="2"]`,
            endTrigger:  `.grid-container[data-no="2"]`,
            start: 'top center',
            end: 'top bottom',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '12.5%',
        duration: 5000,
    });

    gsap.from(`.grid-container[data-no="3"]`, {
        scrollTrigger: {
            trigger: `.grid-container[data-no="3"]`,
            endTrigger:  `.grid-container[data-no="3"]`,
            start: 'top center',
            end: 'top bottom',
            scrub: true,
            toggleActions: 'play pause reverse pause',
        },
        y: '12.5%',
        duration: 5000,
    });


})



</script>

<template>
    <section class="">
        <section class="section-sec bg-black min-h-screen">
            <!-- <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide"> Who we are </p> -->
            <!-- 1 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-gray-700" data-grid-order="normal" data-no="1">
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
                <div class="grid-content">
                    <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> Who we are </p>
                    <span class="grid-text items-center justify-center text-large leading-loose">
                        Formally, a team of professionals, who have over 10 years of experience in  marketing, online advertising, SEO and more. On a
                        private field, we are a group of friends, who one day decided to change their life and make their first step to change the world.
                        Always ready to help you with your upcoming project.
                    </span>
                </div>
            </div>

            <!-- 2 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="reverse" data-no="2">
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
                <div class="grid-content">
                    <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> What do we do </p>
                    <span class="grid-text items-center justify-center text-large leading-loose">
                        In short - we help others shine bright. Our mission is to provide a strategy on how to increase popularity and online presence for both
                        individual clients as well as for companies. Our SEO and PR experts are ready to help you, despite how far you have already come.
                    </span>
                </div>
            </div>

            <!-- 3 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="normal" data-no="3">
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"></div>
                <div class="grid-content">
                    <p class="heading-name text-blue-400 font-bold text-5xl tracking-wide"> Why us </p>
                    <span class="grid-text items-center justify-center text-large leading-loose">
                        No matter how good you are at what you do - if noone knows about you, that means no clients, no sold products or services, no outcomes.
                        Therefore, we strongly believe that nowadays the presence means success. Since many people are unsure where to start - we are here to assist them. 
                    </span>
                </div>
            </div>
            

            <!-- IN ORDER FOR TAILWIND TO WORK, DON'T FORGET TO RECOMPILE IT WITH THIS COMMAND: npm run tailwind-custom-start -->
            <!-- tailwind-custom-start  is the semi-created alias for:  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch  (which will work fine aswell)-->

            <!-- <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div> -->
        </section>
    </section>
</template>

<style scoped>

    .show {
        opacity: 1 !important;
    }

    .show .heading-name {
        transform: translateY(0vh);
        opacity: 1 !important;
    }

    .show .grid-text {
        transform: translateX(0vw);
        opacity: 1 !important;
    }

    .section-sec {
        overflow: hidden; /* Very important when we are to make those scroll based animations, do not remove this line ! */
        display: grid;
        place-content: center;
    }

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .grid-container {
        position: relative;
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        padding: 15vh 5vw 15vh 10vw;

        transition: all 400ms ease-in-out;
            opacity: .5; /* ANIMATED BACK TO 1 WITH AN INTERSECTION OBSERVER FEATURE */

        /* display: grid; */
        /* border: .2rem solid pink; */
        /* height: 90vh; */
/*         padding: 7vw;
        margin: 3.5vw 0;
        column-gap: 8rem;
        grid-template-columns: 45fr 55fr; */
/*         background-image: url('../assets/intro-1.jpg');
        backdrop-filter: saturate(40%) opacity; */
    }

    .grid-img {
        /* display: flex; */
/*         display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 25% 75%; */
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0 auto auto 0;
        background-size: cover;
        /* filter: invert(100%); */
        filter: saturate(125%) brightness(70%) blur(2px);
    }


    .grid-content {
        height: 100%;
/*         display: grid;
        align-items: center; */
        /* grid-template-columns: 1fr; */
        /* grid-template-rows: 25% 75%; */
    }

    .heading-name {
        z-index: 1;
        line-height: 120%;
        position: relative;
        font-size: 6rem;
        /* letter-spacing: -.075em; */
        /* color: black; */
        filter: drop-shadow(0 0, .5rem, red);
/*         margin-top: min(12.5vh, 12.5vw);
        margin-left: min(12.5vh, 12.5vw); */

        color: #ddd0;
        font-weight: 800;
        text-shadow: .1rem .1rem .4rem #222;
        letter-spacing: -.2rem;
        -webkit-text-stroke: .1rem #222;
        filter: invert(100%);

        transition: all 900ms ease-in-out;
            transform: translateY(-3vh);
            opacity: 0;
    }

    .grid-text {
        z-index: 1;
        line-height: 160%;
        position: relative;
        display: inline-block;
        font-family: Playpen Sans, /* Verdana, */ Geneva, Tahoma, sans-serif;
        /* font-family: Lato, 'Courier New', Courier, monospace; */
        /* display: block; */
        /* display: flex; */
        font-size: 1.35rem;
        /* padding-bottom: 2em; */
        margin-top: 7.5vh;
/*         margin-left: min(12.5vh, 12.5vw);
        margin-right: min(12.5vh, 12.5vw); */
        max-width: 66%;
        /* background: #ddd4; */
        /* backdrop-filter: blur(6px); */
        border-radius: 1rem;
        /* transform: translateY(-10%); */
    
        transition: all 600ms ease-in-out;
            transform: translateX(-3vw);
            opacity: 0;
    }

    .grid-container[data-no="1"] .grid-img{
        background-image: url('../assets/intro-1.jpg');
    }

    .grid-container[data-no="2"] .grid-img {
        background-image: url('../assets/intro-2.jpg');
    }

    .grid-container[data-no="3"] .grid-img {
        background-image: url('../assets/intro-3.jpg');
    }

    .grid-container[data-no="1"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-75% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) 0; */
        /* opacity: calc(0% + 1% * (min(var(--scroll), 40), - 40) * 100 / 60); */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }

    .grid-container[data-no="2"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-55% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) -100vh; */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }

    .grid-container[data-no="3"] {
        /* (oldVal - oldMin) * newRange / oldRange + newMin */
        /* translate: calc(-35% +  1% * (max(var(--scroll), 25) - 25) * 100 / 75) -200vh; */
        /* opacity: min(calc(0% + 1% * min(var(--scroll), 10) * 100 / (10 + 0)), 100%); */
        /* opacity: 100% - calc(-1% * max(var(--scroll), 25) - 25 * 100 / 75); */
        /* opacity: calc(1 - (max(var(--scroll), 10))); */
    }



    [data-grid-order="reverse"] {
        background-color: #111;
        grid-template-columns: 55fr 45fr;
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23fdfdfd' fill-opacity='0.5'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    
    }

    [data-grid-order="reverse"] .grid-text {
        order: 1;
    }

</style>