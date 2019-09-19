<template>
    <main class="main-wrapper">
        <!-- <section class="content-block content-main bg-video-wrapper active-block" id="main"> -->
            <!-- <video src="./promo.mp4" preload="auto" autoplay="autoplay" loop="loop" muted="muted"></video> -->
            <!-- <img class="content-main__logo" src="./banzai_club_logo.jpg" title="banzai club logo"> -->
        <!-- </section> -->
        <!-- <Coaches></Coaches> -->
        <transition name="banzai" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>
export default {
    watch: {
        '$route' (a,b) {
            console.log('ha', a, b);
            this.$emit('metal', 3);
        }
    }
}
</script>

<style>
    .main-wrapper {
        height: calc(100% - 5rem);
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .metal {
        width: 600px;
        height: 100px;
        background-color: slategray;
        border: 1px solid;
    }
</style>


