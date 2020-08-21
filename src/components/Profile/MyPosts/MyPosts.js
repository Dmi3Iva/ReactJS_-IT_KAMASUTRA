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
			{
				PostsData.map((x) =>{
					return <Post text={x.message} likesCount={x.likesCount} />
				}
				)
			}
		</div>
	);
}

export default MyPosts;
