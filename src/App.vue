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
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 0px;
}
</style>
