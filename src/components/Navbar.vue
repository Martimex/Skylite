<script setup lang="ts">
/* import '../../dist/output.css'; */
</script>

<template>
    <header id="navbar-top" class="--fixed --flex-content-start --font-size-base _input-bg-color_  text-xl">
        <!-- 1 -->
        <div class="nav-box--logo">
            <div>
                <p class="link-text"> Logo </p>
            </div>
        </div>
        <!-- 2 -->
        <div class="nav-box--links --flex-content-center">
            <ul class="hyperlink-box --flex-content-between">
                <li class="link-text"> Our story </li> <!-- About us -->
                <li class="link-text"> Team </li> <!-- Our team -->
                <li class="link-text"> Offer </li>    <!-- Offer -->
            </ul>

            <div class="contact-box --flex-content-end">
                <div> 
                    <p class="link-text"> Contact -> </p>
                </div>
            </div>
        </div>

    </header>
</template>

<style scoped>

#navbar-top {
    /* filter: invert(100%); */
    color: #ddd;
    z-index: 2; /* At least 2, so it will not be covered by any other element */
    padding: 2em 3em;
    width: 100vw;
    backdrop-filter: blur(2px);
}

.nav-box--logo {
    width: 40%;
}

.nav-box--links {
    width: 60%;
}

.hyperlink-box {
    display: block;
    list-style: none;
    width: 50%;
}

.contact-box {
    width: 50%;
}

.link-text {
    font-size: 1.25rem;
    letter-spacing: .1rem;
    font-weight: 600;
    /* font-family: 'Audiowide', sans-serif; */
    border-bottom: .1em solid transparent;
    border-bottom-width: 0;
}

.link-text::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: .5rem;
    color: blue;
}

.link-text:hover {

}

.--font-size-base {
    font-size: 1rem;
}

.--font-size-2 {
    font-size: 2rem;
}

.--fixed {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 1em;
}

.--flex-content-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.--flex-content-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.--flex-content-start {
    display: flex;
    align-items: center;
    justify-content: start;
}

.--flex-content-end {
    display: flex;
    align-items: center;
    justify-content: end;
}

</style>