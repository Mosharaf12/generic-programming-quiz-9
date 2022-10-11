import React from 'react';

const Item = ({item}) => {
    const {name,logo, total}=item
    return (
        <div>
             <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
	<img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p>Total: {total}</p>
		
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Take Quiz</button>
	</div>
</div>
        </div>
    );
};

export default Item;