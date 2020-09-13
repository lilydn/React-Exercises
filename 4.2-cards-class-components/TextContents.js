import React from 'react';


class TextContents extends React.Component {
  render () {
    return (
      <div className="textContents">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <a href='/' className="link">{this.props.firstLink}</a>
        <a href='/' className="link">{this.props.secondLink}</a>
      </div>
    );
  }
}

// const TextContents = (props) => {
//   return (
//     <div className="textContents">
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//       <a href='/' className="link">{props.firstLink}</a>
//       <a href='/' className="link">{props.secondLink}</a>
//     </div>
//   );
// };

export default TextContents;

