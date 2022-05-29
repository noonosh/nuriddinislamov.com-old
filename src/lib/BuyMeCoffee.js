import React from 'react';

function BuyMeCoffee({ width, height }) {
	return (
		<div className='mt-8 mb-4 flex justify-center items-center'>
			<a
				className={`px-4 py-2 w-${width} h-${height} text-center border-2 solid rounded border-gray-800 bg-yellow-300 no-underline hover:drop-shadow-lg after:bg-red-500`}
				href='https://www.buymeacoffee.com/nuriddinislamov'
				target='_blank'
				type='button'>
				Buy me a cup of coffee
			</a>
		</div>
	);
}

export default BuyMeCoffee;
