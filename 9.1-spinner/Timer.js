import React from 'react';
import './App.css';


class Timer extends React.Component {

  render() {
   return (
    <div className="timer">
      {this.props.seconds}
    </div>
   )
  }
}

export default Timer;
