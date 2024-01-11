<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const emit = defineEmits(['redirectMessage']);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const t1 = gsap.timeline();
        t1.from(`.slide-1`, {xPercent: -110, /* width: 0,  */opacity: 0.75})
            .from(`.slide-3`, {xPercent: 110, /* width: 0,  */opacity: 0.75}, "<")
            .to(`.companies-introduction`, {scale: 0}, "<")
            .from(`.transition-layer`, {opacity: 0}, "<")

    ScrollTrigger.create({
        animation: t1,
        trigger: `.main-box`,
        start: 'top top',
        end: '+=2000',
        scrub: .5,
        pin: true,
    })

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

<!--         <div class="slide slide-2">
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-sketch" class="custom-icon scale-150" />
            </span>
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-joomla" class="custom-icon scale-150" />
            </span>
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-redhat" class="custom-icon scale-150" />
            </span>
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-xing" class="custom-icon scale-150" />
            </span>
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-slack" class="custom-icon scale-150" />
            </span>
            <span class="rd-box flex items-center justify-center">
                <font-awesome-icon icon="fa-brands fa-telegram" class="custom-icon scale-150" />
            </span>
        </div> -->

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

        

        <!-- <div class="custom-div cd-2 grid grid-cols-1 grid-rows-3 content-evenly h-screen bg-black">
            <div class="slide-1 flex justify-evenly items-center">  
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-shopify" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-algolia" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-dribbble" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-rev" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-jira" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-speaker-deck" class="custom-icon scale-150" />
                </span>
            </div>
            <div class="slide-2 flex justify-evenly items-center">
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-sketch" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-joomla" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-redhat" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-xing" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-slack" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-telegram" class="custom-icon scale-150" />
                </span>
            </div>
            <div class="slide-3 flex justify-evenly items-center">
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-dropbox" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-vk" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-viacoin" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-quora" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-bandcamp" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-unity" class="custom-icon scale-150" />
                </span>
            </div>
        </div> -->
    </div>




    <!-- OLD -->

<!--     <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Trusted by the best </p>

    <div class="h-screen relative">
        <div class="custom-div cd-1 flex flex-col justify-evenly items-center bg-black absolute">
            <span class="section-title desc-text text-xl leading-relaxed"> 
                We exclusively helped and shared support for some of the most successful companies in the world. Many of our happy clients are showcased on the right.
            </span>
            <span class="section-title desc-text text-xl leading-relaxed">
                Our marketing strategies made a positive impact on product sales, gathering new customers and even establishing new trends for the most influencial brands around the globe.
            </span>
        </div>
        <div class="custom-div cd-2 grid grid-cols-1 grid-rows-3 content-evenly h-screen bg-black">
            <div class="slide-1 flex justify-evenly items-center">  
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-shopify" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-algolia" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-dribbble" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-rev" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-jira" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-speaker-deck" class="custom-icon scale-150" />
                </span>
            </div>
            <div class="slide-2 flex justify-evenly items-center">
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-sketch" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-joomla" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-redhat" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-xing" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-slack" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-telegram" class="custom-icon scale-150" />
                </span>
            </div>
            <div class="slide-3 flex justify-evenly items-center">
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-dropbox" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-vk" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-viacoin" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-quora" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-bandcamp" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="custom-icon scale-150" />
                </span>
                <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-unity" class="custom-icon scale-150" />
                </span>
            </div>
        </div>
    </div> -->

</template>

<style scoped>

    /* NEW */

    .bg-layer {
        min-height: 100vh;
/*         background-color: #eeeeee;
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
        position: relative;
    }

    .main-box {
        padding-inline: 7.5vw;
        min-height: 100vh;
    }

    .companies-introduction {
        font-size: 6rem;
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
       /*  z-index: 1; */
    }

    .transition-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
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
        /* transform: translateX(-90%); */
    }

    .slide-2 {
        top: 0;

        display: flex;
        flex-flow: column;
        background-image: linear-gradient(45deg, #223, #222, #111);
        border: .3em double #222;
        /* transform: rotate(10deg); */
    }

    .slide-3 {
        bottom: 0;
        left: 0;
        background-image: linear-gradient(0deg, #000, #111, #111 50%, #111, #000);
        transform: rotate(2.5deg);
        box-shadow:  0 -.3em .5em 0 #000c,  0  -.6em .5em #0005, 0 -.75em  .4em #0003;
        border-top: .1em solid #222;
        /* transform: translateX(90%); */
    }

    .custom-icon {
        font-size: 5rem;
        color: #ddd;
       /*  color: #111; */
        transition: all 500ms ease-in-out;
            filter: drop-shadow(0rem 0rem .175rem #aaa);
    }

    .custom-icon:hover {
        cursor: pointer;
        color: #aaa;
        /* filter: drop-shadow(0rem 0rem .5rem #95BF47) saturate(125%); */
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

    /* OLD */

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .custom-div {
        
    }

    .cd-1 {
        padding: 5rem;
/*         border-top: .1rem solid hsla(84, 100%, 59%, .75);  *//* It's an hsl version of greenyellow, but with applied opacity of 0.5 */
/*         border-left: .1rem solid hsla(84, 100%, 59%, .75); */ /* It's an hsl version of greenyellow, but with applied opacity of 0.5 */
        border-radius: 2%;
        top: 0%;
        left: 0%;
        width: 45%;
        height: 100%;
        box-shadow: .6em 0 0 0 #000c, 1.2em 0 .5em #0005, 1.5em 0 .4em #0003/* , inset .25em 0 1em 0 hsla(84, 100%, 59%, .95) */;
        border-left: .5rem double hsla(84, 100%, 59%, .75);
        /* border-left: .25rem solid hsla(84, 100%, 59%, .75); */
        z-index: 1;  /* UNCOMMENT AFTER DEVELOPMENT FOR THE SECTION */
    }

    .desc-text {
        color: hsla(84, 100%, 59%, .85);
        /* text-shadow: .1rem .1rem hsla(55, 60%, 60%, .66); */
    }

    .cd-2 {
        position: relative;
        overflow: hidden;
       /*  box-shadow: .6em 0 4.5em 0 greenyellow, inset .6em 0 7.5em 0 #333; */
    }

    .cd-2::after {
        content: '';
        /* display: block; */
        font-size: 1rem;
        position: absolute;
        left: 45%;
        bottom: 0%;
        width: 100%;
        height: 100%;
        box-shadow: inset .6em 0 5.5em 1.75rem #000;
    }

    .rd-box {
        font-size: 1rem;
        width: 15%;
        padding: 2em 0;
        border-radius: 10%; 
    }

    @media screen and (orientation: portrait) and (max-height: 1024px) {

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

    @media screen and (orientation: landscape) and (max-width: 1024px) {

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