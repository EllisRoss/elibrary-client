import React from 'react';

const Profile = React.memo((props) => {

    let booksElements = props.books.map(
        book => <div key={book._id}><div>{book.title} | {book.author}</div><br/></div>
    );

    return (

        <div>
            <h2>{props.login} profile</h2>

            {props.books.length > 0 && <h3>Your read Books:</h3>}
            {props.books.length > 0 && booksElements}
            {props.books.length == 0 && `You haven't read yet`}
        </div>
    );
})

export default Profile;