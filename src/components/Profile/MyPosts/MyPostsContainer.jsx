import React, {PureComponent} from 'react';
import Post from './Post/Post';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (props) => {
    return {
        Posts: props.ProfilePage.PostsData.map(x => (
            <Post key={x.id} text={x.message} likesCount={x.likesCount}/>
            ))
    }
}

const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);

export default MyPostsContainer;
