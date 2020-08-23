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
            ]
        },
    },
    _subscriber(){
        console.log('empty render...');
    },
    _addPost() {
        let lastId = 1;
        while (this._state.ProfilePage.PostsData[lastId - 1] !== undefined)
        {
            ++lastId;
        }
        this._state.ProfilePage.PostsData.push({
            id: lastId,
            message: this.getNewPostText(),
            likesCount: 0
        });
        this._setNewPostText('');
        this._subscriber(Store._state);
    },
    _updateNewPostText(text) {
        this._setNewPostText(text);
        this._subscriber(Store._state);
    },
    _setNewPostText(text)
    {
        this._state.ProfilePage.newPostText = text;
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
        if(action.type === 'ADD-POST') {
            this._addPost();
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT')
        {
            this._updateNewPostText(action.postText);
        }
    }
}

window.Store = Store;
export default Store;