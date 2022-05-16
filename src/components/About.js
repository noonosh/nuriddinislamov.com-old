import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import aboutPage from '../pages/about.md';
import profileImage from '../assets/profile.jpg';
import useWindowDimensions from '../lib/windowDimensions';

const About = () => {
	const { width } = useWindowDimensions();
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(aboutPage)
			.then(res => res.text())
			.then(text => setContent(text));
	}, []);

	return (
		<Layout id='about'>
			<div className='flex flex-col h-full'>
				<div className='grid md:grid-cols-3 flex-grow-0'>
					<div className='my-2 md:order-3 justify-self-center'>
						<img
							src={profileImage}
							className='w-64 md:w-96 rounded-xl md:rounded-full'
							alt='Profile'
						/>
						<figcaption className='block text-gray-500 italic py-4 text-center'>
							Alone me in my dorm room.
						</figcaption>

						{width >= 768 ? (
							<div className='mt-12 mx-4'>
								<h3 className='text-3xl font-extrabold mb-3 border-b pb-1'>
									Useful links
								</h3>
								<ul>
									<li className='py-1 font-semibold text-lg'>
										<a
											href='https://twitter.com/nuriddinislamov/status/1372207791121793026'
											className='hover:underline-offset-1 hover:underline'
											target='_blank'
											rel='noopener noreferrer'>
											My very first tweet
										</a>
									</li>
									<li className='py-1 font-semibold text-lg'>
										<a
											href='https://i.pinimg.com/564x/e6/6e/4e/e66e4e9d80f1ce15a0d3674f3ff25b49.jpg'
											className='hover:underline-offset-1 hover:underline'
											target='_blank'
											rel='noopener noreferrer'>
											Aesthetic desk setup
										</a>
									</li>
									<li className='py-1 font-semibold text-lg'>
										<a
											href='https://youtu.be/1ZYbU82GVz4'
											className='hover:underline-offset-1 hover:underline'
											target='_blank'
											rel='noopener noreferrer'>
											Relaxing music
										</a>
									</li>
								</ul>
							</div>
						) : null}
					</div>

					<div className='prose md:col-span-2 pr-4'>
						<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
						{/* <iframe
							className='w-4/6 px-2'
							height='315'
							src='https://www.youtube.com/embed/Ylrm24MsqkY'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe> */}
					</div>
				</div>

				<Navigation
					prev={{ name: 'home', path: '/' }}
					next={{ name: 'contact', path: '/reach-out' }}
				/>
			</div>
		</Layout>
	);
};

export default About;
