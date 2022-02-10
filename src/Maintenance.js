import React, { useEffect } from 'react';

function Maintenance() {
	useEffect(() => {
		document.title = 'Sorry...';
	}, []);
	return (
		<div className='flex flex-column h-screen w-100 text-center justify-center'>
			<h1 className='font-bold text-4xl py-3'>
				<span className='underline'>Sorry,</span> I am away now...
			</h1>
			<p className='mb-24'>
				Don't you worry, I will be back really soon! In case of an
				emergency, use{' '}
				<a
					href='mailto:nuriddinislamov@icloud.com'
					className='text-blue-600 hover:underline'>
					this email
				</a>{' '}
				address.
			</p>
		</div>
	);
}

export default Maintenance;
