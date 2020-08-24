import React from 'react';
import Post from './Post/Post';
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
	let Posts = props.Store.getState().ProfilePage.PostsData.map(x=>(<Post key={x.id} text={x.message} likesCount={x.likesCount} />));

	return (<MyPosts Posts={Posts} />);
}

export default MyPostsContainer;
