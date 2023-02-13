import React from 'react';
import PostListItemn from '@/components/PostListItem';
import { v4 as uuidv4 } from 'uuid';

const PostList = ({ posts }) => {
  return (
    <>
     {
		posts && posts.map((post) => (
			<PostListItemn post={post} key={uuidv4()}/>
		))
	 }
    </>
  );
};

export default PostList;
