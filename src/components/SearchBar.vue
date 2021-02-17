<template>
  <div class="search-bar">
    <div class="search-container">
      <input v-model="searchText" type="text" id="search-bar" placeholder="Search?" />
      <a href="#"><img class="search-icon" src="/search-icon.png" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  data: function () {
    return {
      searchText: "",
    };
  },
};
</script>

<style>
.search-container {
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar {
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;
}
input#search-bar:focus {
  border: 1px solid rgb(214, 183, 6);
  transition: 0.35s ease;
  color: #000000;
}
input#search-bar:focus::-webkit-input-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}
input#search-bar:focus::-moz-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}
input#search-bar:focus:-ms-placeholder {
  transition: opacity 0.45s ease;
  opacity: 0;
}

.search-icon {
  position: relative;
  float: right;
  width: 30px;
  height: 30px;
  top: -35px;
  right: 10px;
}
</style>