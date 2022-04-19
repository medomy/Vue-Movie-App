import axios from "axios";

const moviesInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    params : {
        api_key : "4cef01add3ed74048591b83881eee0c9"
    }
})

export default moviesInstance