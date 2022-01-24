import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className='my-8 mx-2 flex justify-between font-thin tracking-widest items-start text-xl lg:text-3xl lg:mx-6'>
				<div>
					<Link to='/' className='hover:text-current'>
						@nuriddinislamov
					</Link>
				</div>
				<div className='flex flex-col text-right'>
					<ul>
						<li className='mb-3 transform hover:opacity-60 hover:scale-125 transition duration-700 ease-in-out '>
							<Link
								to='/about'
								className='hover:text-current text-gray-900 text-gray-900'>
								about
							</Link>
						</li>
						<li className='mb-3 transform hover:opacity-60 hover:scale-125 transition duration-700 ease-in-out '>
							<Link
								to='/skills'
								className='hover:text-current text-gray-900 text-gray-900'>
								skills
							</Link>
						</li>
						<li className='mb-3 transform hover:opacity-60 hover:scale-125 transition duration-700 ease-in-out '>
							<Link
								to='/contact'
								className='hover:text-current text-gray-900 text-gray-900'>
								contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
