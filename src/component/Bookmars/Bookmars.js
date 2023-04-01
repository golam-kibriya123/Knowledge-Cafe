import React from 'react';
import "./Bookmars.css"
import BookMark from '../Bookmark/BookMark';

const Bookmars = (props) => {
    let count = 0;
    let id = () => {
        return count++;
    }

    const loadAllTile = props.title;
    return (
        <div className='bookMarks-container'>
            <div className='spent-time'>
                <p>Spent time on read : {props.readTime} min</p>
            </div>

            <div className="book-marks">
                <h1 className="book-mark-tittle">
                    Bookmarked Blogs :{loadAllTile.length}
                </h1>
                <div className="bookMarkParent">

                    {loadAllTile.map(title =>
                        <BookMark title={title} key={id()}></BookMark>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Bookmars;