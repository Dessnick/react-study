import React from 'react';

function Button({ onClick, className, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
