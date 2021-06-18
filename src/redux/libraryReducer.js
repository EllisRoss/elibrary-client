import {libraryAPI} from "../api/api";

const SET_BOOKS = 'SET_BOOKS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT';

let initialState = {
    books: [],
    pageSize: 100,
    totalBooksCount: 0,
    currentPage: 1,
    isFetching: false,
};

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return setBooks(state, action.books)
        case SET_CURRENT_PAGE:
            return setCurrentPage(state, action.pageNumber);
        case SET_TOTAL_BOOKS_COUNT:
            return setTotalBooksCount(state, action.booksCount);
        default:
            return state;
    }
};

const setBooks = (state, books) => {
    return {
        ...state,
        books: [...books]
    }
}

const setTotalBooksCount = (state, booksCount) => {
    return {
        ...state,
        totalBooksCount: booksCount,
    }
}

const setCurrentPage = (state, pageNumber) => {
    return {
        ...state,
        currentPage: pageNumber,
    };
};

export const setBooksAC = (books) => ({type: SET_BOOKS, books});

export const setCurrentPageAC = (pageNumber) => ({
    type: SET_CURRENT_PAGE, pageNumber
});

export const setTotalBooksCountAC = (booksCount) => ({
    type: SET_TOTAL_BOOKS_COUNT, booksCount
});

export const getBooksThunkCreator = () => (dispatch) => {
    libraryAPI.getBooks().then(response => {
        dispatch(setBooksAC(response.data));
    });
}

export const addBookThunkCreator = (formData) => (dispatch) => {
    libraryAPI.addBook(formData).then(response => {
        dispatch(getBooksThunkCreator());
    });
}

export default libraryReducer;