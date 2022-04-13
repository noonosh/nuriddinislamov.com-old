import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Bounce = styled.div`animation 2s ${keyframes`${pulse}`} infinite`;

const Maintenance = () => {
	return (
		<>
			<div className='flex justify-center items-center min-h-screen py-8'>
				<div className='px-9'>
					<h2 className='text-4xl my-2 font-bold'>
						I am{' '}
						<Bounce className='inline-block'>
							<span className='px-2'>working hard</span>
						</Bounce>{' '}
						to bring this site back to life...
					</h2>
					<p className='text-lg'>
						For now, you can see my{' '}
						<a
							className='social_link'
							href='https://linkedin.com/in/nuriddinislamov'
							target='_blank'
							rel='noreferrer'>
							LinkedIn
						</a>{' '}
						profile or jump straight to my{' '}
						<a
							className='social_link'
							href='https://github.com/nuriddinislamov'
							target='_blank'
							rel='noreferrer'>
							GitHub 🚀
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Maintenance;
