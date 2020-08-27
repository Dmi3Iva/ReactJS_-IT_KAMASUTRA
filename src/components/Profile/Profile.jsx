import React from 'react';
import Avatar from './Avatar/Avatar.jsx';
import Description from './Description/Description.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css';
import WriteNewPostContainer from "./WriteNewPost/WriteNewPostContainer";
import Preloader from "../Common/Preloader/Preloader";

const  Profile = (props) => {
	console.log(props);
	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.profile}>
			<Avatar photos={props.profile.photos}/>
			<Description profile={props.profile}/>
			<WriteNewPostContainer />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;
