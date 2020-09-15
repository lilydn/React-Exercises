import React from 'react';
import './App.css';


class Spinner extends React.Component {
  state = { spinnerType: 1 };

  componentDidMount() {
    this.setState({spinnerType: Math.ceil(Math.random() * 3)});
  }
  
  render() {
    console.log(this.state.spinnerType);
    return (
      <div className={`spinner-${this.state.spinnerType}`}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

}
export default Spinner;
