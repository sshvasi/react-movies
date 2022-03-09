import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=c15ac1f0&s=matrix')
      .then(response => response.json())
      .then(result => setMovies(result.Search));
  }, []);

  console.log(movies);

  return (
    <main className="container content">
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export default Main;
