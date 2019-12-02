import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ActiveLink from '../../../helpers/activeLink';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import Menu from '@iso/ui/Antd/Menu/Menu';
import Avatar from '@iso/ui/Antd/Avatar/Avatar';
import Container from '@iso/ui/UI/Container/Container.style';
import { AGENT_PROFILE_PAGE } from '../../../settings/constant';
import AccountSettingWrapper, {
  AccountSidebar,
  AgentAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  AgentName,
  FromWrapper,
} from './AccountSettings.style';

const AgentCreateOrUpdateForm = dynamic(() =>
  import('./AgentCreateOrUpdateForm')
);
const AgentPictureChangeForm = dynamic(() =>
  import('./AgentPictureChangeForm')
);
const ChangePassWord = dynamic(() => import('./ChangePassWordForm'));

export default function AgentAccountSettingsPage(props) {
  const { processedData } = props;
  const [currentRoute, setCurrentRoute] = useState('edit-profile');

  const profileData = processedData ? processedData[0] : '';
  const firstName = profileData ? profileData.first_name : '';
  const lastName = profileData ? profileData.last_name : '';
  const profilePic = profileData ? profileData.profile_pic.url : '';

  return (
    <AccountSettingWrapper>
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col md={9} lg={6}>
            <AccountSidebar>
              <AgentAvatar>
                <Avatar src={profilePic} alt="Profile Picture" />
                <ContentWrapper>
                  <AgentName>
                    {firstName} {lastName}
                  </AgentName>
                  <ActiveLink href={`${AGENT_PROFILE_PAGE}`}>
                    View profile
                  </ActiveLink>
                </ContentWrapper>
              </AgentAvatar>
              <>
                <SidebarMenuWrapper>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                  >
                    <Menu.Item key="1">
                      <a onClick={() => setCurrentRoute('edit-profile')}>
                        Edit Profile
                      </a>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <a onClick={() => setCurrentRoute('change-photo')}>
                        Change Photos
                      </a>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <a onClick={() => setCurrentRoute('change-password')}>
                        Change Password
                      </a>
                    </Menu.Item>
                  </Menu>
                </SidebarMenuWrapper>
              </>
            </AccountSidebar>
          </Col>
          <Col md={15} lg={18}>
            <FromWrapper>
              {currentRoute === 'edit-profile' ? (
                <AgentCreateOrUpdateForm />
              ) : (
                ''
              )}
              {currentRoute === 'change-photo' ? (
                <AgentPictureChangeForm />
              ) : (
                ''
              )}
              {currentRoute === 'change-password' ? <ChangePassWord /> : ''}
            </FromWrapper>
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
