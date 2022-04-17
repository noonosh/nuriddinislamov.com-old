import React from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';

const About = () => {
	return (
		<Layout id='about'>
			<div>ABOUT PAGE</div>
			<Navigation
				prev={{ name: 'Home', path: '/' }}
				next={{ name: 'Work', path: '/projects' }}
			/>
		</Layout>
	);
};

export default About;
