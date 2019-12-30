<template>
    <main class="main-wrapper" ref="main">
        <!-- <section class="content-block content-main bg-video-wrapper active-block" id="main"> -->
            <!-- <video src="./promo.mp4" preload="auto" autoplay="autoplay" loop="loop" muted="muted"></video> -->
        <!-- <img class="content-main__logo" src="images/banzai_club_logo.jpg" title="banzai club logo"> -->
        <!-- </section> -->
        <section class="content-section mobile-content" v-if="isMobile">
            <Hero></Hero>
            <About></About>
            <Contacts></Contacts>
            <Coaches></Coaches>
            <Calendar></Calendar>
            <!-- <Footer></Footer> -->
        </section>
        <section class="content-section desktop-content" v-else>
            <transition name="banzai" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </main>
</template>

<script>
    import Hero from '../pages/Hero.vue';
    import About from '../pages/About.vue';
    import Contacts from '../pages/Contacts.vue';
    import Coaches from '../pages/Coaches.vue';
    import Calendar from '../pages/Calendar.vue';
    import Footer from "../components/Footer.vue";

    import { breakpoints } from '../helpers/constants';

    export default {
        components: {
            Hero, About, Contacts, Coaches, Calendar, Footer
        },
        // created() {
        //     console.log('mobile', this.isMobile)
        // },
        computed: {
            isMobile() {
                return window.innerWidth <= breakpoints.mobile
            }
        },
        watch: {
            '$route' (a,b) {
                console.log('ha', a, b);
                this.$emit('metal', 3);
            }
        },
    }
</script>

<style>
    main {
        position: relative;
        height: 100%;
        /* background: var(--main-bg-color); */
    }
    .main-wrapper {
        top: var(--header-height__mobile);
        position: relative;
        width: 100%;
    }
    .content-section {
        height: auto;
    }
    .content-main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-main__logo {
        height: auto;
        max-height: 90%;
        padding: 30px;
    }

</style>


