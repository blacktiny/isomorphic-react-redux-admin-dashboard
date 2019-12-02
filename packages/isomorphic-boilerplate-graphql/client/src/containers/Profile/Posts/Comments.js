import React, { Fragment } from 'react';

const Comments = ({
  role,
  avatar,
  name,
  content,
  time,
  handleLike,
  handleReply,
}) => {
  const renderHtml = data => {
    return { __html: data };
  };

  return (
    <Fragment>
      {role === 'author' && (
        <div className="author comment">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <span dangerouslySetInnerHTML={renderHtml(content)} />
            <div className="time">
              <time>{time}</time>
            </div>
          </div>
        </div>
      )}
      {role === 'user' && (
        <div className="visitor comment">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <span dangerouslySetInnerHTML={renderHtml(content)} />
            <div className="time">
              <time>{time}</time>
              <button type="button" onClick={handleLike}>
                1 like
              </button>
              <button type="button" onClick={handleReply}>
                Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Comments;
