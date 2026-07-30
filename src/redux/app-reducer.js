import { setUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let installState = {
    initialized: null,
}

const appReducer = (state = installState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setUserData());
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
    })
    }


export default appReducer;