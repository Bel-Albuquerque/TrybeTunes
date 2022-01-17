import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import InputName from '../components/InputName';
import LoginContext from '../Contexts/LoginContext';
import { createUser } from '../services/userAPI';

function Login() {
  const { disabled, name } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    setLoading(true);
    await createUser({ name });
    history.push('/search');
  };

  return (
    <main data-testid="page-login">
      {loading ? 'Carregando...' : (
        <>
          <InputName />
          <Button
            text="Entrar"
            disabled={ disabled }
            handleClick={ handleClick }
          />
        </>
      )}
    </main>
  );
}

export default Login;
