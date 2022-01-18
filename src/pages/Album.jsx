import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import InfoAlbum from '../components/InfoAlbum';
import MapMusicCard from '../components/MapCardMusic';
import AlbumContext from '../Contexts/AlbumContext/AlbumContext';
import getMusics from '../services/musicsAPI';

function Album() {
  const { data, setData } = useContext(AlbumContext);

  const [loading, setLoading] = useState(true);

  const pathArray = window.location.pathname.split('/');
  const id = pathArray[2];

  useEffect(() => {
    (async () => {
      const songs = await getMusics(id);

      await setData(songs);
      await setLoading(false);
    })();
  }, []);

  return (
    <main data-testid="page-album">
      <Header />
      { loading && 'Carregando...' }
      { !loading && <InfoAlbum arrayData={ data } />}
      { !loading && <MapMusicCard arrayData={ data } /> }
    </main>
  );
}

export default Album;
