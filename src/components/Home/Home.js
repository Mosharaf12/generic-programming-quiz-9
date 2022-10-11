import React from 'react';
import logo from '../../images/backgroundimg.jpg'
import './home.css'

const Home = () => {
    return (
        <div className='home bg-blue-200 h-screen'>
            <div>
            <img className='w-100 h-60' src={logo} alt="" />
            </div>
            <div>
                <h3 className='text-5xl font-bold text-blue-500'>Make a Quiz To Generate <br /> leads For <br /> <span className='text-5xl font-bold text-red-500'>Your Business</span> </h3>
                <p className='py-6'>A quiz is a game or competition in which someone  tests your knowledge by asking <br /> you questions. We'll have a quiz at the end of the show.</p>
            </div>
            
           
            
        </div>
    );
};

export default Home;