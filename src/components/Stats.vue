<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const options = {
    threshold: .8,
}

const options2 = {
    threshold: .75,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting));
}, options)

const observer2 = new IntersectionObserver((elements) => {
    elements.forEach(el => el.target.classList.toggle('show', el.isIntersecting))
}, options2)

onMounted(() => {
    // const slider = document.querySelector(`.collab-slider`);

    const section_text = document.querySelector(`.heading-title`);
    const collab_image = document.querySelector(`.collab-image`);
    section_text && observer.observe(section_text);
    collab_image && observer2.observe(collab_image);

/*     const collab_text = document.querySelector(`.collab-desc`);
    collab_text && observer.observe(collab_text); */

    const t1 = gsap.timeline();
        t1.to(`.collab-desc-1`, {yPercent: 10, opacity: 1, scale: .8})
            .to(`.collab-desc-1`, {opacity: 0})
            .to(`.collab-desc-2`, {yPercent: 10, opacity: 1, scale: .8, delay: .5})
            .to(`.collab-desc-2`, {opacity: 0})
            .to(`.collab-desc-3`, {yPercent: 10, opacity: 1, scale: .8, delay: .5})
            .to(`.collab-desc-3`, {opacity: 0})
            .to(`.collab-image`, {opacity: 0})


    ScrollTrigger.create({
        animation: t1,
        trigger: `.collab-box`,
        start: 'top top',
        end: '+=3000',
        scrub: true,
        pin: true,
        /* anticipatePin: 1, */
    })

    gsap.to(`.collab-slider`, {
        scrollTrigger: {
            trigger: `.collab-presentation`,
            start: `0% 0%`,
            end: `+=4000`,
            /* markers: true, */
            scrub: 1,
            pin: true,
            toggleActions: 'play pause restart pause',
        },
        transform: 'translateX(-75%)',
    });

/*     gsap.to(`.spacer-dark`, {
        scrollTrigger: {
            trigger: `.spacer-dark`,
            start: `-50% 60%`,
            end: `75% 30%`,
            markers: true,
            scrub: true,
            toggleActions: 'play pause restart pause',
        },
        height: '0',
    }) */
})

</script>

<template>

    <!-- NEW -->

    <div class="bg-layer">
        <div class="spacer-dark"></div>

        <p class="heading-title"> Collab with us </p>

        <div class="collab-box">
            <div class="collab-benefits-box">
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="phone" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        Our model and service-oriented software approach not only results in significant savings in typical implementation costs, but also in
                        infrastructure and operating costs. This is due to our flexible and high-performance ability
                    </span>
                </div>
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="phone" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        Our model and service-oriented software approach not only results in significant savings in typical implementation costs, but also in
                        infrastructure and operating costs. This is due to our flexible and high-performance ability
                    </span>
                </div>
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="phone" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        Our model and service-oriented software approach not only results in significant savings in typical implementation costs, but also in
                        infrastructure and operating costs. This is due to our flexible and high-performance ability
                    </span>
                </div>
            </div>
            <div class="collab-image"></div>
            <div class="collab-content">
                <!-- <span class="collab-desc">
                    We are open for long-time coopearation with companies just like yours !
                    Team up with the most influencial PR brand and let's grow together.
                    Join our collaboration list now and reap the benefits of joining our big family.
                </span> -->
                <span class="collab-desc collab-desc-1"> We are open for long-time cooperation with companies just like yours!</span>
                <span class="collab-desc collab-desc-2"> Team up with the most influencial PR brand and let's grow together.</span>
                <span class="collab-desc collab-desc-3"> Join our collaboration list now and reap the benefits of joining our family.</span>

            </div>
        </div>

        <div class="collab-presentation">
            <p class="collab-title"> How it works </p>
            <div class="collab-slider">
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        Our model and service-oriented software approach not only results in significant savings in typical implementation costs, but also in
                        infrastructure and operating costs. This is due to our flexible and high-performance ability to execute digital models during operation 
                        – whether in the cloud, on edge, or in hybrid operation. Our approach also offers a high degree of adaptability, enabling the use of hardware
                        as necessary. 
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        Our model-driven technique significantly reduces implementation and change costs. In addition, it enables the capture of all process 
                        information, which reduces process, maintenance, and product quality costs, such as Overall Equipment Effectiveness (OEE), while enabling 
                        process control with fewer operational specialists. 
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        The time-consuming and complex work on site becomes less significant as employees from planning and operations, even those without any IT/OT
                        knowledge, can now define, test, and finally implement changes at the process control and plant levels. The tasks that previously required only 
                        IT specialists can now be complemented by a broader group of users, thus mitigating the shortage of IT-skilled employees. 
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        Make your value creation process agile and resilient to changes with our model-driven approach. Quickly realize changes without time-consuming 
                        implementations. Variations in the process flow or the control logic can be implemented and validated remotely, whether by humans or AI. Changes 
                        at the model level can be released for use on site, transferred and executed directly. 
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        Our solution is designed to adapt to the changing needs of your business. Our low code user interface enables planners and operators to optimize
                        and modify without coding. 
                    </span>
                </div>

                <!-- Last one is actually a CTA button -->
                <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> :) </p>
                    <span class="slide-text">
                        Click here to join our collaboration list
                    </span>
                </div>
            </div>
        </div>
    </div>



    <!-- OLD -->

<!--     <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Not convinced yet? Let the numbers do the job </p>

    <div class="flex justify-center align-middle min-h-screen min-w-full">
        <ul class="custom-ul bg-blue-500 w-screen grid grid-cols-1 grid-rows-3">
            <li class="custom-li bg-gradient-to-l from-blue-500 to-cyan-500 relative border-b-8 border-black flex flex-col align-middle justify-center shadow-lg shadow-cyan-500">
                <div class="deco-div deco-div-1 absolute"></div>
                <span class="custom-span span-title section-title font-semibold"> 800+ </span>
                <span class="custom-span section-title "> Companies we worked with so far</span>
            </li>
            <li class="custom-li chosen-li bg-gradient-to-l from-blue-500 to-cyan-500 relative border-y-8 border-black flex flex-col align-middle justify-center">
                <div class="deco-div deco-div-2 absolute"></div>
                <span class="custom-span span-title section-title font-semibold"> 800+ </span>
                <span class="custom-span section-title "> Companies we worked with so far</span>
            </li>
            <li class="custom-li bg-gradient-to-l from-blue-500 to-cyan-500 relative border-t-8 border-black flex flex-col align-middle justify-center shadow-lg shadow-cyan-500">
                <div class="deco-div deco-div-3 absolute"></div>
                <span class="custom-span span-title section-title font-semibold"> 800+ </span>
                <span class="custom-span section-title "> Companies we worked with so far</span>
            </li>
        </ul>

        <div class="section-title custom-div relative grid grid-cols-1 grid-rows content-evenly justify-items-center bg-gradient-to-r from-blue-500 to-cyan-500 w-screen shadow-lg shadow-cyan-500">
            <div class="flex w-full">
                <div class="icon-wing iw-left"></div>
                <div class="flex">
                        <div class="icon-frame w-fit p-20 rounded-full bg-gradient-to-l from-blue-400 to-cyan-400">
                            <font-awesome-icon icon="phone" class="custom-icon text-3xl scale-150" />
                        </div>
                </div>
                <div class="icon-wing iw-right"></div>
            </div>

            <span class="text-center text-xl font-medium leading-relaxed">
                We have helped more than 800 of companies from all over the world to get recognized. Many of them used our services more than once. 
            </span>
        </div>
    </div> -->
</template>

<style scoped>

    /* V2 */

/*     .spacer-dark {
        position: absolute;
        top: 0%;
        left: 0;
        height: 20vh;
        width: 100%;
        background: #000;
        z-index: 1;
    } */

    .collab-presentation {
        min-height: 100vh;
        /* background: pink; */
        padding-block: 7.5vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% max(80%, 1fr);
    }

    .collab-title {
        font-size: 3.5rem;
        text-transform: uppercase;
        font-weight: 650;
    }

    .collab-slider {
        display: flex;
        align-items: center;
        justify-content: start;
        /* min-height: 50vh; */
        /* background: lightgreen; */
        transform: translateX(25%);  /* ANIMATE: translateX(25%) to translateX(-100%) */
        /* width: fit-content; */
    }

    .collab-slide {
/*         display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: column; */
        background: #ddd;
        background: linear-gradient(135deg, hsl(167, 70%, 90%), hsl(211, 70%, 90%));
        width: min(600px, 30vw);
        min-height: 100%;
        padding: 2rem 2.5rem;
        margin-inline: 1rem;
        border-radius: 2.5%;
        box-shadow: 0 .2rem .7rem .2rem #333;
    }

    .collab-slide:nth-child(2n) {
        background: linear-gradient(135deg, hsl(199, 70%, 90%), hsl(234, 70%, 90%));
    }

    .slide-icon {
        font-size: 3rem;
        /* color: #bbb; */
        color: #555;
    }

    .slide-title {
        font-size: 1.7rem;
        font-weight: 600;
        margin: 1em;
    }

    .slide-text {
        font-size: 1.05rem;
        line-height: 1.5;
    }

    /* NEW STYLES */

    .bg-layer {
        /* position: relative; */
        padding-block: 5vh 15vh;
        padding-inline: 5vw;
        /* background: linear-gradient(45deg, #ddd, #eee); */
        /* gap: 10vh; */
        /* box-shadow: 0 -.25rem .5rem .3rem #eee; */

        background-color: #eeeeee;
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
        position: relative;
    }

    .collab-box {
        height: 100vh;
        position: relative;
        /* background-color: black; */
        /* backdrop-filter: grayscale(100%); */
/*         padding-block: 20vh;
        padding-inline: 10vh; */
    }

    .collab-benefits-box {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .collab-benefit {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 2.5rem;
    }

    .benefit-frame {
        display: inline-block;
        font-size: 1rem;
        border: .8em double #222;
        box-shadow: 0 0 .6em .12em #111, inset 0 0 1.25em .12em #333;
        border-radius: 50%;
        padding: 3em;
        margin-inline: auto;
    }

    .benefit-icon {
        font-size: 4rem;
        color: #333;
        filter: drop-shadow(0 0 .5rem #ddd);
        
    }

    .benefit-text {
        font-size: 1.2rem;
        display: block;
        margin-inline: 1.5em;
        text-align: center;
    }

    .collab-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: scaleX(1); /* Will be animated to 1.2 with Intersection observer */
        height: 100%;
        background-color: #ddd;
        background-image: url(../assets/bg5.png);
        background-size: cover;
        border-radius: 2.5%;
        box-shadow: 0 0 .5rem .2rem #222;
        filter: sepia(100%) saturate(150%) invert(100%);

        transition: 500ms all ease-in-out;
    }

    .collab-image.show {
        transform: scaleX(1.2);
    }

    .collab-content {
        position: relative;
        width: 100%;
        height: 100%; 
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        place-items: center;
/*         display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center; */
        padding: 10%;
    }

    .collab-desc {
        color: #222;
        letter-spacing: .1rem;
        font-size: 4rem;
        line-height: 1.5;
        text-align: center;
        grid-column: 1;
        grid-row: 1;
        /* position: absolute; top: 50%; left: 0%; */
        
        transition: 1200ms all ease-out;
            /* scale: 1.1; */
            opacity: 0;
            transform: translateY(0rem);
    }

/*     .collab-desc.show {
        scale: .8;
        opacity: 1;
        transform: translateY(5rem);
    } */

    .heading-title {
        font-size: 6rem;
        font-weight: 700;
        text-align: center;
        /* position: relative; */
        line-height: 1.5;
        margin-bottom: 10vh;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #111;
        color: #ddd;
        transition: all 800ms ease-in-out;
            opacity: 0;
            letter-spacing: -2.5rem; /* we can animate this with transition */

    }

    .heading-title.show {
        opacity: 1;
        letter-spacing: 0rem;
    }


    /* OLD STYLES */

    .icon-frame {
        border: .8em double #222;
        box-shadow: 0 0 .6em .12em #111, inset 0 0 .225em .12em #333;
    }
    .section-title {
        /* font-family: Audiowide, 'Courier New', Courier, monospace; */
    }

    .custom-span {
        /* transform: skewY(-20deg); */
        font-size: 1.1rem;
        margin-left: 30%;
        margin-right: 10%;
    }

    .span-title {
        font-size: 2.4rem;
        padding: .3em 0;
    }

    .custom-li {
        /* transform: skewY(20deg); */
        border-top-right-radius: 2.5%;
        border-bottom-right-radius: 2.5%;
    }

    .chosen-li {
        box-shadow: inset 0 0 .5em .11em white, 0 1rem .75em .22em cyan;
        border-right: .22em  solid cyan;
    }

    .chosen-li .custom-span {
        color: #ddd;
    }

    .custom-ul {
       /*  margin-left: 2%; */
        border-top-right-radius: 2.5%;
        border-bottom-right-radius: 2.5%;
        /* padding-right: 1em; */
    }

    .custom-div {
        padding: 0 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-left: 2.5%;
        padding: auto 10%;
        border-top-left-radius: 2.5%;
        border-bottom-left-radius: 2.5%;
    }

    .custom-div, .custom-ul {
        box-shadow: 0 0 1.3em .32em #3b82f6;
    }

    .custom-icon {
        font-size: 5rem;
        color: #111c;
    }

    .deco-div {
        left: 0;
        width: 20%;
        height: 100%;
        background: none;
    }

    .deco-div-1 {
        top: 0;
        border-bottom: 3rem solid #000;
        border-left: 100%  solid transparent;
        border-right: 2rem solid transparent;
    }

    .deco-div-2 {
        background: #000;
    }

    .deco-div-3 {
        bottom: 0;
        border-top: 3rem solid #000;
        border-left: 100%  solid transparent;
        border-right: 2rem solid transparent;
    }

    .icon-wing {
/*         position: absolute;
        top: 60%; */
        align-self: center;
        font-size: 1rem;
        width: 80%;
        height: 0%;
        padding: calc(5% / 2) 0;
        margin: auto;
        border-radius: 5%;
        border: .12em double #222;
        box-shadow: .05em 0 .4em .1em #000;
        /* padding: 1em; */
    }

    .iw-left {
        /* left: 15%; */
        margin-right: 5%;
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px;
        background: linear-gradient(0deg, #1118, #0000 99%);
        /* transform: skewX(4deg); */
    }

    .iw-right {
        /* left: 65%; */
        margin-left: 5%;
        border-top-right-radius: 9999px;
        border-bottom-right-radius: 9999px;
        background: linear-gradient(0deg, #1118, #0000 99%);
    }

</style>