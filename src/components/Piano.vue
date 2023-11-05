<script setup lang="ts">
import  { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    console.warn(document.querySelector('.green'));
    gsap.to(".green", {rotation: 27, x: -100, duration: 6});
});

const emit = defineEmits(['changeComponent']);

function switchToStart() {
    emit('changeComponent', 'start');
}

defineProps<{
    age: Number,
    component: String,
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="green">My age is: {{ age }}</h1>
        <h2> Piano (comp name is: {{ component }}) </h2>
        <button class="btn-go bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="switchToStart"> CHANGE COMPONENT </button>
    </div>
</template>

<style scoped>

    .greetings {
        min-height: 100vh;
    }
    .btn-go {
        position: absolute;
        bottom: 65%;
        left: 30%;
        /* background: #555; */
    }
/*     h1 {
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }
    
    h3 {
        font-size: 1.2rem;
    }
    
    .greetings h1,
    .greetings h3 {
        text-align: center;
    }

    @media (min-width: 1024px) {
        .greetings h1,
        .greetings h3 {
            text-align: left;
        }
    } */
</style>