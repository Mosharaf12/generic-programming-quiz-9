import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const rechart =useLoaderData().data;
    return (
        
          <LineChart className='py-10 px-10'
            width={300}
            height={300}
            data={rechart}
         
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
      
      );
    
};

export default Statistics;