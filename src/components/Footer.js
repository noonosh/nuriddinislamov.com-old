import React from 'react';
import image from '../assets/icons/github.svg';

const Footer = () => {
	return (
		<footer
			className='text-gray-400 opacity-80 text-sm flex justify-center items-center mt-auto mb-4 lg:justify-evenly lg:px-48 
				'>
			<div className='hidden lg:block'>
				<a
					href='https://github.com/nuriddinislamov'
					target='_blank'
					rel='noreferrer'>
					<img src={image} alt='Github logo' />
				</a>
			</div>
			<div className='hidden lg:block text-center'>
				<div>
					2019-
					{new Date().getFullYear()}
				</div>
				<div>
					<span>&copy;</span> nuriddin islamov{' '}
				</div>
			</div>
			<div className=''>built with react &#10084;&#65039;</div>
		</footer>
	);
};

export default Footer;
