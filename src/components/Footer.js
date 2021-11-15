import React from 'react';
import image from '../assets/icons/github.svg';

const Footer = () => {
	return (
		<footer className=''>
			<div
				className='
				my-8
				text-gray-400
				opacity-80
				text-sm
				flex
				justify-center
				lg:w-full
				lg:justify-between 
				lg:mx-auto
				lg:px-48 
				lg:fixed
				lg:bottom-0
				lg:left-0
				'>
				<div className='hidden lg:block'>
					<a href='https://github.com/nuriddinislamov'>
						<img src={image} alt='Github logo' />
					</a>
				</div>
				<div className='hidden lg:block'>
					<span>&copy;</span> Nuriddin Islamov{' '}
					{new Date().getFullYear()}
				</div>
				<div className=''>Built with React &#10084;&#65039;</div>
			</div>
		</footer>
	);
};

export default Footer;
