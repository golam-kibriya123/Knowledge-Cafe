import React from 'react';
import "./BookMark.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookMark = (props) => {
    return (
        <div className="book-mark">
            <ToastContainer />
            <h1>{props.title}</h1>
        </div>
    );
};

export default BookMark;