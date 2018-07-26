import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostHeader = ({ user, date }) => {
  const { name, image } = user;
  return (
    <div className="post-header-container">
      <img src={image} alt="profile" className="image" />
      <div className="title">
        <span className="name">
          {name}
        </span>
        <span className="date">
          {moment(date, 'YYYY-MM-DD HH:mm:ss')
            .locale('pt')
            .fromNow()}
        </span>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  user: PropTypes.shape().isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
