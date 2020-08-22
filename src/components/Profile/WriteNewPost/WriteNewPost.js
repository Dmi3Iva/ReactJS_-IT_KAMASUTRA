import React from 'react';

const WriteNewPost = (props) => {

	let newPostElement = React.createRef();

	return (
		<div>
			<textarea ref={newPostElement}/>
			<button onClick={props.addPost}>Send new post</button>
		</div>
	);
}

export default WriteNewPost;
