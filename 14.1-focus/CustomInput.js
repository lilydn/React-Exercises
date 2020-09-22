import React from "react";
import "./CustomInput.css";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  term: "" };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  // controlled 
	handleChange = (e) => {
		this.setState({ term: e.target.value });
		// this.props.onInput(e.target.value.toLowerCase());
	};

	render() {
		return (
			<div className="custom-input">
				<input
					type="text"
          placeholder="Your input here"
          ref={this.inputRef}
					value={this.state.term}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default CustomInput;