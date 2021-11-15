import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
	useEffect(() => {
		document.title = 'Contact me';
	}, []);
	return (
		<div className='page-container'>
			<Navbar />
			<section>
				<div className='flex flex-col lg:flex-row lg:justify-center'>
					<div>
						<form>
							<h3>Message me right now!</h3>
							<div></div>
						</form>
					</div>
					<div>OR</div>
					<div>
						<table>This is table</table>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Contact;
