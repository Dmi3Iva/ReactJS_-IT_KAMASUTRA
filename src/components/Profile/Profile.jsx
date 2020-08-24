import React from 'react';
import Avatar from './Avatar/Avatar.jsx';
import Description from './Description/Description.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css';
import WriteNewPostContainer from "./WriteNewPost/WriteNewPostContainer";

function Profile(props){
	return (
		<div className={styles.profile}>
			<Avatar />
			<Description />
			<WriteNewPostContainer Store={props.Store} />
			<MyPostsContainer Store={props.Store} />
		</div>
	);
}

export default Profile;
