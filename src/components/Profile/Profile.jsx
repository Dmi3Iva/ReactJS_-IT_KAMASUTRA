import React from 'react';
import Avatar from './Avatar/Avatar.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css';
import WriteNewPostContainer from "./WriteNewPost/WriteNewPostContainer";
import Preloader from "../Common/Preloader/Preloader";
import DescriptionContainer from "./Description/DescriptionContainer";

const  Profile = (props) => {
	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.profile}>
			<Avatar photos={props.profile.photos} isOwner={props.isOwner}/>
			<DescriptionContainer profile={props.profile} status={props.status} isOwner={props.isOwner}/>
			<WriteNewPostContainer />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;
