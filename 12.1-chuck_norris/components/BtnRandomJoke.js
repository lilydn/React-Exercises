import React from 'react';
import './App.css';
 
  
class BtnRandomJoke extends React.Component {

  onBtnClick = () => {
    this.props.handleClick();
  };

  render() {
    return (
      <button className="btn btnRandomJoke" onClick={() => this.onBtnClick()}>Get A Random Joke</button>
    );
  }
}

export default BtnRandomJoke;
