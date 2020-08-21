import React from 'react';
import Post from './Post/Post.js';

function MyPosts(){
	return (
		<div>
			<h3>MyPosts</h3>
			<Post text="Hi, how's your mood today?" likesCount={4}/>
			<Post text="there is my first post!" likesCount={1}/>
		</div>
	);
}

export default MyPosts;
