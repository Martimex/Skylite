<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const emit = defineEmits(['redirectMessage']);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {threshold: 0.5})

onMounted(() => {
    const news_heading = document.querySelector(`.news-heading`);
    news_heading && observer.observe(news_heading);

    const news_box = document.querySelector(`.news-box`);
    news_box && observer.observe(news_box);
})

</script>

<template>

    <div class="bg-layer">
        <p class="news-heading"> Connect <span class="line-wrapper__mobile"> with us </span> </p>

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

</template>

<style scoped>

    .bg-layer {
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
        padding-block: 7.5%;
        background: linear-gradient(#111, #000);
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        box-shadow: 0 0 1rem .25rem #000, inset 0 0 1rem .25rem #000;
        border: .1rem double #aaa;
    
        transition: all 500ms ease-in-out;
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
        border-radius: 9999px;
        padding: 1.25em;
        box-shadow: inset 0em 0em .2em .3em #222, 0 0 .3em .5em #111;
        background: #333;
        min-width: 60%;
        color: #ddd;
        margin-bottom: 2.5rem;
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
    

    @media screen and (orientation: portrait)   {
        .news-heading {
            font-size: 6rem;
            padding-inline: 5%;
            padding-bottom: 7.5vh;
        }

        .news-box {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: repeat(2, auto);
            padding-block: 7.5vh;
            place-content: center;
        }

        .news-content {
            padding-inline: 7.5%;
        }

        .news-content:not(.news-visual) {
            margin-top: 5rem;
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
            margin-block: 1.5em 0;
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

        .line-wrapper__mobile {
            display: block;
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