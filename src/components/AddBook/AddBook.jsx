import React from 'react';
import AddBookForm from "./AddBookForm";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const AddBook = (props) => {
    if (props.isAdmin) {
        return (
            <div>
                <h2>AddBook Page</h2>
                <AddBookForm/>
            </div>
        );
    } else {
        return <Redirect to={'/library'}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAdmin: state.auth.isAdmin
    }
}

export default compose(
    connect(mapStateToProps, null),
    WithAuthRedirect,
)(AddBook);