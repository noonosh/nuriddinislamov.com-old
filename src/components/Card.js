import React from 'react';

const Card = ({ image, listItems }) => {
	return (
		<div className='border-4 w-72 mx-auto my-6 rounded-xl shadow p-4 flex-column flex justify-start'>
			<div className='self-center mb-2'>
				<img src={image} className='rounded-full' />
			</div>
			<div className='pl-2 font-extralight tracking-wide'>
				<ul className='list-disc'>
					{listItems.map(listItem => (
						<li>{listItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
