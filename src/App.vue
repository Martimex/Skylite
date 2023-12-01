<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Piano from './components/Piano.vue';
import Start from './components/Start.vue';
import Intro from './components/Intro.vue';
import OfferShowcase from './components/OfferShowcase.vue';
import TeamShowcase from './components/TeamShowcase.vue';
import Reviews from './components/Reviews.vue';
import Stats from './components/Stats.vue';
import Companies from './components/Companies.vue';
import Newsletter from './components/Newsletter.vue';
import FAQ from './components/FAQ.vue';
import ContactShowcase from './components/ContactShowcase.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const age: number = 12;
const comp_name = ref('start');

const comp_name2 = 'piano';

function setComponentToStart() {
  comp_name.value = 'start';
}

function setComponentToPiano() {
  comp_name.value = 'piano';
}

/*
  This function can navigate user back to the very top of Landing Page every page refresh / reload

  window.onbeforeunload = () => {  
    window.scrollTo(0, 0);  
  }; 

*/

</script>

<template>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Audiowide:300,400,600,700,800&amp;lang=en" />
  <!-- <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Tenor+Sans:300,400,600,700,800&amp;lang=en" /> -->
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Playpen+Sans:300,400,600,700&amp;lang=en" />
  <!-- <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:300,400,600,700&amp;lang=en" /> -->
  <link href="../dist/output.css" rel="stylesheet" />
<!--   <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Piano msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

<!--   <main>
    HEY !!!
  </main> -->

  
  <!-- <Navbar /> -->

  <Piano v-if="comp_name === 'piano'" :age="age" :component="comp_name" @changeComponent="setComponentToStart" />
  <Start v-if="comp_name === 'start'" :msg="'Welcome to the start component'" @changeComponent="setComponentToPiano" />
  <Intro />
  <OfferShowcase />
  <TeamShowcase />
  <Reviews />
  <Stats />
  <Companies />
  <Newsletter />
  <FAQ />
  <ContactShowcase />
  <Footer />
  
  <!-- <component :is="routedComponent"></component> -->
  <!-- <RouterView />  --><!--   standard routing (SSR) -->
</template>

<style>

  #app, body {
    overflow-x: hidden !important;
    width: 100% !important;
    margin: 0 auto !important;
    padding:  0 !important;
  }
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
