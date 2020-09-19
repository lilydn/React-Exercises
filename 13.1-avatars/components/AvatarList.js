import React from "react";
import Avatar from "./Avatar";

const AvatarList = (props) => {
	const updatedList = props.peopleArray.filter(
		(person) =>
			person.name.first.toLowerCase().includes(props.term) ||
			person.name.last.toLowerCase().includes(props.term)
	);

	return updatedList.map((person) => {
		let { name, picture, login } = person;
		return (
			<Avatar
				key={login.uuid}
				firstName={name.first}
				lastName={name.last}
				picture={picture.large}
			/>
		);
	});
};

export default AvatarList;


