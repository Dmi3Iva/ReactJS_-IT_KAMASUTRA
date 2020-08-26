const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let url= 'https://i.pinimg.com/originals/31/75/48/31754822b98a017c6fa76fdeadc994fa.jpg';

let initialState = {
    users:[

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    (x) => {
                        if(x.id === action.userId)
                            return {
                                ...x,
                                followed:true
                            }
                        return x;
                    }
                )
            };
        case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(
                (x) => {
                    if(x.id === action.userId)
                        return {
                            ...x,
                            followed : false
                        }
                    return x;
                }
            )
        };
        case SET_USERS:{
            return {...state, users: [...action.users]};
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return (state);

    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) =>({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});

export default usersReducer;