import React from 'react';
import "./Bookmars.css"
const Bookmars = (props) => {
    const loadAllTile = props.title;
    return (
        <div className='bookMarks-container'>
            <div className='spent-time'>
                <p>Spent time on read : {props.readTime} min</p>
            </div>

            <div className="book-marks">
                <h1 className="book-mark-tittle">
                    Bookmarked Blogs : 8
                </h1>
                <div className="bookMarkParent">

                    {loadAllTile.map(title => <div className="book-mark">
                        <h1>{title}</h1>
                    </div>)}

                </div>
            </div>
        </div>
    );
};

export default Bookmars;