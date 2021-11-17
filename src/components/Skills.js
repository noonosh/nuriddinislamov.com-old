import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import python from '../assets/icons/python.svg';
import javascript from '../assets/icons/javascript.svg';
import postgresql from '../assets/icons/postgresql.svg';
import Card from './Card';
import Button from './Button';

const skillsPython = [
	'1 year experience',
	'Developed 12+ commercial chat bots for businesses',
	'Hands on experience with external RESTful APIs and other services',
	'At the early stage of ML/AI',
];

const skillsJavaScript = [
	'Most enjoyed language so far!',
	'Loving React with Redux',
	'Able to build complex web app UI components',
	'My front-end tech-stack king',
];

const skillsPostgresSQL = [
	'Experience with all types of queries',
	'Maintenance and and role management',
	'Top choice database engine for every project I have completed',
];

const Skills = () => {
	useEffect(() => {
		document.title = "Nuriddin's abilities";
	}, []);
	return (
		<div className='page-container'>
			<Navbar />
			<section>
				<h1 className='font-thin text-5xl lg:text-7xl tracking-widest text-gray-400 lg:pl-36'>
					Skills
				</h1>
				<div className='max-w-5xl mx-auto'>
					<div className='lg:flex lg:flex-wrap justify-evenly m-4'>
						<Card
							image={python}
							alt='Python logo'
							listItems={skillsPython}
						/>
						<Card
							image={javascript}
							alt='Javascript logo'
							listItems={skillsJavaScript}
						/>
						<Card
							image={postgresql}
							alt='PostgreSQL logo'
							listItems={skillsPostgresSQL}
						/>
					</div>
				</div>
				<div className='flex justify-center mb-16 mt-4 lg:pb-12'>
					<div>
						<Button text='Previous' route='/about' />
					</div>
					<div>
						<Button text='Next' route='/contact' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Skills;
