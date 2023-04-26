import React, {useEffect, useState} from 'react'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../redux/actions'
const MoviesList = () => {


  const dispatch = useDispatch()
  const moviesData= useSelector((state)=> state.movies)
  const [movies, setMovies]=useState([])
 

  
  useEffect(()=>{
    
    dispatch(getAllMovies())
  },[])

  useEffect(()=>{
    setMovies(moviesData)
  },[moviesData])
 
  return (
<>
<div className="container py-4">
  <div className="row gy-4">
  
  {movies.length >=1 ? (movies.map((movie)=>{
      return <div key={movie.id} className="col-md-3 col-12">
      <Link to={`movie/${movie.id}`}>
      <div className=' movie-card text-white'>
        <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} className='w-100 h-100' style={{objectFit:"cover"}}/>
     
        <div className='layer d-flex justify-content-center align-items-center'>
        
          <div className='info text-center'>
          <p className='fw-bold'>{movie.title}</p>
          <p>release date: {movie.release_date}</p>
          <p>rating: {movie.vote_average}</p>
          <p>votes: {movie.vote_count}</p>
          </div>
          
        </div>
        
      </div>
      </Link>
     </div>
    })): <h2 className='py-5 text-center'>No Movies Found</h2>}
  
  {movies.length>=1 ? <Pagination/> : null}
    
  </div>
</div>
    
    

   
</>
  ) 
   
  }

export default MoviesList



