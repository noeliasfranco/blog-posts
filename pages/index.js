import React, { useState, useEffect } from 'react';
import PostList from '@/components/PostList';


const Posts = ({ posts }) => {
  return (
	<div className="crossfade">
		<div className='blog-post-container'>
			<h1>List of Posts</h1>
			<PostList posts={posts} />
		</div>
	</div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data.posts,
    },
  }
}

export default Posts;
