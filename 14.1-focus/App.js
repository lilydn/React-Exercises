import React from 'react';
import './App.css';
import CustomInput from './CustomInput';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <p> Focus on the input element when the component mounts to the screen: </p>
        <CustomInput />
      </div>
    );
  }
}

export default App;
