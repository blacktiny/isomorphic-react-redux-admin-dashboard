import React from 'react';
import Head from 'next/head';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import PageHeader from '@iso/components/utility/pageHeader';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import Box from '@iso/components/utility/box';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
  SwiperBasic,
  SwiperWithCustomNav,
  SwiperWithBasicNav,
  SwiperPagination,
  SwiperProgress,
  SwiperFractionPagination,
  SwiperNumberedPagination,
  SwiperScroll,
  SwiperVerticle,
  SwiperMultiple,
  SwiperFreeMode,
  SwiperMultipleItem,
  SwiperCursor,
  SwiperInfiniteLoop,
  SwiperMouseWheel,
  SwiperAutoPlay,
  SwiperLazyLoad,
  SwiperWithCustomScroll,
} from '@iso/ui/SwiperSlider';
import basicStyle from '@iso/assets/styles/constants';

// data
import {
  basicSlider,
  bulletSlider,
  progressSlider,
  fractionSlider,
  numberedSlider,
  scrollSlider,
  verticleSlider,
  gridSlider,
  freeModelider,
  multipleRowslider,
  infiniteSlider,
  wheelSlider,
  autoSlider,
  lazySlider,
  customSlider,
  customNavSlider,
  customScrollSlider,
} from '@iso/containers/UIElements/SwiperSlider/slider.data';
import PageWrapper from '@iso/containers/UIElements/SwiperSlider/SwiperSlider.styles';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const SwiperSlider = () => {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <DashboardLayout>
      <PageWrapper>
        <LayoutWrapper>
          <Head>
            <title>Swiper slider</title>
          </Head>
          <PageHeader>
            <IntlMessages id="sidebar.swiperSlider" />
          </PageHeader>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.basic.basicTitle" />}>
                <ContentHolder>
                  <SwiperBasic>
                    {basicSlider.map(item => (
                      <img
                        key={`basic-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperBasic>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.bullet.bulletTitle" />}>
                <ContentHolder>
                  <SwiperPagination>
                    {bulletSlider.map(item => (
                      <img
                        key={`bullet-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperPagination>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.progress.progressTitle" />}>
                <ContentHolder>
                  <SwiperProgress>
                    {progressSlider.map(item => (
                      <img
                        key={`progress-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperProgress>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.fraction.fractionTitle" />}>
                <ContentHolder>
                  <SwiperFractionPagination>
                    {fractionSlider.map(item => (
                      <img
                        key={`fraction-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperFractionPagination>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.numbered.numberedTitle" />}>
                <ContentHolder>
                  <SwiperNumberedPagination>
                    {numberedSlider.map(item => (
                      <img
                        key={`numbered-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperNumberedPagination>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.scroll.scrollTitle" />}>
                <ContentHolder>
                  <SwiperScroll>
                    {scrollSlider.map(item => (
                      <img
                        key={`scroll-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperScroll>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.verticle.verticleTitle" />}>
                <ContentHolder>
                  <SwiperVerticle>
                    {verticleSlider.map(item => (
                      <img
                        key={`scroll-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperVerticle>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box
                title={<IntlMessages id="Swiper.multiple.multipleGridTitle" />}
              >
                <ContentHolder>
                  <SwiperMultiple>
                    {gridSlider.map(item => (
                      <img
                        key={`grid-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperMultiple>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.free.freeTitle" />}>
                <ContentHolder>
                  <SwiperFreeMode>
                    {freeModelider.map(item => (
                      <img
                        key={`freeMode-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperFreeMode>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.multirow.multirowTitle" />}>
                <ContentHolder>
                  <SwiperMultipleItem>
                    {multipleRowslider.map(item => (
                      <img
                        key={`multiRow-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperMultipleItem>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.cursor.cursorTitle" />}>
                <ContentHolder>
                  <SwiperCursor>
                    {gridSlider.map(item => (
                      <img
                        key={`cursor-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperCursor>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.loop.infiniteTitle" />}>
                <ContentHolder>
                  <SwiperInfiniteLoop>
                    {infiniteSlider.map(item => (
                      <img
                        key={`infinite-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperInfiniteLoop>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.wheel.wheelTitle" />}>
                <ContentHolder>
                  <SwiperMouseWheel>
                    {wheelSlider.map(item => (
                      <img
                        key={`wheel-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperMouseWheel>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.auto.autoPlayTitle" />}>
                <ContentHolder>
                  <SwiperAutoPlay>
                    {autoSlider.map(item => (
                      <img
                        key={`auto-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperAutoPlay>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.lazy.lazyTitle" />}>
                <ContentHolder>
                  <SwiperLazyLoad>
                    {lazySlider.map(item => (
                      <div
                        className="lazy-item"
                        key={`lazy-slider--key${item.id}`}
                      >
                        <img src={item.thumb_url} alt={item.title} />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                      </div>
                    ))}
                  </SwiperLazyLoad>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.custom.basicNavTitle" />}>
                <ContentHolder>
                  <SwiperWithBasicNav>
                    {customSlider.map(item => (
                      <img
                        key={`custom-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperWithBasicNav>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box title={<IntlMessages id="Swiper.custom.buttonNavTitle" />}>
                <ContentHolder>
                  <SwiperWithCustomNav>
                    {customNavSlider.map(item => (
                      <img
                        key={`customnav-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperWithCustomNav>
                </ContentHolder>
              </Box>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box
                title={<IntlMessages id="Swiper.custom.customScrollTitle" />}
              >
                <ContentHolder>
                  <SwiperWithCustomScroll>
                    {customScrollSlider.map(item => (
                      <img
                        key={`customScroll-slider--key${item.id}`}
                        src={item.thumb_url}
                        alt={item.title}
                      />
                    ))}
                  </SwiperWithCustomScroll>
                </ContentHolder>
              </Box>
            </Col>
          </Row>
        </LayoutWrapper>
      </PageWrapper>
    </DashboardLayout>
  );
};

export default withAuthSync(SwiperSlider);
