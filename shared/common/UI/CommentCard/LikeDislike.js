import React, { Fragment } from 'react';
import { Icon, Tooltip } from 'antd';

class LikeDislike extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };
  render() {
    return (
      <Fragment>
        <span className="comment-helpful">
          <Tooltip title="Like">
            <Icon
              type="like"
              theme={this.state.action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>
            {this.state.likes}
          </span>
        </span>
        <span className="comment-report">
          <Tooltip title="Dislike">
            <Icon
              type="dislike"
              theme={this.state.action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>
            {this.state.dislikes}
          </span>
        </span>
      </Fragment>
    );
  }
}

export default LikeDislike;
