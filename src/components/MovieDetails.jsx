import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
const MovieDetails = () => {
const {id}= useParams();
const[movie, setMovie]=useState([])
const getMovieDetails = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=28e35f623986e79a61e5bd79462bd5ac&language=en-us`)
    setMovie(data)
    console.log(data)
}

useEffect(()=>{
    getMovieDetails()
},[])

  return (
    <>
    <div className="container py-3">
    <Row className="justify-content-center card-detalis">
                
                    
                    <Col md="4" xs="12" sm="12" className="">
                        <img
                            className="img-movie img-fluid"
                             src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="movie_poster"
                        />
                        </Col>
                        <Col xs='12' md="8" sm="12">
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Movie Name : {movie.title}
                            </p>
                            
                            <p className="card-text-details border-bottom ">
                                Release Date  : {movie.release_date}
                            </p>
                            
                            <p className="card-text-details border-bottom">
                                Rating : {movie.vote_average}
                            </p>
                            
                            <p className="card-text-details border-bottom ">
                                Votes  : {movie.vote_count}
                            </p>
                           
                          
                        </div>
                        </Col>
                    
                
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">Story:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
  
          <div className=' d-flex justify-content-center py-3'>
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "black", border: "none" }}
                            className="btn btn-primary mx-2">
                            Back 
                        </button>
                    </Link>
                    <a href={movie.homepage}  target='_blank'>
                        <button
                            style={{ backgroundColor: "red", border: "none" }}
                            className="btn btn-primary">
                             Watch
                        </button>
                    </a>
          </div>
                
                
           
    </div>
          
    </>
  )
}

export default MovieDetails