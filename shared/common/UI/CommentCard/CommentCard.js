import React from 'react';
import { Popover } from 'antd';
import moment from 'moment';
import LikeDislike from './LikeDislike';
import Rating from '../Rating/Rating';

export default class App extends React.Component {
  render() {
    const { singleReview, authorRating } = this.props;
    const reviewAuthorFirstName = singleReview
      ? singleReview.reviewAuthorFirstName
      : '';
    const reviewAuthorLastName = singleReview
      ? singleReview.reviewAuthorLastName
      : '';
    const authorName = reviewAuthorFirstName + ' ' + reviewAuthorLastName;
    const content = singleReview ? singleReview.reviewText : '';
    const reviewTitle = singleReview ? singleReview.reviewTitle : '';
    const commentDate = singleReview ? singleReview.reviewDate : '';
    const postTime = new Date(commentDate).getTime();
    const authorAvatar = singleReview ? singleReview.reviewAuthorPic.url : '';
    const reviewRating = singleReview ? singleReview.reviewFields : '';

    return (
      <div className="comment-area">
        <div className="comment-wrapper">
          <div className="comment-header">
            <div className="avatar-area">
              <div className="author-avatar">
                <img src={authorAvatar} alt={authorName} />
              </div>
              <div className="author-info">
                <h3 className="author-name">{authorName}</h3>
                {authorRating && (
                  <div className="author-rating">{authorRating}</div>
                )}
                <div className="comment-date">
                  <Popover
                    placement="bottom"
                    content={moment(commentDate).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a'
                    )}
                  >
                    <span>Reviewd - {moment(postTime).fromNow()}</span>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="rating-area">
              <LikeDislike />
            </div>
          </div>
          <div className="comment-body">
            <h4>{reviewTitle}</h4>
            <p>{content}</p>
          </div>
          <div className="comment-rating">
            {reviewRating && reviewRating.length !== 0
              ? reviewRating.map((singleReviewRating, i) => {
                  return (
                    <div className="rating-widget" key={i}>
                      <Rating
                        key={i}
                        rating={singleReviewRating.rating}
                        ratingFieldName={singleReviewRating.ratingFieldName}
                        type="individual"
                      />
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    );
  }
}
