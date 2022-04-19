import axios from "axios";

const searchFormoviesInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/search/movie',
    params : {
        api_key : "4cef01add3ed74048591b83881eee0c9"
    }
})

export default searchFormoviesInstance