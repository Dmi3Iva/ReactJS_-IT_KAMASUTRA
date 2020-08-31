import {addPost, updateNewPost} from "../../../redux/profile-reducer";
import WriteNewPost from "./WriteNewPost";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
    }
}

const WriteNewPostContainer = connect(mapStateToProps, {addPost})(WriteNewPost);

export default WriteNewPostContainer;
