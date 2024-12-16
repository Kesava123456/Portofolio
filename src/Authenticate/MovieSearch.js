import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieSearch.css';

function MovieSearch({ addToWatchlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // For initial loading

  const API_KEY = 'e4760f8f'; // Your OMDB API key

  // Fetch default movies on initial load (you can customize the default query)
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers`);
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
          setLoading(false); // Stop loading once data is fetched
        } else {
          alert(response.data.Error);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching default movies:', error);
        setLoading(false);
      }
    };

    fetchDefaultMovies(); // Fetch movies when the component mounts
  }, []);

  // Function to search movies based on user input
  const searchMovies = async () => {
    if (searchTerm.trim() === '') return;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Show a loading state until movies are fetched
  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className="movie-search-container">
      <h2>Welcome to Watchlists</h2>
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h4>{movie.Title} ({movie.Year})</h4>
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
