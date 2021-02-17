<template>
  <div class="deck-page">
    <div class="search-container">
      <input
        v-on:keyup.enter="onSubmit"
        v-model="searchText"
        type="text"
        id="search-bar"
        placeholder="Search?"
      />
      <a href="#" v-on:click="onSubmit"><img class="search-icon" src="/search-icon.png" /></a>
    </div>

    <div class="container">
      <div v-for="(ship, index) in starshipList" :key="index" class="card">
        <div class="title">{{ ship.name }}</div>
        <div class="features">
          <ul>
            <li>Model : {{ ship.model }}</li>
            <li>Class : {{ ship.starship_class }}</li>
            <li>Made by {{ ship.manufacturer }}</li>
            <li>Cargo : {{ ship.cargo_capacity }}</li>
            <li>Consumables : {{ ship.consumables }}</li>
            <!-- <li>
              Pilots : {{ ship.pilots.length > 0 ? "" : "No pilot data" }}
            </li> -->
          </ul>
        </div>
        <!--/features-->
      </div>
    </div>

    <div class="footer">
      <div v-if="onloading" class="loading loading">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Deck",
  components: {},
  data: function () {
    return {
      data: false,
      urlBase: "https://swapi.dev/api/",
      starshipList: [],
      nextPage: "",
      onloading: false,
      searchText: "",
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var urlApi = this.urlBase + "starships/";
      this.urlBase + "starships/?page=" + this.page;
      this.onloading = true;
      this.starshipList = [];
      console.log(urlApi);
      fetch(urlApi)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.nextPage = data.next;
          this.starshipList = this.starshipList.concat(data.results);
        });
    },
    fetchNext() {
      // console.log("fetch Next");
      if (this.nextPage !== null) {
        this.onloading = true;
        fetch(this.nextPage)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.nextPage = data.next;
            this.starshipList = this.starshipList.concat(data.results);
            this.onloading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    fetchSearchData() {
      if (this.searchText !== "") {
        this.onloading = true;
        this.starshipList = [];
        var urlApi = this.urlBase + "starships/?search=" + this.searchText;

        fetch(urlApi)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.nextPage = data.next;
            this.starshipList = this.starshipList.concat(data.results);
            this.onloading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.fetchData();
      }
    },
    scroll(person) {
      console.log(person);
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          // console.log('at bottom');
          this.fetchNext();
        }
      };
    },
    onSubmit() {
      this.fetchSearchData();
    },
  },
  mounted() {
    this.scroll(this.person);
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Varela+Round);
*,
*:before,
*:after {
  box-sizing: border-box;
}

.deck-page {
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}

body {
  background: rgb(255, 255, 255);
  text-align: center;
}

.container {
  display: inline-block;
  width: 100%;
}

/* CARD  */
.card {
  cursor: pointer;
  background: #1f2124;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 50px 20px 20px 20px;
  width: calc(33.3333% - 40px);
  /* 1/3 minus the margins (20+20) */
  padding: 20px;
  text-align: center;
  color: white;
  float: left;
  height: 220px;
  min-width: 350px;
}
@media (max-width: 768px) {
  .card {
    margin: 10px 20px;
    width: calc(100% - 40px);
  }
  .card:first-child {
    margin-top: 20px;
  }
}
@media (max-width: 768px) {
}
.card .title {
  font-size: 25px;
}
.card .icon {
  margin: 50px 0;
}
.card .icon svg {
  width: 100px;
  height: 100px;
}
.card .icon svg path {
  fill: #f6b352;
}
.card .features ul {
  padding: 0;
  margin: 20px 0 50px 0;
  list-style-type: none;
}
.card .features ul li {
  margin: 10px 0;
  font-size: 14px;
}
.card .features ul li span {
  border-bottom: 2px dotted #f6b352;
}
.card .btn {
  display: block;
  background: #f6b352;
  color: white;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.9);
  transition: all 200ms ease-in-out;
  text-decoration: none;
}
.card .btn:hover {
  background: #f68657;
}

/* LOADING TEXT */
/* common */
.footer {
  height: 80px;
}
.loading {
  font-size: 40px;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
  color: white;
}
.loading span {
  display: inline-block;
  margin: 5px;
}

.loading span {
  animation: loading 0.7s infinite;
}
.loading span:nth-child(2) {
  animation-delay: 0.1s;
}
.loading span:nth-child(3) {
  animation-delay: 0.2s;
}
.loading span:nth-child(4) {
  animation-delay: 0.3s;
}
.loading span:nth-child(5) {
  animation-delay: 0.4s;
}
.loading span:nth-child(6) {
  animation-delay: 0.5s;
}
.loading span:nth-child(7) {
  animation-delay: 0.6s;
}

@keyframes loading {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}

/* Search Bar */

.search-container {
  padding-top: 30px;
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