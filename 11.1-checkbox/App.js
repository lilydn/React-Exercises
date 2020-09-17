import React from 'react';
import './App.css';
import Checkbox from './Checkbox';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Checkbox isChecked={false} value="I read the term of the app" />
        <Checkbox isChecked={false} value="I accept the term of the app" />
        <Checkbox isChecked={true} value="I want to get the weekly newsletter" />
        <Checkbox isChecked={true} value="I want to get sales and offers" />
      </div>
    );
  }
}

export default App;
