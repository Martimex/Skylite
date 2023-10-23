<script setup lang="ts">

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Connect with us </p>

    <div class="newsletter-main min-h-screen flex text-white"> 
        <div class="newsletter-context grid grid-cols-1">
            <!-- 1 -->
            <div class="newsletter-heading flex-col h-full">
                <p class="section-title newsletter-header text-5xl  text-center block"> Out of the box thinking in your inbox </p>
                <span class="section-title newsletter-desc text-2xl  text-center block"> 
                    Make sure to subscribe to our weekly newsletter for tips & tricks related to online marketing and building brand awarness. Cancel anytime.
                </span>
            </div>
            <!-- 2 -->
            <div class="newsletter-action flex flex-col justify-evenly h-full">
                <div class="flex items-center content-evenly">
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="First name" placeholder="First name..." class="form-box valid bg-red-600 text-yellow-300" />
                    <input aria-required="true" type="text"  required aria-invalid="false" aria-placeholder="Last name"  placeholder="Last name..." class="form-box bg-red-600" />
                    <input aria-required="true" type="email" required aria-invalid="false" aria-placeholder="E-mail"  placeholder="E-mail..." class="form-box invalid bg-red-600" />
                </div>
                <div class="action-box flex justify-center w-full">
                    <button class="action-btn section-title"> Subscribe</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .newsletter-main {
        /* margin: 10%; */ /* Looks fun ngl */
        padding: 5% 10%;
        background: #111;
        box-shadow: inset 0 0 .5em 1em #000;
    }

    .newsletter-context {
        /* height: 90vh; */
        grid-template-rows: 45% 55%;
        justify-content: space-between;
        /* border: .1rem solid wheat; */
        /* box-shadow: inset 0 0 .5em 1em #222; */
    }

    .newsletter-heading {
        /* height: 40%; */
        /* border: .1rem solid lightgoldenrodyellow; */
    }

    .newsletter-action {
        /* height: 80%; */
        /* border: .1rem solid greenyellow; */
        justify-content: space-around;
    }

    .newsletter-header {
        margin-bottom: 7.5%;
        text-decoration: underline;
    }

    .newsletter-desc {
        margin-bottom: 5%;
    }

    .form-box {
        font-size: 1.1rem;
        box-sizing: border-box;
        width: 23%; /* 23% + (margin_left + margin-right) = 33%  */
        border-radius: 9999px;
        margin: 0 5%;
        padding: 1.5em;
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .3em .5em #222;
        background: #444;
        color: #ccc;
        text-shadow: .2em .2em .1em #222;
    }

    .valid {
        border: .1rem solid hsl(120, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(120, 53%, 75%);
    }

    .invalid {
        border: .1rem solid hsl(5, 73%, 75%);
        box-shadow: inset .1em .1em .2em .3em #333, 0 0 .1em .15em #111, 0 0 .15em .25em hsl(5, 73%, 75%);
    }

    .action-box {
        /* border: .1rem solid black; */
        margin-top: 5%;
    }

    .action-btn {
        font-size: 1.2rem;
        color: #ccc;
        text-shadow: .2em .2em .1em #222;
        width: 33%;
        padding: 1.5rem;
        /* margin: 5%; */
        background: #444;
        border: .1em double #222;
        box-shadow: inset 0em 0em .4em .6em #333, 0 0 .5em .45em #222, 0 0 .6em 1em #111;
        /* color: #ade; */
        border-radius: 1rem;
    }

</style>