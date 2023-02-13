import React from 'react';

const Tag = ({ tag }) => {
  return (
    <span className="blog-tag">{tag}</span>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className="blog-tags-container">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
