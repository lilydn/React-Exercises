import React from 'react';

function Q1Input() {
  return (
    <div className="q1-input">
      <input type="range" min="0" max="3" defaultValue="0" className="q1-input_range"/>
    </div>
  );
}

export default Q1Input;