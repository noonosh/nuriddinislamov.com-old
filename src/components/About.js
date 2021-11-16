import React, { useEffect } from 'react';
import Navbar from './Navbar';
import image from '../assets/smile.png';
import Button from './Button';
import Footer from './Footer';
import Typewriter from 'typewriter-effect';
import 'animate.css';

const sentences = [
	'a software engineer',
	'a bibliophile',
	'a JavaScipt developer',
	'in love with React',
	'a chess enthusiast',
	'a coffeeholic',
];

const About = () => {
	useEffect(() => {
		document.title = 'Exploring Nuriddin';
	}, []);
	return (
		<div className='page-container'>
			<Navbar />
			<section>
				<h1 className='m-2 p-2 font-thin text-center text-6xl tracking-widest text-gray-400 opacity-60 lg:hidden'>
					About
				</h1>
				<div className='mb-2 py-2 text-2xl text-gray-900 font-bold flex flex-wrap justify-center lg:text-5xl'>
					<div>I'm&nbsp;</div>
					<Typewriter
						options={{
							strings: sentences,
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div className='lg:my-12 max-w-sm lg:max-w-4xl mx-auto rounded-2xl shadow bg-white lg:flex animate__animated animate__jackInTheBox'>
					<div className='lg:flex-shrink-0'>
						<img
							src={image}
							alt='Smiling face memoji'
							className='h-72 w-full lg:w-72 lg:h-full object-scale-down'
						/>
					</div>
					<div className='p-8'>
						<p
							class='leading-relaxed'
							style={{ 'text-indent': '1.5rem' }}>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text <strong>ever</strong>{' '}
							since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type
							specimen book. It has{' '}
							<strong>survived not only five centuries</strong>,
							but also the leap into electronic typesetting,
							remaining essentially unchanged.
						</p>
					</div>
				</div>

				<div className='flex justify-center mb-16 mt-4 lg:pb-24'>
					<div>
						<Button text='Next page' route='/skills' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
