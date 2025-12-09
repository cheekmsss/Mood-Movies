import React from 'react'

const MovieCard = ({movie: {title, poster_path, vote_average, release_date}}) => {
  return (
    <>
        <div className='movie-card'>
            <img 
            src={ poster_path 
             ? `https://image.tmdb.org/t/p/w500/${poster_path}` 
            :  '/No-Poster (1).png' }
            alt={title}>
            </img>
            <div className='mt-4'>
                <h3 >{title}</h3> 
            </div>

            <div className='content'>
                <div className='rating'>
                    <img className='rating' src='/star.svg' alt='Star icon'></img>
                    <p className='rating'> {vote_average ? vote_average : 'NA'} </p>
                </div>
                <span>|</span>
                <p className='year'>{release_date ? release_date.slice(0,4) : 'N/A'}</p>
            </div>
            {/* <p>{movie.genre}</p> */}
            {/* <img src="/star.svg"> </img> */}
        </div>

    </>
  )
}

export default MovieCard