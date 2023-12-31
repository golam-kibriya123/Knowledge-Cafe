import React from 'react';
import "./SingleBlog.css"
import bookmark from "../../logo/bookmark.svg";
const SingleBlog = (props) => {
    const { name, title, u_img, time, b_img } = props.user;
    const bookMarkHandler = props.bookMarkBtn;
    const readTime = props.readTime;
    return (

        <div className='sing-blog'>
            <img className='blog-img' src={b_img} alt="" />
            <div className='blog-info'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={u_img} alt='' />
                    <div>
                        <h1>{name}</h1>
                        <p> Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className='read-time'>
                    <p> {time} min read</p>
                    <button className='bookMark' onClick={() => bookMarkHandler(title)}><img src={bookmark} alt="" /></button>
                </div>
            </div>
            <h4 className='title'>{title}</h4>
            <p>#beginners  #programming</p>
            <button className='mark-as' onClick={() => readTime(time)}>Mark as read</button>
        </div>);
};

export default SingleBlog;