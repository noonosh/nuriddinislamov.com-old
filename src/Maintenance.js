import React, { useEffect } from 'react';

function Maintenance() {
	useEffect(() => {
		document.title = 'Sorry...';
	}, []);
	return (
		<React.Fragment>
			<div className='flex flex-column w-100 min-h-screen text-center justify-center items-center'>
				<h1 className='font-bold text-3xl py-3 dark:text-white'>
					🛠 I am working hard to bring this site back to life
				</h1>
				<p className='mb-24 dark:text-gray-300'>
					Don't you worry, it will be back really soon! In case of an
					emergency, reach me out{' '}
					<a
						href='mailto:nuriddinislamov@icloud.com'
						className='text-blue-600 hover:underline hover:text-blue-700'>
						here.
					</a>{' '}
				</p>
			</div>
		</React.Fragment>
	);
}

export default Maintenance;
