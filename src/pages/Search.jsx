import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '../components/Button';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import SearchContext from '../Contexts/SearchContext/SearchContext';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

function Search() {
  const {
    searchArtist,
    setSearchArtist,
    searchAlbuns,
    setSearchAlbuns,
  } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);

  const handleSearchClick = async () => {
    await setLoading(true);
    const albuns = await searchAlbumsAPIs(searchArtist);
    setSearchAlbuns(albuns);
    setSearchArtist('');
    setLoading(false);
  };

  return (
    <main data-testid="page-search">
      <Header />
      Search
      <section>
        {loading ? 'Carregando...' : (
          <>
            <InputSearch />
            <Button
              text="Procurar"
              disabled={ searchArtist.length < 2 }
              handleClick={ handleSearchClick }
              dataTestId="search-artist-button"
            />
          </>
        )}
      </section>

    </main>
  );
}

export default Search;
