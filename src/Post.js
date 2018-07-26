import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    post: { content, date, user },
  } = props;
  return (
    <div className="post-container">
      <PostHeader user={user} date={date} />
      <div className="post-content">
        {content}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
};

export default Post;
