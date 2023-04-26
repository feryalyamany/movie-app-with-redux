const intialState= {
    movies:[],
    pageCount:0,
}

export const moviesReducer = (state=intialState, action)=>{
    switch(action.type){
        case "ALLMOVIES":
            return {movies: action.data, pageCount:action.pages}
            default:
                return state;
    }
}