import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='container mx-auto px-4'>
			<div className='mt-14 flex flex-row justify-between items-start text-xl lg:text-3xl font-thin tracking-widest'>
				<div>
					<Link to='/' className='hover:text-current'>
						@nuriddinislamov
					</Link>
				</div>
				<div className='flex flex-col text-right'>
					<ul>
						<li className='mb-3 transform transition hover:-translate-x-1.5'>
							<Link
								to='/about'
								className='focus:outline-none hover:opacity-60 text-gray-900 hover:text-current active:bg-gray-200 visited:bg-purple-600'>
								About
							</Link>
						</li>
						<li className='mb-3 transform transition hover:-translate-x-1.5'>
							<Link
								to='/skills'
								className='focus:outline-none hover:opacity-60 text-gray-900 hover:text-current
								active:bg-gray-200'>
								Skills
							</Link>
						</li>
						<li className='mb-3 transform transition hover:-translate-x-1.5'>
							<Link
								to='/contact'
								className='focus:outline-none hover:opacity-60 text-gray-900 hover:text-current
								active:bg-gray-200'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
