const SET_CURRENT_BOOK = 'SET_TOTAL_BOOKS_COUNT';

let initialState = {
    currentBookUrl: null,
};

const readerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_BOOK:
            return setCurrentBook(state, action.bookUrl);
        default:
            return state;
    }
};

const setCurrentBook = (state, bookUrl) => {
    return {
        ...state,
        currentBookUrl: bookUrl,
    }
}



export const setCurrentBookAC = (bookUrl) => ({type: SET_CURRENT_BOOK, bookUrl});

export default readerReducer;