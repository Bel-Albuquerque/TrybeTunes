import React, { useContext } from 'react';
import SearchContext from '../Contexts/SearchContext/SearchContext';
import CardAlbum from './CardAlbum';

function MapCardAlbum() {
  const {
    searchAlbuns,
  } = useContext(SearchContext);
  return (
    <>
      {searchAlbuns.map(({ collectionId, artworkUrl100, collectionName, artistName }) => (
        <CardAlbum
          key={ collectionId }
          collectionId={ collectionId }
          artworkUrl100={ artworkUrl100 }
          collectionName={ collectionName }
          artistName={ artistName }
        />
      ))}
    </>
  );
}

export default MapCardAlbum;
