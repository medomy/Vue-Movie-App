<template>
  <nav class="navbar" :class="{ navbaraftersearch: searchedMovies.length , nightModeNavbar : isNightMode }">
    <div>
      <h2 :class="{nightmodetext : isNightMode}"><router-link to="/">movies-App</router-link></h2>
    </div>
    <div class="menu">
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <router-link :class="{nightmodetext : isNightMode}" :to="{ name: item.name }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="search-area">
      <form>
        <input
          type="text"
          placeholder="search..."
          v-model="searchText"
          @input="debounceVal"
          ref="search"
        />
      </form>
      <div class="search-list" v-if="searchedMovies.length">
        <ul>
          <li v-for="movie in searchedMovies" :key="movie.id">
            <router-link :to="{ name: 'details', params: { id: movie.id } }">{{
              devideTitle(movie.title)
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            v-model="isNightMode"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >{{isNightMode ? "light mode" : "night mode"}}</label
          >
        </div>
    <div class="hamburger" @click="smallScreenMenu">
      <span v-for="span in spans" :key="span"></span>
    </div>
  </nav>
  <div v-if="isSmall" class="small-screen-menu" :class="{nightModeNavbar : isNightMode}">
    <div v-for="item in menuItems" :key="item.id" :class="{nightModeNavbar : isNightMode}">
      <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { searchForMovs } from "../../services/movies";

export default {
  name: "NavBar",
  data() {
    return {
      menuItems: [
        { id: 1, name: "home" },
        { id: 2, name: "about" },
        { id: 3, name: "favourites" },
      ],
      spans: [1, 2, 3],
      isSmall: false,
      searchText: "",
      debouncedSearchText: "",
      searchedMovies: [],
      isNightMode : false
    };
  },
  updated() {},
  mounted() {},
  //   computed:{
  //   searchText:{
  //     get(){
  //       return this.$refs.search.value;
  //     },
  //     set(value){
  //       if(this.$refs.search.value != value){
  //         this.$refs.search.value = value;
  //         // Do other stuff here
  //       }
  //     }
  //   }
  // },

  methods: {
    smallScreenMenu() {
      this.isSmall = !this.isSmall;
    },
    async debouncedSearch(val) {
      try {
        const searchedMovs = await searchForMovs(val);
        this.searchedMovies = searchedMovs;
      } catch (err) {
        console.log(err);
      }
    },
    debounceVal() {
      _.debounce(() => {
        this.debouncedSearchText = this.searchText;
      }, 1000)();
    },
    // async searchForMovs() {
    //   console.log(this.searchText);
    //   try {
    //     await this.debouncedSearch();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    devideTitle(str) {
      return str.substr(0, 12) + "....";
    },
  },
  watch: {
    async debouncedSearchText(newVal) {
      try {
        if (newVal) {
          await this.debouncedSearch(newVal);
          console.log(this.searchedMovies.length);
        } else {
          this.searchedMovies = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    isNightMode(val){
      this.$store.dispatch('changeNightMode' , val)
      console.log(this.$store.state.generalIsNightMode)
    }
  },
};
</script>

<style>
.navbar {
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  background-color: #484b6a;
  margin-bottom: 0px;
  color: black;
}
.nightModeNavbar{
  background-color: #121212!important;
  color : white
}
.nightmodetext{
  color: wheat!important;;
}
.navbaraftersearch {
  margin-bottom: 100px;
}
.navbar .search-area {
  overflow: visible;
  max-height: 50px;
}
.navbar h2 {
  font-size: 24px;
  font-weight: 900;
}
.navbar h2 a {
  text-decoration: none;
}
.hamburger {
  cursor: pointer;
  padding: 8px;
  display: none;
}
.hamburger span {
  width: 48px;
  border: 1px solid black;
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.navbar ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}
.navbar ul li a {
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 800;
}
.navbar form input {
  height: 2.5rem;
  border-radius: 25px;
  padding: 0.5rem;
  border: transparent;
  margin-right: 0.5rem;
}
.navbar form button {
  cursor: pointer;
  height: 2rem;
  text-align: center;
  background-color: transparent;
  transition-delay: 0.2s;
  transition-property: all;
  transition-duration: 0.5s;
  border: 1px solid black;
  border-radius: 6px;
}
.navbar form button:hover {
  background-color: #42b983;
}
.navbar ul li a.router-link-exact-active {
  color: #42b983;
}
.small-screen-menu {
  width: 100%;
  background-color: #484b6a;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.small-screen-menu div {
  border-bottom: 1px solid black;
  padding: 8px;
  background-color: #484b6a;
  color: black;
  text-align: center;
  cursor: pointer;
  transition-delay: 0.2s;
  transition-property: background-color;
  transition-duration: 0.5s;
}
.small-screen-menu div:hover {
  background-color: #f0a500;
}
.small-screen-menu a {
  text-decoration: none;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-list {
  z-index: 100;
  overflow: scroll;
  max-height: 100px;
  margin-top: 0.5rem;
}
.search-list ul {
  list-style-type: none;
  background-color: white;
  display: block;
  padding: 0;
  margin: 0;
}
.search-list ul li {
  padding: 6px;
  border-bottom: 1px solid black;
  background-color: white;
  transition-delay: 0.2s;
  transition-property: background-color;
  transition-duration: 0.5s;
}
.search-list ul li a {
  text-decoration: none;
  color: black;
}
.search-list ul li:hover {
  cursor: pointer;
  background-color: #42b983;
}

@media only screen and (max-width: 600px) {
  .menu {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
@media only screen and (min-width: 600px) {
  /*.menu {
    display: none;
  }*/
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .hamburger {
      display: none;
    }
    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .small-screen-menu {
      display: none;
    }
  }
}
</style>