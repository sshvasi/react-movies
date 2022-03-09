import Movie from './Movie';

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          id={movie.imdbID}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
};

export default Movies;
