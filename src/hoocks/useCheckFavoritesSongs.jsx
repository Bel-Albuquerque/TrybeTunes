import { useEffect } from 'react/cjs/react.development';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

function useCheckFavoritesSongs(setCheck, setLoading, songId) {
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
}

export default useCheckFavoritesSongs;
