const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    PostsData: [
        {id: 1, message: "There's my first post!", likesCount: 10},
        {id: 2, message: "Welcome to my page!", likesCount: 20}
    ],
    profile: null,
    newPostText : ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_POST:
            let lastId = 1;
            while (state.PostsData[lastId - 1] !== undefined)
                ++lastId;

            return {
                ...state,
                PostsData: [...state.PostsData,
                    {
                        id: lastId,
                        message: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            };
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return (state);

    }
}
export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (postText) => ({ type: UPDATE_NEW_POST_TEXT, postText: postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;