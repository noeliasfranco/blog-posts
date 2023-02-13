import React from 'react';
import Link from 'next/link';
import Tags from "@/components/Tags";

const PostListItemn = ({ post }) => {
  return (
	<div className="blog-post">
		<Link href="/post/[id]" as={`/post/${post.id}`} key={post.id} className='blog-post-title'>
			{post.title}
		</Link>
		<p className='blog-post-content'>{post.body}</p>
		<Tags tags={post.tags} />
	</div>
  );
};

export default PostListItemn;
