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
							className='w-72 md:w-96 rounded-xl md:rounded-full'
							alt='Profile'
						/>
						<figcaption className='block text-gray-500 italic py-4 text-center'>
							Alone me in my dorm room.
						</figcaption>

						{width >= 768 ? (
							<div className='mt-8 px-4'>
								<h3 className='text-xl font-bold'>Read more</h3>
								<ul>
									<li>
										<a href='/'>Some hyperlinks</a>
									</li>
									<li>
										<a href='/'>Some hyperlinks</a>
									</li>
									<li>
										<a href='/'>Some hyperlinks</a>
									</li>
								</ul>
							</div>
						) : null}
					</div>

					<div className='prose md:col-span-2 pr-6'>
						<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
					</div>
				</div>

				<Navigation
					prev={{ name: 'home', path: '/' }}
					next={{ name: 'work', path: '/projects' }}
				/>
			</div>
		</Layout>
	);
};

export default About;
