<template>
  <div class="my-card mt-4 mx-4 col-sm-4 col-md-2 col-6">
    <div class="rating">{{movie.vote_average}}</div>

    <div class="img-wrapper">
      <img :src="imgURL+ movie.poster_path" alt="movie img" />
      <div class="Overlay"><button class="sp-btn" :class="{nightModespbtn : $store.state.generalIsNightMode}"  @click="details">Details</button></div>
    </div>

    <h5 class="movie-title" :class="{nightModeMovieTitle : $store.state.generalIsNightMode}">{{devideTitle(movie.title)}}</h5>
    <p :class="{family : !movie.adult , adult : movie.adult}">{{movie.adult ? 'adult' : 'family'}}</p>
  </div>
</template>

<script>
export default {
  props : ["movie"],
  data(){
    return{
      imgURL : "https://image.tmdb.org/t/p/w500/" 
    }
  },
  methods : {
    details(){
      this.$router.push(`/movies/${this.movie.id}`)
    },
    devideTitle(str) {
      return str.substr(0, 20) + "....";
    },
  }
};
</script>

<style>
.my-card {
  position: relative;
  color: black;
  text-align: center;
}
.my-card p{
  font-weight: 600;
}
.family{
  color: #4E944F;
}
.adult{
  color: #630606;
}
.nightModespbtn{
  background-color: #3F0071!important;
  color: white;
}
.my-card .rating {
  position: absolute;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: orange;
  top: -15px;
  left: 42.5%;
  text-align: center;
}
img {
  width: 100%;
}
.img-wrapper {
  display: block;
  z-index: 1;
}
.Overlay {
  background-color: transparent;
  text-align: center;
  transition: all 1s ease;
  transition-delay: 0.5s;
  opacity: 0;
}
.img-wrapper:hover .Overlay {
  background-color: 121212;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
}
.nightModeMovieTitle{
  color: wheat;
}
.movie-title{
  font-weight: 700;
  font-size: 18px;
}
.my-card .sp-btn{
  background-color: brown;
  border: transparent;
  border-radius: 10px;
  padding: 8px;
}
</style>