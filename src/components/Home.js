import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import 'animate.css';

const Home = () => {
	useEffect(() => {
		document.title = 'nuriddinislamov';
	}, []);
	return (
		<div className='page-container'>
			<div>
				<Navbar />
			</div>
			<div className='flex flex-col lg:m-8'>
				<div className='px-3 text-5xl font-bold lg:text-7xl'>
					<Typewriter
						onInit={typewriter => {
							typewriter
								.pauseFor(1000)
								.typeString('Hey there ')
								.pasteString('<code>&#128075;</code><br/>')
								.typeString('I am <br/> Nuriddin')
								.pauseFor(1000)
								.deleteAll(50)
								.typeString('I work')
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
				<div className='absolute bottom-0 mb-16 animate__animated animate__fadeIn animate__delay-5s'>
					{/* 'Continue' button */}
					<div className='flex justify-start lg:justify-end items-center text-gray-800 transition transform ease-in-out duration-600 hover:scale-110 hover:cursor-pointer p-4'>
						<Link
							to='/about'
							className='font-light text-4xl tracking-wider px-1 hover:text-current'>
							Continue
						</Link>
						<svg
							className='w-8 h-8 pt-1'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M14 5l7 7m0 0l-7 7m7-7H3'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
