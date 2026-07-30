import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_TEST = 'DELETE_TEST';


let installState = {
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
            newPostText: 'fdsfdsdfs',
            profile: null,
            status: ""
}

const profileReducer = (state= installState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 3,
                message: action.text,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newpost],
                newPostText: '',

            };
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }
        case DELETE_TEST: {
            return {...state ,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}
export const addPost = (text) => ({type: ADD_POST, text});
export const updateNewPostText = (text) =>  ({  
    type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_TEST, postId});

export const setUserProfileSuccess = (profile) => ({
    type: SET_USER_PROFILE, profile});

export const setUserProfile = (userId) => {
    return (dispatch) => {
    ProfileAPI.setUserProfile(userId).then(data => {
        dispatch(setUserProfileSuccess(data));
      });
    }
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data));
    }

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
        }
    }


export default profileReducer;