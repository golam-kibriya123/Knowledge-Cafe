import React, { useState } from 'react';
import "./BlogContainer.css"
import Bookmars from '../Bookmars/Bookmars';
import SingleBlog from "../SingleBlog/SingleBlog";
import data from "../../utilitis/Users";

const BlogContainer = () => {
    const [time, setTime] = useState(0)
    const readTime = (currentTime) => {
        const totalTime = +currentTime + time;
        setTime(totalTime)
    };


   


    const users = data;
    return (
        <div className='blog-container'>
            <div>  {users.map(user => <SingleBlog
                readTime={readTime}
                bookMarkBtn={bookMarkBtn}
                key={user.id}
                user={user}
            ></SingleBlog>)}</div>
            <Bookmars
                readTime={time}

            ></Bookmars>


        </div>
    );
};

export default BlogContainer;