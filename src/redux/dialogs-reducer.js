const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type)
    {
        case ADD_MESSAGE:
            let lastId = 1;
            while( state.MessagesData[lastId] !== undefined)
                ++lastId;
            stateCopy.MessagesData.push({
                id: lastId,
                avatar: "ava",
                name: "The GOD",
                text: state.newMessage
            });
            stateCopy.newMessage = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE:
            stateCopy.newMessage = action.message;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, message: text });

export default dialogsReducer;