<template>
  <div class="row details-card col-md-8 col-sm-12 col-12">
      <div class="col-6">
          <h3>{{movie.title}}</h3>
           <p>{{movie.overview}}</p>
           <button @click="addToFavs" v-if="!isFav" class="favs-btn">Add to Favourites</button>
           <p v-if="isFav">Added to favourites</p>   
      </div>
      <div class="col-6 txt-rate">
          <img :src="imgURL + movie.poster_path" alt="img" />
          <p class="rate">{{movie.vote_average}}</p>   
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailsCard",
  props : ['movie' ],
  data(){
      return{
          imgURL : `https://image.tmdb.org/t/p/w500`,
          isFav : false
      }
  },
  beforeMount(){
    //   console.log(this.$store.state.favourites.includes(this.movie))
  },
  mounted(){
       console.log(Array(...this.$store.state.favourites))
  },
  methods : {
      addToFavs(){
          this.$store.dispatch('addToFavs',this.movie)
          this.isFav = true
          console.log(this.$store.state.favourites[0])
      }
  },
  watch : {
      movie(newVal){
          console.log(Array(...this.$store.state.favourites).includes(newVal))
          console.log(newVal)
      }
  }
};
</script>

<style>
.details-card{
    padding: 20px;
    border-radius: 12px;
    background-color: #F5EEDC;
    border: 1.5px solid black;
    z-index: 2;
    
}
.details-card img{
    width: 100%;
    max-height: 500px;
    border-radius: 15px;
}
.details-card .rate{
    font-weight: 800;
    margin-top: 0.65rem;
}
.details-card .txt-rate{
    text-align: center;
}
.favs-btn{
    padding: auto;
    background-color: #019267;
    color: white;
    border: transparent;
    border-radius: 5px;
    transition-delay: 0.3s;
    transition-duration: 0.5s;
    transition-property: background-color;
}
.favs-btn:hover{
    background-color: #F0A500;
} 

</style>