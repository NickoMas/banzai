<template>
  <div class="banzai-wrapper">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Content from "./pages/Content.vue";

  export default {
    components: {
      Header, Content
    }
  }
</script>

<style scoped>
  .banzai-wrapper {
    height: 100%;
  }
</style>
