<template>
    <section class="content-block content-hero" id="hero">
        <agile :options="mainCarousel">
            <!-- <img class="slide" :src="'./../images/banzai_logo.png'"/> -->
            <div class="slide metal"></div>
        </agile>
        <video></video>
    </section>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
    data() {
        return {
            mainCarousel: {
                dots: false,
                autoplay: true,
                autoplaySpeed: 300,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            dots: true,
                            unagile: true
                        }
                    }
                ]
            }
        } 
    },
    components: {
        agile: VueAgile
    }
}
</script>

<style>
    .agile {
        display: block;
    }

    video {
        display: none;
    }

    .metal {
        width: 600px;
        height: 100%;
        background-color: slategray;
        border: 1px solid;
    }

    .agile__list { 
        height: 100%;
    }

    .agile__track { 
        height: calc(100vh - 80px - 18px);
    }
    
    @media screen and (min-width: 800px) {
        .agile {
            display: none;
        }

        video {
            display: block;
        }
    }

</style>


