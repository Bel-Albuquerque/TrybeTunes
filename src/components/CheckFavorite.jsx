import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import AlbumContext from '../Contexts/AlbumContext/AlbumContext';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

function CheckFavorite({ songId }) {
  const { data } = useContext(AlbumContext);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState([]);

  const isChecked = async () => {
    const favorites = await getFavoriteSongs();
    const bool = favorites.some(({ trackId }) => trackId === songId);
    return bool;
  };

  useEffect(() => {
    (async () => {
      const bool = await isChecked();
      setCheck(bool);
      setLoading(false);
    })();
  }, []);

  const handleCheckTrue = async (id) => {
    setCheck(!check);
    const song = data.find(({ trackId }) => trackId === id);
    await addSong(song);
    setLoading(false);
  };

  const handleCheckFalse = async (id) => {
    setCheck(!check);
    const favorites = await getFavoriteSongs();
    const song = favorites.find(({ trackId }) => trackId === id);
    await removeSong(song);
    setLoading(false);
  };

  const handleChecked = async ({ checked }, id) => {
    setLoading(true);
    if (checked) return handleCheckTrue(id);
    if (!checked) return handleCheckFalse(id);
  };

  return (
    <>
      <label
        data-testid={ `checkbox-music-${songId}` }
        htmlFor={ `checkbox-music-${songId}` }
      >
        <span className="tw-heart-box">
          <input
            type="checkbox"
            onChange={ ({ target }) => handleChecked(target, songId) }
            value={ songId }
            id={ `checkbox-music-${songId}` }
            checked={ check }
          />
          <span className="tw-heart" />
        </span>
        <span id="favorita">Favorita</span>

      </label>
      <span>
        {loading && 'Carregando...'}
      </span>
    </>
  );
}

CheckFavorite.propTypes = {
  songId: PropTypes.number.isRequired,
};

export default CheckFavorite;
