import {profileAPI} from "../api/api";
import {getBooksThunkCreator} from "./libraryReducer";

const SET_READ_BOOKS = 'SET_READ_BOOKS';

let initialState = {
    readBooksID: [],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_READ_BOOKS:
            return setReadBooksID(state, action.readBooksID)
        default:
            return state;
    }
};

const setReadBooksID = (state, readBooksID) => {
    return {
        ...state,
        readBooksID: [...readBooksID]
    }
}

export const setReadBooksIDAC = (readBooksID) => ({type: SET_READ_BOOKS, readBooksID});

export const getReadBooksThunkCreator = () => (dispatch) => {
    profileAPI.getReadBooks().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getBooksThunkCreator())
            dispatch(setReadBooksIDAC(response.data.readBooks));
        }
    });
}

export default profileReducer;