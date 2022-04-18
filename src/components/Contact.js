import React from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';

const Contact = () => {
	return (
		<Layout id='contact'>
			<div className='flex flex-col h-full'>
				<div className='flex-auto'>CONTACT FORM</div>
				<Navigation
					prev={{ name: 'work', path: '/projects' }}
					next={{ name: 'home', path: '/' }}
				/>
			</div>
		</Layout>
	);
};

export default Contact;
