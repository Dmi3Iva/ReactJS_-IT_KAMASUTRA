const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let url= 'https://i.pinimg.com/originals/31/75/48/31754822b98a017c6fa76fdeadc994fa.jpg';

let initialState = {
    users:[
        {id: 1, photoUrl: url, followed: false, fullName:'Dmitriy', status:'i am a boss', location: {city:'Minsk', country:'Belarus'}},
        {id: 2, photoUrl: url,followed: true, fullName:'Sasha', status:'i am a boss too', location: {city:'Moscow', country:'Russia'}},
        {id: 3, photoUrl: url,followed: false, fullName:'Dart Veider', status:'never go outside', location: {city:'Minsk', country:'Belarus'}},
        {id: 4, photoUrl: url,followed: true, fullName:'Han Sollo', status:'kkkk', location: {city:'Minsk', country:'Belarus'}},
        {id: 5,photoUrl: url, followed: false, fullName:'Leya', status:'Henlo', location: {city:'Minsk', country:'Belarus'}},
        {id: 6,photoUrl: url, followed: true, fullName:'Obi Wan kenobi', status:'Hello', location: {city:'Minsk', country:'Belarus'}},
    ]
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
            return {...state, users: [...state.users, action.users]};
        }
        default:
            return (state);

    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) =>({type: SET_USERS, users});

export default usersReducer;