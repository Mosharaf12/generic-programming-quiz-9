
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../images/backgroundimg.jpg'
import Item from '../Item/Item';
import Topics from '../Topics/Topics';
import './home.css'

const Home = () => {
    const items = useLoaderData().data;
    
    return (
       <div>
         <div className='home bg-blue-200 h-screen md:flex justify-around'>
            <div className='p-5'>
            <img className='w-100 h-60' src={logo} alt="" />
            </div>
            <div className='p-5'>
                <h3 className='text-5xl font-bold text-blue-500'>Make a Quiz To Generate <br /> leads For <br /> <span className='text-5xl font-bold text-red-500'>Your Business</span> </h3>
                <p className='py-6'>A quiz is a game or competition in which someone  tests your knowledge by asking <br /> you questions. We'll have a quiz at the end of the show.</p>
            </div> 
        </div>
        <div className='md:grid lg:grid-cols-4 md:grid-cols-2 rounded-lg px-5 my-5'>
                {
                    items.map(item=> <Item
                    key={item.id}
                    item={item}
                    ></Item>)
                }

            </div>
       </div>
    );
};

export default Home;