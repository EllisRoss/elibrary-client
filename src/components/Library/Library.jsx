import React, {useEffect, useState} from 'react';
import BookItem from "./BookItem/BookItem";

const Library = (props) => {

    let [searchRequest, setSearchRequest] = useState(null);
    let [filteredBooks, setFilteredBooks] = useState(props.books)

    useEffect(() => {
        setFilteredBooks(props.books);
    },[props.books]);

    useEffect(() => {
        setFilteredBooks(props.books.filter(booksSearchFilter));
    },[searchRequest]);

    let booksElements = filteredBooks.map(
        book => <BookItem id={book.ISBN} title={book.title} author={book.author} year={book.year} about={book.about} key={book._id}/>
    );


    let booksSearchFilter = (book) => {
        if (book.title.includes(searchRequest)) {
            return true;
        }
        if (book.author.includes(searchRequest)) {
            return true;
        }
        if (book.keyWords.includes(searchRequest)) {
            return true;
        }
        if (book.about.includes(searchRequest)) {
            return true;
        }
        return false;
    }

    let onSearchChange = (event) => {
        setSearchRequest(event.target.value)
    }

    console.log('Render Library')
    return (
        <div>
            <h2>Library</h2>

            <input placeholder={'search'} onChange={onSearchChange}/>
            <br />
            {/*{(filteredBooks && searchRequest) && filteredBooksElements}*/}
            {/*{( (!filteredBooks || filteredBooks.length == 0) && !searchRequest) && booksElements}*/}
            {booksElements}
        </div>
    );
};

export default Library;