<script setup lang="ts">

</script>

<template>
    <div class="some-box h-screen"></div>

    <div class="footer">

        <div class="main">
            <p class="section-name section-title paragraph-main"> Skylite </p>
            <div class="line-main"></div>
        </div>
        
        <div class="footer-content">
            <div class="footer-section section-about">
                <span class="about-text section-title"> 
                    Sky is the limit, but not for us! We help you find the customers, so that they can reach you. Our mission is to provide marketing support for all
                    the clients, regardless of their brand or profession. 
                </span>
                <div class="resources-box">
                    <div class="resource">
                        <span class="resource-text"> Check our Terms </span>
                    </div>
                </div>
            </div>

            <div class="footer-section section-socials">
                <p class="section-name section-title"> Follow us </p>
                <div class="socials-box">
                    <a class="social-link" href="#"> 
                        <font-awesome-icon icon="fa-brands fa-facebook" class="custom-icon icon-facebook" />
                    </a>
                    <a class="social-link" href="#"> 
                        <font-awesome-icon icon="fa-brands fa-twitter" class="custom-icon icon-twitter" />
                    </a>
                    <a class="social-link" href="#"> 
                        <font-awesome-icon icon="fa-brands fa-youtube" class="custom-icon icon-youtube" />
                    </a>
                    <a class="social-link" href="#"> 
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="custom-icon icon-linkedin" />
                    </a>
                </div>
            </div>

            <div class="footer-section section-links">
                <p class="section-name section-title"> See also </p>

                <ul class="links-list">
                    <li class="link-item">
                        <a href="#">
                            <span class="link-text"> Our story </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="#">
                            <span class="link-text"> Skylite team </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="#">
                            <span class="link-text"> Company offer </span>
                        </a>
                    </li>
                    <li class="link-item">
                        <a href="#">
                            <span class="link-text"> Contact page </span>
                        </a>
                    </li>
                </ul>
<!--                 <a href="#">
                    <span class="link-text"> Terms of Service </span>
                </a>
                <a href="#">
                    <span class="link-text"> Privacy Policy </span>
                </a> -->
            </div>

            <div class="footer-section section-contact">
                <p class="section-name section-title"> Contact </p>

                <p class="contact-name section-title"> Call us </p>
                <div class="contact-entry"> 
                    <!-- <svg> </svg> -->
                    <span class="contact-text"> (+1) 123 456 789 </span>
                </div>

                <p class="contact-name section-title"> E-mail </p>
                <div class="contact-entry"> 
                    <!-- <svg> </svg> -->
                    <span class="contact-text"> hello@skylite.com </span>
                </div>
            </div>

        </div>
        <p class="section-title copyright-note"> &copy; 2023 Skylite Agency (project ownership: MTX) </p>
    </div>
</template>

<style scoped>

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .footer {
        font-size: 1rem;
        color: #000;
        position: relative;
        /* background: linear-gradient(45deg, #fdc830, #f37335); */
        padding: 10em 5vw;
        background-image: linear-gradient(180deg,  #fff, #bbb, #888, #000);

       /*  box-shadow: inset 0rem 0rem 1.4rem 11.2rem pink; */


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
    }

    .main {
        font-size: 1rem;
        margin-bottom: 1.75em;
        display: flex;
        align-items: center;
        justify-content: start;
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

/*     .paragraph-main::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        padding-block: .1em;
        background: #222;
    } */

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

    .section-name {
        font-size: 3rem;
        /* margin-bottom: .5em; */
        color: #222;
        text-shadow: .1rem .1rem .5rem #222;
        letter-spacing: -.1rem;
        -webkit-text-stroke: .05rem cyan;
	    /* text-stroke: .075rem cyan; */
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
        font-size: 1rem;
        padding: .5em;
        /* background: #111; */
        color: #222;
        border: .2em solid #333;
        box-shadow: 0 0 .25em .125em #333;
        border-radius: 9999px;
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
        transition: all 600ms ease-in;
    }

    .resource:hover {
        cursor: pointer;
        background: #222;
        color: #ddd;
        border-color: #222;
        padding: .75em;
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
        filter: contrast(100%) drop-shadow(0 0 .6rem #444);
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
        /* border: .1rem solid green; */
    }

    .link-text:hover {
        /* border-bottom-width: .2em; */
        transform: translateY(-10%);
        color: hsl(180, 80%, 50%);
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
        margin-left: 1em;
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
        color: #bbb;
    }


</style>