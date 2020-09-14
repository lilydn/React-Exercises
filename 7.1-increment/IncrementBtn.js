import React from 'react';


class IncrementBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  render () {
    const increment = () => {
      this.setState({ value: this.state.value + 1});
      console.log(this.state.value);
    }
    return (
      <div className="increment">
        <button onClick={increment}>increment</button>
        <label className="value-label">{this.state.value}</label>
      </div>
    );
  }
}

export default IncrementBtn;