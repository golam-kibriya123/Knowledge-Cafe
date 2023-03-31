import React from 'react';
import "./BlogContainer.css"
import Blog from '../Blog/Blog';
import Bookmars from '../Bookmars/Bookmars';
const BlogContainer = () => {
    
    return (
        <div className='blog-container'>
            <Blog></Blog>
            <Bookmars ></Bookmars>


        </div>
    );
};

export default BlogContainer;