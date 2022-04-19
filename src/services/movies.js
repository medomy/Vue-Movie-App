import moviesInstance from "@/network/moviesInstance";
import searchFormoviesInstance from "@/network/moviesSearchInstance";
export const getAllMoviesOnePage = async (pageNum) => {
    try {
        const res = await moviesInstance.get('/popular', {
            params: {
                page: pageNum
            }
        })
        console.log(res.data.results)
        return res.data.results

    } catch (err) {
        throw new Error(`error in getting movies , ${err.messege}`)

    }
}
export const getAllMoviesAllPages = async ()=>{
    try{
        const res = await moviesInstance.get('/popular')
        console.log(res.data.results)
        return res.data.results

    }catch(err){
        throw new Error(`error in getting movies , ${err.messege}`)
    }
}
export const getOneMovie = async (id)=>{
    try{
        const res = await moviesInstance.get(`/${id}`)
        console.log(res.data)
        return res.data

    }catch(err){
        throw new Error(`error in getting movie , ${err.messege}`)
    }
}
export const searchForMovs = async (s)=>{
    try{
        const res = await searchFormoviesInstance.get('',{
            params : {
                query : s
            }
        })
        return res.data.results

    }catch(err){
        throw new Error(`error in search , ${err.messege}`)
    }
} 