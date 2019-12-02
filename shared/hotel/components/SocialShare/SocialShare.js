import React from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
} from 'react-icons/fa';
import Popover from '@iso/ui/Antd/Popover/Popover';

export const FaceBookShare = props => {
  const { title, shareURL } = props;
  return (
    <Popover content="Facebook">
      <div className="facebook">
        <FacebookShareButton url={shareURL} quote={title}>
          <FaFacebookF /> Facebook
        </FacebookShareButton>
      </div>
    </Popover>
  );
};

export const TwitterShare = props => {
  const { shareURL, title, author } = props;
  return (
    <Popover content="Twitter">
      <div className="twitter">
        <TwitterShareButton url={shareURL} title={title} via={author}>
          <FaTwitter /> Twitter
        </TwitterShareButton>
      </div>
    </Popover>
  );
};

export const LinkedInShare = props => {
  const { shareURL, title } = props;
  return (
    <Popover content="Twitter">
      <div className="twitter">
        <LinkedinShareButton
          url={shareURL}
          title={title}
          windowWidth={750}
          windowHeight={600}
        >
          <FaLinkedinIn /> LinkedIn
        </LinkedinShareButton>
      </div>
    </Popover>
  );
};

export const PinterestShare = props => {
  const { shareURL, title, media } = props;
  const mediaForPinterest = media ? media[0].url : [];
  return (
    <Popover content="Pinterest">
      <div className="pinterest">
        <PinterestShareButton
          url={shareURL}
          media={mediaForPinterest}
          description={title}
        >
          <FaPinterest /> Pinterest
        </PinterestShareButton>
      </div>
    </Popover>
  );
};
