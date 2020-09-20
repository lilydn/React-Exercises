import React from "react";
import "./App.css";

class JokeList extends React.Component {
	render() {
		return (
			<React.Fragment>
				{this.props.currentList.map(({ id, value }) => {
					return (
						<div className="joke-display" key={id}>
							<p>{`${value}`}</p>
						</div>
					);
				})}
			</React.Fragment>
		);
	}
}
export default JokeList;
