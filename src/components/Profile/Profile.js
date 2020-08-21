import React from 'react';
import Avatar from './Avatar/Avatar.js';
import Description from './Description/Description.js';
import WriteNewPost from './WriteNewPost/WriteNewPost.js';
import MyPosts from './MyPosts/MyPosts.js';
import styles from './Profile.module.css';

function Profile(){
	let PostsData =[
		{id:1, message:"There's my first post!", likesCount: 10},
		{id:2, message:"Welcome to my page!", likesCount: 20}
	];
	return (
		<div className={styles.profile}>
			<Avatar />
			<Description />
			<WriteNewPost />
			<MyPosts PostsData={PostsData}/>
		</div>
	);
}

export default Profile;
