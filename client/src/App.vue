<template>
  <div class="banzai-wrapper" v-bind:class="{ isActiveHero }">
    <!-- <img src="images/banzai_logo_min.jpg" alt="banzai_logo" height="65"> -->
    <Header></Header>
    <Content></Content>
    <!-- <Footer v-if="isNotActiveHero"></Footer> -->
  </div>  
</template>

<script>
  import Header from "./components/Header.vue";
  import Content from "./pages/Content.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      Header, Content, Footer
    },        
    computed: {
      isActiveHero() {
        return this.$store.state.isActiveHero;
      }
    },
  }
</script>

<style scoped>
  .banzai-wrapper {
    min-height: 100vh;
    position: relative;
    overflow: auto;
    background-color: black;
  }

  @media screen and (min-width: 768px) {
    .banzai-wrapper.isActiveHero {
      background-color: unset;
    }    
  }

</style>
