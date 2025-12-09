import React from 'react'
import logo from '../assets/logo.svg'
import hero from '../assets/hero-img.png'
// import in

const Header = () => {
  return (
    <main>
        <div className='pattern'/>
            <img src = {logo}></img>
            <div className='wrapper'>
                <img src = {hero}></img>
                <header>
                    <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>
                <p>Search</p>
            </div>
    </main>
  )
}

export default Header