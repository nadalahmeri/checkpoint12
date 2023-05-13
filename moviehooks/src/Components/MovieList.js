import React from 'react'
import Cards from "./Cards"


function MovieList({movies}) {
  return (
    <div className='cards'>
        {movies.map((movie)=> (
           <p> <Cards movie={movie} key={movie.id}/> </p>))};
    </div>
  )
}

export default MovieList