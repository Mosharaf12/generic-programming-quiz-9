import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({option, correctAnswer}) => {
    const correctHandle=()=>{
        if(option === correctAnswer){
            toast("Answer is correct!");
        }
        else{
            toast("Wrong Answer!");
        }
    }
    
    
    return (
        <button onClick={() => correctHandle()} className='p-3 bg-white my-2 text-blue-400 rounded-xl hover:bg-blue-200 w-full '>
            <h4 className='text-2xl text-center'>{option}</h4>

            <ToastContainer 
            autoClose={1000}
            />
            
        </button>
        
    );
};

export default Options;