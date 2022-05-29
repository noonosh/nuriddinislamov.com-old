import React from 'react';
import Layout from '../layouts/Layout';
// import Navigation from './Navigation';
import Maintenance from './Maintenance';

const Work = () => {
	return (
		<Layout id='work'>
			{/* <div className='flex flex-col h-full'>
				<div className='flex-auto flex justify-center items-center'>
					<h1 className='text-3xl font-bold'>Work</h1>
				</div>
				<Navigation
					prev={{ name: 'about', path: '/me' }}
					next={{ name: 'contact', path: '/reach-out' }}
				/>
			</div> */}
			<Maintenance />
		</Layout>
	);
};

export default Work;
