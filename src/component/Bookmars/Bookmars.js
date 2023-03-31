import React from 'react';
import "./Bookmars.css"
const Bookmars = () => {
    return (
        <div >
            <div className='spent-time'>
                <p>Spent time on read : 00 min</p>
            </div>
            <div className="book-marks">
                <h1 className="book-mark-tittle">
                    Bookmarked Blogs : 8
                </h1>
                <div className="book-mark">
                    <h1>Master Microsoft Power Platform and Become an In-Demand!</h1>
                </div>
                <div className="book-mark">
                    <h1>Master Microsoft Power Platform and Become an In-Demand!</h1>
                </div>
                <div className="book-mark">
                    <h1>Master Microsoft Power Platform and Become an In-Demand!</h1>
                </div>
            </div>
        </div>
    );
};

export default Bookmars;