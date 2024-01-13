<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['redirectMessage']);

const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => entry.target.classList.toggle('show', entry.isIntersecting))
}), {threshold: 0.45});

onMounted(() => {
    const footer = document.querySelector(`.footer`);
    footer && observer.observe(footer);
})

</script>

<template>

    <div class="footer">

        <div class="main">
            <p class="section-name section-title paragraph-main"> Skylite </p>
            <div class="line-main"></div>
        </div>
        
        <div class="footer-content">
            <div class="footer-section section-about">
                <span class="about-text section-title leading-relaxed"> 
                    Sky is the limit, it's true for us! We help you find the customers, so that they can reach you. Our mission is to provide marketing support for all
                    the clients, regardless of their brand or profession. 
                </span>
                <div class="resources-box">
                    <div class="line-alt__mobile"></div>
                    <div class="resource">
                        <a class="resource-text" href="./terms" @click.prevent="emit(`redirectMessage`, 'Terms and Conditions page')" > Check our Terms </a>
                    </div>
                </div>
            </div>

            <div class="footer-section section-socials">
                <p class="section-name section-title"> Follow us </p>
                <div class="socials-box">
                    <a class="social-link" href="/" @click.prevent="emit(`redirectMessage`, `Skylite's Facebook account page`)" > 
                        <font-awesome-icon icon="fa-brands fa-facebook" class="custom-icon icon-facebook" />
                    </a>
                    <a class="social-link" href="/" @click.prevent="emit(`redirectMessage`, `Skylite's Twitter account page`)" > 
                        <font-awesome-icon icon="fa-brands fa-twitter" class="custom-icon icon-twitter" />
                    </a>
                    <a class="social-link" href="/" @click.prevent="emit(`redirectMessage`, `Skylite's YouTube channel page`)" > 
                        <font-awesome-icon icon="fa-brands fa-youtube" class="custom-icon icon-youtube" />
                    </a>
                    <a class="social-link" href="/" @click.prevent="emit(`redirectMessage`, `Skylite's LinkedIn account page`)" > 
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="custom-icon icon-linkedin" />
                    </a>
                </div>
            </div>

            <div class="footer-section section-links">
                <p class="section-name section-title"> See also </p>

                <ul class="links-list">
                    <li class="link-item">
                        <a href="./story" @click.prevent="emit(`redirectMessage`, '/story')" >
                            <span class="link-text"> Our story </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="./team" @click.prevent="emit(`redirectMessage`, '/team')" >
                            <span class="link-text"> Skylite team </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="./offer" @click.prevent="emit(`redirectMessage`, '/offer')" >
                            <span class="link-text"> Company offer </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="./contact" @click.prevent="emit(`redirectMessage`, '/contact')" >
                            <span class="link-text"> Contact page </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-section section-contact">
                <p class="section-name section-title"> Contact </p>

                <div class="contact-record-box__mobile">
                    <div class="contact-record____mobile">
                        <p class="contact-name section-title"> Call us </p>
                        <div class="contact-entry"> 
                            <!-- <svg> </svg> -->
                            <span class="contact-text"> (+1) 123 456 789 </span>
                        </div>
                    </div>

                    <div class="contact-record____mobile">
                        <p class="contact-name section-title"> E-mail </p>
                        <div class="contact-entry"> 
                            <!-- <svg> </svg> -->
                            <span class="contact-text"> hello@skylite.com </span>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        <p class="section-title copyright-note no-targetable"> &copy; 2023 Skylite Agency (project ownership: MTX) </p>
    </div>
</template>

<style scoped>

    .section-title {
        /* font-family: Audiowide, 'Courier New', Courier, monospace; */
        font-weight: 600;
    }

    .section-name {
        font-size: 3rem;
        /* margin-bottom: .5em; */
        color: #222;
        text-shadow: .1rem .1rem .5rem #222;
        letter-spacing: -.1rem;
        -webkit-text-stroke: .05rem cyan;
	    /* text-stroke: .075rem cyan; */
    }

    .footer {
        font-size: 1rem;
        color: #000;
        position: relative;
        /* background: linear-gradient(45deg, #fdc830, #f37335); */
        padding: 10em 5vw;
        background-image: linear-gradient(180deg,  #fff, #bbb, #888, #666);

       /*  box-shadow: inset 0rem 0rem 1.4rem 11.2rem pink; */
        /* Creates wave effect */
        --mask:
        radial-gradient(8.94rem at 50% 12.00rem,#000 99%,#0000 101%) calc(50% - 8rem) 0/16rem 100%,
        radial-gradient(8.94rem at 50% -8rem,#0000 99%,#000 101%) 50% 4rem/16rem 100% repeat-x;
        -webkit-mask: var(--mask);
        mask: var(--mask);

    }

/*     .footer::before, .footer::after {
        --spike-height: .75rem;
        content: '';
        position: absolute;
        width: 100%;
        height: var(--spike-height);
        background: #000;
        -webkit-mask-image: url('../assets/triangle.svg');
        mask-image: url('../assets/triangle.svg');
        -webkit-mask-size: 8rem var(--spike-height);
        mask-size: 10rem var(--spike-height);
    }

    .footer::before {
        top: 0;
    }

    .footer::after {
        bottom: 0;
        transform: rotate(180deg);
    } */

    .footer-content {
        font-size: 1rem;
        margin-top: 2em;
        /* border: .3em solid salmon; */
        display: flex;
        justify-content: space-between;

        transition: all 600ms ease-in-out;
            opacity: 0;
            transform: translateX(-1rem);
    }

    .footer.show .footer-content {
        opacity: 1;
        transform: translateX(0rem);
    }

    .main {
        font-size: 1rem;
        margin-bottom: 1.75em;
        display: flex;
        align-items: center;
        justify-content: start;

        transition: all 600ms ease-in-out;
            opacity: 0;
    }

    .footer.show .main {
        opacity: 1;
    }
    
    .line-main {
        font-size: 1rem;
        width: 100%;
        margin-left: 1.5em;
        padding-block: .075em;
        background: #222;
        transform: translateY(.5em);
        border-radius: 9999px;
    }

    .paragraph-main {
        font-size: 3.3rem;
        filter: drop-shadow(0 0 .75em #fff);
        text-transform: capitalize;
        letter-spacing: .25rem;
    }

    .footer-section {
        display: flex;
        flex-direction: column;   
        box-sizing: border-box;
        /* border: .14rem solid red; */
    }

    .section-about {
        width: 30vw;
        padding-right: 3vw;
        /* margin-right: 2.5vw; */
        /* border: .1rem solid red; */
    }

    .section-socials {
        width: 20vw;
        padding-right: 2vw;
    }

    .section-links {
        width: 20vw;
        padding-inline: 1vw;
        /* border: .1rem solid gold; */
    }

    .section-contact {
        width: 20vw;
        padding-left: 2vw;
        /* border: .2rem solid blue; */
    }

    .about-text {
        font-size: 1.1rem;
        line-height: 150%;
    }

    .resources-box {
        font-size: 1rem;
        margin-top: 3em;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
    }

    .resource {
        position: relative;
        font-size: 1rem;
        padding: .5em;
        /* background: #111; */
        color: #222;
        border: .2em solid #333;
        box-shadow: 0 0 .25em .125em #333;
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
        
        transition: all 400ms ease-in;
    }

    .resource::before, .resource::after {
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

    .resource::before {
        border: .2rem groove #222;
        border-left-width: .4rem;

        transition: all 400ms ease-out;
            width: 0%;
    }

    .resource:hover:before {
        width: 100%;
    }

    .resource::after {
        background: #222;
        width: 100%;

        transition: all 400ms ease-out 200ms;
            opacity: 0;
    }

    .resource:hover:after {
        opacity: 1;
        
    }

    .resource:hover {
        cursor: pointer;
        /* background: #222; */
        color: #ddd;
        /* border-color: #222; */
        /* padding: .75em; */
    }

    .resource-text {
        font-size: 1.2rem;
        font-weight: 600;
        padding: .5em;
    }

    .socials-box {
        font-size: 1rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        justify-content: space-between;
    }

    .social-link {
        text-decoration: none;
        margin-top: 1rem;
    }

    .custom-icon {
        font-size: 2.25rem;
        filter: contrast(0%);
        transition: all 400ms ease-in-out;
        margin-right: .5em;
    }

    .custom-icon:hover {
        filter: contrast(100%) drop-shadow(0 0 .8rem #333);
        scale: 1.15;
    }

    .icon-facebook {
        color: #3b5998;
    }

    .icon-twitter {
        color: #1da1f2;
    }

    .icon-youtube {
        color: #ff0000;
    }

    .icon-linkedin {
        color: #0a66c2;
    }

    .link-item {
        margin-left: 1vw;
    }

    .link-text {
        position: relative;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 600;
        margin-block: .75em;
/*         border: 0em solid #222d;
        border-radius: 25%; */
        transition:  all 350ms ease-in-out;
            opacity: .75;
    }

    .link-text::after {
        content: '';
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 0%;
        padding: .1rem;
        background: #222;


        transition: all 400ms linear;
            opacity: 0;
    }

    .link-text:hover {
        /* border-bottom-width: .2em; */
        /* transform: translateY(-10%); */
        /* color: hsl(180, 80%, 80%); */
        /* font-weight: 700; */
        opacity: 1;
        color: #000;
    }

    .link-text:hover:after {
        opacity: 1;
        width: 100%;
        /* transform: scaleX(50); */
    }

/*     .link-text::after {
        content: '';
        font-size: 1rem;
        position: absolute;
        inset: auto auto -10% 0;
        width: 0px;
        height: .1em;
        background: skyblue;
    } */

    .contact-name {
        font-size: 1.5rem;
        margin-top: .5em;
        letter-spacing: .1rem;
        line-height: 2;
        margin-left: 1rem;
    }

    .contact-entry {
        font-size: 1rem;
        margin-block: 1em;
    }

    .contact-text {
        display: inline-block;
        font-style: italic;
        font-size: 1.2rem;
        /* padding-block: .25em; */
        margin-left: 1rem;
    }

    .copyright-note {
        font-size: 1.2rem;
        display: inline-block;
        width: 100%;
        position: absolute;
        margin-block: 1em;
        bottom: 0%;
        left: 0%;
        text-align: center;
        color: #111;

        transition: all 600ms ease-in-out;
            opacity: 0;
            transform: translateY(-1rem);
    }

    .footer.show .copyright-note {
        opacity: 1;
        transform: translateY(0rem);
    }

    @media screen and (orientation: portrait) and (max-height: 986px) {
        
        .footer {
            padding-top: 12.5em;
        }

        .footer-content {
            display: block;
        }

        .section-about, .section-socials, .section-links, .section-contact {
            width: 100%;
            text-align: center;
            padding-block: 1rem;
        }

        .section-socials, .section-links, .section-contact {
            padding-block: 2rem;
        }

        .socials-box {
            margin-inline: 10%;
        }

        .custom-icon {
            font-size: 3.5rem;
        }

        .links-list {
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(2, 1fr);
        }

        .link-text {
            font-size: 1.6rem;
            margin-block: 1em;
        }

        .section-name:not(.paragraph-main) {
            font-size: 3.5rem;
            margin-bottom: .5em;
        }

        .contact-record-box__mobile {
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: auto;
        }

        .contact-record____mobile {
            display: flex;
            flex-flow: column;
        }

        .resources-box {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: 1fr;
        }

        .line-alt__mobile {
            font-size: 1rem;
            width: calc(100% - 5vw);
            padding-block: .075em;
            background: #222;
            border-radius: 9999px;
        }

        .contact-name {
            font-size: 1.65rem;
            margin-left: 0;
        }

        .contact-text {
            font-size: 1.5rem;
            margin-left: 0;
        }

    }

    @media screen and (orientation: landscape) and (max-width: 986px) {
        
        .about-text {
            font-weight: 400;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 800px) {
        
        .section-name {
            white-space: nowrap;
            font-size: 2.75rem;
        }

        .about-text {
            font-size: 1.05rem;
            font-weight: 400;
        }

    }


</style>