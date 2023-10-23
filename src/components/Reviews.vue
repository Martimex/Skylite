<script setup lang="ts">
    import ReviewsBox from './ReviewsBox.vue';
</script>

<template>
    
    <p class="section-title text-center text-blue-400 font-bold text-5xl tracking-wide my-16"> What our clients say </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-none">
        <ul>
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
        </ul>
        <ul class="hidden sm:block">
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
        </ul>
        <ul class="hidden lg:block">
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
            <ReviewsBox />
        </ul>

    </div>
</template>

<style scoped>
    .section-title {
        font-family: Audiowide, 'Courier New', Courier, monospace;
    }

</style>