import React, { useContext } from 'react';
import SearchContext from '../Contexts/SearchContext/SearchContext';

function InputSearch() {
  const {
    setSearchArtist,
  } = useContext(SearchContext);

  return (
    <input
      type="text"
      onChange={ ({ target: { value } }) => setSearchArtist(value) }
      data-testid="search-artist-input"
      placeholder="Nome do Artista"
    />
  );
}

export default InputSearch;
