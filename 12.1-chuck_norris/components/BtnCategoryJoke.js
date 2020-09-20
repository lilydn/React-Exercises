import React from 'react';
import './App.css';
 
  
class BtnCategoryJoke extends React.Component {

  onBtnClick = () => {
    this.props.handleClick(this.props.category);
  };

  render() {
    return (
    <button className="btn btnCategoryJoke" onClick={() => this.onBtnClick()}>{this.props.category}</button>
    );
  }
}

export default BtnCategoryJoke;
