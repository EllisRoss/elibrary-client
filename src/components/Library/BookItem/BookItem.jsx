import React from 'react';
import styles from './BookItem.module.css'
import {NavLink} from "react-router-dom";

const BookItem = (props) => {
    return (
        <div className={styles.bookItem}>
            <div>
                <label>{props.title}</label> | <label>{props.author}</label>
            </div>

            <br/>
            <div>"{props.about}"</div>
            <br/>
            <div>Year: {props.year}</div>
            <div>ISBN: {props.id}</div>
            <br/>
            <NavLink to={`/book-reader/${props.id}`}>Read</NavLink>
        </div>
    );
}

export default BookItem;