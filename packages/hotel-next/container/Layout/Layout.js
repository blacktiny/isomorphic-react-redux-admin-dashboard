import React from 'react';
import { withRouter } from 'next/router';
import LayoutWrapper from '@iso/ui/Antd/Layout/Layout';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LayoutProvider from '../../context/LayoutProvider';
import {
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
  PRICING_PLAN_PAGE,
  SINGLE_POST_PAGE,
  PRIVACY_PAGE,
  CHANGE_PASSWORD_PAGE,
  FORGET_PASSWORD_PAGE,
  AGENT_IMAGE_EDIT_PAGE,
  AGENT_PASSWORD_CHANGE_PAGE,
} from '../../settings/constant';

const { Content } = LayoutWrapper;

const Layout = ({ children, router, user, isLoggedIn }) => {
  return (
    <LayoutWrapper>
      <LayoutProvider>
        {router.pathname === LOGIN_PAGE ||
        router.pathname === CHANGE_PASSWORD_PAGE ||
        router.pathname === FORGET_PASSWORD_PAGE ||
        router.pathname === REGISTRATION_PAGE ? (
          <Content>{children}</Content>
        ) : (
          <>
            <Header user={user} isLoggedIn={isLoggedIn} />
            <Content>{children}</Content>
            {router.pathname === LISTING_POSTS_PAGE ||
            router.pathname === PRICING_PLAN_PAGE ||
            router.pathname === ADD_HOTEL_PAGE ||
            router.pathname === AGENT_PROFILE_PAGE ||
            router.pathname === CHANGE_PASSWORD_PAGE ||
            router.pathname === FORGET_PASSWORD_PAGE ||
            router.pathname === PRIVACY_PAGE ||
            router.pathname ===
              `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_IMAGE_EDIT_PAGE}` ||
            router.pathname ===
              `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_PASSWORD_CHANGE_PAGE}` ||
            router.pathname === AGENT_ACCOUNT_SETTINGS_PAGE ? (
              <div style={{ height: '33px' }} />
            ) : (
              <Footer path={router.pathname === SINGLE_POST_PAGE} />
            )}
          </>
        )}
      </LayoutProvider>
    </LayoutWrapper>
  );
};

export default withRouter(Layout);
