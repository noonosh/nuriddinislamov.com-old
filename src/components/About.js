import React from 'react';
import Navbar from './Navbar';
import image from '../assets/smile.png';
import Button from './Button';
import Footer from './Footer';
import Typewriter from 'typewriter-effect';

const sentences = [
	'a software engineer',
	'a bookworm',
	'a JavaScipt developer',
	'in love with React',
	'a chess amateur',
	'a coffee lover',
];

const About = () => {
	return (
		<div className='container mx-auto'>
			<Navbar />
			<section>
				<h1 className='mb-4 px-4 font-thin text-center text-6xl tracking-widest text-gray-400 lg:hidden filter drop-shadow-lg'>
					About
				</h1>

				<div
					className='
								text-2xl
								font-bold
								mx-6
								text-center
								lg:flex
								lg:justify-center
								lg:text-6xl
								lg:mb-12'>
					<div>I'm&nbsp;</div>
					<Typewriter
						options={{
							strings: sentences,
							autoStart: true,
							loop: true,
						}}
					/>
				</div>

				<div
					className='
				bg-green-300
				p-4
				rounded
				shadow
				z-50'>
					<div
						className='w-24 h-24
							lg:w-64
							lg:h-64
							mx-6
							bg-blue-300
							lg:bg-none
							rounded-full
							lg:rounded-lg
							float-left'>
						<img src={image} alt='Smiling face memoji' />
					</div>

					<div
						className='
											px-4
											leading-8
											text-lg
											font-regular
											text-xl
											lg:text-xl
											'>
						<p style={{ 'text-indent': '1.5rem' }}>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged.
						</p>
					</div>
				</div>

				<div
					className='
					hidden
					lg:inline-block
					absolute
					right-0	
					ml-36	
					'>
					<h1
						className='
							mx-4
							px-12
							font-thin
							text-center
							text-9xl
							tracking-widest
							text-gray-400
							opacity-30
							transform
							rotate-90
							w-32
							-mt-32
							z-0
							'>
						About
					</h1>
				</div>
				<div className='flex flex-wrap-reverse my-6 px-4 justify-center lg:justify-start'>
					<div className='my-3 px-2'>
						<Button text='< Back to main page' route='/' />
					</div>
					<div className='my-3 px-2'>
						<Button text='Next >' route='/skills' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
