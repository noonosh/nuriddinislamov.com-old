import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Bounce = styled.div`animation 2s ${keyframes`${pulse}`} infinite`;

const Maintenance = () => {
	return (
		<div className='p-8 md:my-4'>
			<Bounce>
				<h2 className='text-4xl md:text-5xl md:mb-6 mb-4 font-bold'>
					<span class='text-red-500'>T</span>his page is sti
					<span className='text-red-500'>ll</span> under cons
					<span className='text-red-500'>t</span>
					ruction...
				</h2>
			</Bounce>
			<div>
				<p className='text-lg md:text-2xl'>
					Meanwhile, read about me{' '}
					<Link className='text-sky-500 hover:underline' to='/me'>
						here
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default Maintenance;
