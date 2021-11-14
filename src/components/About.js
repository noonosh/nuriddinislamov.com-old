import React from 'react';
import image from '../assets/smile.png';

const About = () => {
	return (
		<section>
			<div className='grid grid-cols-3 mt-24'>
				<div className='mt-5'>
					<img src={image} alt='Smiling face memoji' />
				</div>
				<div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
				</div>
				<div>
					<h1>About</h1>
				</div>
			</div>
		</section>
	);
};

export default About;
