import React from 'react';

const Description = (props) => {
	return (<div>
		<div className="fullName">{props.profile.fullName}</div>
		<div className="aboutMe">{props.profile.aboutMe}</div>
		<div>{props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</div>
		<div>
			{(props.profile.contacts.length !== 0) && "Социальные сети"}
		</div>
		{(props.profile.contacts.length !== 0) && Object.values(props.profile.contacts).map(c => (<div className="Contacts__item">{c}</div>))}
	</div>);
}

export default Description;
