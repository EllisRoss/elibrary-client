import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'
import {connect} from "react-redux";

const Navbar = (props) => {
    return (
        <div>
            <span className={styles.item}>
                <NavLink to={'/library'} activeClassName={styles.active}>Library</NavLink>
            </span>
            {
                props.currentBookUrl &&
                <span className={styles.item}>
                    <NavLink to={'/book-reader'} activeClassName={styles.active}>Reader</NavLink>
                </span>
            }

            <span className={styles.item}>
                <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>
            </span>
        </div>
    );
}

let mapStateToProps = state => {
    return {
        currentBookUrl: state.bookReaderPage.currentBookUrl,
    }
}

export default connect(mapStateToProps, null)(Navbar);