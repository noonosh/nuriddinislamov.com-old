import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import homePage from '../pages/home.md';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

const Home = () => {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(homePage)
			.then(res => res.text())
			.then(text => setContent(text));
	}, []);

	return (
		<Layout id='home'>
			<a
				className='bg-red-600 absolute rotate-90 block -right-28 text-center top-20 bold font-bold text-sm text-white shadow-md py-1 px-24 z-20'
				href='http://github.com/nuriddinislamov/nuriddinislamov.com'
				target='_blank'
				rel='noopener noreferrer'
				id='github'>
				Fork me on Github
			</a>
			<h1 class='text-4xl font-light'>Home</h1>
			<div class='text-2xl font-bold'>
				<Clock />
			</div>
			<div class='absolute bottom-1 left-0 -z-10 w-screen'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#f1f5f9'
						fill-opacity='1'
						d='M0,96L48,117.3C96,139,192,181,288,202.7C384,224,480,224,576,202.7C672,181,768,139,864,128C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
				</svg>
			</div>
			<Navigation
				prev={{ name: '', path: '' }}
				next={{ name: 'about', path: '/me' }}
			/>
		</Layout>
	);
};

export default Home;
