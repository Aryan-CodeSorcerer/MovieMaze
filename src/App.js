import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


const API_URL='http://www.omdbapi.com/?apikey=ca297993'

const movie1={
    "Title": "Undefined",
    "Year": "2006",
    "imdbID": "tt1436480",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg"
}
const App=()=> {
  const [movies,setMovie]=useState([])
  const[search,setSearch]=useState('')


const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovie(data.Search);
    
}
useEffect(()=>{
    searchMovies();
},[])
  return (
    <div className='app'>
      <h1>MovieMaze</h1>

      <div className='search'>
        <input
        placeholder='Search for Movies'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt ='search'
        onClick={()=>searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;