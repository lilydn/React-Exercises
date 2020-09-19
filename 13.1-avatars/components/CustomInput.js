import React from "react";
import "./CustomInput.css";

class CustomInput extends React.Component {
	state = { term: "" };

	handleChange = (e) => {
		this.setState({ term: e.target.value });
		this.props.onInput(e.target.value.toLowerCase());
	};

	render() {
		return (
			<div className="filter-bar">
				<input
					type="text"
					placeholder="Filter By Name"
					value={this.state.term}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default CustomInput;
