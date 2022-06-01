import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import aboutPage from '../pages/about.md';
import profileImage from '../assets/profile.jpg';
import BuyMeCoffee from '../lib/BuyMeCoffee';
import useWindowDimensions from '../lib/windowDimensions';

const About = () => {
	const { width } = useWindowDimensions();

	/*
	Following commented out code is for rendering content of markdown files.
	By this time, it is not neeeded as rendering takes a while, causing the UI lag for some time.
	TODO: Find a better solution to render!
	*/

	// const [content, setContent] = useState('');

	// useEffect(() => {
	// 	fetch(aboutPage)
	// 		.then(res => res.text())
	// 		.then(text => setContent(text));
	// }, []);

	return (
		<Layout id='about'>
			<div className='flex flex-col h-full'>
				<div className='grid md:grid-cols-3 flex-grow-0'>
					<div className='my-2 md:order-3'>
						<img
							src={profileImage}
							className='w-5/6 md:w-96 mx-auto rounded-xl md:rounded-full'
							alt='Profile'
						/>
						<figcaption className='block text-gray-500 italic py-4 text-center'>
							Alone me in my dorm room.
						</figcaption>

						{width >= 768 ? (
							<div className='mb-12 mx-4'>
								<div className='mb-16 mt-4 flex justify-center items-center'>
									<Link
										to='/files/CV_nuriddinislamov.pdf'
										download
										target='_blank'
										className='px-4 py-2 inline-block font-bold border-2 solid border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white'>
										<span className='inline-block'>Download</span> my Résumé
									</Link>
								</div>
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
						<h1>Who the heck actually am I?</h1>
						<blockquote>
							<i>
								To keep it very short I am an eighteen-year old youngster
								immigrated to the UK, pursuing Bachelor’s in CS and looking for
								an opportunity in tech – that’s who I am.
							</i>
						</blockquote>
						<h2>A little back</h2>
						<p>
							Around 5 years ago, I started living. Sounds strange, right? Keep
							reading and I will tell you my story. (This page’s content is{' '}
							<strong>to be updated regularly</strong> in the next couple of
							weeks, so consider checking back in a while).
						</p>
						<h2>Tech that I live with</h2>
						<p>
							Currently living the best of my life with <strong>JS</strong> and{' '}
							<strong>React</strong>, however there is some more:
						</p>
						<ul>
							<li>Python, Numpy, Pandas, Django, DRF</li>
							<li>PostgreSQL, MySQL, Mongo</li>
							<li>Swift, C, Java - still discovering the edges</li>
							<li>TailwindCSS, NextJS, Express</li>
							<li>AWS, Docker, DigitalOcean (frequent user)</li>
							<li>Postman, Notion</li>
						</ul>
						<h2>Experience</h2>
						<p>
							I started my journey in summer 2020 with{' '}
							<a href='https://KhanAcademy.org'>KhanAcademy.org</a> particularly
							with JavaScript course. Although nothing was clear by that time, I
							am very grateful to{' '}
							<a href='https://Tehnikum.school'>Tehnikum.school</a> for taking
							me into the world of software. In late 2020, I took a Python
							course. This was the start.
							<br />
							<br />
							Today, I have developed and deployed 20+ automated commercial
							Telegram bots for companies.
						</p>
						<h2>January 2021</h2>
						<h3>Technical Support Specialist</h3>
						<h4>Bellissimo Pizza Intl. – Tashkent, Uzbekistan</h4>
						<ul>
							<li>
								Installed and maintained the company’s private application in 12
								locations around the city
							</li>
							<li>
								Provided personalized assistance to office staff with network
								and software issues
							</li>
							<li>
								Handled daily 20+ phone calls to support colleagues remotely via
								AnyDesk
							</li>
						</ul>
						<h2>Spring 2021</h2>
						<h3>Sales and Marketing Specialist</h3>
						<h4>ALI-NURMEDIA advertising agency – Tashkent, Uzbekistan</h4>
						<ul>
							<li>
								Built a solid and influential keynote presentation to attract
								potential clients giving the company reach its acquisition rate
								a week earlier deadline
							</li>
							<li>
								Managed to run social media campaign attracting hundreds of new
								followers simultaneously on different platforms
							</li>
							<li>
								Frequently helped other departments, including the bookkeeper,
								with the online banking platform, thus accelerating the
								company's transaction speeds
							</li>
						</ul>
						<h2>Summer 2021</h2>
						<h3>Software Engineer</h3>
						<h4>ez-developers – Tashkent, Uzbekistan</h4>
						<ul>
							<li>
								Tbh, it was my idea for this startup with my fellas. Credits to
								Co-F. <a href='https://github.com/jaykhans'>Jay Khans</a>
							</li>
							<li>
								Completed the set up of the team’s local Ubuntu server for
								everyday access to project files and assured the network and
								disk read-and-write load stability
							</li>
							<li>Built RESTful backend API with Django Rest Framework</li>
							<li>
								Refactored Python code to allow faster asynchronous CRUD
								operations with database
							</li>
						</ul>
						<h2>Achievements</h2>
						<p>
							Oh, let me check my archive. I will post them all once I find my
							certificates.
						</p>
						<h3>TestDome</h3>
						<ul>
							<li>
								<a href='https://app.testdome.com/cert/b534e5d8bb2e4a9b9b6587dddf9d695a'>
									HTML/CSS
								</a>
							</li>
							<li>
								<a href='https://app.testdome.com/cert/7880e07ace11462e83425499404694bd'>
									Python
								</a>
							</li>
						</ul>
						<h3>Typing Dot Com</h3>
						<ul>
							<li>
								<a href='https://www.typing.com/student/verify#200412442-115197262'>
									Advanced Typing Assessment – 3 minute
								</a>
							</li>
						</ul>
						<h3>Udacity</h3>
						<ul>
							<li>
								Full Stack Development Track – Credential ID{' '}
								<strong>NFZGZALW</strong>
							</li>
						</ul>
						<h2>YouTube</h2>
						<iframe
							className='w-full h-[400px]'
							src='https://www.youtube.com/embed/Ylrm24MsqkY'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe>
						<h2>Reach me</h2>
						<p>
							Considering a talk with me? Go to{' '}
							<Link to='/reach-out'>contact page</Link>, or leave an email at{' '}
							<a href='mailto:nuriddinislamov@icloud.com'>
								nuriddinislamov@icloud.com
							</a>
							. However, Linkedin{' '}
							<a href='https://www.linkedin.com/in/nuriddinislamov'>messages</a>{' '}
							are open. Read my{' '}
							<a href='https://twitter.com/nuriddinislamov'>tweets</a> and fork
							some of my <a href='https://github.com/nuriddinislamov'>repos</a>.
						</p>

						<h2>Support me</h2>
						<p>
							Boiling point of creativity is when a developer is fully focused
							on the work. <b>Consider</b> supporting me with a cup of coffee so
							that I can do more everyday.
						</p>
						<BuyMeCoffee width='5/6 md:w-2/3' height='36' />
						{/* <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} /> */}
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
