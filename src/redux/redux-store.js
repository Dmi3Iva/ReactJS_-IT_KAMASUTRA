import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;