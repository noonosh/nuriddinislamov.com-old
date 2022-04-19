import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout({ children, id }) {
	return (
		<div className='flex flex-col h-screen'>
			<NavBar />
			<section className='w-5/6 mx-auto px-2 md:px-6 py-8 flex-auto' id={id}>
				{children}
			</section>
			<Footer />
		</div>
	);
}

export default Layout;
