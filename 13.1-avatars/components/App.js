import React from "react";
import axios from "axios";
import CustomInput from "./CustomInput";
import CustomBtn from "./CustomBtn";
import AvatarList from "./AvatarList";
import "./App.css";

class App extends React.Component {
	state = { people: [], term: "", initialAvatarsNum: 25, isLoading: true };

	async componentDidMount() {
		const results = [];
		for (let i = 0; i < this.state.initialAvatarsNum; i++) {
			try {
				const response = await axios.get(
					`https://api.allorigins.win/raw?url=randomuser.me/api/`
				);
				results.push(response.data.results[0]);
			} catch (error) {
				console.error(error);
			}
		}
		this.setState({ people: results, isLoading: false });
	}

	filterByTerm = (term) => {
		this.setState({term})
	};

	render() {
		const { isLoading, people, term } = this.state;

		if (isLoading) {
			return (
				<div className="loading-page">
					<div className="loader"></div>
					<p>Loading...</p>
				</div>
			);
		}
		return (
			<div className="App">
				<div className="input-and-btn-container">
					<CustomInput onInput={this.filterByTerm} />
					<CustomBtn onClick={() => this.filterByTerm(this.state.term)}/>
				</div>
				<div className="avatars-container">
					<AvatarList term={term} peopleArray={people} />
				</div>
			</div>
		);
	}
}

export default App;
