import React from 'react'

const MovieCard = ({movie: {title, poster_path}}) => {
  return (
    <>
    <div>MovieCard</div>
    
    <ul className='all-movies'>
    {movies.map((movie) =>(
    <div key={movie.id} className='movie-card'>
        {/* <img src={movie.poster_path}></img> */}
        <p className='text-white'>{movie.title}</p> // always include a key when mapping elements, must be unique 
    </div>
        ))} 
    </ul>

    </>
  )
}

export default MovieCard