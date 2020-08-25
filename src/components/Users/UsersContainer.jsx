import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAc, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state)=>{
    return{
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        follow : (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow : (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers : (users)=>{
            dispatch(setUsersAc(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);