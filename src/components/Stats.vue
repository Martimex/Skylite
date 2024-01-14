<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const emit = defineEmits(['redirectMessage']);

gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting));
}, {threshold: .8})

const observer2 = new IntersectionObserver((elements) => {
    elements.forEach(el => el.target.classList.toggle('show', el.isIntersecting))
}, {threshold: .75})

onMounted(() => {

    const section_text = document.querySelector(`.heading-title`);
    const collab_image = document.querySelector(`.collab-image`);
    section_text && observer.observe(section_text);
    collab_image && observer2.observe(collab_image);

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
            .from(`.collab-benefit`, {opacity: .5, filter: 'blur(1.5px)'}, "<50%")


    ScrollTrigger.create({
        animation: t1,
        trigger: `.collab-box`,
        start: 'top top',
        end: '+=3000',
        scrub: true,
        pin: true,
    })

    gsap.to(`.collab-slider`, {
        scrollTrigger: {
            trigger: `.collab-presentation`,
            start: `0% 0%`,
            end: `+=3200`, /* Modifying this value might need some collab-presentation items width size fixes, especially for media queries ! */
            scrub: 1,
            pin: true,
            toggleActions: 'play pause restart pause',
        },
        transform: 'translateX(-75%)',
    });

})

</script>

<template>

    <div class="bg-layer">

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
                        even faster and are able to achieve huge customer base in short amount of time.
                    </span>
                </div>
                <div class="collab-benefit">
                    <div class="benefit-frame">
                        <font-awesome-icon icon="calendar-check" class="benefit-icon" />
                    </div>
                    <span class="benefit-text"> 
                        The Collaborators can cooperate with us to larger extent, by taking part in some exclusive Skylite's hosted events. The revenue of the end work will be
                        fairly distributed between both us and them.
                    </span>
                </div>
            </div>
            <div class="collab-image"></div>
            <div class="collab-content no-targetable">
                <span class="collab-desc collab-desc-1 no-targetable"> We are open for long-time cooperation with companies just like yours!</span>
                <span class="collab-desc collab-desc-2 no-targetable"> Team up with the most influencial PR brand and let's grow together.</span>
                <span class="collab-desc collab-desc-3 no-targetable"> Join our collaboration list now and reap the benefits of joining our family.</span>
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

                <!-- Last one is actually a CTA button -->
                <div class="collab-slide slide-action">
                    <font-awesome-icon icon="user-plus" class="slide-icon" />
                    <p class="slide-title"> Join the list now </p>
                    <span class="slide-text">
                        Click on the button below to send a request for collaboration. Don't miss the opportunity to join the list today and become our business partner.
                    </span>
                    <div class="container-action">
                        <a class="btn-action" href="/" @click.prevent="emit('redirectMessage', 'collaboration request form')"> Join now </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .collab-presentation {
        min-height: 100vh;
        margin-top: 12.5vh;
        padding-block: 5vh 7.5vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 1fr;
        place-items: center;
    }

    .collab-title {
        font-size: 3.5rem;
        text-transform: uppercase;
        font-weight: 650;
        justify-self: flex-start;
    }

    .collab-slider {
        display: flex;
        justify-content: flex-start;
        transform: translateX(25%);  /* ANIMATE: translateX(25%) to translateX(-100%) */
        height: max-content;
    }

    .collab-slide {
        background: #ddd;
        background: linear-gradient(135deg, hsl(167, 70%, 90%), hsl(211, 70%, 90%));
        width: min(600px, 30vw);
        padding: 2rem 2.5rem;
        padding-bottom: 15vh;
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
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
        margin-left: 2.5rem;
        padding: .5rem 2rem;
        color: #222;
        border: .1em solid #222;
        box-shadow: 0 0 .125em .125em #222a;
        white-space: nowrap;

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
        color: #444;
        filter: drop-shadow(0 0 .25rem  #777);
    }

    .slide-title {
        font-size: 1.7rem;
        font-weight: 600;
        margin: 1em;
    }

    .slide-text {
        font-size: 1.15rem;
        line-height: 1.65;
    }

    .bg-layer {
        padding-block: 5vh 15vh;
        padding-inline: 5vw;
        position: relative;
    }

    .collab-box {
        height: 100vh;
        position: relative;
    }

    .collab-benefits-box {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 33% 34% 33%;
        grid-template-rows: auto;
        place-items: center;
        place-content: center;
        column-gap: 2rem;
    }

    .collab-benefit {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        row-gap: 2.5rem;
        min-height: 100vh;
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
        font-weight: 500;
    }

    .collab-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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
        
        transition: 1200ms all ease-out;
            opacity: 0;
            transform: translateY(0rem);
    }

    .heading-title {
        font-size: 6rem;
        font-weight: 700;
        text-align: center;
        line-height: 1.5;
        margin-bottom: 10vh;
        text-transform: uppercase;
        -webkit-text-stroke: .12rem #111;
        color: #ddd;

        transition: all 800ms ease-in-out;
            opacity: 0;
            transform: translateX(-3rem);
    }

    .heading-title.show {
        opacity: 1;
        transform: translateX(0rem);
    }


    @media screen and (orientation: portrait)   {

        .bg-layer {
            padding-block: 5vh 7.5vh;
        }

        .heading-title {
            margin-bottom: 6.5vh;
            line-height: 125%;
        }

        .collab-desc {
            font-size: 4.25rem;
        }

        .collab-content {
            padding: 0;
        }

        .collab-benefits-box {
            display: flex;
            flex-flow: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .collab-benefit {
            display: flex;
            align-items: center;
            flex-flow: column;
            min-height: unset;
            row-gap: 2rem;
        }

        .benefit-frame {
            padding: 2.5em;
            border-radius: 5%;
        }

        .benefit-icon {
            font-size: 4rem;
        }

        .benefit-text {
            margin-inline: 0;
            font-size: 1.25rem;
            max-width: 500px;
        }

        .collab-title {
            align-self: center;
        }

        .collab-presentation {
            margin-top:  15vh;
            grid-template-rows: 20% 1fr;
            padding-block: 12.5vh;
        }

        .collab-slide {
            width: max(275px, 60vw);
            padding-bottom: 10vh;
            margin-inline: .75rem;
        }

        .slide-title {
            margin-bottom: 1.5em;
        }

        .slide-text {
            font-size: 1.25rem;
            line-height: 1.3;
        }

        .btn-action {
            font-size: 1.4rem;
            margin-top: 1.5em;
        }

    }

    @media screen and (orientation: portrait) and (max-height: 800px) {
        .benefit-icon {
            font-size: 3rem;
        }

        .collab-title {
            align-self: flex-start;
        }

        .benefit-text {
            font-size: 1.2rem;
            line-height: 135%;
        }

        .slide-title {
            font-size: 1.75rem;
        }

        .collab-slide {
            width: max(260px, 50vw);
            min-height: 60vh;
            margin-inline: .75rem;
        }

        .btn-action {
            margin-top: 2em;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 986px) {

        .collab-presentation {
            margin-top:  20vh;
            grid-template-rows: 20% 1fr;
        }

        .collab-slide {
            width: max(325px, 30vw);
            padding-bottom: 10vh;
        }

        .slide-text {
            font-size: 1.1rem;
            line-height: 1.5;
        }

        .collab-benefits-box {
            grid-template-rows: 33% 34% 33%;
            grid-template-columns: 1fr;
        }

        .collab-benefit {
            display: flex;
            align-items: center;
            flex-flow: row;
            min-height: unset;
            row-gap: 0;
            max-width: 650px;
        }

        .benefit-frame {
            align-self: unset;
            padding: 2.1em;
            border-radius: 5%;
            margin-right: 2.5rem;
        }

        .benefit-icon {
            font-size: 4rem;
        }

        .benefit-text {
            text-align: left;
            margin-inline: 0;
            font-size: 1.25rem;
        }

    }

    @media screen and (orientation: landscape) and (max-width: 800px) {

        .collab-desc {
            font-size: 3.3rem;
        }

        .collab-slide {
            width: max(375px, 30vw);
        }

        .btn-action {
            margin-top: 1rem;
        }
    }


</style>