import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
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

								.typeString('I am Nuriddin')
								.pauseFor(1000)
								.deleteAll(30)

								.typeString(
									'Oh, <br/> I assume you <br/> already knew that',
								)
								.pauseFor(1000)
								.deleteAll(10)

								.typeString(
									'Can you imagine me <br/> right now in front of yourself?',
								)
								.pauseFor(1000)
								.deleteAll(10)

								.typeString(
									'If no, then continue <br/> to the next page <br/> where you can read more!',
								)
								.pauseFor(1000)
								.deleteAll(10)

								.typeString(
									"I love sharing love, <br/> and I mean it ;) <br/> That's for you - ",
								)
								.pasteString('<code>&#10084;&#65039;</code>')
								.pauseFor(1000)
								.deleteAll(10)

								.typeString(
									"Let's start it all <br/> from the beginning!",
								)
								.pauseFor(1000)
								.deleteAll(10)
								.pauseFor(3000)

								// .callFunction(state => {
								// 	// hide cursor
								// 	state.elements.cursor.style.display =
								// 		'none';
								// })
								.start();
						}}
						options={{
							loop: true,
						}}
					/>
				</div>
				<div className='absolute bottom-0 mb-16 animate__animated animate__fadeIn animate__delay-5s'>
					{/* 'Continue' button */}
					<div className='flex justify-start lg:justify-end items-center text-gray-800 transition transform ease-in-out duration-600 hover:scale-110 hover:cursor-pointer p-4'>
						<Link
							to='/about'
							className='font-light text-2xl lg:text-4xl tracking-wider px-1 hover:text-current'>
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
