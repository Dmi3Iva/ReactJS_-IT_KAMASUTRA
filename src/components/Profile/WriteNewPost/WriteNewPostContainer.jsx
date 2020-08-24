import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import WriteNewPost from "./WriteNewPost";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        newPostText : state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
}

const WriteNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(WriteNewPost);

export default WriteNewPostContainer;
