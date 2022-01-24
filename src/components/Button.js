import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, route }) => {
	return (
		<div className='inline-block m-2'>
			<Link
				className='px-3 py-2 rounded-xl lowercase font-thin tracking-widest text-sm lg:text-lg hover:bg-gray-400 hover:text-white hover:transition-colors duration-300 active:bg-gray-500 active:text-white transform transition'
				to={route}>
				{text}
			</Link>
		</div>
	);
};

export default Button;
