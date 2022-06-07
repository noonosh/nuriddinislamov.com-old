import React, { useState } from 'react';
import icon from '../assets/buymeacoffee.svg';

function BuyMeCoffeeButton() {
	const [display, setDisplay] = useState(true);

	return (
		<div
			className={`fixed bottom-20 right-16 text-2xl z-50 ${
				!display ? 'hidden' : 'block'
			}`}
			id='buy-me-coffee-floating'>
			<button
				className='text-sm text-gray-800 absolute z-10 -top-3 right-1'
				onClick={() => setDisplay(!display)}>
				&#10006;
			</button>
			<a
				href='https://buymeacoffee.com/nuriddinislamov'
				target='_blank'
				rel='noopener noreferrer'
				className='flex w-16 h-16 bg-yellow-300 rounded-full drop-shadow-2xl hover:drop-shadow-xl justify-center items-center'>
				<img
					src={icon}
					alt='Coffee icon'
					className='my-0 mx-2 inline-block'
					width='36'
					height='36'
				/>
			</a>
		</div>
	);
}

export default BuyMeCoffeeButton;
