import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout({ children, id }) {
	return (
		<>
			<NavBar />
			<section
				className='container mx-auto h-screen w-full px-24 py-12'
				id={id}>
				{children}
			</section>
			<Footer />
		</>
	);
}

export default Layout;
