import React from 'react';
import useWindowDimensions from '../windowDimensions';

const NavBar = () => {
	const { width } = useWindowDimensions();

	return (
		<header className='py-6 md:py-8 px-24 sticky top-0 bg-slate-200 w-screen navbar-fixed-top'>
			<div className='flex flex-col items-center md:flex-row md:justify-between'>
				<div className='text-center md:text-left'>
					<h1 className='font-extrabold text-2xl md:text-4xl md:self-center md:mb-0 inline-block active:underline underline-offset-2 clickable'>
						<a href='/'>{width > 768 ? 'Nuriddin Islamov' : 'Nuriddin'}</a>
					</h1>
					<p className='font-light text-base md:text-base'>
						Jr. Software Engineer
					</p>
				</div>

				<ul className='md:flex flex-col items-center md:flex-row md:text-xl md:font-light md:tracking-wide hidden whitespace-nowrap'>
					<li className='ml-8 hover:underline underline-offset-4 hover:text-gray-600'>
						<a href='/about'>About me</a>
					</li>
					<li className='ml-8 hover:underline underline-offset-4 hover:text-gray-600'>
						<a href='/download'>Projects</a>
					</li>
					<li className='ml-8 hover:underline underline-offset-4 hover:text-gray-600'>
						<a href='/contact'>Get in touch</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
