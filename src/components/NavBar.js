import React from 'react';
import useWindowDimensions from '../lib/windowDimensions';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const { width } = useWindowDimensions();

	return (
		<header className='md:sticky top-0 z-30'>
			<nav className='pt-6 md:pt-8 px-24 bg-white w-full bg-opacity-90 backdrop-blur-md'>
				<div className='flex flex-col items-center md:flex-row md:justify-between border-b pb-8'>
					<div className='text-center md:text-left'>
						<h1 className='font-extrabold text-2xl md:text-4xl md:self-center md:mb-0 inline-block'>
							<Link to='/' className='link'>
								{width >= 768 ? 'Nuriddin Islamov' : 'Nuriddin'}
							</Link>
						</h1>
						<p className='font-light text-base md:text-base'>
							Jr. Software Engineer
						</p>
					</div>

					<ul className='md:flex text-lg font-medium hidden whitespace-nowrap'>
						<li className='nav_item'>
							<Link className='link' to='/me'>
								me
							</Link>
						</li>
						{/* <li className='nav_item'>
							<Link className='link' to='/projects'>
								projects
							</Link>
						</li> */}
						<li className='nav_item'>
							<Link className='link' to='/reach-out'>
								get in touch
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
