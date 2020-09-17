import React from 'react';
import './App.css';
 
  
class BtnRandomJoke extends React.Component {

  onBtnClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button className="btnRandomJoke" onClick={() => this.onBtnClick()}>Get Random Joke</button>
    );
  }
}

export default BtnRandomJoke;
