import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';
import Menu from '@iso/ui/Antd/Menu/Menu';
import Popover from '@iso/ui/Antd/Popover/Popover';
import Container from '@iso/ui/UI/Container/Container';
import Image from '@iso/ui/Image/Image';
import Heading from '@iso/ui/Heading/Heading';
import Text from '@iso/ui/Text/Text';
import { ProfilePicLoader } from '@iso/ui/ContentLoader/ContentLoader';
import Loader from '@hotel/components/Loader/Loader';
import { ADD_HOTEL_PAGE } from '../../../settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  SocialAccount,
  NavigationArea,
} from './AgentDetails.style';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';

const AgentFavItemLists = dynamic(() => import('./AgentFavItemLists'));
const AgentContact = dynamic(() => import('./AgentContact'));
const AgentItemLists = dynamic(() => import('./AgentItemLists'));

const ProfileNavigation = props => {
  const [component, setComponent] = useState('allListing');
  const { className, isLoggedIn } = props;

  return (
    <>
      <NavigationArea>
        <Menu className={className}>
          <Menu.Item key="0">
            <a
              className={component === 'allListing' ? 'active' : ''}
              onClick={() => setComponent('allListing')}
            >
              Listings
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a
              className={component === 'favouriteListing' ? 'active' : ''}
              onClick={() => setComponent('favouriteListing')}
            >
              Favourites
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a
              className={component === 'contact' ? 'active' : ''}
              onClick={() => setComponent('contact')}
            >
              Contact
            </a>
          </Menu.Item>
        </Menu>

        {isLoggedIn && (
          <Link href={`${ADD_HOTEL_PAGE}`}>
            <a className="add_card">
              <IoIosAdd /> Add Hotel
            </a>
          </Link>
        )}
      </NavigationArea>
      <Container fluid={true}>
        {component === 'allListing' && <AgentItemLists {...props} />}
        {component === 'favouriteListing' && <AgentFavItemLists {...props} />}
        {component === 'contact' && <AgentContact {...props} />}
      </Container>
    </>
  );
};

const AgentProfileInfo = props => {
  const { processedData, loading } = props;
  if (isEmpty(processedData) || loading) return <Loader />;
  const {
    first_name,
    last_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = processedData[0];

  const username = `${first_name} ${last_name}`;

  return (
    <Fragment>
      <BannerSection
        style={{
          background: `url(${cover_pic.url}) center center / cover no-repeat`,
        }}
      />
      <UserInfoArea>
        <Container fluid={true}>
          <ProfileImage>
            {profile_pic ? (
              <Image src={profile_pic.url} alt="Profile Pic" />
            ) : (
              <ProfilePicLoader />
            )}
          </ProfileImage>
          <ProfileInformationArea>
            <ProfileInformation>
              <Heading content={username} />
              <Text content={content} />
            </ProfileInformation>
            <SocialAccount>
              <Popover content="Twitter">
                <a
                  href={social_profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="twitter" />
                </a>
              </Popover>
              <Popover content="Facebook">
                <a
                  href={social_profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="facebook" />
                </a>
              </Popover>
              <Popover content="Instagram">
                <a
                  href={social_profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="instagram" />
                </a>
              </Popover>
            </SocialAccount>
          </ProfileInformationArea>
        </Container>
      </UserInfoArea>
    </Fragment>
  );
};

export default function AgentDetailsViewPage(props) {
  return (
    <AgentDetailsPage>
      {/* <AuthProvider> */}
      <AgentProfileInfo {...props} />
      <ProfileNavigation {...props} />
      {/* </AuthProvider> */}
    </AgentDetailsPage>
  );
}
