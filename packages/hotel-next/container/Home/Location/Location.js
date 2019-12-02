import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from '@iso/ui/UI/Container/Container';
import Heading from '@iso/ui/Heading/Heading';
import SectionTitle from '@hotel/components/SectionTitle/SectionTitle';
import Loader from '@hotel/components/Loader/Loader';
import ImageCard from '@hotel/components/ImageCard/ImageCardNext';
import { LISTING_POSTS_PAGE } from '../../../settings/constant';
import LocationWrapper, { CarouselSection } from './Location.style';

const LocationGrid = ({ data, deviceType }) => {
  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="Explore Destinations" />}
          link={
            <Link href={`${LISTING_POSTS_PAGE}`}>
              <a>Show all</a>
            </Link>
          }
        />

        <CarouselSection>
          {data.length !== 0 ? (
            <Carousel
              ssr
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 2,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
                },
              }}
              deviceType={deviceType}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
            >
              {data.map((post, index) => (
                <ImageCard
                  key={index}
                  imageSrc={post.locationImage.url}
                  title={post.city}
                  meta={`${post.numberOfPost} Hotels`}
                  link={LISTING_POSTS_PAGE}
                />
              ))}
            </Carousel>
          ) : (
            <Loader />
          )}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default LocationGrid;
