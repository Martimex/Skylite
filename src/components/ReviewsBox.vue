<script setup lang="ts">
    import ReviewsContent from '../assets/reviewsContent';
    
    defineProps<{data: typeof ReviewsContent; no: number;}>();

    function getIMGPath(img_name: string): string {
        return `../src/assets/reviews-img/${img_name}.jpg`;
    }

</script>

<template>
    <li class="weird-box p-1 rounded-2xl"> <!--rounded-s-full-->
        <div class="weird-contentbox bg-gradient-to-r shadow-inner p-3" >
            <figure class="flex flex-col-reverse gap-6 p-6">
                <blockquote class="font-medium text-base leading-relaxed"> {{ data[no].comment }} </blockquote>
                <figcaption class="flex">
                    <img loading="lazy" class="img-shadow w-16 h-16 rounded-2xl shadow-black" :src="getIMGPath(data[no].img_src.toString())" />
                    <div class="grid grid-cols-1 grid-rows-2 content-center w-full ml-4">
                        <span class="font-bold  text-2xl"> {{ data[no].name }} {{ data[no].surname }} </span>
                        <span class="font-normal h-full italic text-base my-auto"> {{ data[no].company_name }} </span>
                    </div>
                </figcaption>
            </figure>
        </div>
    </li>
</template>

<style scoped>
    .weird-box {
        box-sizing: border-box;
        width: 100%;
        margin-top: 10vh;
        /* background: linear-gradient(45deg, #ddd, #0000, #eee); */
        background: linear-gradient(45deg, #ddd, #eee);
        /* min-height: 5rem; */
        /* background: #222; */
        /* margin: 1rem; */
        /* box-shadow: inset 0 0 .1rem .15rem #111; */
        box-shadow: 0 .1rem 1.1rem .4rem #222, inset .1rem 0 1rem .35rem #bbb;
        filter: saturate(120%);
    }

    .weird-contentbox {
        padding: 1rem;
    }

    .img-shadow {
        height: 5rem;
        width: 5rem;
        box-shadow: 0rem 0rem .2rem .12rem #333, 0rem 0rem .24rem .15rem #bbb;
       /*  border: .1em dashed #444; */
        /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
    }

    @media screen and (orientation: landscape) and (max-width: 1024px) {
        blockquote {
            font-size: 1.1rem;
        }
    }

</style>