import React from 'react';


class Card extends React.Component {
  render () {
    return (
      <div className="card">
        <div className="pictre">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="textContent">{this.props.children}</div>
      </div>
    );
  }
}

// const Card = (props) => {
//   return (
//     <div className="card">
//       <div className="pictre">
//         <img src={props.imageUrl} alt="" />
//       </div>
//       <div className="textContent">{props.children}</div>
//     </div>
//   );
// };

export default Card;