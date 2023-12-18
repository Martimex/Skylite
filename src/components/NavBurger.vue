<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';
import { ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const isBurgerOpened = ref(false);

onMounted(() => {
    gsap.from(`.burger-icon`, {
        scrollTrigger: {
            trigger: `.quote-layout`,
            start: '0% 10%',
            end: '80% 20%',
            scrub: .25,
        },
        color: '#bbb0',
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
                    <li class="menu-item"> Our story </li>
                    <li class="menu-item"> Team </li>
                    <li class="menu-item"> Offer </li>
                    <li class="menu-item"> Contact </li>
                </ul>
            </div>
        </Transition>
        <font-awesome-icon icon="fa-solid fa-bars" class="burger-icon" @click="openNav" />
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
        /* background: #2220; */
        backdrop-filter: blur(4px);
        z-index: 1;
    }

    .nav-detailed {
        position: absolute;
        top: calc(-1 * var(--mt-distance));
        left: calc(-1 * var(--ml-distance));
        background: #ddd;
        
/*         width: 100vw;
        height: 100vh; */

        /* transition: 500ms all ease-in-out; */
        width: 100vw;
        height: 100vh;
    }

    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column;
        height: 100vh;
        padding-block: 10vh;
        width: 100%;
    }

    .menu-item {
        font-size: 4rem;
        color: #111;
        font-weight: 600;
    }

/*     .nav-detailed.active {

    }
 */
    .expand-enter-active, .expand-leave-active {
        transition: all 500ms ease-in-out;
        /* pointer-events: none; */
    }

    .expand-enter-from, .expand-leave-to {
        /* opacity: 0; */
        transform: translateX(-100vw);
    }

    .expand-enter-from + .burger-icon, .expand-enter-active + .burger-icon, .expand-leave-to + .burger-icon, .expand-leave-active + .burger-icon {
        /* opacity: 0; */
        pointer-events: none;
    }

    .burger-icon {
        font-size: 2.5rem;
        color: #bbb;
        filter: invert(100%);
    }

    .no-click {
        /* Do not remove this class, since it's used within Start component */
        pointer-events: none;
    }

</style>