import React from 'react';
import Options from '../Option/Options';

const Question = ({allquestion}) => {

    const {question, options, correctAnswer}=allquestion;

    console.log(allquestion.options);

    return (
        <div className='text-center text-1xl bg-blue-100 p-5 my-5 rounded-xl'>
            <h3 className='text-3xl text-blue-500 font-bold'>{question}</h3>
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