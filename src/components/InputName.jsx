import React, { useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';

function InputName() {
  const {
    setName,
    setDisabled,
  } = useContext(LoginContext);

  const validaNome = 3;

  const handleName = ({ target }) => {
    const { value } = target;
    setName(value);
    return (value.length >= validaNome) ? setDisabled(false) : setDisabled(true);
  };

  return (
    <input
      data-testid="login-name-input"
      type="text"
      onChange={ handleName }
      placeholder="Nome"
    />
  );
}

export default InputName;
