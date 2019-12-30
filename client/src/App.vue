<template>
  <div class="banzai-wrapper">
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
      isNotActiveHero() {
        return !this.$store.state.isActiveHero;
      }
    },
  }
</script>

<style scoped>
  .banzai-wrapper {
    min-height: 100vh;
    position: relative;
    overflow: auto;
  }
</style>
