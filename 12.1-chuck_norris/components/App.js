import React from 'react';
import axios from 'axios';
import BtnRandomJoke from './BtnRandomJoke';
import BtnCategoryJoke from './BtnCategoryJoke';
import JokeList from './JokeList';
import InputQuery from './InputQuery';
import './App.css';


class App extends React.Component {
  state = { displayedJokes: [], categories: [], isLoading: true, err: ''};
  baseUrl = 'https://api.chucknorris.io/jokes';

  async componentDidMount() {
    let resultArr = [];
		try {
      const response = await axios.get(`${this.baseUrl}/categories`);
      resultArr = response.data;
    } catch (error) {
      console.error(error);
    }
    this.setState({categories: resultArr, isLoading: false});
	}
  
  handleRandomClick = async () => {
    const result = [];
    try {
      const response = await axios.get(`${this.baseUrl}/random`);
      // console.log(response);
      result.push(response.data);
    } catch (error) {
      console.error(error);
    }
    this.setState({displayedJokes: result});
  }

  handleCatClick = async (cat) => {
    const result = [];
    try {
      const response = await axios.get(`${this.baseUrl}/random?category=${cat}`);
      // console.log(response);
      result.push(response.data);
    } catch (error) {
      console.error(error);
    }
    this.setState({displayedJokes: result});
  }

  onSearchSubmit = async (query) => {
    if(query.length > 3) {
      const response = await axios.get(`${this.baseUrl}/search?query=${query}`);
      this.setState({ displayedJokes: response.data.result });
    }
    else {
      this.setState({ displayedJokes: [] });
    }
     
  }


  render () {
    if (this.state.isLoading) {
      return <div>Loading..</div>;
    }
    return (
      <div className="App">
        <h2>Chuck Norris Jokes</h2>
        <p>Get A Joke By Category:</p>
        <div className="categories-wrapper">
          {this.state.categories.map(cat => {return <BtnCategoryJoke handleClick={this.handleCatClick} category={cat} key={cat}/>})}
        </div>
        <BtnRandomJoke handleClick={this.handleRandomClick} />
        <InputQuery handleSubmit={this.onSearchSubmit}/>
        <JokeList currentList={this.state.displayedJokes} />
      </div>
    );
  }
}

export default App;
