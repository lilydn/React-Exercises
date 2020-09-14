import React from 'react';
import './App.css';
import IncrementBtn from './IncrementBtn';

// class component
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <IncrementBtn />
      </div>
    );
  }
}

export default App;
