import React from 'react';

const Question = ({allquestion}) => {
    const {question}=allquestion
    console.log(question);
    return (
        <div>
            <h3 className='text-center text-1xl bg-slate-400 p-3 m-2'>{question}</h3>
            
        </div>
    );
};

export default Question;