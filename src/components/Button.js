import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, route }) => {
	return (
		<div>
			<Link
				className=' 
				px-4 py-2
				border
				border-gray-400
				rounded-2xl
				uppercase
				shadow
				bg-none
				font-thin
				tracking-widest
				text-gray-800
				text-xs
				sm:text-base
				transform
				transition
				hover:bg-gray-200
				hover:text-current
				active:-translate-y-1.5
				active:bg-gray-300'
				to={route}>
				{text}
			</Link>
		</div>
	);
};

export default Button;
