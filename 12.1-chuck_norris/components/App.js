import React from 'react';
import axios from 'axios';
import BtnRandomJoke from './BtnRandomJoke';
import JokeDispaly from './JokeDispaly';
import './App.css';


class App extends React.Component {
  state = { currentJoke: '' };
  
  onClick = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random', {
        method: 'get',
      });
      console.log(response);
      this.setState({ currentJoke: response.data.value });
      // console.log(this.currentJoke);
    } catch (error) {
      console.error(error);
    }
  }

  render () {
    return (
      <div className="App">
        <JokeDispaly currentJoke={this.state.currentJoke} />
        <BtnRandomJoke onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
