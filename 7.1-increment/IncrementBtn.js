import React from 'react';


class IncrementBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increment = () => {
    this.setState({ value: this.state.value + 1});
  }

  render () {
    return (
      <div className="increment">
        <button onClick={this.increment}>increment</button>
        <label className="value-label">{this.state.value}</label>
      </div>
    );
  }
}

export default IncrementBtn;