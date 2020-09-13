import React from 'react';



class Button extends React.Component {
  render() {
    const boldText = {
      fontWeight: this.props.fontWeight,
    }
    return (
      <button style={boldText}>{this.props.text}</button>
    );
  }
}


// const Button = (props) => {
//   const boldText = {
//     fontWeight: props.fontWeight,
//   }
//   return (
//     <button style={boldText}>{props.text}</button>
//   );
// };

export default Button;