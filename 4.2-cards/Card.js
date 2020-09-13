import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="pictre">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="textContent">{props.children}</div>
    </div>
  );
};

export default Card;