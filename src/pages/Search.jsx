import React, { useContext } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import SearchContext from '../Contexts/SearchContext/SearchContext';

function Search() {
  const {
    searchArtist,
  } = useContext(SearchContext);

  return (
    <main data-testid="page-search">
      <Header />
      Search
      <InputSearch />
      <Button
        text="Procurar"
        disabled={ searchArtist.length < 2 }
        handleClick={ handleSearchClick }
        dataTestId="search-artist-button"
      />

    </main>
  );
}

export default Search;
