<script setup lang="ts">

</script>

<template>
    <li class="weird-box p-1 rounded-2xl bg-cyan-200 "> <!--rounded-s-full-->
        <div class="bg-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-inner shadow-cyan-400 p-3 hover:shadow-blue-500" >
            <figure class="flex flex-col-reverse gap-6 p-6">
                <blockquote class="font-medium text-base"> The staff is really helpful and working with them is a pleasure! Will definitely use their services in the future. </blockquote>
                <figcaption class="flex">
                    <img loading="lazy" class="img-shadow w-16 h-16 rounded-full shadow-black" src="../assets/reviews-img/pobierz.jpg" />
                    <div class="grid grid-cols-1 grid-rows-2 content-center w-full ml-4">
                        <span class="font-bold text-2xl"> Ethan Noyle </span>
                        <span class="font-medium text-base my-auto"> Nord ship C.O.</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    </li>
</template>

<style scoped>
    .weird-box {
        width: 90%;
        min-height: 5rem;
        /* background: #222; */
        margin: 1rem;
        box-shadow: inset 0 0 .1rem .15rem #222;
    }

    .img-shadow {
        box-shadow: 0rem 0rem .2rem .12rem #222, 0rem 0rem .24rem .15rem blue;
        /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
    }
</style>