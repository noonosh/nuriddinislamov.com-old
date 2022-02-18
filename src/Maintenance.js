import React, { useEffect } from 'react';

function Maintenance() {
	useEffect(() => {
		document.title = 'Sorry...';
	}, []);
	return (
		<React.Fragment>
			<div className='flex flex-column h-screen w-100 text-center justify-center dark:bg-gray-800'>
				<h1 className='font-bold text-4xl py-3 dark:text-white'>
					🛠 Temporarily unavailable
				</h1>
				<p className='mb-24 dark:text-gray-400'>
					Don't you worry, I will be back really soon! In case of an
					emergency, use{' '}
					<a
						href='mailto:nuriddinislamov@icloud.com'
						className='text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500 transition duration-500 ease-in-out'>
						this email
					</a>{' '}
					address.
				</p>
			</div>
		</React.Fragment>
	);
}

export default Maintenance;
