import {authAPI, securityAPI} from "../api/api";
import {stopSubmit, reset} from "redux-form";

const AUTH_PREFIX = 'AUTH_REDUCER/';
const SET_USER_DATA = AUTH_PREFIX + 'SET_USER_DATA';
export const GET_CAPTCHA_URL_SUCCESS = AUTH_PREFIX + 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
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
        case GET_CAPTCHA_URL_SUCCESS:{
            return {
                ...state,
                captchaUrl: action.data.captchaUrl
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
    }
    else {
        if(data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
}

export const login = (email, pass, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, pass, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(authUserData());
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
};

export const getCaptchaUrl = ()=> async(dispatch)=>{
    const response = await securityAPI.getCaptchaUrl();

    const captcha = response.data.url;
    dispatch(getCaptchaUrlSuccess(captcha));
}

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


export const getCaptchaUrlSuccess = (captchaUrl)=> ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
});

export default authReducer;