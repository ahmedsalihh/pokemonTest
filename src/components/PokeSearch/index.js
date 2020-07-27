import React, { useState } from 'react';

const PokeSearch = ({ handleSearch, handleClear }) => {
  const [searchText, setSearchText] = useState('');

  const handleClearClick = () => {
    setSearchText('');
    handleClear();
  };

  return (
    <div className="searchForm">
      <label>Search: </label>
      <input
        type="text"
        placeholder="Pokemon Name"
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
      />
      <input
        className="button"
        type="submit"
        value="Search"
        onClick={() => handleSearch(searchText)}
      />
      <input
        className="button"
        type="submit"
        value="Clear"
        onClick={handleClearClick}
      />
    </div>
  );
};

export default PokeSearch;
