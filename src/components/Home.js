import React from 'react';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import { Navigate } from 'react-router-dom';

const Home = () => {
	return (
		<main className='container mx-auto'>
			<Navbar />
			<section>
				<div className='my-16 mx-4 p-4 text-5xl font-bold lg:text-7xl lg:m-8 lg:p-6'>
					{/* <h1 className='lg:ml-24'>
						Hi &#128075;
						<br />I am Nuriddin, <br />
						<span className='text-gray-400'>Software Engineer</span>
					</h1> */}
					<Typewriter
						onInit={typewriter => {
							typewriter
								.pauseFor(1000)
								.typeString('Hi ')
								.pasteString('<code>&#128075;</code><br/>')
								.typeString('I am Nuriddin')
								.typeString('..')
								.pauseFor(1000)
								.deleteAll(50)
								.typeString(
									"Bruuh...<br/>That doesn't <br/> seem  good looking ",
								)
								.pasteString('<code>&#129300;</code>')
								.pauseFor(1500)
								.deleteAll(30)
								.callFunction(state => {
									// hide cursor
									state.elements.cursor.style.display =
										'none';
								})
								.callFunction(() => {
									return <Navigate to='/about' />;
								})
								.start();
						}}
					/>
				</div>
			</section>
		</main>
	);
};

export default Home;
