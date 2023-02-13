import React from 'react';
import Link from 'next/link';
import Tags from "@/components/Tags";

const PostDetails = ({ post }) => {
  return (
	<div className="blog-post-details-container">
		<Link href="/">
			Back
		</Link>
		{
			post && 
			<div className='blog-post-details'>
				<p className='blog-post-title'>{post.title}</p>
				<p className='blog-details-content'>{post.body}</p>
				<Tags tags={post.tags} />
			</div>
		}
	</div>
  );
};

export default PostDetails;
