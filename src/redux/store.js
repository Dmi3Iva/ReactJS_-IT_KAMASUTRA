import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let Store = {
    _state : {
        ProfilePage : {
            PostsData: [
                {id: 1, message: "There's my first post!", likesCount: 10},
                {id: 2, message: "Welcome to my page!", likesCount: 20}
            ],
            newPostText : ''
        },
        MessagesPage: {
            MessagesData: [
                {id: 1, avatar: "ava", name: "Andrew", text: "How is your day?"},
                {id: 2, avatar: "ava", name: "Me", text: "It's ok, thank you for asking"},
                {id: 3, avatar: "ava", name: "Andrew", text: "You're welcome!"}
            ],
            ContactsData: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Olga"},
                {id: 6, name: "Kristy"}
            ],
            newMessage : ''
        },
        sidebar:{}
    },
    _subscriber(){
        console.log('empty render...');
    },
    _setNewMessage(text) {
        this._state.MessagesPage.newMessage = text;
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    getNewPostText() {
        return this._state.ProfilePage.newPostText;
    },
    dispatch(action){
        this._state.ProfilePage  = profileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage =  dialogsReducer(this._state.MessagesPage, action);

        this._subscriber(this.getState());
    },
}


window.Store = Store;
export default Store;