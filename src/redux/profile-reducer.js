const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type)
    {
        case ADD_POST:
            let lastId = 1;
            while (state.PostsData[lastId - 1] !== undefined)
            {
                ++lastId;
            }
            state.PostsData.push({
                id: lastId,
                message: state.newPostText,
                likesCount: 0
            });
            state.newPostText = '';
            return (state);
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return (state);
        default:
            return (state);

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postText) => ({ type: UPDATE_NEW_POST_TEXT, postText: postText });

export default profileReducer;