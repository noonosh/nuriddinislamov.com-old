import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, route }) => {
	return (
		<div className='inline-block m-2'>
			<Link
				className='px-3 py-2 rounded-xl uppercase font-thin tracking-widest text-sm lg:text-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 hover:bg-gray-400 hover:text-white active:bg-gray-500 active:text-white transform active:translate-y-1.5'
				to={route}>
				{text}
			</Link>
		</div>
	);
};

export default Button;
