import React from 'react';
import PropTypes from 'prop-types';

function CardMusic(props) {
  const { trackId, trackName, previewUrl } = props;
  return (
    <li key={ trackId }>
      <h5>{trackName}</h5>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    </li>
  );
}

CardMusic.propTypes = {
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default CardMusic;
