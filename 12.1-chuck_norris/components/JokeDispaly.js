import React from 'react';
import './App.css';


class JokeDispaly extends React.Component {
  
  render() {
    return (
      <div className="joke-display">
        <p>{`${this.props.currentJoke}`}</p>
      </div>
    );
  }

}
export default JokeDispaly;
