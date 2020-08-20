import React from 'react';
import Post from './Post/Post.js';

function MyPosts(){
	return (
		<div>
			<h3>MyPosts</h3>
			<Post text="Hi, how's your mood today?"/>
			<Post text="there is my first post!"/>
		</div>
	);
}

export default MyPosts;
