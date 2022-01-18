import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '../components/Button';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import MapCardAlbum from '../components/MapCardAlbum';
import SearchContext from '../Contexts/SearchContext/SearchContext';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

function Search() {
  const {
    searchArtist,
    setSearchArtist,
    setSearchAlbuns,
  } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [menssage, setMessage] = useState('');

  const searchMenssage = (albuns) => {
    if (albuns.length < 1) {
      const msgm = 'Nenhum álbum foi encontrado';
      setMessage(msgm);
      return setSearchArtist('');
    }
    const msgm = `Resultado de álbuns de: ${searchArtist}`;
    setMessage(msgm);
    setSearchArtist('');
  };

  const handleSearchClick = async () => {
    await setLoading(true);
    const albuns = await searchAlbumsAPIs(searchArtist);
    setSearchAlbuns(albuns);
    setLoading(false);
    searchMenssage(albuns);
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
            { menssage }
            <MapCardAlbum />
          </>
        )}
      </section>

    </main>
  );
}

export default Search;
