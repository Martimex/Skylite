<script setup lang="ts">

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Hosted by the experts </p>

    <div class="grid grid-cols-2 grid-rows-1 h-screen">
        <div class="teamsc-box-1 bg-gradient-to-r from-blue-300 to-blue-400 h-full rounded-r-lg">
            <p class="section-title heading-text tracking-wide"> Get to know us </p>
            <span class="section-title content-text leading-relaxed block">
                We are not just a regular PR company. We primarily perceive ourselves as a team of professionals willing to bring help to the others.
                If that seems interesting to you, make sure to check out the Team tab, and book a free online meeting with one of our experts. 
            </span>
            <div class="section-title action-box rounded-full bg-blue-200 inline-block"> 
                <span class="section-title action-text font-semibold"> Check our Team </span> 
            </div>
        </div>
        <div class="teamsc-box-2 bg-black h-full grid grid-cols-2 grid-rows-2 justify-around place-items-center">
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-team rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
<!--             <div class="team-profile">
                <img loading="lazy" class="img-shadow rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div>
            <div class="team-profile">
                <img loading="lazy" class="img-shadow rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
            </div> -->
        </div>
    </div>
</template>

<style scoped>


    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .heading-text{
        margin-bottom: 12.5%;
        font-size: 6vmin;
    }

    .content-text {
        font-size: 2.8vmin;
        /* margin-bottom: 12.5%; */
    }

    .action-box {
        margin-top: 12.5%;
        padding: 2em 4em;
    }

    .action-text {
        font-size: 2.5vmin;
    }

    .teamsc-box-1 {
        padding: 10%;
    }

    .teamsc-box-2 {
        position: relative;
        background-color: #000000;
/*         background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
 */    }
    
    .teamsc-box-2::before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0%;
        left: 0%;
        padding: 1.5em 0;
        background: linear-gradient(0deg, #000, #111);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
    }

    .teamsc-box-2::after {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0%;
        left: 0%;
        padding: 1.5em 0;
        background: linear-gradient(0deg, #111, #000);
        box-shadow:  0 .3em .5em 0 #000c,  0  .6em .5em #0005, 0 .75em  .4em #0003;
    }

    .team-profile {
        position: relative;
        transition: .3s all linear;
        width: 1em;
        /* Instead of padding 15vh, which prevents from showing images up, we're gonna use the scale trick */
        scale: 15;
        /* padding: 15vh; */
        border-radius: 50%;
        /* border: calc(.15em / 15) solid #ddd; */
        box-shadow: 0 0 calc(.1em / 15) calc(.25em / 15) #111, 0 0 calc(.6em / 15) calc(.45em / 15) #ccc, 0 0 calc(.9em / 15) calc(.55em / 15) #555;
    }

    .team-profile::after {
        /* This will be a separate <div> which will show up on hover and will show the employee name, role and a slight button to book a meeting */
        font-size: calc(1rem / 15);
        width: 1em;
        color: #ddd;
        content: 'Martha Smith \n Marketing manager \n Book a meeting';
        position: absolute;
        top: 0%;
        bottom: 0%;
        width: 100%;
        height: 100%;
        border-radius: 50%;

    }

    .team-profile:hover {
        scale: 16;
    }

    .img-team {

    }

</style>