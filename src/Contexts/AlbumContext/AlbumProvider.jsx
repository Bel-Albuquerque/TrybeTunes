import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumContext from './AlbumContext';

function AlbumProvider({ children }) {
  const [data, setData] = useState([]);
  const [favoriteList, setFavoriteList] = useState(true);

  const objContext = {
    data,
    setData,
    favoriteList,
    setFavoriteList,
  };

  return (
    <AlbumContext.Provider value={ objContext }>
      { children }
    </AlbumContext.Provider>
  );
}

AlbumProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AlbumProvider;
