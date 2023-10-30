<script setup lang="ts">
    function toggleAnswer(event: MouseEvent) {
        event?.currentTarget instanceof Element && event.currentTarget.classList.toggle('active'); 
    }
</script>

<template>
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> FAQs </p>

    <div class="faq-box"> 

        <div class="faq-item" @click="toggleAnswer">
            <div class="faq-question hover:cursor-pointer">
                <p class="p-question"> What is Javascript? </p>
                <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
            </div>
            <div class="faq-answer">
                <p class="p-answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                    pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin. In sit amet mi mollis, bibendum felis at, ullamcorper
                    libero. Donec malesuada tempor ex at tempor. Sed posuere, turpis ac luctus pharetra, lorem lorem ultrices orci, non pharetra quam metus 
                    dignissim eros. Donec sed sapien vulputate, molestie nibh at, viverra odio. Sed malesuada, urna eu pulvinar ultricies, tortor quam facilisis 
                    mauris, sed tincidunt turpis ipsum eget magna.
                </p>
            </div>
        </div>

        
        <div class="faq-item" @click="toggleAnswer">
            <div class="faq-question hover:cursor-pointer">
                <p class="p-question"> How to write a good CSS? </p>
                <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
            </div>
            <div class="faq-answer">
                <p class="p-answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                    pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin.
                </p>
            </div>
        </div>

        
        <div class="faq-item" @click="toggleAnswer">
            <div class="faq-question hover:cursor-pointer">
                <p class="p-question"> Why HTML is so easy to learn? </p>
                <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
            </div>
            <div class="faq-answer">
                <p class="p-answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu eget purus varius rutrum a vitae mauris. Morbi augue neque, 
                    pretium sed finibus in, accumsan eget eros. Integer lacinia tempus sollicitudin. In sit amet mi mollis, bibendum felis at, ullamcorper
                    libero. Donec malesuada tempor ex at tempor.
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .faq-box {
        width: 80%;
        max-width: 60rem;
        margin: 0 auto;
       /*  border: .1rem solid pink; */
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ddd;
    }

    .faq-item {
        font-size: 1rem;
        padding-top: 2em;
        border-bottom: .25em solid #ccc;
    }

    .faq-question {
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .5em;
    }

    .p-question {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: .05em;
    }

    .custom-icon {
        font-size: 2.2rem;
    }

    .faq-answer {
        line-height: 1.5;
        /* Keeping the answer initially hidden */
        max-height: 0;
        overflow: hidden;
        transition: max-height 600ms ease-in-out;
    }

    .p-answer {
        font-size: 1.15rem;
        margin-bottom: .5em;
    }

    .faq-item.active .faq-answer {
        /* Once .active is applied, the answer shows up */
        max-height: 16rem;
    }

    .faq-item.active .custom-icon {
        transform: rotate(180deg);
    }

    .custom-icon {
        transition: transform 500ms ease-in;
    }

</style>