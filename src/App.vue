<template>
  <div id="app">
    <Deck />
  </div>
</template>

<script>
import Deck from "./components/Deck.vue";

export default {
  name: "App",
  components: {
    Deck,
  },
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
