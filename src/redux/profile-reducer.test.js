import profileReducer, {addPost, removePost} from "./profile-reducer";

let state = {
    PostsData: [
        {id: 1, message: "There's my first post!", likesCount: 10},
        {id: 2, message: "Welcome to my page!", likesCount: 20}
    ]
};

test('New post should me added', ()=>{
    let action = addPost('Test is working!');

    let newState = profileReducer(state,action);

    expect(newState.PostsData.length).toBe(3);
})

test('message of added post should be correct', ()=>{
    let action = addPost('Test is working!');

    let newState = profileReducer(state,action);

    expect(newState.PostsData[2].message).toBe('Test is working!');
})

test('after deleting length of posts should be correct', ()=>{
    let action = removePost(2);

    let newState = profileReducer(state,action);

    expect(newState.PostsData.length).toBe(1);
})

test('after deleting length of posts shouldn\'t be changed', ()=>{
    let action = removePost(25);

    let newState = profileReducer(state,action);

    expect(newState.PostsData.length).toBe(2);
})
