import React from 'react';
import Post from './Post/Post';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = props => {

	return (
		<StoreContext.Consumer>
			{
				(Store) =>{
					let Posts = Store.getState().ProfilePage.PostsData.map(x=>(<Post key={x.id} text={x.message} likesCount={x.likesCount} />));

					return <MyPosts Posts={Posts}/>;
				}
			}
		</StoreContext.Consumer>
		);
}

export default MyPostsContainer;
