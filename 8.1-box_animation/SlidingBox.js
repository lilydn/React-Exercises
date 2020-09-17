import React from 'react';
import './App.css';


export class SlidingBox extends React.Component {

state = { boxAppears: false };

componentDidMount() {
  setTimeout(() => {
    this.setState({boxAppears: true});
  }, 1000);
  setTimeout(() => {
    this.setState({boxAppears: false});
  }, 6000);
  // return () => clearTimeout(timer, timerOff);
}

render() {
  let boxStyle = {
    height: this.props.size,
    width: this.props.size,
    backgroundColor: this.props.color,
    top: this.props.top,
  }
  
  return (
    <div>
      {this.state.boxAppears && <div className="box" style={boxStyle}></div>}
    </div>
  )
}
}

export default SlidingBox;
