import axios from "axios";
const moviesUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=28e35f623986e79a61e5bd79462bd5ac";
export const getAllMovies =  () => {
    // HOF TO RESOLVE ASYNC AWAIT
    return async(dispatch)=> {
        const { data } = await axios.get(moviesUrl);
        console.log(data)
        dispatch(  {
            type: "ALLMOVIES",
            data: data.results,
            pages: data.total_pages,
          })
    }
  

 
};

export const getSearch =  (word) => {
   
    return async(dispatch)=> {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=28e35f623986e79a61e5bd79462bd5ac&language=en-US&query=${word}`);
        console.log(data)
        dispatch(  {
            type: "ALLMOVIES",
            data: data.results,
            pages: data.total_pages,
          })
    }
  

 
};

export const getPage =  (page) => {
   
    return async(dispatch)=> {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=28e35f623986e79a61e5bd79462bd5ac&language=en-US&page=${page}`);
        console.log(data)
        dispatch(  {
            type: "ALLMOVIES",
            data: data.results,
            pages: data.total_pages,
          })
    }
  

 
};
