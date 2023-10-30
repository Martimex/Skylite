<script setup lang="ts">

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> How can we help you </p>

    <div class="flex items-center justify-evenly h-screen">

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--ad"> ONLINE </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-rectangle-ad" class="custom-icon custom-icon--ad" />
            </div>
            <span class="section-title offer-text custom-icon--ad"> ADVERTISING </span>
        </div> <!--Online advertising-->  <!-- fa-rectangle-ad -->

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--glass"> SEO </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="custom-icon custom-icon--glass" />
            </div>
            <span class="section-title offer-text custom-icon--glass"> PRINCIPLES </span>
        </div> <!--SEO principles-->      <!-- fa-magnifying-glass -->

        <div class="offer-box flex flex-col items-center justify-evenly">  
            <span class="section-title offer-text custom-icon--globe"> BRAND </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-globe" class="custom-icon custom-icon--globe" />
            </div>
            <span class="section-title offer-text custom-icon--globe"> AWARENESS </span>
        </div> <!--Brand awareness-->     <!-- fa-globe -->

        <div class="offer-box flex flex-col items-center justify-evenly">
            <span class="section-title offer-text custom-icon--store"> MARKETING </span>
            <div class="light">
                <font-awesome-icon icon="fa-solid fa-store" class="custom-icon custom-icon--store" />
            </div>
            <span class="section-title offer-text custom-icon--store"> EVENTS </span>
        </div> <!--Marketing events-->    <!-- fa-store -->

    </div>
</template>

<style scoped>

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .all-offers {
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        /* background: #eee; */
    }

    .showcase-box {
        /* width: 50%; */
        border: .2rem solid pink;
    }

    .other-offers {
        /* width: 50%; */
        border: .2rem solid yellow;
    }

    .offer-box {
        height: 80%;
        width: 50%;
        /* margin: 20% 20%; */
        background: linear-gradient(135deg, #333, #222, #222);
        border-radius: 5%;
    }

    .offer-box:nth-child(1) {
        transform: translateX(0%) translateY(0%);
        box-shadow: inset 0em 0em .3em .3em hsl(102, 80%, 78%), 0em 0em 2.3em .3em hsl(102, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(102, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(2) {
        /* transform: translateX(-5%) translateY(-2%); */
        box-shadow: inset 0em 0em .3em .3em hsl(33, 80%, 78%), 0em 0em 2.3em .3em hsl(33, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(33, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(3) {
        /* transform: translateX(-10%) translateY(-4%); */
        box-shadow: inset 0em 0em .3em .3em hsl(177, 80%, 78%), 0em 0em 2.3em .3em hsl(177, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(177, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-box:nth-child(4) {
        /* transform: translateX(-15%) translateY(-6%); */
        box-shadow: inset 0em 0em .3em .3em hsl(3, 80%, 78%), 0em 0em 2.3em .3em hsl(3, 80%, 78%);
        /* box-shadow: 0em 0em .3em .3em hsl(3, 80%, 78%);  OLD BOX SHADOW DECLARATION */
    }

    .offer-text {
        font-size: 1.8rem;
        font-weight: 650;
        letter-spacing: .125em;
    }

    .light {
        font-size: 1rem;
        padding: 3em;
        /* border: .1rem solid white; */
        border-radius: 50%;
        box-shadow: 0 0 1.2em .3em #111;
    }

    .custom-icon {
        font-size: 8rem;
    }

    .custom-icon--ad {
        color: hsl(102, 80%, 78%);
    }

    svg.custom-icon--ad {
        filter: drop-shadow(0 0 1rem hsla(102, 80%, 78%, .5));
    }

    .custom-icon--glass {
        color: hsl(33, 80%, 78%);
    }

    svg.custom-icon--glass {
        filter: drop-shadow(0 0 1rem hsla(33, 80%, 78%, .5));
    }

    .custom-icon--globe {
        color: hsl(177, 80%, 78%);
    }

    svg.custom-icon--globe {
        filter: drop-shadow(0 0 1rem hsla(177, 80%, 78%, .5));
    }

    .custom-icon--store {
        color: hsl(3, 70%, 68%);
    }

    svg.custom-icon--store {
        filter: drop-shadow(0 0 1rem hsla(3, 80%, 78%, .5));
    }

</style>