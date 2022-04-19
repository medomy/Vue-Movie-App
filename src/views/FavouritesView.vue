<template>
  <div class="row justify-content-evenly" :class="{nightModeFavouritesWrapper : $store.state.generalIsNightMode}">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from '../components/movieCard/MovieCard.vue'
export default {
  
  name : 'FavouritesView',
  components : {
    MovieCard
  },
  data(){
    return{
      movies : this.$store.state.favourites
    }
  }
};
</script>

<style>
.nightModeFavouritesWrapper{
  height: 100%;
  background-color: #1B1A17;
}
</style>