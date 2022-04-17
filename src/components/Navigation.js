import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<div className='h-20 flex flex-wrap-reverse justify-between items-center px-12 md:hidden'>
			{props.prev.path == '' ? null : (
				<div className='border-2 border-gray-600 px-4 py-2 my-2 rounded-3xl whitespace-nowrap'>
					<Link to={props.prev.path}>&larr; {props.prev.name}</Link>
				</div>
			)}
			<div className='border-2 border-gray-600 px-4 py-2 rounded-3xl whitespace-nowrap'>
				<Link to={props.next.path}>{props.next.name} &rarr;</Link>
			</div>
		</div>
	);
}

export default Navigation;
