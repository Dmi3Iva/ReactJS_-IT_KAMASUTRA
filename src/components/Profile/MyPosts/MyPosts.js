import React from 'react';
import Post from './Post/Post.js';

const MyPosts = props => {
	return (
		<div>
			<h3>MyPosts</h3>
			{
				props.PostsData.map((x) =>{
					return <Post text={x.message} likesCount={x.likesCount} />
				}
				)
			}
		</div>
	);
}

export default MyPosts;
