import React from 'react';
import useWindowDimensions from '../lib/windowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Footer = props => {
	const { width } = useWindowDimensions();

	if (props.isHome) {
		return null;
	}

	return (
		<footer className='py-6 bg-slate-100 px-8 mt-4 md:mt-12'>
			<div className='flex justify-between text-center'>
				<div className='text-center text-gray-500 font-light tracking-tight'>
					© {new Date().getFullYear()} Nuriddin Islamov
				</div>

				<div className=''>
					{width > 768 ? (
						<ul className='flex justify-between'>
							<li className='ml-8'>
								<a
									href='https://github.com/nuriddinislamov'
									target='_blank'
									rel='noreferrer'
									className='hover:text-gray-600'>
									<FontAwesomeIcon icon={faGithub} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://twitter.com/nuriddinislamov'
									target='_blank'
									rel='noreferrer'
									className='hover:text-sky-500'>
									<FontAwesomeIcon icon={faTwitter} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://linkedin.com/in/nuriddinislamov'
									target='_blank'
									rel='noreferrer'
									className='hover:text-sky-700'>
									<FontAwesomeIcon icon={faLinkedinIn} className='text-2xl' />
								</a>
							</li>
							<li className='ml-8'>
								<a
									href='https://blog.nuriddinislamov.com'
									target='_blank'
									rel='noreferrer'
									className='hover:text-sky-600'>
									<FontAwesomeIcon icon={faPencil} className='text-2xl' />
								</a>
							</li>
						</ul>
					) : (
						<ul>
							<li className='ml-8'>
								<a
									href='https://github.com/nuriddinislamov'
									target='_blank'
									rel='noreferrer'
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
