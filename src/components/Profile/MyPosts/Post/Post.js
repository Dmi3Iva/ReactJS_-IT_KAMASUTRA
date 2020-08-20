import React from 'react';
import styles from './Post.css';

const Post = (props) => {
	console.log(props);
	return (
		<div className={styles.post}>
			{props.text}
		</div>
	);
}

export default Post;
