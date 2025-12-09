import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './componenets/header'
import Search from './componenets/search'

const API_BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessaage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await  fetch(endpoint, API_OPTIONS)
      await alert(response)
      if(!response.ok){
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json()
      console.log(data)

      // handle error for times theres no data 

      if(data.Respose === false){
        throw new Error('Data is unavailable');
        setMovies([])
        return
      }

      setMovies(data.results || []);

    } catch(err){
      console.error(`Error fetching movies: ${err}`)
      setErrorMessage('Error fetching movies. Please try again later');
    } finally{
      setIsLoading(false)
    }
  }


  useEffect(()=>{
    fetchMovies()
  }, []) // [] makes sure that effect is used only on first render of applicaiton

  return (
    <>
    <main>
        <div className='pattern'/>
            {/* <img src = './logo.svg'></img> */}
            <div className='wrapper'>
                <img src ="/hero.png" alt="Hero Banner"/>
                <header>
                    <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
                    <Search searchTerm ={searchTerm} setSearchTerm= {setSearchTerm}/>
                </header>

                <section className='all-movies'>
                  <h2> All Movies </h2>
                  {isLoading ? (
                    <p className='text-white'>Loading...</p>
                  ) : errorMessaage ? (<p className='text-red-500' >{errorMessaage}</p>) : (
                  <ul>
                     {movies.map((movie) =>(
                      <p key={movie.id} className='text-white'>{movie.title}</p> // always include a key when mapping elements, must be unique 
                     ))} 
                    </ul> )
                  }
                {/* {errorMessaage && <p className='text-red-500' >{errorMessaage}</p>} */}
                </section>
                  
            </div>
    </main>
    </>
  )
}

export default App
