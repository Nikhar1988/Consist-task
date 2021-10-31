import { SET_AUTH, SET_ERROR, SET_IS_LOADING, SET_USER } from "./actions";

const initialState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }
        case SET_USER:
            return { ...state, user: action.payload, error: '' }
        case SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    };
};

export default authReducer;
