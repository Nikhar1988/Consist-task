import UserService from "../api/userService";

export const SET_USER = 'SET_USER';
export const SET_AUTH = 'SET_AUTH';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const AuthActionCreators = {
    setUser: (user) => ({ type: SET_USER, payload: user }),
    setIsAuth: (auth) => ({ type: SET_AUTH, payload: auth }),
    setIsLoading: (payload) => ({ type: SET_IS_LOADING, payload }),
    setError: (payload) => ({ type: SET_ERROR, payload }),
    login: (username, password) => async (dispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
            const response = await UserService.getUsers().catch(error => {
                if (error.response) {
                    dispatch(AuthActionCreators.setError('Произошла ошибка!!!'));
                }
            });
            const mockUser = response.data.find(user => user.username === username && user.password === password);
            if (mockUser) {
                dispatch(AuthActionCreators.setUser(mockUser));
                dispatch(AuthActionCreators.setIsAuth(true));
            } else {
                dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000)
    }
};

export default AuthActionCreators;