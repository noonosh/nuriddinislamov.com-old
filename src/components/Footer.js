import React from 'react';
import useWindowDimensions from '../windowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faTwitter,
	faLinkedinIn,
	faDev,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const { width } = useWindowDimensions();

	return (
		<footer className='py-6 bg-slate-100 px-8'>
			<div className='flex justify-between text-center'>
				<div className='text-center text-gray-500 font-light tracking-tight'>
					© Nuriddin Islamov, {new Date().getFullYear()}
				</div>

				<div className=''>
					{width > 768 ? (
						<ul className='flex justify-between'>
							<li className='ml-8'>
								<a
									href='https://github.com/nuriddinislamov'
									target='_blank'
									rel='noopener'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faGithub} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://twitter.com/nuriddinislamov'
									target='_blank'
									rel='noopener'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faTwitter} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://linkedin.com/in/nuriddinislamov'
									target='_blank'
									rel='noopener'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faLinkedinIn} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://blog.nuriddinislamov.com'
									target='_blank'
									rel='noopener'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faDev} className='text-2xl' />
								</a>
							</li>
						</ul>
					) : (
						<ul>
							<li className='ml-8'>
								<a
									href='https://github.com/nuriddinislamov'
									target='_blank'
									rel='noopener'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faGithub} className='text-2xl' />
								</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
