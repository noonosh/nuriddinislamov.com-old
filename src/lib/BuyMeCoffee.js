import React from 'react';
import icon from '../assets/buymeacoffee.svg';

function BuyMeCoffee({ width, height }) {
	return (
		<div className='mt-8 mb-4 flex justify-center items-center'>
			<a
				href='https://www.buymeacoffee.com/nuriddinislamov'
				target='_blank'
				rel='noopener noreferrer'
				className={`px-4 py-2 w-${width} h-${height} text-center border-2 solid rounded border-gray-800 bg-yellow-300 hover:drop-shadow-lg after:bg-red-500 flex justify-center items-center font-mono no-underline`}>
				<img src={icon} alt='Coffee icon' className='my-0 mx-2' />
				<span>Buy me a cup of coffee</span>
			</a>
		</div>
	);
}

export default BuyMeCoffee;
