import React from "react";
import "./InputQuery.css";

class InputQuery extends React.Component {
	state = { query: '', err: '' };

	onSubmit = (e) => {
    e.preventDefault();
    let {query} = this.state;
    if(query.length > 3) {
      this.props.handleSubmit(query);
    }
    else {
      this.setState({ err: 'at least 3 characters! 🧔' });
    }
  }

  onChange = (e) => {
    this.setState({ query: e.target.value, err: '' });
    let {query} = this.state;
    if(query.length <= 3) {
      this.props.handleSubmit(query);
    }
  }

  onBlur = (e) => {
    this.setState({ query: '', err: '' });
    this.props.handleSubmit(this.state.query);
  }
  


	render() {
		return (
			<div className="input-wrapper">
				<form onSubmit={this.onSubmit}>
					<label>Get All Jokes By Query: </label>
					<input
            type="text"
            placeholder="Enter at least 3 characters query"
						value={this.state.query}
            onChange={this.onChange}
            onBlur={this.onBlur}
					/>
          <span className="errSpan">{this.state.err}</span>
				</form>
			</div>
		);
	}
}

export default InputQuery;
