import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Topics = () => {
    const datas = useLoaderData().data;
    const {name, total,questions}=datas
    console.log(questions)
   
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-center'>Quiz of : {name}</h1>
                <p className='text-2xl font-semibold text-center'>Total Question: {total}</p>
            </div>
            <div className='md:px-20'>
                {
                    questions.map(allquestion => <Question

                    key={allquestion.id}

                    allquestion={allquestion}
                    
                    ></Question>)
                }
            </div>

        </div>
       
    
    );
};

export default Topics;