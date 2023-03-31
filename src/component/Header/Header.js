import React from 'react';
import "./Header.css"
import logo from "../../logo/logo.jpg"
const Header = () => {
    return (
        <div className='header'>
            <div className="nav-brand">
                <h1>Knowledge Cafe</h1>
            </div>
            <div className="nav-items">
                <a href="/home">Blogs</a>
                <a href="/home">Category </a>
                <a href="/home">Book Mark</a>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;