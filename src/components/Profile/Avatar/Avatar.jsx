import React from 'react';
import styles from './Avatar.css'

function Avatar(props){
	return(
			<div className={styles.avatar}>
				<img src={props.photos.small} alt="ava "/>
			</div>
	);
}

export default Avatar;
