import {profileAPI} from "../api/api";

const PROFILE_PREFIX = 'PROFILE_REDUCER/';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const REMOVE_POST = 'REMOVE_POST';
const SAVE_PROFILE_PHOTO = PROFILE_PREFIX + 'SAVE_PROFILE_PHOTO';

let initialState = {
    PostsData: [
        {id: 1, message: "There's my first post!", likesCount: 10},
        {id: 2, message: "Welcome to my page!", likesCount: 20}
    ],
    profile: null,
    newPostText: '',
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastId = 1;
            while (state.PostsData[lastId - 1] !== undefined)
                ++lastId;

            return {
                ...state,
                PostsData: [...state.PostsData,
                    {
                        id: lastId,
                        message: action.newPostText,
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case REMOVE_POST: {
            return {
                ...state, PostsData: state.PostsData.filter(x => x.id !== action.postId)
            }
        }
        case SAVE_PROFILE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }

        default:
            return (state);

    }
}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const removePost = (postId) => ({type: REMOVE_POST, postId});
export const updateNewPost = (postText) => ({type: UPDATE_NEW_POST_TEXT, postText: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const saveProfilePhotoSuccess = (photos) => ({type:SAVE_PROFILE_PHOTO, photos});

export const saveProfilePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.updateProfilePhoto(file);

    if(response.data.resultCode === 0)
        dispatch(saveProfilePhotoSuccess(response.data.data.photos));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(data));
}

export default profileReducer;