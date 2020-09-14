import React from 'react';
import './App.css';
import SlidingBox from './SlidingBox';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <SlidingBox size="50px" color="salmon" top="10px"/>
        <SlidingBox size="70px" color="blue" top="70px"/>
        <SlidingBox size="90px" color="purple" top="150px"/>
      </div>
    );
  }
}

export default App;
