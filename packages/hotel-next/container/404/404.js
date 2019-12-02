import React from 'react';
import Link from 'next/link';
import Image from '@iso/ui/Image/Image';
import Heading from '@iso/ui/Heading/Heading';
import NotFoundWrapper, { ContentWrapper } from './404.style';
import Image404 from '@hotel/assets/images/404@2x.png';

const ErrorPage = props => {
  const { errorCode } = props;
  let content = 'An unexpected error has occurred';
  if (errorCode === 400) {
    content = `${errorCode} : Bad Request`;
  } else if (errorCode === 404) {
    content = `${errorCode} : This page could not be found`;
  } else if (errorCode === 405) {
    content = `${errorCode} : Method Not Allowed`;
  } else if (errorCode === 500) {
    content = `${errorCode} : Internal Server Error`;
  }

  return (
    <NotFoundWrapper>
      <ContentWrapper>
        <Image src={Image404} alt={String(errorCode)} />
        <Heading as="h2" content={content} />
        <Link href="/">
          <a>Go Back to Home</a>
        </Link>
      </ContentWrapper>
    </NotFoundWrapper>
  );
};

export default ErrorPage;
