import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@iso/ui/Antd/Menu/Menu';

import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../../settings/constant';

const AuthMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to={LOGIN_PAGE}>Sign in</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={REGISTRATION_PAGE}>Sign up</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default AuthMenu;
