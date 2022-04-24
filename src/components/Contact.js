import React from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';

const Contact = () => {
	return (
		<Layout id='contact'>
			<div className='flex flex-col h-full'>
				<div className='flex-auto flex justify-center items-center'>
					<h1 className='text-3xl font-bold'>Contact</h1>
				</div>
				<Navigation
					prev={{ name: 'work', path: '/projects' }}
					next={{ name: 'home', path: '/' }}
				/>
			</div>
		</Layout>
	);
};

export default Contact;
