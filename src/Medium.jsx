import React, { useState } from 'react';

function Medium() {
  const [title, setTitle] = useState('');
  const [movies, setMovie] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    setMovie([]);

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      title
    )}&include_adult=false&language=en-US&page=1`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGZiZGRhNTVhMDljZGRlODAyYTI5NTQzZTAxMWE3ZSIsIm5iZiI6MTc1NzM0OTQyMi40NjMsInN1YiI6IjY4YmYwNjJlNmViZTk4YzcxZTRlNjJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2yhFTqVfPevIURJaTJPquJHaZ7TWF6N-pePnFtqIEE',
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setMessage('No movie found.');
        return;
      }

      setMovie(data.results.slice(0, 5));
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while fetching data.');
    }
  };

  return (
    <main>
      <h1 style={{ margin: '1rem' }}>Challenge: Medium</h1>
      <p>Input your movie & find more like it!</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input a Movie!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <p id="errorMess">{message}</p>

      <div id="movieInput" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: '200px', textAlign: 'center' }}>
            <h2>{movie.title}</h2>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ borderRadius: '10px', marginTop: '10px' }}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <p><b>Release:</b> {movie.release_date || 'N/A'}</p>
            <p style={{ fontSize: '0.9rem' }}>{movie.overview?.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Medium;