import { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('all');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleKey = event => {
    if (event.key === 'Enter') {
      searchMovies(text, type);
    }
  };

  const handleFilter = event => {
    setType(event.target.dataset.type);
    searchMovies(text === '' ? 'terminator' : text, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(text, type)}
          >
            Search
          </button>
        </div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            checked={type === 'all'}
            onChange={handleFilter}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            checked={type === 'movie'}
            onChange={handleFilter}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            checked={type === 'series'}
            onChange={handleFilter}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
