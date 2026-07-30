import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import navbarReducer from "./navbar-Reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk";
import appReducer from "./app-reducer";

const thunkMiddleware = thunk;

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    }
);
const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;