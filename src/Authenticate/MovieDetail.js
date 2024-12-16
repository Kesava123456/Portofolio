import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = 'e4760f8f'; // Your OMDB API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        if (response.data.Response === 'True') {
          setMovie(response.data); // Store movie details
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);
  

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;
