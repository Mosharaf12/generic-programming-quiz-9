import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='title'>
                <h4 className='text-3xl font-bold'>Generic Programming Quiz</h4>
                </div>
                <NavLink  className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to='/home'>Home</NavLink>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;