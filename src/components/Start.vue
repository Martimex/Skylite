<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.add(`show`));
}, {threshold: .9});

onMounted(() => {
/*     const tl = gsap.timeline();
    gsap.to("._animation-block_1", {height: '50%', rotate: 45, scale: 1, duration: 1});
    gsap.to("._animation-block_2", {height: '50%', rotate: 135, duration: 1});
    gsap.to(".main-layout", {background: "#a0d", duration: 1});
    gsap.from("._pgraph_1", {opacity: 0, y: -50, duration: 1.5}); */

    const main_layout = document.querySelector(`.main-layout`);
    main_layout && observer.observe(main_layout);

    gsap.to((`.gridbox-side`), {
        scrollTrigger: {
            trigger: `.main-layout`,
            start: '0% 0%',
            end: '90% 0%',
            scrub: 1,
            toggleActions: 'play pause reverse pause',
        },
        scale: 1.15,
    })

    gsap.from(`.gridbox-letter`, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.35,
        ease: "power2.out",
    })

/*     gsap.from(`.gridbox-side`, {
        scale: 0,
        duration: 4,
        ease: "power4.out",
    }) */

/*     gsap.from([`.bottom-text`, '#navbar-top'], {
        opacity: 0,
        duration: 3,
        ease: "power4.in",
    }) */
});

//window.addEventListener("scroll", setScrollState); // fire a listener for every scroll
//window.addEventListener("resize", setScrollState); // resize is also essential because it actually can affect scroll values

/* function setScrollState() {
    const htmlElem = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElem.scrollTop / htmlElem.clientHeight;
    htmlElem.style.setProperty("--scroll", `${Math.min(percentOfScreenHeightScrolled * 100, 100)}`);
} */

//setScrollState(); // Fire this initially - useful in cases where a page is refreshed when the page is being already scrolled

const emit = defineEmits(['changeComponent']);

function newComponent() {
    emit('changeComponent', 'piano');
}

defineProps<{
    msg: string
}>()
</script>

<template>
<!--     <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
        </h3>
        <button @click="newComponent"> Return to Piano Component ! </button>
    </div> -->
    <!-- THIS SECTION IS BELOW THE 'WELCOME' MESSAGE AND SLOWLY APPEARS RIGHT UNDER THE FADING TEXT & BG WHILE SCROLLING -->
    <main class="--no-overflow-x">
        <div class="animation-block--initial _animation-block_1 --absolute"></div>
        <div class="animation-block--initial _animation-block_2 --absolute"></div>
        <div class="main-layout --flex-container --no-overflow-x">
            <div class="gridbox-side gs-1"></div>
            <div class="gridbox-content">
                <p class="gridbox-letter"> S </p>
                <p class="gridbox-letter"> K </p>
                <p class="gridbox-letter"> Y </p>
                <p class="gridbox-letter"> L </p>
                <p class="gridbox-letter"> I </p>
                <p class="gridbox-letter"> T </p>
                <p class="gridbox-letter"> E </p>
            </div>
            <div class="gridbox-side gs-2"></div>
            <p class="bottom-text"> Designed by MTX</p>
            <!-- <p class="pgraph--7 _pgraph_1 --text-centered"> WELCOME </p> -->
<!--             <video width="1680" height="1420" src="../assets/video.mp4" type="video/mp4" autoplay muted playsinline loop>
                Your browser does not support HTML5 video.
            </video> --> 
        </div>
        <!-- <section class="section-sec">
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
        </section> -->
    </main>
</template>

<style scoped>
/* h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}
 */

:root {
    --scroll: 0;
    --background-opacity: 1;
}

body {
    background: teal;
}

video {
    height: 100vh;
    width: 100%;
    object-fit: cover; /*  use "cover" to avoid distortion */
    /* position: absolute; */
}

.main-layout {
    min-height: 100vh;
    width: 100%;
    /* background: hsl(0, 0%, 87%, var(--background-opacity)); */
    color: #333;
    background: #000;
    background-image: url(../assets/sky1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 0;
    overflow: hidden;
    /* Dynamic, animated value here ! */
    /* formula is: (oldVal - oldMin) * newRange / oldRange  + newMin */
    translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / (75 + 0));
    --background-opacity: calc(100%  - 1% * min(var(--scroll), 30) * 100 / (30 + 0));

    box-shadow: inset 0 0 1rem .125rem #222;
}

/* .start-gridbox {
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    backdrop-filter: saturate(50%);
    background: #0004;
} */

.gridbox-side {
    position: absolute;
    width: 50vw;
    height: 100%;
    backdrop-filter: blur(1px) grayscale(50%);
    box-shadow: 0 0 1rem .2rem #222;
    /* padding: 10%; */

/*     transition: all 1000ms ease-out;
        scale: 0.5;  */
}

/* .main-layout.show .gridbox-side {
    scale: 1;
} */

.gs-1 {
    top: -50%;
    left: -35%;
    background: #0003;
    transform: rotate(45deg) scaleY(2);
    /* border-bottom-right-radius: 50%; */
}

.gs-2 {
    top: 50%;
    left: 85%;
    background: #0002;
    transform: rotate(45deg) scaleY(2);
    /* border-bottom-left-radius: 50%; */
}

.gridbox-content {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #0004; */
    /* backdrop-filter: blur(9px) hue-rotate(120deg); */
    box-shadow: inset 0 0 44rem 44rem #2220;
    backdrop-filter: saturate(50%);
    background: #0004;
    overflow: hidden;
}

.gridbox-letter {
    
    position: relative;
    z-index: 1;
    display: inline-block;
    font-size: 12rem;
    /* padding: .2rem; */
    font-weight: 800;
    color: #1110;
    /* background: pink; */
    filter: drop-shadow(0 0 0.75rem cyan);
    text-shadow: 0rem 0rem 1em #000;
    letter-spacing: .25rem;
    -webkit-text-stroke: .0125em cyan;
}

.gridbox-letter::before {
    content: '';
    z-index: 0;
    position: absolute;
    font-size: 10rem;
    top: 0%;
    left: 0%;
    padding: 1rem;
    border-radius: 50%;
    /* background: radial-gradient( hsla(180, 100%, 50%, .5), #1111); */
    color: #111;
    /* background: pink; */
    filter: drop-shadow(0 0 0.75rem cyan);
    text-shadow: -.2rem -.2rem .25rem red;
    letter-spacing: -.1rem;
    -webkit-text-stroke: .01em cyan;
}

.bottom-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ddd;
    position: absolute;
    bottom: 0%;
    left: 0%;
    display: inline-block;
    margin: 5vh 5vw;
    text-decoration: underline;

    transition: all 2000ms ease-in;
        opacity: 0;
}

.main-layout.show .bottom-text {
    opacity: 1;
}

.section-sec {
    margin-top: /* 30vh */ 0; /* Currently set to 0, so that there is no unnecessary spae between sections transition */
    background: #333;
}

.pgraph--3 {
    font-size: 3.6rem;
}

.pgraph--4 {
    font-size: 4.8rem;
}

.pgraph--5 {
    font-size: 6.0rem;
}

.pgraph--6 {
    font-size: 7.2rem;
}

.pgraph--7 {
    font-size: 8.4rem;
}
.animation-block--initial {
    /* background-image: conic-gradient(#2229, #4449, #bbb9,  #2229); */
    background-image: conic-gradient(#dddd, #cccc, #dddd,#eeee);
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 .25em .15em #3335, .12em .12em .4em .3em #2225;
    /* transform: rotate(45deg); */
    /* border-radius: 50%; */
}

/* Often used, generic declarations */

.--text-centered {
    text-align: center;
    vertical-align: middle;
}

.--flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.--absolute {
    position: absolute;
}

.--no-overflow-x {
    overflow-x: hidden;
}

._animation-block_1 {

}

._animation-block_2 {

}

/* Cutom styling parts */

._pgraph_1 {
    font-family: 'Audiowide', sans-serif;
    letter-spacing: .25em;
    text-shadow: .05em .05em 8px #2229;
    text-decoration: double;
    backdrop-filter: blur(3px);
}

/* .greetings h1,
.greetings h3 {
    text-align: center;
} */

/* @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    } 
} */
</style>