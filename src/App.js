import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import LibraryContainer from "./components/Library/LibraryContainer";
import BookReader from "./components/BookReader/BookReader";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {setInitializedThunkCreator} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends React.Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <Header/>
                    <Sidebar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/library'} render={() => <LibraryContainer/>}/>
                        <Route path={'/add-book'} render={() => <AddBook/>}/>
                        <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                        <Route path={'/book-reader/:bookId?'} render={() => <BookReader/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/registration'} render={() => <Registration/>}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let mapDispatchToProps = {
    initialize: setInitializedThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
