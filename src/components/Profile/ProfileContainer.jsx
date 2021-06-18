import React from 'react';
import {getReadBooksThunkCreator} from "../../redux/profileReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import Profile from "./Profile";

    // let pushReadBooks = () => {
    //     for (let i = 0; i < this.props.readBooks.length; i++) {
    //         this.props.books.map(book => {
    //             if (book.ISBN === this.props.readBooks[i]) {
    //                 this.state.readBooks.push(book);
    //             }
    //         });
    //     }
    // };

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBooks: []
        }
    }
    componentDidMount() {
        this.props.getReadBooks();
    }

    bookFilter = (book) => {
        for (let i = 0; i < this.props.readBooksID.length; i++) {
            if (book.ISBN == this.props.readBooksID[i]) {
                return true;
            }
        }
        return false;
    }

    sortBooks = () => {
        this.setState()
        this.state.sortBooks = this.props.books.filter(this.bookFilter);
    }

    render() {
        console.log('render ProfileContainer')
        this.sortBooks();
        return <Profile books={this.state.sortBooks} login={this.props.login}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        books: state.libraryPage.books,
        readBooksID: state.profilePage.readBooksID,
    }
};

let mapDispatchToProps = {
    getReadBooks: getReadBooksThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(ProfileContainer)