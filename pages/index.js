import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>nuriddinislamov</title>
				<meta
					name='description'
					content="Nuriddin Islamov is the fist-year student at Anglia Ruskin University in Cambridge.He's a junior developer and strives to enhance people's lives through software."
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to{' '}
					<a href='https://nuriddinislamov.com' target='_blank'>
						Nuriddin's!
					</a>
				</h1>
			</main>
		</div>
	);
}
