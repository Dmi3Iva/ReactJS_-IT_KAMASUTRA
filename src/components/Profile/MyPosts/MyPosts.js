import React from 'react';
import Post from './Post/Post.js';

function MyPosts(){
	let PostsData =[
		{id:1, message:"There's my first post!", likesCount: 10},
		{id:2, message:"Welcome to my page!", likesCount: 20}
	];
	return (
		<div>
			<h3>MyPosts</h3>
			<Post text="Hi, how's your mood today?" likesCount={4}/>
			<Post text="there is my first post!" likesCount={1}/>
		</div>
	);
}

export default MyPosts;
