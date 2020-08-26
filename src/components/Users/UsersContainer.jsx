import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state)=>{
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage : state.UsersPage.currentPage
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
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);