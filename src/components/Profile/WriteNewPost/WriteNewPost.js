import React from 'react';

const WriteNewPost = (props) => {

	let newPostElement = React.createRef();

	let addPost = () =>{
		let action = {type: 'ADD-POST'};
		props.dispatch(action);
	}

	let onPostChange = () =>{
		let postText = newPostElement.current.value;
		let action = {type : 'UPDATE-NEW-POST-TEXT', postText};
		props.dispatch(action);
	}
	return (
		<div>
			<textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
			<button onClick={addPost} >Send new post</button>
		</div>
	);
}

export default WriteNewPost;
