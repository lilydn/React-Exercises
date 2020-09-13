import React from 'react';

const TextContents = (props) => {
  return (
    <div className="textContents">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href='/' className="link">{props.firstLink}</a>
      <a href='/' className="link">{props.secondLink}</a>
    </div>

  );
};

export default TextContents;



// title="Some Title"
// description="Some description"
// firstLink="SHARE"
// secondLink="EXPLORE"