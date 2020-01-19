<template>
  <section class="content-block content-hero" id="hero">
    <agile :options="heroCarousel">
      <!-- <img class="slide" src="images/coaches_eug.jpg"> -->
      <img class="slide" src="images/gallery-1.jpeg" />
      <img class="slide" src="images/gallery-2.jpeg" />
      <img class="slide" src="images/gallery-3.jpeg" />
      <!-- <img class="slide" src="images/eug-1.jpeg"> -->
      <!-- <img class="slide" src="images/coaches_kir.jpg"/> -->
      <!-- <img class="slide" src="images/banzai_logo.png"/> -->
      <!-- <div class="slide metal"></div> -->
      <!-- <template slot="prevButton">prev</template>
      <template slot="nextButton">next</template>-->
    </agile>
    <div class="fullscreen-bg">
      <!-- <video class="fullscreen-bg__video" src="videos/promo.mp4" autoplay="autoplay" preload="auto" loop="loop" muted="muted"></video> -->
      <video
        class="fullscreen-bg__video"
        src="videos/banzai-2.mp4"
        autoplay="autoplay"
        preload="auto"
        loop="loop"
        muted="muted"
      ></video>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  data() {
    return {
      heroCarousel: {
        dots: false,
        navButtons: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              unagile: true
            }
          }
        ]
      }
    };
  },
  components: {
    agile: VueAgile
  }
};
</script>

<style>
.agile {
  display: block;
}

.fullscreen-bg__video {
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
  /* height: calc(100vh - 80px - 18px); */
}

.agile__actions {
  background-color: #fff;
}

#hero.content-hero {
  padding: 0;
}

@media screen and (min-width: 800px) {
  .agile {
    display: none;
  }

  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    /* z-index: -100; */
  }

  .fullscreen-bg__video {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>


