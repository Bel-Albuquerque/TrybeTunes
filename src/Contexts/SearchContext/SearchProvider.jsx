import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [searchArtist, setSearchArtist] = useState('');
  const [searchAlbuns, setSearchAlbuns] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const objContext = {
    searchArtist,
    setSearchArtist,
    searchAlbuns,
    setSearchAlbuns,
    disabled,
    setDisabled,
  };

  return (
    <SearchContext.Provider value={ objContext }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchProvider;
