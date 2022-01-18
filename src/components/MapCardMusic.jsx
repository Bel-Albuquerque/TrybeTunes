import React from 'react';
import PropTypes from 'prop-types';
import CardMusic from './CardMusic';

function MapMusicCard({ arrayData }) {
  return (
    <ul>
      {arrayData.slice(1).map((obj) => (
        <CardMusic
          key={ obj.trackId }
          trackId={ obj.trackId }
          trackName={ obj.trackName }
          previewUrl={ obj.previewUrl }
        />))}
    </ul>
  );
}

MapMusicCard.propTypes = {
  arrayData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MapMusicCard;
