import React from 'react';
import icon from '../assets/buymeacoffee.svg';

function BuyMeCoffee({ width, height }) {
	return (
		<div className='mt-8 mb-4 flex justify-center items-center'>
			<div
				className={`px-4 py-2 w-${width} h-${height} text-center border-2 solid rounded border-gray-800 bg-yellow-300 hover:drop-shadow-lg after:bg-red-500 flex justify-center items-center font-mono`}>
				<img src={icon} alt='Coffee icon' className='my-0 mx-2' />
				<a
					className='no-underline'
					href='https://www.buymeacoffee.com/nuriddinislamov'
					target='_blank'
					rel='noopener noreferrer'
					type='button'>
					Buy me a cup of coffee
				</a>
			</div>
		</div>
	);
}

export default BuyMeCoffee;
