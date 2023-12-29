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
            .to(`.collab-image`, {scale: 1.5, rotateZ: 0}, "<")
            .to(`.collab-desc-1`, {opacity: 0})
            .to(`.collab-image`, {scale: 2, rotateZ: 10}, "<")
            .to(`.collab-desc-2`, {yPercent: 10, opacity: 1, scale: .8, delay: .5})
            .to(`.collab-image`, {scale: 2.5, rotateZ: 20}, "<")
            .to(`.collab-desc-2`, {opacity: 0})
            .to(`.collab-image`, {scale: 3, rotateZ: 30}, "<")
            .to(`.collab-desc-3`, {yPercent: 10, opacity: 1, scale: .8, delay: .5})
            .to(`.collab-image`, {scale: 3.5}, "<")
            .to(`.collab-desc-3`, {opacity: 0})
            .to(`.collab-image`, {scale: 4}, "<")
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
            end: `+=3200`,
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
                        <font-awesome-icon icon="tag" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        Our Collaborators can take advantage of some significant discounts on our products and services. The contract is tailored to their
                        individual needs, so they can get the best deal out of it.
                    </span>
                </div>
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="hashtag" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        We help promoting our Collaborators across the social media platforms and on various meetings we organize. As a result, they rise in popularity
                        even faster and are able to achieve huge customer base in shorter amount of time.
                    </span>
                </div>
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="hand-holding-dollar" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        The Collaborators can cooperate with us to a larger extent, by taking part in some exclusive Skylite's hosted events. The revenue of the end work will be
                        fairly distributed between both us and them.
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
                    <font-awesome-icon icon="envelope" class="slide-icon" />
                    <p class="slide-title"> 1. Send a request </p>
                    <span class="slide-text">
                        To become our Collaborator, first off we need to know something more about you. Please make use of the form in the "Contact" tab and answer all 
                        the initial questions. Also do not forget to leave your contact details at the end of the form.
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="video" class="slide-icon" />
                    <p class="slide-title"> 2. Video call meeting </p>
                    <span class="slide-text">
                        Next up, you will be invited to a video call with one of our employees, who will present you some details and conditions to become our Collaborator.
                        We can further negotiate all aspects of the agreement to fit your needs.
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="hourglass-end" class="slide-icon" />
                    <p class="slide-title"> 3. Wait for response </p>
                    <span class="slide-text">
                        In case You accepted our cooperation offer, it is time for us to confirm your credibility. At this point all you need to do is to wait patiently
                        for us to respond back to you. Disregard of the final decision, we will contact You within 5 business days since the video call meeting.
                    </span>
                </div>
                <div class="collab-slide">
                    <font-awesome-icon icon="file-contract" class="slide-icon" />
                    <p class="slide-title"> 4. Sign the contract </p>
                    <span class="slide-text">
                        After a successful verification, you are welcomed to sign an agreement with us. You will receive the document by e-mail. Upon signing our
                        agreement, You officially become our Collaborator. Congratulations!
                    </span>
                </div>
<!--                 <div class="collab-slide">
                    <font-awesome-icon icon="phone" class="slide-icon" />
                    <p class="slide-title"> Lower CPX </p>
                    <span class="slide-text">
                        Our solution is designed to adapt to the changing needs of your business. Our low code user interface enables planners and operators to optimize
                        and modify without coding. 
                    </span>
                </div> -->

                <!-- Last one is actually a CTA button -->
                <div class="collab-slide slide-action">
                    <font-awesome-icon icon="user-plus" class="slide-icon" />
                    <p class="slide-title"> Join the list now </p>
                    <span class="slide-text">
                        Click on the button below to send a request for collaboration. Don't miss the opportunity to join the list today and become our business partner.
                    </span>
                    <div class="container-action">
                        <div class="btn-action"> Join now </div>
                    </div>
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

    .slide-action {
        background: linear-gradient(135deg, #eee, #eee, #ddd);
        position: relative;
    }

    .slide-action .slide-title {
        text-align: left;
    }

    .slide-action .slide-text {
        font-weight: 600;
    }

    .container-action {
        /* Used to position .btn-action inside the main container */
        position: absolute;
        top: 75%;
        left: 0%;
        height: 10%;
        width: 100%;
    }

    .btn-action {
        font-size: 1.25rem;
        font-weight: 600;
        position: relative;
        z-index: 0;
        display: inline-block;
        max-width: 40%;
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
        margin-left: 2.5rem;
        padding: .5rem 2rem;
        color: #222;
        border: .1em solid #222;
        box-shadow: 0 0 .125em .125em #222a;

        transition: all 400ms ease-in;
    }

    .btn-action::before, .btn-action::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
    }

    .btn-action::before {
        border: .2rem groove #222;
        border-left-width: .4rem;

        transition: all 400ms ease-out;
            width: 0%;
    }

    .btn-action:hover:before {
        width: 100%;
    }

    .btn-action::after {
        background: #222;
        width: 100%;

        transition: all 400ms ease-out 200ms;
            opacity: 0;
    }

    .btn-action:hover:after {
        opacity: 1;
        
    }

    .btn-action:hover {
        cursor: pointer;
        color: #ddd;
    }


    .slide-icon {
        font-size: 3rem;
        /* color: #bbb; */
        color: #444;
        filter: drop-shadow(0 0 .25rem  #777);
    }

/*     .collab-slide:nth-child(2n) .slide-icon {
        filter: drop-shadow(0 0 .5rem hsl(199, 70%, 70%));
    }

    .slide-action .slide-icon {
        filter: drop-shadow(0 0 .5rem hsl(167, 70%, 90%));
    } */

    .slide-title {
        font-size: 1.7rem;
        font-weight: 600;
        margin: 1em;
    }

    .slide-text {
        font-size: 1.1rem;
        line-height: 1.65;
    }

    /* NEW STYLES */

    .bg-layer {
        /* position: relative; */
        padding-block: 5vh 15vh;
        padding-inline: 5vw;
        /* background: linear-gradient(45deg, #ddd, #eee); */
        /* gap: 10vh; */
        /* box-shadow: 0 -.25rem .5rem .3rem #eee; */

/*         background-color: #eeeeee;
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
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
/*         display: flex;
        align-items: center;
        justify-content: space-around; */
        display: grid;
        grid-template-columns: 33% 34% 33%;
        grid-template-rows: auto;
        place-items: center;
    }

    .collab-benefit {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        row-gap: 2.5rem;
        min-height: 100vh;
/*         display: flex;
        flex-flow: column;
        align-items: flex-end;
        justify-content: center;
        row-gap: 2.5rem; */
    }

    .benefit-frame {
        display: inline-block;
        font-size: 1rem;
        height: fit-content;
        align-self: flex-end;
        border: .8em double #222;
        box-shadow: 0 0 .6em .12em #111, inset 0 0 1.25em .12em #333;
        border-radius: 50%;
        padding: 4em;
        margin-inline: auto;
        backdrop-filter: blur(1px);
    }

    .benefit-icon {
        font-size: 5rem;
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
        /* transform: scaleX(1); */ /* Will be animated to 1.2 with Intersection observer  */
        height: 100%;
        background-color: #ddd;
        background-image: url(../assets/bg5.png);
        background-size: cover;
        border-radius: 2.5%;
        box-shadow: 0 0 .5rem .2rem #222;
        filter: sepia(100%) saturate(150%) invert(100%);
        pointer-events: none;

        transition: 500ms all ease-in-out;
    }

    .collab-image.show {
        /* transform: scaleX(1.2); */
        width: 105vw;
        left: -7.5vw;
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