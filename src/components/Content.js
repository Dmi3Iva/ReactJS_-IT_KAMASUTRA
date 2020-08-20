import React from 'react';
import Profile from './Profile';
import backgroundImage from './background.jpg';
import styles from './Content.module.css';

function Content(){
	return (
		<main className={styles.content}>
			<img className={styles.content__wallpaper} src={backgroundImage}/>
			Main content
			<Profile />
		</main>
	);
}

export default Content;
