import {renderReactDom} from '../render';

let Store = {
    profilePage : {
        PostsData: [
            {id: 1, message: "There's my first post!", likesCount: 10},
            {id: 2, message: "Welcome to my page!", likesCount: 20}
        ],
        addPost(){
            let newPost = {
                id: 10,
                message: this.getNewPostText(),
                likesCount: 0
            };
            this.PostsData.push(newPost);
            this.setNewPostText('');
            renderReactDom(Store);
        },
        updateNewPostText (newText) {
            this.setNewPostText(newText);
            renderReactDom(Store);
        },
        setNewPostText(text)
        {
            this._newPostText = text;
        },
        getNewPostText() {
            return this._newPostText;
        },
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
}

export default Store;