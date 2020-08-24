import React from 'react';
import Post from './Post/Post';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = props => {
//
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(Store) =>{
// 					let Posts = Store.getState().ProfilePage.PostsData.map(x=>(<Post key={x.id} text={x.message} likesCount={x.likesCount} />));
//
// 					return <MyPosts Posts={Posts}/>;
// 				}
// 			}
// 		</StoreContext.Consumer>
// 		);
// }

let mapStateToProps = (state) => {
	return {
		Posts : state.ProfilePage.PostsData.map(x=>(<Post key={x.id} text={x.message} likesCount={x.likesCount} />))
	}
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
