import {authAPI} from "../api/api";

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
export const authUserData =  () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if(data.resultCode === 0)
            {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
}

export const login = (email, pass, rememberMe) => (dispatch) =>{
    authAPI.login(email, pass, rememberMe)
        .then(response => {
           if(response.data.resultCode === 0) {
               dispatch( authUserData());
           }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export const setAuthUserData = (userId, login, email, isAuth = false) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export default authReducer;