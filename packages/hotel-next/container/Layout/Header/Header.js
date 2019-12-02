import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import { IoIosClose } from 'react-icons/io';
import Logo from '@iso/ui/Logo/Logo';
import Text from '@iso/ui/Text/Text';
import Button from '@iso/ui/Antd/Button/Button';
import Drawer from '@iso/ui/Antd/Drawer/Drawer';
import Navbar from '@hotel/components/Navbar/Navbar';
import { LayoutContext } from '../../../context/LayoutProvider';
import { AGENT_PROFILE_PAGE } from '../../../settings/constant';

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
const AuthMenu = dynamic(() => import('./AuthMenu'));
const MainMenu = dynamic(() => import('./MainMenu'));
const MobileMenu = dynamic(() => import('./MobileMenu'));
const ProfileMenu = dynamic(() => import('./ProfileMenu'));
const NavbarSearch = dynamic(() => import('./NavbarSearch'));
const Header = ({ router, user, isLoggedIn }) => {
  const [{ searchVisibility }] = useContext(LayoutContext);
  // auth context

  // sidebar and responsive control state
  const [state, setState] = useState(false);

  // sidebar handler function
  const sidebarHandler = () => {
    setState(state => !state);
  };

  // check header type
  const headerType = router.pathname === '/' ? 'transparent' : 'default';
  const AvatarImg = user ? user.avatar : '/static/placeholder/profilepic.png';

  return (
    <HeaderWrapper>
      <Sticky top={0} innerZ={1001} activeClass="isHeaderSticky">
        <Navbar
          logo={
            <Link href="/">
              <a>
                <Logo src={DemoLogo} title="hotel" />
              </a>
            </Link>
          }
          navMenu={<MainMenu />}
          authMenu={<AuthMenu />}
          isLogin={isLoggedIn}
          avatar={<Logo src={AvatarImg} title="hotel" />}
          profileMenu={
            <ProfileMenu avatar={<Logo src={AvatarImg} title="hotel" />} />
          }
          headerType={headerType}
          searchComponent={<NavbarSearch />}
          location={router}
          searchVisibility={searchVisibility}
        />
        <MobileNavbar className={headerType}>
          <LogoArea>
            <a>
              <Logo src={DemoLogo} title="hotel" />
            </a>
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
            {isLoggedIn ? (
              <AvatarWrapper>
                <AvatarImage>
                  <Logo src={AvatarImg} title="hotel" />
                </AvatarImage>
                <AvatarInfo>
                  <Text as="h3" content="Nova Scotia" />
                  <Link href={AGENT_PROFILE_PAGE}>
                    <a>View Profile</a>
                  </Link>
                </AvatarInfo>
              </AvatarWrapper>
            ) : (
              <AuthMenu className="auth-menu" />
            )}
            <MobileMenu className="main-menu" />
          </Drawer>
        </MobileNavbar>
      </Sticky>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
