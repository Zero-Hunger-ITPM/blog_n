import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import logo from "../../../images/Logo.png";



const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            
            <a href="/" className="nav__logo"><img className="logo-app" onClick={() => navigate('/')} src={logo} alt="logo" />Sustain Life</a>
            <p className="menu-item" onClick={() => navigate('/')}>Blogs</p>
            <p className="menu-item" onClick={() => navigate('/admin-blog')}>Action</p>
            <p className="menu-item" onClick={() => navigate('/create-blog')}>Create Blog</p>
            
        </div>
    )
}

export default Header;
