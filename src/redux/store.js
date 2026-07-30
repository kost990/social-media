import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-Reducer";
import profileReducer from "./profile-reducer";

let store = {
    _callSubscriber() {},
    _state: {
        ProfilePage: {
            posts: [{
                    id: 1,
                    message: 'hi, how are you',
                    likesCount: 80
                },
                {
                    id: 2,
                    message: 'Its my first post',
                    likesCount: 12
                },
            ],
            newPostText: 'fdsfdsdfs'
        },
        DialogsPage: {
            messagesData: [{
                    id: 1,
                    message: 'hi'
                },
                {
                    id: 2,
                    message: 'hi'
                },
                {
                    id: 3,
                    message: 'How are you'
                },
                {
                    id: 4,
                    message: 'yo'
                },
                {
                    id: 5,
                    message: 'yo'
                }
            ],
            dialogsData: [{
                    id: 1,
                    name: 'Liza'
                },
                {
                    id: 2,
                    name: 'Kirill'
                },
                {
                    id: 3,
                    name: 'Kostya'
                },
                {
                    id: 4,
                    name: 'Dimych'
                },
                {
                    id: 5,
                    name: 'Sasha'
                },
                {
                    id: 6,
                    name: 'Larisa'
                }
            ],
            NewMessageBody: 'lkj'
        },
        navbarPage: {

        }
    },
    getState() {
        return this._state;
    },
    subsсribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._state.ProfilePage = navbarReducer(this._state.ProfilePage, action)

        this._callSubscriber(this._state);
    },
}
export default store;