<template>
  <div class="banzai-wrapper">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
  import Header from "./pages/Header.vue";
  import Main from "./pages/Main.vue";

  export default {
    components: {
      Header, Main
    }
  }
</script>

<style scoped>
  .banzai-wrapper {
    height: 100%;
  }
</style>
