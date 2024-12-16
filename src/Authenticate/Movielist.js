import React from 'react';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div className="movie-list">
          {watchlist.map(movie => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <div className="movie-info">
                <h3>{movie.Title} ({movie.Year})</h3>
                <button onClick={() => removeFromWatchlist(movie.imdbID)}>Remove from Watchlist</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
