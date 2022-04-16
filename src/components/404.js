import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
	return (
		<div className='flex flex-col h-screen'>
			<div className='flex-1 w-2/3 mx-auto text-center'>
				<div className='flex flex-col h-full justify-center items-center'>
					<h1 className='text-6xl font-black mb-8'>
						404! <FontAwesomeIcon icon={faSadCry} />
					</h1>
					<h3 className='text-3xl font-black '>
						The page you are looking for is not alive...
					</h3>
					<Link
						to='/'
						className='border-2 border-gray-800 py-2 px-5 mt-12 rounded-3xl hover:transition-all ease-out duration-500 hover:bg-gray-800 hover:text-white font-semibold'>
						Take me back home
					</Link>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default NotFound;
