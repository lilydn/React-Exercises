import React from "react";
import "./App.css";

class CustomButton extends React.Component {
	onClick = () => {
		this.props.onClick(this.props.color);
	};

	render() {
		return (
			<div className="custom-buttons">
				<button data-color={`${this.props.color}`} onClick={this.onClick}>
					{this.props.color}
				</button>
			</div>
		);
	}
}
export default CustomButton;


