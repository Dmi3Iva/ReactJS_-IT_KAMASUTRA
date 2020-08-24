const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, message: "There's my first post!", likesCount: 10},
        {id: 2, message: "Welcome to my page!", likesCount: 20}
    ],
    newPostText : ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy ={...state};
    switch (action.type)
    {
        case ADD_POST:
            let lastId = 1;
            while (state.PostsData[lastId - 1] !== undefined)
            {
                ++lastId;
            }
            stateCopy.PostsData = [...state.PostsData];
            stateCopy.PostsData.push({
                id: lastId,
                message: state.newPostText,
                likesCount: 0
            });
            stateCopy.newPostText = '';
            return (stateCopy);
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.postText;
            return (stateCopy);
        default:
            return (stateCopy);

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postText) => ({ type: UPDATE_NEW_POST_TEXT, postText: postText });

export default profileReducer;