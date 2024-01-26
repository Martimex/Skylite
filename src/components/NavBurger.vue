<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';
import { ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(['redirectMessage']);

const isBurgerOpened = ref(false);

onMounted(() => {
    gsap.to(`.burger-icon`, {
        scrollTrigger: {
            trigger: `.quote-layout`,
            start: '0% 10%',
            end: '80% 20%',
            scrub: .25,
        },
        color: '#bbb',
    })
})


function openNav() {
    // Ref values are updated synchronously, so below exact order matters!
    isBurgerOpened.value = !isBurgerOpened.value;
    document.body.style.overflowY = isBurgerOpened.value? 'hidden' : 'auto';
    
}

</script>

<template>

    <div class="nav-burger">
        <Transition name="expand">
            <div class="nav-detailed" :class="{ active: isBurgerOpened}" v-if="isBurgerOpened"> 
                <ul class="nav-menu">
                    <a class="menu-layer" href="./story" @click.prevent="emit('redirectMessage', '/story')">
                        <li class="menu-item"> Our story </li>
                    </a>
                    <a class="menu-layer" href="./team" @click.prevent="emit('redirectMessage', '/team')"> 
                        <li class="menu-item"> Team </li>
                    </a>
                    <a class="menu-layer" href="./offer" @click.prevent="emit('redirectMessage', '/offer')"> 
                        <li class="menu-item"> Offer </li>
                    </a>
                    <a class="menu-layer" href="./contact" @click.prevent="emit('redirectMessage', '/contact')"> 
                        <li class="menu-item"> Contact </li>
                    </a>
                </ul>
            </div>
        </Transition>
        <font-awesome-icon icon="fa-solid fa-bars" :class="{ active: isBurgerOpened }" class="burger-icon" @click="openNav" />
    </div>

</template>

<style scoped>

    .nav-burger {
        --mt-distance: 1rem;
        --ml-distance: 1rem;

        position: fixed;
        top: 0;
        margin-top: var(--mt-distance);
        margin-left: var(--ml-distance);
        padding: 1.5rem;
        border-radius: 50%;
        backdrop-filter: blur(4px);
        z-index: 1;
    }

    .nav-detailed {
        position: absolute;
        top: calc(-1 * var(--mt-distance));
        left: calc(-1 * var(--ml-distance));
        background: #ddd;
        width: 100vw;
        height: 100dvh;
    }

    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column;
        height: 100dvh;
        padding-block: 7.5vh;
        width: 100%;
    }

    .menu-layer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .menu-layer::before {
        content: '';
        z-index: 0;
        top: 0;
        left: 0;
        position: absolute;
        display: block;
        height: 100%;
        background: #111;

        transition: 700ms all ease-in-out;
            width: 0%;
            opacity: .9;
    }

    .menu-item {
        z-index: 1;
        position: relative;
        display: inline-block;
        font-size: 4rem;
        color: #111;
        font-weight: 600;

        transition: all 700ms linear;
            opacity: .75;
    }

    .menu-item::after {
        content: '';
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 0%;
        padding: .1rem;
        background: #111;

        transition: all 700ms linear;
            opacity: 0;
    }

    .menu-item:hover  {
        opacity: 1;
        cursor: pointer;
    }

    .menu-layer:hover {
        cursor: pointer;
    }

    .menu-layer:hover .menu-item   {
        filter: invert(100%);
    }

    .menu-layer:hover .menu-item::after {
        opacity: 1;
        width: 100%;
    }

    .menu-layer:hover:before {
        width: 100%;
        opacity: 1;
    }

    .expand-enter-active, .expand-leave-active {
        transition: all 500ms ease-in-out;
    }

    .expand-enter-from, .expand-leave-to {
        transform: translateX(-100vw);
    }

    .expand-enter-from + .burger-icon, .expand-enter-active + .burger-icon, .expand-leave-to + .burger-icon, .expand-leave-active + .burger-icon {
        pointer-events: none;
    }

    .burger-icon {
        font-size: 2.5rem;
        color: #bbb0; /* Will be animated back to #bbb */
        filter: invert(100%);
        transition: 450ms all ease-in-out;
    }

    .burger-icon.active {
        transform: rotate(90deg);
    }

    .burger-icon:hover {
        cursor: pointer;
    }

    .no-click {
        /* Do not remove this class, since it's used within Start component */
        pointer-events: none;
    }


    @media screen and (orientation: portrait)   {

        .burger-icon {
            font-size: 4rem;
            color: #bbb !important;
            pointer-events: auto !important;
        }

        .nav-menu {
            padding-block: 25%;
        }
    }

</style>