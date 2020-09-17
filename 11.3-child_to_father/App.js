import React from "react";
import "./App.css";
import CustomButton from "./CustomButton";

class App extends React.Component {
	state = { color: null };

	onBtnClick = (childColor) => {
		this.setState({ color: childColor });
	};

	render() {
		const colors = ["blue", "red", "yellow"];
		return (
			<div className="App">
				{colors.map((color) => {
					return <CustomButton onClick={this.onBtnClick} color={color} />;
				})}
				<p>The color selected is: {this.state.color}</p>
			</div>
		);
	}
}

export default App;
