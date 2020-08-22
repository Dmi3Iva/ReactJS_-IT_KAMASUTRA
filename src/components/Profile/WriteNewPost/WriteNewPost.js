import React from 'react';

const WriteNewPost = (props) => {

	let newPostElement = React.createRef();
	let onChangeTextArea = ()=>{
		props.NewPostData.updateNewPostText(newPostElement.current.value);
	};

	return (
		<div>
			<textarea ref={newPostElement} value={props.NewPostData.newPostText} onChange={onChangeTextArea} />
			<button onClick={()=>props.NewPostData.addPost(newPostElement)}  value={props.NewPostData.newPostText}>Send new post</button>
		</div>
	);
}

export default WriteNewPost;
