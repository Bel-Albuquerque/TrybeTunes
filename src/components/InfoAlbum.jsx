import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';

function InfoAlbum({ arrayData }) {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');

  useEffect(() => {
    if (arrayData.length > 0) {
      setArtistName(arrayData[0].artistName);
      setAlbumName(arrayData[0].collectionName);
    }
  }, []);

  return (
    <>
      <p data-testid="artist-name">{ artistName }</p>
      <p data-testid="album-name">{ albumName }</p>
    </>
  );
}

InfoAlbum.propTypes = {
  arrayData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default InfoAlbum;
