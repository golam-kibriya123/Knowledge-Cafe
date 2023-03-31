
import React from 'react';
import "./Blog.css"
import Users from '../../utilitis/Users';
import SingleBlog from '../SingleBlog/SingleBlog';
const Blog = () => {
    const users = Users;
    return (
        <div className='blogs'>
         
            {users.map(user => <SingleBlog
                key={user.id}
                user={user}
            ></SingleBlog>)
            }
        </div>
    );
};

export default Blog;