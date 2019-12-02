import React, { useContext, useState, useRef } from 'react';
import Menu from '@iso/ui/Antd/Menu/Menu';
import useOnClickOutside from '@iso/lib/hooks/useOnClickOutside';
import ActiveLink from '../../../helpers/activeLink';
import { AuthContext } from '../../../context/AuthProvider';
import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
} from '../../../settings/constant';

const ProfileMenu = ({ avatar }) => {
  const { logOut } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>

      <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>
        <Menu.Item onClick={closeDropdown} key="0">
          <ActiveLink href={AGENT_PROFILE_PAGE}>View Profile</ActiveLink>
        </Menu.Item>
        <Menu.Item onClick={closeDropdown} key="1">
          <ActiveLink href={ADD_HOTEL_PAGE}>Add Hotel</ActiveLink>
        </Menu.Item>
        <Menu.Item onClick={closeDropdown} key="2">
          <ActiveLink href={AGENT_ACCOUNT_SETTINGS_PAGE}>
            Account Settings
          </ActiveLink>
        </Menu.Item>
        <Menu.Item key="3">
          <button onClick={logOut}>Log Out</button>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
