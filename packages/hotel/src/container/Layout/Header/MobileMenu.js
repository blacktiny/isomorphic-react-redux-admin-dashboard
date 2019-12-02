import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@iso/ui/Antd/Menu/Menu';
import { AuthContext } from '../../../context/AuthProvider';
import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from '../../../settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={HOME_PAGE}>
          Hotels
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={LISTING_POSTS_PAGE}>Listing</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={PRICING_PLAN_PAGE}>Pricing</NavLink>
      </Menu.Item>
      {loggedIn && (
        <Menu.Item key="3">
          <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
        </Menu.Item>
      )}
      {loggedIn && (
        <Menu.Item key="4">
          <button onClick={logOut}>Log Out</button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MobileMenu;
