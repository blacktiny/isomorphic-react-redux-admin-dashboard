import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper, {
  LogoArea,
  MenuArea,
  AvatarWrapper,
  AuthWrapper,
  MenuWrapper,
} from './Navbar.style';

const Navbar = ({
  className,
  logo,
  avatar,
  navMenu,
  authMenu,
  profileMenu,
  isLogin,
  headerType,
  searchComponent,
  location,
  searchVisibility,
}) => {
  // Add all classs to an array
  const addAllClasses = ['navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // headerType prop checking
  if (headerType) {
    addAllClasses.push(`is_${headerType}`);
  }

  return (
    <NavbarWrapper className={addAllClasses.join(' ')}>
      {logo || searchVisibility ? (
        <LogoArea>
          {logo}
          {!searchVisibility && location.pathname === '/'
            ? null
            : searchComponent}
        </LogoArea>
      ) : null}
      <MenuArea>
        {navMenu && <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>}
        {isLogin && avatar ? (
          <AvatarWrapper>{profileMenu}</AvatarWrapper>
        ) : (
          authMenu && (
            <AuthWrapper className="auth_menu">{authMenu}</AuthWrapper>
          )
        )}
      </MenuArea>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  navMenu: PropTypes.element,
  avatar: PropTypes.element,
  authMenu: PropTypes.element,
  isLogin: PropTypes.bool,
  headerType: PropTypes.oneOf(['transparent', 'default']),
};

export default Navbar;
