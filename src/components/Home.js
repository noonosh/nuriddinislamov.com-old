import React from 'react';
import Layout from '../layouts/Layout';
import Maintenance from './Maintenance';
import Navigation from './Navigation';

const Home = () => {
	return (
		<Layout id='home'>
			<Maintenance />
			<Navigation
				prev={{ name: '', path: '' }}
				next={{ name: 'About', path: '/me' }}
			/>
		</Layout>
	);
};

export default Home;
