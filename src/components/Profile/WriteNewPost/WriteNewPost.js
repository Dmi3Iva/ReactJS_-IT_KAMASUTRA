import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const WriteNewPost = (props) => {

	let newPostElement = React.createRef();

	let addPost = () =>{
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () =>{
		let postText = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(postText));
	}
	return (
		<div>
			<textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
			<button onClick={addPost} >Send new post</button>
		</div>
	);
}

export default WriteNewPost;
