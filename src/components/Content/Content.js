import React from 'react';
import Profile from './../Profile/Profile.js';
import backgroundImage from './background.jpg';
import styles from './Content.module.css';

function Content(){
	return (
		<main className={styles.content}>
			<img className={styles.content__wallpaper} src={backgroundImage} alt="background"/>
			Main content
			<Profile />
		</main>
	);
}

export default Content;
