import React from 'react';

const WriteNewPost = (props) => {

	let newPostElement = React.createRef();
	return (
		<div>
			<textarea ref={newPostElement} value={props.ProfilePage._newPostText} onChange={()=>props.updateNewPost(newPostElement.current.value)} />
			<button onClick={()=>props.addPost(newPostElement)} >Send new post</button>
		</div>
	);
}

export default WriteNewPost;
