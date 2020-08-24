import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import WriteNewPost from "./WriteNewPost";
import StoreContext from "../../../StoreContext";


const WriteNewPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (Store) => {
                    let addPost = () => {
                        Store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (postText) => {
                        Store.dispatch(updateNewPostTextActionCreator(postText));
                    }
                    return (<WriteNewPost
                        updateNewPost={onPostChange}
                        addPost={addPost}
                        newPostText={Store.getState().ProfilePage.newPostText}
                    />);
                }
            }
        </StoreContext.Consumer>
    );
}

export default WriteNewPostContainer;
