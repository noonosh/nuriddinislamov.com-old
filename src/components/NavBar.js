import React from 'react';
import useWindowDimensions from '../windowDimensions';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const { width } = useWindowDimensions();

	return (
		<header className='pt-6 md:pt-8 px-24 sticky top-0 bg-white w-screen navbar-fixed-top'>
			<div className='flex flex-col items-center md:flex-row md:justify-between border-b pb-8'>
				<div className='text-center md:text-left'>
					<h1 className='font-extrabold text-2xl md:text-4xl md:self-center md:mb-0 inline-block active:underline underline-offset-2 clickable'>
						<Link to='/'>{width >= 768 ? 'Nuriddin Islamov' : 'Nuriddin'}</Link>
					</h1>
					<p className='font-light text-base md:text-base'>
						Jr. Software Engineer
					</p>
				</div>

				<ul className='md:flex text-lg font-medium hidden whitespace-nowrap'>
					<li className='nav_item'>
						<Link to='/me'>me</Link>
					</li>
					<li className='nav_item'>
						<Link to='/projects'>projects</Link>
					</li>
					<li className='nav_item'>
						<Link to='/reach-out'>get in touch</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
