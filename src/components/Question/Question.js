import React from 'react';
import Options from '../Option/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({allquestion}) => {

    const {question, options, correctAnswer}=allquestion;

    const eyeHandler=()=>{
        alert(`Correct Answer is: ${correctAnswer}`)

    }

    

    return (
        <div className='text-center text-1xl bg-blue-100 p-5 my-5 rounded-xl'>
            <div className='flex justify-between align-middle'>
            <h3 className='text-3xl text-blue-500 font-bold text-left'>{question}</h3>
             <button className='p-5'>
             <EyeIcon onClick={() => eyeHandler()} className="h-8 w-8 text-red-600"/>
             </button>
            </div>
            {
                options.map(option => <Options 
            

                option={option}

                correctAnswer={correctAnswer}

                ></Options> )
            }
            
        </div>
    );
};

export default Question;