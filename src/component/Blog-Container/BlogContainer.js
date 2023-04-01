import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


    let titleContainer = [];

    const [title, setTitle] = useState([]);
    const bookMarkBtn = (pTitle) => {
        let newContainer = [];
        if (title.includes(pTitle) !== true) {
            newContainer = [...titleContainer, pTitle];

        }
        else {
            toast('sir please do not force ')
        }
        const setNewTitle = [...title, ...newContainer]


        setTitle(setNewTitle);

    };

    const users = data;
    return (
        <div className='blog-container'>
            <div>  {users.map(user => <SingleBlog
                readTime={readTime}
                bookMarkBtn={bookMarkBtn}
                key={user.id}
                user={user}
            ></SingleBlog>)}
            </div>
            <Bookmars
                readTime={time}
                title={title}
            ></Bookmars>


        </div>
    );
};

export default BlogContainer;