import React from "react";
import FormButton from "./FormButton";
import "./App.css";

class FormTextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.textAreaRef = React.createRef();
	}

	// controlled
	handleChange = () => {
		this.setState({ value: this.textAreaRef.current.value });
	};

	render() {
		return (
			<div className="form-wrapper">
				<textarea
					rows="4" cols="35"
					ref={this.textAreaRef}
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<FormButton textAreaRef={this.textAreaRef.current} />
			</div>
		);
	}
}
export default FormTextArea;
