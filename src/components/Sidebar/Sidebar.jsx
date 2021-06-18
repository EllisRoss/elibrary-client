import React from 'react';
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {logoutThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";

const Sidebar = React.memo((props) => {
    if (props.isAuth) {
        return (
            <div className={styles.sidebar}>
                <div>{props.userName}</div>
                <div>
                    {props.isAdmin && <NavLink to={'/add-book'}>Add Book</NavLink>}
                </div>
                <br />
                <div>
                    <button onClick={props.logout}>Logout</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.sidebar}>
                <div>
                    <NavLink to={'/login'}>Log In</NavLink>
                </div>
                <br />
                <div>
                    <NavLink to={'/registration'}>Registration</NavLink>
                </div>
            </div>
        );
    }
});

let mapStateToProps = (state) => {
    return {
        userName: state.auth.login,
        isAuth: state.auth.isAuth,
        isAdmin: state.auth.isAdmin,
    }
}

let mapDispatchToProps = {
    logout: logoutThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);