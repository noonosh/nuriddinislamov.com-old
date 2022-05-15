import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllPostIds, getPostData } from '../lib/posts';

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

function Post({ postData }) {
	return <div>Requested post id: {postData.title}</div>;
}

export default Post;
