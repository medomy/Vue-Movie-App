<template>
<div class="details-backdrop" :class="{nightModedetailswrapper : $store.state.generalIsNightMode}">
    <DetailsCard :movie="movie" />
</div>
  
</template>

<script>
import DetailsCard from '../components/DetailsCard/DetailsCard.vue'
import {getOneMovie} from '../services/movies'
export default {
    name : "MovieDetails",
    components : {
        DetailsCard
    },
    data(){
        return{
            id : this.$route.params.id,
            movie :{},
        }

    },
    mounted(){
        this.getMovie()
    },
    methods : {
        async getMovie(){
            try{
                this.movie = await getOneMovie(this.id)
            }catch(err){
                console.log(err.messege)
            }
        }
    }


}
</script>

<style>
.details-backdrop{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: palegoldenrod;
}
.nightModedetailswrapper{
    background-color: #1B1A17!important;
}

</style>