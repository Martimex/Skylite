<script setup lang="ts">
</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Trusted by the best </p>

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
<!--                 <span class="rd-box flex items-center justify-center">
                    <font-awesome-icon icon="fa-brands fa-unity" class="custom-icon scale-150" />
                </span> -->
            </div>
        </div>
    </div>

</template>

<style scoped>

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
        box-shadow: .6em 0 4.5em 0 greenyellow, inset .6em 0 7.5em 0 #333;
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

    .custom-icon {
        font-size: 4rem;
        color: cyan;
        color: #111;
    }

    .custom-icon/* [icon="fa-brands fa-quora"] * */ {
        color: greenyellow;
    }

    .slide-1 {
        background-image: linear-gradient(45deg, #111, #222, #223);
        transform: translateX(5%) rotate(-5deg);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
        border-bottom: .1em solid #222;
    }

    .slide-2 {
        background-image: linear-gradient(45deg, #223, #222, #111);
        border: .3em double #222;
        /* transform: rotate(10deg); */
    }

    .slide-3 {
        background-image: linear-gradient(45deg, #111, #222, #223);
        transform: translateX(5%) rotate(5deg);
        box-shadow:  0 -.3em .5em 0 #000c,  0  -.6em .5em #0005, 0 -.75em  .4em #0003;
        border-top: .1em solid #222;
    }

</style>