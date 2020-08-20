import React from 'react';
import styles from './Profile.module.css';

function Profile(){
	return (
		<div className={styles.profile}>
			<div className={styles.avatar}>avatar</div>
			<div className={styles.description}>descriptin</div>
			<div className={styles.writeNewPost}>writeNewPost</div>
			<div className={styles.myPosts}>myPosts</div>
		</div>
	);
}

export default Profile;
