import React, { useState, useContext } from 'react';
import Sticky from 'react-stickynode';
import { Link, withRouter } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import Button from '@iso/ui/Antd/Button/Button';
import Drawer from '@iso/ui/Antd/Drawer/Drawer';
import Logo from '@iso/ui/Logo/Logo';
import Text from '@iso/ui/Text/Text';
import TextLink from '@iso/ui/TextLink/TextLink';
import Navbar from '@hotel/components/Navbar/Navbar';
import { AuthContext } from '../../../context/AuthProvider';
import { LayoutContext } from '../../../context/LayoutProvider';
import useWindowSize from '@iso/lib/hooks/useWindowSize';
import { AGENT_PROFILE_PAGE } from '../../../settings/constant';
import AuthMenu from './AuthMenu';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import ProfileMenu from './ProfileMenu';
import NavbarSearch from './NavbarSearch';
import HeaderWrapper, {
  MobileNavbar,
  CloseDrawer,
  AvatarWrapper,
  AvatarImage,
  AvatarInfo,
  LogoArea,
} from './Header.style';

// Dummy images
import DemoLogo from '@hotel/assets/images/logo-alt.svg';
const AvatarImg = `http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png`;

export default withRouter(function Header({ location }) {
  const [{ searchVisibility }] = useContext(LayoutContext);
  // auth context
  const { loggedIn } = useContext(AuthContext);

  // sidebar and responsive control state
  const [state, setState] = useState(false);

  // sidebar handler function
  const sidebarHandler = () => {
    setState(!state);
  };

  // useWindowSize hook
  const { width } = useWindowSize();

  // check header type
  const headerType = location.pathname === '/' ? 'transparent' : 'default';

  return (
    <HeaderWrapper>
      <Sticky top={0} innerZ={10001} activeClass="isHeaderSticky">
        {width > 991 ? (
          <Navbar
            logo={
              <Link to="/">
                <Logo src={DemoLogo} title="hotel" />
              </Link>
            }
            navMenu={<MainMenu />}
            authMenu={<AuthMenu />}
            isLogin={loggedIn}
            avatar={<Logo src={AvatarImg} title="hotel" />}
            profileMenu={
              <ProfileMenu avatar={<Logo src={AvatarImg} title="hotel" />} />
            }
            headerType={headerType}
            searchComponent={<NavbarSearch />}
            location={location}
            searchVisibility={searchVisibility}
          />
        ) : (
          <MobileNavbar className={headerType}>
            <LogoArea>
              <Link to="/">
                <Logo src={DemoLogo} title="hotel" />
              </Link>
              <NavbarSearch />
            </LogoArea>
            <Button
              className={`hamburg-btn ${state ? 'active' : ''}`}
              onClick={sidebarHandler}
            >
              <span />
              <span />
              <span />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={sidebarHandler}
              width="285px"
              className="mobile-header"
              visible={state}
            >
              <CloseDrawer>
                <button onClick={sidebarHandler}>
                  <IoIosClose />
                </button>
              </CloseDrawer>
              {loggedIn ? (
                <AvatarWrapper>
                  <AvatarImage>
                    <Logo src={AvatarImg} title="hotel" />
                  </AvatarImage>
                  <AvatarInfo>
                    <Text as="h3" content="Nova Scotia" />
                    <TextLink
                      link={AGENT_PROFILE_PAGE}
                      content="View Profile"
                    />
                  </AvatarInfo>
                </AvatarWrapper>
              ) : (
                <AuthMenu className="auth-menu" />
              )}
              <MobileMenu className="main-menu" />
            </Drawer>
          </MobileNavbar>
        )}
      </Sticky>
    </HeaderWrapper>
  );
});
