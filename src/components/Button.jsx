import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { text, disabled = false, handleClick } = props;
  return (
    <button
      data-testid="login-submit-button"
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
