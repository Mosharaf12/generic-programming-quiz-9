import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const TopicsItems = () => {
    const items = useLoaderData().data;
    return (
        <div className='md:grid lg:grid-cols-4 md:grid-cols-2 rounded-lg px-5 my-5'>
        {
            items.map(item=> <Item
            key={item.id}
            item={item}
            ></Item>)
        }

    </div>
    );
};

export default TopicsItems;