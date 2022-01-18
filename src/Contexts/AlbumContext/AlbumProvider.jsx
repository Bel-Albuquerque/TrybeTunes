import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumContext from './AlbumContext';

function AlbumProvider({ children }) {
  const [data, setData] = useState([]);

  const objContext = {
    data,
    setData,
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
