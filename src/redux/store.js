let Store = {
    _state : {
        ProfilePage : {
            PostsData: [
                {id: 1, message: "There's my first post!", likesCount: 10},
                {id: 2, message: "Welcome to my page!", likesCount: 20}
            ],
            _newPostText : ''
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
    getState(){
      return this._state;
    },
    addPost() {
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
        this.setNewPostText('');
        this._subscriber(Store._state);
    },
    updateNewPostText(text) {
        this.setNewPostText(text);
        this._subscriber(Store._state);
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    _subscriber(){
        console.log('empty render...');
    },
    setNewPostText(text)
    {
        this._state.ProfilePage._newPostText = text;
    },
    getNewPostText() {
        return this._state.ProfilePage._newPostText;
    },
}

window.Store = Store;
export default Store;