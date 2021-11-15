import React from 'react';
import Typewriter from 'typewriter-effect';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='page-container'>
			<div>
				<Navbar />
			</div>
			<div className='px-4 text-5xl flex-grow justify-center font-bold lg:text-7xl lg:m-8'>
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
								state.elements.cursor.style.display = 'none';
							})
							.callFunction(() => {
								return <Navigate to='/about' />;
							})
							.start();
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
