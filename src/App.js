

import React, { useState } from 'react'
import axios from 'axios';
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {


  

  

  


  const router= createBrowserRouter([
  
      {index:true, element:<MoviesList/>},
      {path:'movie/:id', element:<MovieDetails/>},
   
  ])

  return (
    <>
     <Header />
     <RouterProvider router={router}/>
    </>
   
  );
}

export default App;
