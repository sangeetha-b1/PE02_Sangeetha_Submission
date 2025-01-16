import React, { useState } from 'react';
import './App.css';

const moviesData = [
  { title: 'Inception', genre: 'Fiction', releaseYear: 2010 },
  { title: 'Shahshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(moviesData.map(movie => movie.genre))];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    if (genre === 'All Genres') {
      setMovies(moviesData);
    } else {
      const filteredMovies = moviesData.filter(movie => movie.genre === genre);
      setMovies(filteredMovies);
    }
  };

  const handleMovieClick = (title) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <div>Title: {movie.title}</div>
            <div>Genre: {movie.genre}</div>
            <div>Release Year: {movie.releaseYear}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
