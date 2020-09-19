import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
	return (
		<div className="avatar">
			<label className="avatar-label">
				{props.firstName} {props.lastName}
			</label>
			<img className="avatar-image" src={props.picture} alt="avatar"></img>
		</div>
	);
};

export default Avatar;
