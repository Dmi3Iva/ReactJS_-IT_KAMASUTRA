import {addPost, updateNewPost} from "../../../redux/profile-reducer";
import WriteNewPost from "./WriteNewPost";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        newPostText : state.ProfilePage.newPostText
    }
}

const WriteNewPostContainer = connect(mapStateToProps, {updateNewPost, addPost})(WriteNewPost);

export default WriteNewPostContainer;
