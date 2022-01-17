import React from 'react';
import { Link } from 'react-router-dom';

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

export default CardAlbum;
