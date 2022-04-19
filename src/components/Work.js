import React from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';

const Work = () => {
	return (
		<Layout id='work'>
			<div className='flex flex-col h-full'>
				<div className='flex-auto'>WORK</div>
				<Navigation
					prev={{ name: 'about', path: '/me' }}
					next={{ name: 'contact', path: '/reach-out' }}
				/>
			</div>
		</Layout>
	);
};

export default Work;
