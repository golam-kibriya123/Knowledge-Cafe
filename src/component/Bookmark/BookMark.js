import React from 'react';
import "./BookMark.css"

const BookMark = (props) => {
    return (
        <div className="book-mark">
            <h1>{props.title}</h1>
        </div>
    );
};

export default BookMark;