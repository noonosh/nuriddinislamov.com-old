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

const LinkTemplate = ({ text, url }) => (
	<a
		href={url}
		className='text-blue-700 hover:underline'
		target='_blank'
		rel='noreferrer'>
		{text}
	</a>
);

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
						<p class='leading-relaxed'>
							<i>"I am a passionate and hardworking pers..."</i> -{' '}
							<i>bla bla and so on</i> <br />
							You have probably heard it many times and from
							different people. My story is a bit different,
							here's a quick one:
							<br />
							<br />
							<span
								className='inline-block'
								style={{ 'text-indent': '1.5rem' }}>
								Having started my school
							</span>{' '}
							<strong>at the age of 5</strong>, I spent 2 years in
							a{' '}
							<LinkTemplate
								url='https://www.nordangliaeducation.com/en/our-schools/uzbekistan/tashkent/british'
								text='British education environment'
							/>{' '}
							(2016/18) , where I have prepared myself for
							upcoming exams. <strong>I placed #1</strong> in one
							of the{' '}
							<LinkTemplate
								url='http://iht.uz/en/about-us-2/'
								text='entrance exams'
							/>{' '}
							for a college (specialised high school), studied at
							the one of my choice and graduated with an{' '}
							<strong>A grade</strong> in 13/16 subjects. Soon
							after, entered{' '}
							<LinkTemplate
								url='https://wiut.uz'
								text='Westminster International University in Tashkent'
							/>{' '}
							and graduated Foundation studies with Distinction.
							<br />
							<br />
							Next thing is next. Despite I identify myself as an
							introvert, I managed to achieve 87% people's trust
							around me during my life-long journey.{' '}
							<LinkTemplate
								url='https://www.dictionary.com/browse/tbh'
								text='Tbh,'
							/>{' '}
							I love psychology and the science of human behavior!
							<br />
							<br />
							Regarding my{' '}
							<LinkTemplate
								url='https://www.dictionary.com/e/acronyms/tbr/'
								text='TBR'
							/>{' '}
							shelf: it's full. What I have enjoyed so far is Ayn
							Rand's books –{' '}
							<i>
								"I will never live for the sake of another man,
								nor ask another man to live for mine."
							</i>
							<br />
							<br />
							And lastly, but not least, I am a{' '}
							<strong>
								software engineer/developer or a programmer
							</strong>
							, whatever you say it. I love all about ones and
							zeros and surely can handle a lot of them.{' '}
							<i>
								"There are 10 types of people - who understand
								binary and who don't"
							</i>
							.
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
