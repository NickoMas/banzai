<template>
    <main class="main-wrapper">
        <!-- <section class="content-block content-main bg-video-wrapper active-block" id="main"> -->
            <!-- <video src="./promo.mp4" preload="auto" autoplay="autoplay" loop="loop" muted="muted"></video> -->
            <!-- <img class="content-main__logo" src="./banzai_club_logo.jpg" title="banzai club logo"> -->
        <!-- </section> -->
        <section class="content-section mobile-content" v-if="isMobile">
            <Main></Main>
            <About></About>
            <Contacts></Contacts>
            <Coaches></Coaches>
            <Calendar></Calendar>
            <Footer></Footer>
        </section>
        <section class="content-section desktop-content" v-else>
            <transition name="banzai" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </main>
</template>

<script>
    import Main from '../pages/Main.vue';
    import About from '../pages/About.vue';
    import Contacts from '../pages/Contacts.vue';
    import Coaches from '../pages/Coaches.vue';
    import Calendar from '../pages/Calendar.vue';
    import Footer from "../components/Footer.vue";

    import { breakpoints } from '../helpers/constants';

    export default {
        components: {
            Main, About, Contacts, Coaches, Calendar, Footer
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
        }
    }
</script>

<style>
    main {
        position: relative;
        height: 100%;
        /* background: var(--main-bg-color); */
    }
    .main-wrapper {
        /* height: calc(100% - var(--hero-header-height)); */
        height: auto;
        top: 80px;
        position: absolute;
        /* bottom: 0; */
        width: 100%;
    }
    .content-section {
        height: 100%;
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


