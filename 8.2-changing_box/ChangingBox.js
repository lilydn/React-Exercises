import React from 'react';
import './App.css';


export class ChangingBox extends React.Component {

  state = {
    currentColor: 30,
    countsColor: 1,
    appears: true,
    borderRadius: 0, 
  };

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        currentColor: Math.ceil(Math.random()*360), 
        countsColor: (this.state.countsColor+1)
      });
      if(this.state.countsColor > 5) {
        this.setState({borderRadius: 50});
      }
      if(this.state.countsColor > 10) {
        this.setState({appears: false});
        clearInterval(interval);
      }
      console.log(this.state.currentColor);
      console.log(this.state.countsColor);
    }, 500);
  }

  render() {
    let boxStyle = {
      backgroundColor: `hsl(${this.state.currentColor}, 100%, 50%)`,
      borderRadius: `${this.state.borderRadius}%`
    }
    return (
      <div>
        {this.state.appears && <div className="box" style={boxStyle}></div>}
      </div>
    );
  }
}

export default ChangingBox;
