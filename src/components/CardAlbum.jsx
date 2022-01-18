import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardAlbum(props) {
  const { collectionId, artworkUrl100, collectionName, artistName } = props;
  return (
    <section>
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        <div>
          <img src={ artworkUrl100 } alt="album" />
          <p>{ collectionName }</p>
          <p id="artistName">{ artistName }</p>
        </div>
      </Link>
    </section>
  );
}

CardAlbum.propTypes = {
  collectionId: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default CardAlbum;
