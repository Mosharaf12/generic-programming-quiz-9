import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
             <div className='header-details'>
                <h2 className='text-3xl font-bold text-pink-600'>Generic Programming QuiZ</h2>

             </div>
             <div className='navber-details'>
             <NavLink  className={({ isActive }) =>
              isActive ? 'active' : undefined
                 } to='/home'>Home</NavLink>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
             </div>
                
            </nav>
        </div>
    );
};

export default Header;