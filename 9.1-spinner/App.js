import React from 'react';
import './App.css';
import Spinner from './Spinner';
import Timer from './Timer';

class App extends React.Component {
  state = {isLoading: true, seconds: 5};

  componentDidMount() {
    setInterval(() => {
      this.setState({seconds: this.state.seconds - 1})  
    }, 1000);
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000);
  }

  renderHelper() {
    if (this.state.isLoading) {
      return (
        <div className="App">
          <Spinner />
          <Timer seconds={this.state.seconds}/>
        </div>
      ); 
    }
    return <div>finished loading!</div>;
  }

  render () {
    return (
      <div className="App">
        {this.renderHelper()}
      </div>
    );
  }
}

export default App;
