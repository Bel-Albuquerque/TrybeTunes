import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

function User() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState({});

  useEffect(() => {
    (async () => {
      if (loading) {
        const user = await getUser();
        setName({ ...user });

        setLoading(false);
      }
    })();
  }, []);

  return (
    <aside>
      { loading ? 'Carregando...' : <p data-testid="header-user-name">{name.name}</p> }
    </aside>
  );
}

export default User;
