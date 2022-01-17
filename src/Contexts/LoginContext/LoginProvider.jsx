import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);

  const objContext = {
    name,
    setName,
    disabled,
    setDisabled,
  };

  return (
    <LoginContext.Provider value={ objContext }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LoginProvider;
