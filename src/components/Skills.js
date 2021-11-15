import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import python from '../assets/icons/python.svg';
import javascript from '../assets/icons/javascript.svg';
import Card from './Card';
import Button from './Button';

const skillsPython = ['1 year of experience', 'Good understanding of Python'];

const skillsJavaScript = [
	'1 year of experience',
	'Good understanding of JS',
	'sdfksndflksd',
	'sdfk ms dfsdf s',
	'sfkl sn flref',
	'dfjk nslf merl kfm erlf mer',
];

const Skills = () => {
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
							image={javascript}
							alt='Javascript logo'
							listItems={skillsJavaScript}
						/>
						<Card
							image={javascript}
							alt='Javascript logo'
							listItems={skillsJavaScript}
						/>
						<Card
							image={javascript}
							alt='Javascript logo'
							listItems={skillsJavaScript}
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
