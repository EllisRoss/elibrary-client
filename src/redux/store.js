import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import libraryReducer from "./libraryReducer";
import bookReaderReducer from "./bookReaderReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    libraryPage: libraryReducer,
    bookReaderPage: bookReaderReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;