<script setup lang="ts">
import  { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    const tl = gsap.timeline();
/*     gsap.to("._animation-block_1", {height: '50%', rotate: 45, scale: 1, duration: 1});
    gsap.to("._animation-block_2", {height: '50%', rotate: 135, duration: 1}); */
    /* gsap.to(".main-layout", {background: "#a0d", duration: 1}); */
    gsap.from("._pgraph_1", {opacity: 0, y: -50, duration: 1.5});
});

window.addEventListener("scroll", setScrollState); // fire a listener for every scroll
window.addEventListener("resize", setScrollState); // resize is also essential because it actually can affect scroll values

function setScrollState() {
    const htmlElem = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElem.scrollTop / htmlElem.clientHeight;
    htmlElem.style.setProperty("--scroll", `${Math.min(percentOfScreenHeightScrolled * 100, 100)}`);
    /* console.log('SCREEN SCROLL IS: ', Math.min(percentOfScreenHeightScrolled * 100, 100)); */
}

setScrollState(); // Fire this initially - useful in cases where a page is refreshed when the page is being already scrolled

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
            <p class="pgraph--7 _pgraph_1 --text-centered"> WELCOME </p>
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

.main-layout {
    min-height: 100vh;
    width: 100%;
    background: hsl(0, 0%, 87%, var(--background-opacity));
    color: #333;

    position: sticky;
    top: 0;
    /* Dynamic, animated value here ! */
    /* formula is: (oldVal - oldMin) * newRange / oldRange  + newMin */
    translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / (75 + 0));
    --background-opacity: calc(100%  - 1% * min(var(--scroll), 30) * 100 / (30 + 0));
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