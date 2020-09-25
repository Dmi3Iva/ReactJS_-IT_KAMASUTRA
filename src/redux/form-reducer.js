import {reducer as formReducer} from 'redux-form';
import {GET_CAPTCHA_URL_SUCCESS} from "./auth-reducer";

export default formReducer.plugin({
    login: (state, action) => {
        switch (action.type) {
            case GET_CAPTCHA_URL_SUCCESS: {
                return {
                    ...state,
                    values: {...state.values, captcha: null}
                }
            }
            default: {
                return state;
            }
        }
    }
})