import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchMovies = (str, type = 'all ') => {
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=c15ac1f0&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(response => response.json())
      .then(result => {
        setMovies(result.Search);
        setIsLoading(false);
      })
      .catch(error => setIsLoading(false));
  };

  useEffect(() => {
    // fetch("http://www.omdbapi.com/?apikey=c15ac1f0&s='matrix'")
    //   .then(response => response.json())
    //   .then(result => {
    //     setMovies(result.Search);
    //     setIsLoading(false);
    //   })
    //   .catch(error => setIsLoading(false));
    searchMovies('terminator', 'all');
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
