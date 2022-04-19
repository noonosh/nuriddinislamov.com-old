import React from 'react';
import Layout from '../layouts/Layout';
import Maintenance from './Maintenance';
import Navigation from './Navigation';

const Home = () => {
	return (
		<Layout id='home'>
			<a
				className='bg-red-600 absolute rotate-90 block -right-24 text-center top-20 bold font-bold text-sm text-white shadow-md py-1 px-24 z-20'
				href='http://github.com/nuriddinislamov/nuriddinislamov.com'
				id='github'>
				Fork me on Github
			</a>
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
