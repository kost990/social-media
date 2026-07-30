import profileReducer, { addPost, deletePost } from "./profile-reducer";

    let state = {
            posts: [{
                    id: 1,
                    message: 'hi, how are you',
                    likesCount: 80
                },
                {
                    id: 2,
                    message: 'Its my first post',
                    likesCount: 12
                }
            ]
    };

it('new post should be added', () => {
    let action = addPost("kostik");
    let newState = profileReducer(state, action
    );
    expect(newState.posts.length).toBe(3);
});
it('message of new post should be correct', () => {
    let action = addPost("kostik");
    let newState = profileReducer(state, action
    );
    expect(newState.posts[2].message).toBe("kostik");
});

it('after deleting lenth of mesages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action
    );
    expect(newState.posts.length).toBe(1);
});