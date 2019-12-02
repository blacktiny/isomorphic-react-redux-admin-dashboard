import React, { useContext, Fragment } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import Menu from '@iso/ui/Antd/Menu/Menu';
import Popover from '@iso/ui/Antd/Popover/Popover';
import Container from '@iso/ui/UI/Container/Container';
import Image from '@iso/ui/Image/Image';
import Heading from '@iso/ui/Heading/Heading';
import Text from '@iso/ui/Text/Text';
import { ProfilePicLoader } from '@iso/ui/ContentLoader/ContentLoader';
import Loader from '@hotel/components/Loader/Loader';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider';
import AgentItemLists from './AgentItemLists';
import AgentFavItemLists from './AgentFavItemLists';
import AgentContact from './AgentContact';
import useDataApi from '@iso/lib/hooks/useDataApi';
import {
  ADD_HOTEL_PAGE,
  AGENT_PROFILE_FAVOURITE,
  AGENT_PROFILE_CONTACT,
} from '../../../settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  SocialAccount,
  NavigationArea,
} from './AgentDetails.style';

const ProfileNavigation = props => {
  const { match, className } = props;
  const { loggedIn } = useContext(AuthContext);
  return (
    <NavigationArea>
      <Menu className={className}>
        <Menu.Item key="0">
          <NavLink exact to={`${match.url}`}>
            Listing
          </NavLink>
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink to={`${match.url}${AGENT_PROFILE_FAVOURITE}`}>
            Favourite
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={`${match.url}${AGENT_PROFILE_CONTACT}`}>Contact</NavLink>
        </Menu.Item>
      </Menu>

      {loggedIn && (
        <Link className="add_card" to={ADD_HOTEL_PAGE}>
          <IoIosAdd /> Add Hotel
        </Link>
      )}
    </NavigationArea>
  );
};

const ProfileRoute = props => {
  const { match } = props;
  return (
    <Container fluid={true}>
      <Route exact path={`${match.path}`} component={AgentItemLists} />
      <Route
        path={`${match.path}${AGENT_PROFILE_FAVOURITE}`}
        component={AgentFavItemLists}
      />
      <Route
        path={`${match.path}${AGENT_PROFILE_CONTACT}`}
        component={AgentContact}
      />
    </Container>
  );
};

const AgentProfileInfo = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const {
    first_name,
    last_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = data[0];

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
      <AuthProvider>
        <AgentProfileInfo />
        <Fragment>
          <ProfileNavigation {...props} />
          <ProfileRoute {...props} />
        </Fragment>
      </AuthProvider>
    </AgentDetailsPage>
  );
}
