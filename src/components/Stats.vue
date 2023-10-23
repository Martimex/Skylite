<script setup lang="ts">

</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> Company in numbers </p>

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
    </div>
</template>

<style scoped>
    .icon-frame {
        border: .8em double #222;
        box-shadow: 0 0 .6em .12em #111, inset 0 0 .225em .12em #333;
    }
    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
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