import { useState } from 'react';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';
import Sticky from 'react-stickynode';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Button from '@iso/ui/Antd/Button/Button';
import Container from '@iso/ui/UI/Container/Container';
import Loader from '@hotel/components/Loader/Loader';
import { getDeviceType } from '../../helpers/get_devide_type';
import GetAPIData, { ProcessAPIData } from '../../helpers/get_api_data';

import Description from '../../container/SinglePage/Description/Description';
import Amenities from '../../container/SinglePage/Amenities/Amenities';
import Location from '../../container/SinglePage/Location/Location';
import Review from '../../container/SinglePage/Review/Review';
import Reservation from '../../container/SinglePage/Reservation/Reservation';
import BottomReservation from '../../container/SinglePage/Reservation/BottomReservation';
import TopBar from '../../container/SinglePage/TopBar/TopBar';
import SinglePageWrapper, {
  PostImage,
} from '../../container/SinglePage/SinglePageView.style';
import PostImageGallery from '../../container/SinglePage/ImageGallery/ImageGallery';
export default function SinglePostPage({ processedData, deviceType, query }) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  if (isEmpty(processedData)) return <Loader />;
  const {
    reviews,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
    amenities,
    author,
  } = processedData[0];
  const headerTitle =
    query.slug
      .split('-')
      .join(' ')
      .charAt(0)
      .toUpperCase() +
    query.slug
      .split('-')
      .join(' ')
      .slice(1);

  return (
    <>
      <Head>
        <title>Hotel | {headerTitle}</title>
      </Head>
      <SinglePageWrapper>
        <PostImage>
          <Button
            type="primary"
            onClick={() => setIsModalShowing(true)}
            className="image_gallery_button"
          >
            View Photos
          </Button>
          <Modal
            visible={isModalShowing}
            onCancel={() => setIsModalShowing(false)}
            footer={null}
            width="100%"
            maskStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }}
            wrapClassName="image_gallery_modal"
            closable={false}
          >
            <>
              <PostImageGallery />
              <Button
                onClick={() => setIsModalShowing(false)}
                className="image_gallery_close"
              >
                <svg width="16.004" height="16" viewBox="0 0 16.004 16">
                  <path
                    id="_ionicons_svg_ios-close_2_"
                    d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                    transform="translate(-160.5 -160.55)"
                    fill="#909090"
                  />
                </svg>
              </Button>
            </>
          </Modal>
        </PostImage>

        <TopBar title={title} author={author} media={gallery} />

        <Container>
          <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
            <Col xl={16}>
              <Description
                content={content}
                title={title}
                location={location}
                rating={rating}
                ratingCount={ratingCount}
              />
              <Amenities amenities={amenities} />
              <Location location={processedData[0]} />
            </Col>
            <Col xl={8}>
              {deviceType === 'desktop' ? (
                <Sticky
                  innerZ={999}
                  activeClass="isSticky"
                  top={202}
                  bottomBoundary="#reviewSection"
                >
                  <Reservation />
                </Sticky>
              ) : (
                <BottomReservation
                  title={title}
                  price={price}
                  rating={rating}
                  ratingCount={ratingCount}
                />
              )}
            </Col>
          </Row>
          <Row gutter={30}>
            <Col xl={16}>
              <Review
                reviews={reviews}
                ratingCount={ratingCount}
                rating={rating}
              />
            </Col>
            <Col xl={8} />
          </Row>
        </Container>
      </SinglePageWrapper>
    </>
  );
}

SinglePostPage.getInitialProps = async ({ query, req }) => {
  const apiUrl = [
    {
      endpoint: 'hotel-single',
      name: 'hotelSingleData',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  const deviceType = getDeviceType(req);

  return { processedData, query, deviceType };
};
