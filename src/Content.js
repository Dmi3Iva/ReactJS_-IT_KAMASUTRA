import React from 'react';
import Profile from './Profile';
import backgroundImage from './background.jpg';

function Content(){
	return (
		<main className="content">
			<img className="content__wallpaper" src={backgroundImage}/>
			Main content
			<Profile />
		</main>
	);
}

export default Content;
