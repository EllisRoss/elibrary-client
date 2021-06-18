import React from 'react';
import Library from "./Library";
import {getBooksThunkCreator} from "../../redux/libraryReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

class LibraryContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return <Library books={this.props.books}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.libraryPage.books,
    }
};

let mapDispatchToProps = {
    getBooks: getBooksThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(LibraryContainer)