import React from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';

const About = () => {
	return (
		<Layout id='about'>
			<div className='flex flex-col h-full'>
				<div className='flex-auto'>ABOUT PAGE</div>
				<Navigation
					prev={{ name: 'home', path: '/' }}
					next={{ name: 'work', path: '/projects' }}
				/>
			</div>
		</Layout>
	);
};

export default About;
