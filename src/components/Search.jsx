import { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [searchText, setSearchText] = useState('');

  const handleKey = event => {
    if (event.key === 'Enter') {
      searchMovies(searchText);
    }
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(searchText)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
