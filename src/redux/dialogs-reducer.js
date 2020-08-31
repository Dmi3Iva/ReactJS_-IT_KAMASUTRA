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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_MESSAGE:
            let lastId = 1;
            while( state.MessagesData[lastId] !== undefined)
                ++lastId;
            return {
                ...state,
                MessagesData: [...state.MessagesData, {
                    id: lastId,
                    avatar: "ava",
                    name: "The GOD",
                    text: action.newMessage
                }]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;