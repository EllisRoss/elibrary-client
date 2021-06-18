import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    login: null,
    isAuth: false,
    isAdmin: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return setAuthUserData(state, action.payload);
        default:
            return state;
    }
}

const setAuthUserData = (state, payload) => {
    return {
        ...state,
        login: payload.login,
        isAuth: payload.isAuth,
        isAdmin: payload.isAdmin,
    };
};

const setAuthUserDataAC = (login, isAuth, isAdmin) => ({
    type: SET_AUTH_USER_DATA,
    payload: {login, isAuth, isAdmin}
});


export const getAuthUserDataThunkCreator = () => (dispatch) => {
    return authAPI.authMe().then(responce => {
        if (responce.resultCode === 0) {
            let login = responce.login;

            if (responce.isAdmin) {
                dispatch(setAuthUserDataAC(login,true, true));
            } else {
                dispatch(setAuthUserDataAC(login,true, false));
            }
        }
    });
}

export const loginThunkCreator = (login, password) => (dispatch) => {
    authAPI.login(login, password).then(responce => {
        if (responce.data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator());
        } else {
            let message = responce.data.messages.length > 0
                ? responce.data.messages[0] : "Some error";

        }
    });
}

export const logoutThunkCreator = () => (dispatch) => {
    debugger;
    authAPI.logout().then(responce => {
        if (responce.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, false, false));
        }
    });
}

export const registrationThunkCreator = (login, password) => (dispatch) => {
    authAPI.registration(login, password);
}

export default authReducer;