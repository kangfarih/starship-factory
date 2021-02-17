<template>
  <div class="deck-page">
    <h1>Hello Deck</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Deck",
  props: {},
  data: function () {
    return {
      data: false,
    };
  },
  created: function () {
    console.log("this is created");
    Vue.axios.get('https://swapi.dev/api/starships').then((response) => {
      console.log(response.data);
    });
  },
  methods: {
    fetchData() {},
  },
};
</script>

<style>
</style>