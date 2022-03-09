const Movie = ({ title, year, id, type, poster }) => {
  return (
    <div className="card movie" id={id}>
      <div className="card-image ">
        {poster === 'N/A' ? (
          <img
            src={`https://via.placeholder.com/300x430?text=${title}`}
            alt={title}
          />
        ) : (
          <img src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
