import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const socialNetworks = [
	{
		text: 'GitHub',
		link: 'https://github.com/nuriddinislamov',
		color: 'gray',
	},
	{
		text: 'Twitter',
		link: 'https://twitter.com/nuriddinislamov',
		color: 'blue',
	},
	{
		text: 'Facebook',
		link: 'https://facebook.com/nuriddinislamov07',
		color: 'green',
	},
	{
		text: 'Telegram',
		link: 'https://t.me/inuriddin',
		color: 'yellow',
	},
	{
		text: 'LinkedIn',
		link: 'https://linkedin.com/in/nuriddinislamov',
		color: 'red',
	},
];

const Contact = () => {
	useEffect(() => {
		document.title = 'Contact me';
	}, []);

	const handleSubmit = () => {
		console.log('Form submitted');
		alert('Form submitted');
	};

	return (
		<div className='page-container'>
			<Navbar />
			<section>
				<div className='max-w-sm mx-auto lg:max-w-4xl'>
					<div className='lg:flex justify-evenly items-center'>
						<div className='flex-grow lg:w-0 h-96 flex mx-2 flex-col items-center rounded-xl shadow bg-white'>
							<div className='px-4'>
								<h3 className='font-bold py-4 text-2xl'>
									<u>Message</u> me right now!
								</h3>
								<form onSubmit={handleSubmit}>
									<div className='flex flex-col mb-4'>
										<label>E-mail</label>
										<input
											className='border p-2 rounded'
											type='email'
											id='_email'
											name='email'
											placeholder='Enter e-mail'
										/>
									</div>
									<div className='flex flex-col mb-4'>
										<label>Message</label>
										<textarea
											className='border p-2 rounded max-h-20'
											type='text'
											id='_text'
											name='user_message'
											placeholder='Type your message'
										/>
									</div>

									<button
										type='submit'
										className='font-semibold text-base rounded-2xl bg-gray-800 text-white px-4 py-2 shadow transform transition hover:-translate-y-0.5'>
										Send
									</button>
								</form>
							</div>
						</div>
						<div className='text-2xl tracking-widest font-thin text-center m-6'>
							OR
						</div>
						<div className='flex-grow lg:w-0 mx-2 h-96 text-center rounded-xl bg-white shadow flex flex-col'>
							<h3 className='font-bold pt-4 pb2 text-2xl'>
								Follow around!
							</h3>
							<ul className='text-center mx-auto text-xl tracking-wider font-normal leading-loose'>
								{socialNetworks.map(socialNetwork => (
									<li
										className={`bg-${
											socialNetwork.color
										}-300 my-3 rounded-2xl px-4 ${
											(socialNetworks.indexOf(
												socialNetwork,
											) +
												1) %
												2 ===
											0
												? 'ml-24 hover:translate-x-1.5 hover:translate-y-1.5'
												: 'mr-24 hover:-translate-x-1.5 hover:-translate-y-1.5'
										} transform transition`}>
										<a
											className='hover:text-current'
											href={socialNetwork.link}
											target='_blank'
											rel='noreferrer'>
											<span className='block'>
												{socialNetwork.text}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='flex justify-center mb-16 mt-4 lg:pb-12'>
					<div>
						<Button text='Previous' route='/skills' />
					</div>
					<div>
						<Button text='Start again' route='/' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Contact;
