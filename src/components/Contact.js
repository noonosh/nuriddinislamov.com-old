import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Navigation from './Navigation';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../lib/windowDimensions';
import contactMemoji from '../assets/contact.jpeg';

const Contact = () => {
	const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
	const USER_ID = process.env.REACT_APP_USER_ID;
	const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

	const { width } = useWindowDimensions();

	const countriesList = [
		{ name: '', code: '' },
		{ name: 'United Kingdom', code: 'GB' },
		{ name: 'Uzbekistan', code: 'UZ' },
		{ name: 'United States', code: 'US' },
		{ name: 'Other', code: 'Other' },
	];

	const [formInfo, setFormInfo] = useState({
		firstName: '',
		lastName: '',
		country: '',
		message: '',
	});

	const handleChange = e => {
		setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		send(SERVICE_ID, TEMPLATE_ID, formInfo, USER_ID)
			.then(response => {
				toast.success('Your message has been successfully sent!', {
					theme: 'colored',
				});
			})
			.catch(err => {
				toast.error('Your message was not sent', { theme: 'colored' });
			});
	};

	return (
		<Layout id='contact'>
			<div className='flex flex-col h-full justify-between'>
				<div className='grid grid-cols-5 gap-4'>
					<div className='container col-span-2 order-5 mt-16 hidden md:block'>
						<img
							src={contactMemoji}
							alt='Call me memoji'
							className='w-72 h-72 mx-auto p-4 rounded-xl'
						/>
					</div>
					<div className='container md:px-6 w-full mb-12 col-span-5 md:col-span-3'>
						<ToastContainer
							hideProgressBar
							autoClose={2000}
							position={width >= 768 ? 'bottom-right' : 'top-center'}
						/>
						<h1 className='text-2xl md:text-4xl my-4 font-bold md:font-extrabold'>
							Contact me straight away!
						</h1>
						<form onSubmit={handleSubmit}>
							<div>
								<label className='pl-1 font-medium' htmlFor='first_name'>
									First Name
								</label>
							</div>
							<input
								type='text'
								id='first_name'
								name='firstName'
								required
								defaultValue={formInfo.firstName}
								onChange={handleChange}
								className='form_field max-w-72'
							/>

							<div>
								<label className='pl-1 font-medium' htmlFor='last_name'>
									Last Name
								</label>
							</div>
							<input
								type='text'
								id='last_name'
								name='lastName'
								required
								defaultValue={formInfo.lastName}
								onChange={handleChange}
								className='form_field'
							/>

							<div>
								<label className='pl-1 font-medium' htmlFor='country'>
									Country
								</label>
							</div>
							<select
								id='country'
								name='country'
								className='form_field'
								required
								onChange={handleChange}>
								{countriesList.map(country => (
									<option
										key={country.code}
										value={country.code}
										defaultValue={formInfo.country}
										onChange={handleChange}>
										{country.name}
									</option>
								))}
							</select>

							<div>
								<label className='pl-1 font-medium' htmlFor='message'>
									Your message
								</label>
							</div>
							<textarea
								id='message'
								name='message'
								required
								defaultValue={formInfo.message}
								onChange={handleChange}
								className='form_field h-32'></textarea>

							<input
								type='submit'
								name='submit'
								className='font-bold block mt-6 mx-6 w-24 md:w-64 rounded-xl py-2 text-center border-2 border-gray-800 hover:text-white hover:bg-gray-800 hover:cursor-pointer'
							/>
						</form>
					</div>
				</div>

				<Navigation
					prev={{ name: 'about', path: '/me' }}
					next={{ name: 'home', path: '/' }}
				/>
			</div>
		</Layout>
	);
};

export default Contact;
