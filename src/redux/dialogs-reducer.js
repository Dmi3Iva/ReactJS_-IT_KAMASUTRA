const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type)
    {
        case ADD_MESSAGE:
            let lastId = 1;
            while( state.MessagesData[lastId] !== undefined)
                ++lastId;
            state.MessagesData.push({
                id: lastId,
                avatar: "ava",
                name: "The GOD",
                text: state.newMessage
            });
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.message;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, message: text });

export default dialogsReducer;