<template>
    <section class="content-block content-hero" id="hero">
        <agile :options="mainCarousel">
            <!-- <img class="slide" :src="'./../images/banzai_logo.png'"/> -->
            <div class="slide metal"></div>
        </agile>
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
        margin-top: 400px;
    }
    
    @media screen and (min-width: 800px) {
        .agile {
            display: none;
        }
    }

</style>


