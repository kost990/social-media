import {
    usersAPI
} from "../api/api";
import { updateObjectInArray } from "../Utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_LOADING = 'SET_LOADING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

let installState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isloading: true,
    followingInProgress: [],
}

const usersReducer = (state = installState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                }
                case SET_USERS: {
                    return {
                        ...state,
                        users: action.users
                    }
                }
                case SET_CURRENT_PAGE: {
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                }
                case SET_TOTAL_USERS_COUNT: {
                    return {
                        ...state,
                        totalUsersCount: action.count
                    }
                }
                case SET_LOADING: {
                    return {
                        ...state,
                        isloading: action.isloading
                    }
                }
                case SET_FOLLOWING_IN_PROGRESS: {
                    return {
                        ...state,
                        followingInProgress: action.isloading ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
                    }
                }
                default:
                    return state;
    }
}
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const setLoading = (isloading) => ({
    type: SET_LOADING,
    isloading
})
export const setFollowingInProgress = (isloading, userId) => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    isloading,
    userId
})


export const getUsers = (page, pageSize) => async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setCurrentPage(page));
        let response = await usersAPI.getUsers(page, pageSize)
            dispatch(setLoading(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
    }


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(setFollowingInProgress(true, userId));
        let response = await apiMethod;
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId))
            }
            dispatch(setFollowingInProgress(false, userId));
    }


export const follow = (userId) => async (dispatch) => {
        followUnfollowFlow(dispatch, userId,usersAPI.getfollow(userId), followSuccess);
    }


export const unfollow = (userId) => async (dispatch) => {
        followUnfollowFlow(dispatch, userId,usersAPI.ungetfollow(userId), unfollowSuccess);
    }


export default usersReducer;