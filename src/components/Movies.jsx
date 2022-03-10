import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map(movie => (
          <Movie
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            id={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
          />
        ))
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
};

export default Movies;
