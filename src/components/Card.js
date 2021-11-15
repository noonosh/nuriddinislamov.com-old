import React from 'react';

const Card = ({ image, listItems, alt }) => {
	return (
		<div className='w-72 mx-auto my-6 rounded-xl shadow bg-white p-4 flex-column flex justify-start'>
			<div className='self-center mb-2'>
				<img src={image} alt={alt} className='rounded-full' />
			</div>
			<div className='pl-4 font-extralight tracking-wide'>
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
