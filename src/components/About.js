import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import aboutPage from '../pages/about.md';

const About = () => {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(aboutPage)
			.then(res => res.text())
			.then(text => setContent(text));
	}, []);

	return (
		<Layout id='about'>
			<div className='flex flex-col h-full prose prose-slate'>
				<div className='flex-auto overflow-scroll'>
					<ReactMarkdown children={content} />
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
