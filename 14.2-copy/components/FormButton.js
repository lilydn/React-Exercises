import React from "react";
import "./App.css";

class FormButton extends React.Component {
	handleClick = () => {
		this.props.textAreaRef.select();
		document.execCommand("copy");
	};

	render() {
		return (
			<button className="form-button" onClick={this.handleClick}>
				Copy your answer
			</button>
		);
	}
}
export default FormButton;
