import React from 'react';

const Button = (props) => {
  const boldText = {
    fontWeight: props.fontWeight,
  }
  return (
    <button style={boldText}>{props.text}</button>
  );
};

export default Button;