<template>
  <div class="row justify-content-evenly" :class="{nightModeMoviesWrapper : $store.state.generalIsNightMode}">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
  <div :class="{nightModeMoviesWrapper : $store.state.generalIsNightMode}">
    <PaginationComponent @getPrevPage="prevPage" @getNextPage="nextPage" @getFirst="firstPage" @getLast="lastPage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "../components/movieCard/MovieCard.vue";
import PaginationComponent from '../components/Pagination/Pagination.vue'
import { getAllMoviesOnePage,getAllMoviesAllPages } from "../services/movies";
export default {
  name: "HomeView",
  data() {
    return {
      movies: [],
      pageNum: 1,
    };
  },
  components: {
    MovieCard,
    PaginationComponent
  },
  beforeMount() {
    this.$router.push(`/movies?page=${this.pageNum}`);
  },
  mounted() {
    this.getMovies(this.pageNum);
    getAllMoviesAllPages()
  },
  methods: {
    async getMovies(num) {
      try {
        this.movies = await getAllMoviesOnePage(num);
      } catch (err) {
        console.log(err);
      }
    },
    async nextPage(){
      try{
        this.pageNum +=1;
        this.$router.push(`/movies?page=${this.pageNum}`);
        this.movies = await getAllMoviesOnePage(this.pageNum);
      }catch(err){
        console.log(err)
      }
    },
    async prevPage(){
      try{
        this.pageNum <=1 ? 1 : this.pageNum-=1;
        this.$router.push(`/movies?page=${this.pageNum}`);
        this.movies = await getAllMoviesOnePage(this.pageNum);
      }catch(err){
        console.log(err)
      }
    },
    async firstPage(){
      try{
        this.pageNum =1;
        this.$router.push(`/movies?page=${this.pageNum}`);
        this.movies = await getAllMoviesOnePage(this.pageNum);
      }catch(err){
        console.log(err)
      }
    },
    async lastPage(){
      try{
        this.pageNum =this.movies.length;
        this.$router.push(`/movies?page=${this.pageNum}`);
        this.movies = await getAllMoviesOnePage(this.pageNum);
      }catch(err){
        console.log(err)
      }
    }
  },
};
</script>
<style>
.nightModeMoviesWrapper{
  background-color: #1B1A17;
}
</style>
