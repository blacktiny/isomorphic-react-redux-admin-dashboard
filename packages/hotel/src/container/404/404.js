import React from 'react';
import Image from '@iso/ui/Image/Image';
import Heading from '@iso/ui/Heading/Heading';
import TextLink from '@iso/ui/TextLink/TextLink';
import NotFoundWrapper, { ContentWrapper } from './404.style';

import Image404 from '@hotel/assets/images/404@2x.png';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <NotFoundWrapper>
      <ContentWrapper>
        <Image src={Image404} alt="404" />
        <Heading as="h2" content="Something Went Wrong" />
        <TextLink link="/" content="Go Back" />
      </ContentWrapper>
    </NotFoundWrapper>
  );
};
