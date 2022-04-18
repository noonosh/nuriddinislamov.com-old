import React from 'react';
import Layout from '../layouts/Layout';
import Maintenance from './Maintenance';
import Navigation from './Navigation';

const Home = () => {
	return (
		<Layout id='home'>
			<div className='flex flex-col h-full'>
				<div className='flex-auto'>
					<Maintenance />
				</div>
				<Navigation
					prev={{ name: '', path: '' }}
					next={{ name: 'about', path: '/me' }}
				/>
			</div>
		</Layout>
	);
};

export default Home;
