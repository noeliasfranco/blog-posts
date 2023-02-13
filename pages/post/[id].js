import React from 'react';
import Link from 'next/link';
import useCache from '../../hooks/useCache';
import PostDetails from '@/components/PostDetails';

const Post = ({ id }) => {
	const post = useCache(`https://dummyjson.com/posts/${id}`);
	console.log(post);

	return (
	<div className="crossfade">
		<PostDetails post={post}/>
	</div>
	);
};

Post.getInitialProps = async ({ query }) => {
	return { id: query.id };
};

export default Post;
