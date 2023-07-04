<template>
  <div>
    <my-home></my-home>
  </div>
</template>

<script>
import MyHome from "./pages/Home.vue";
export default {
  name: "App",
  components: { MyHome },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
