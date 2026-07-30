import {
    AuthAPI
} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let installState = {
    userId: null,
    email: null,
    login: null,
    isloading: false,
    isAuth: false,
    password: null,
    rememberMe: false,
}

const authReducer = (state = installState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
            default:
                return state;
    }
}
export const setUserDataSuccess = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
})

export const setUserData = () => async (dispatch) => {
       let response = await AuthAPI.authMe()
            if (response.data.resultCode === 0) {
                let {
                    id,
                    login,
                    email
                } = response.data.data;
                dispatch(setUserDataSuccess(id, email, login, true));
            }
    }

export const login = (email, password, rememberMe) => async (dispatch) => {
       let response = await AuthAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data))
            }
            else {
                return Promise.reject(response.data)
            }
    }
export const logout = () => 
    async (dispatch) => {
        let response = await AuthAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserDataSuccess(null, null, null, false));
            }
    }

export default authReducer;