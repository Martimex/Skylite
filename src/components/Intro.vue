<script setup lang="ts">
import '../../dist/output.css';
</script>

<template>
    <section class="">
        <section class="section-sec bg-black min-h-screen">
            <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide"> Who we are </p>
            <!-- 1 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-gray-700" data-grid-order="normal" data-no="1">
                <div class="grid-text items-center justify-center text-large leading-loose">
                    Formally, a team of professionals, who have over 10 years of experience in public relations, marketing and online advertising. On a
                    private field, we are a group of friends, who one day decided to change their life and make their first step to change the world.
                </div>
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"> </div>
            </div>

            <!-- 2 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="reverse" data-no="2">
                <div class="grid-text items-center justify-center text-large leading-loose">
                    In short - we help others shine bright. Our mission is to provide a strategy on how to increase popularity and online presence for both
                    individual clients as well as for companies. Our SEO and PR experts are ready to help you, despite how far you have already come.
                </div>
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"> </div>
            </div>

            <!-- 3 -->
            <div class="grid-container  text-white grid-cols-2 grid-rows-1 justify-items-center gap-x-6 shadow-inner shadow-emerald-400" data-grid-order="normal" data-no="3">
                <div class="grid-text items-center justify-center text-large leading-loose">
                    No matter how good you are at what you do - if noone knows about you, that means no clients, na sold products or services, no outcomes.
                    Therefore, we strongly believe that nowadays the presence means success. Since many people are unsure where to start - we are there to assist them. 
                </div>
                <div class="grid-img items-center justify-center bg-cover bg-center rounded-xl shadow-md shadow-slate-100"> </div>
            </div>
            

            <!-- IN ORDER FOR TAILWIND TO WORK, DON'T FORGET TO RECOMPILE IT WITH THIS COMMAND: npm run tailwind-custom-start -->
            <!-- tailwind-custom-start  is the semi-created alias for:  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch  (which will work fine aswell)-->

            <!-- <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis velit felis. Pellentesque pretium semper ex, eget porttitor purus porta id. Ut efficitur pharetra nunc, et bibendum felis aliquam vitae. Pellentesque sem nisl, lobortis non fringilla nec, finibus a neque. Vestibulum sagittis, nibh dictum sollicitudin malesuada, eros erat tempus neque, vitae sollicitudin urna eros ac nisl. Cras cursus, quam ac semper porta, tellus neque pulvinar libero, eu ultricies ex ligula eget diam. Phasellus id purus laoreet, ornare felis ac, luctus nisl. Nullam pharetra dictum odio lobortis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu erat quis eros interdum imperdiet. Vivamus lacinia, quam nec lacinia iaculis, magna nisi tempus metus, quis blandit eros felis non tortor. Curabitur egestas eleifend augue id ultricies. Vestibulum placerat ut urna nec scelerisque. Morbi felis orci, vehicula ut ipsum sed, congue fermentum turpis.
            </div>
            <div>
                Etiam scelerisque risus eu sollicitudin cursus. Proin ultricies id nisi ac consequat. Cras at mollis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec justo massa, convallis vitae mi a, vehicula commodo mauris. Nulla facilisi. Nam ac egestas ex, eget sagittis tellus. Quisque a feugiat mauris, non pharetra lacus. Suspendisse congue ultricies ligula, vel sagittis lacus. Vestibulum ornare, nunc at rhoncus vehicula, dolor nulla blandit leo, id dictum metus lacus rutrum erat. Praesent venenatis elit enim, eu scelerisque leo sodales a. Integer tincidunt risus nisi, at viverra magna varius in. Aliquam et leo sodales, semper enim id, luctus metus. Duis sit amet lectus odio. Donec bibendum massa dictum, pellentesque enim sit amet, rutrum risus.
            </div>
            <div>
                Nulla sit amet felis dolor. Nulla vitae eros nec orci rutrum blandit. Aenean placerat enim non venenatis volutpat. Vestibulum erat risus, cursus non urna ut, placerat dignissim purus. Nulla luctus lectus purus, id venenatis dolor ornare non. Etiam tempus condimentum elit et sodales. Maecenas fringilla, metus quis imperdiet rhoncus, nunc urna ultrices elit, sit amet convallis ipsum nibh vitae lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div> -->
        </section>
    </section>
</template>

<style scoped>

    .section-sec {
        display: grid;
        place-content: center;
    }

    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

    .grid-container {
        display: grid;
        /* border: .2rem solid pink; */
        /* height: 90vh; */
        padding: 7vw;
        /* margin: 3.5vw 0; */
        column-gap: 8rem;
        grid-template-columns: 45fr 55fr;
/*         background-image: url('../assets/intro-1.jpg');
        backdrop-filter: saturate(40%) opacity; */
    }

    .grid-text {
        font-family: Lato, 'Courier New', Courier, monospace;
        display: flex;
        font-size: 1.5rem;
        margin: 20% auto;
    }

    .grid-img {
        display: flex;
        width: 100%;
    }

    .grid-container[data-no="1"] .grid-img{
        background-image: url('../assets/intro-1.jpg');
    }

    .grid-container[data-no="2"] .grid-img {
        background-image: url('../assets/intro-2.jpg');
    }

    .grid-container[data-no="3"] .grid-img {
        background-image: url('../assets/intro-3.jpg');
    }



    [data-grid-order="reverse"] {
        background-color: #111;
        grid-template-columns: 55fr 45fr;
    }

    [data-grid-order="reverse"] .grid-text {
        order: 1;
    }

</style>