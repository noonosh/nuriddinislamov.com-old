import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout({ children, id, isHome }) {
	return (
		<div className='flex flex-col h-screen'>
			<NavBar />
			<section className='w-5/6 mx-auto px-2 md:px-6 py-8 flex-auto' id={id}>
				{children}
			</section>
			<Footer isHome={isHome || false} />
		</div>
	);
}

export default Layout;
