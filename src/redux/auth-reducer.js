import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        }
        default: {
            return state;
        }
    }
}
export const authUserData = () => async (dispatch) => {
    let data = await authAPI.authMe();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
}

export const login = (email, pass, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, pass, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const setAuthUserData = (userId, login, email, isAuth = false) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
});

export default authReducer;