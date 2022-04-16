import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout({ children, id }) {
	return (
		<div className='flex flex-col h-screen'>
			<div className='flex-none'>
				<NavBar />
			</div>
			<section
				className='container flex-1 h-full w-5/6 mx-auto px-2 md:px-6 py-8'
				id={id}>
				{children}
			</section>
			<div className='flex-none'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
