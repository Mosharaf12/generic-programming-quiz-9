import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
   
    return (
        <div>
            <nav className='header bg-blue-500 flex-col lg:flex-row lg:justify-between'>
             <div className='header-details pl-2 sm:pr-0 md:pl-36 md:pr-0 md:mx-auto md:py-2 lg:mr-auto lg:pl-28'>
                <h2 className='text-3xl font-bold text-white'>Generic Programming QuiZ</h2>

             </div>
             <div className='navber-details text-white m-2 md:mx-auto md:mr-0 lg:mr-0'>
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