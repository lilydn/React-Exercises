import React from 'react';
import './App.css';

class Checkbox extends React.Component {
  state = { isChecked: this.props.isChecked };

  onChange = e => {
    this.setState({ isChecked: e.target.checked })
  }

  render() {
    console.log(this.props.value + ' , ' + this.state.isChecked);
    return (
      <div className="checkbox">
        <input type="checkbox" onChange={this.onChange} checked={this.state.isChecked}/>
        <label>{this.props.value}</label>
      </div>
    );
  }
}
export default Checkbox;
