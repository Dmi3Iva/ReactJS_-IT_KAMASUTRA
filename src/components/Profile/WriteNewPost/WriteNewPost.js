import React from 'react';

const WriteNewPost = () => {

	let newPostElement = React.createRef();

	let addPost = (e) => {
		console.log(e);
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div>
			<textarea ref={newPostElement}/>
			<button onClick={addPost}>Send new post</button>
		</div>
	);
}

export default WriteNewPost;
