import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import WriteNewPost from "./WriteNewPost";


const WriteNewPostContainer = (props) => {

	let addPost = () =>{
		props.Store.dispatch(addPostActionCreator());
	}

	let onPostChange = (postText) =>{
		props.Store.dispatch(updateNewPostTextActionCreator(postText));
	}

	return (
		<WriteNewPost updateNewPost={onPostChange} addPost={addPost} newPostText={props.Store.getState().ProfilePage.newPostText} />
	);
}

export default WriteNewPostContainer;
