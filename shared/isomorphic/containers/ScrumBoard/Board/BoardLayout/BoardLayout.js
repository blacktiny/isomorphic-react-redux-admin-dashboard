import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon, Popover, Checkbox, Tooltip } from 'antd';
import SearchInput from '@iso/components/ScrumBoard/SearchInput/SearchInput';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import modalActions from '@iso/redux/modal/actions';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import { variables } from '@iso/assets/styles/variables';
import AvatarIcon from '@iso/assets/images/icon/08-icon.svg';
import PlusIcon from '@iso/assets/images/icon/24.svg';
import { Scrollbars } from 'react-custom-scrollbars';

import {
  ProjectInfoCard,
  Avatar,
  Category,
  Title,
  InfoWrapper,
  AssigneeWrapper,
  Assignee,
  DropdownHeader,
  ViewAll,
  CreateProject,
  Filters,
  Header,
  HeaderSecondary,
} from './BoardLayout.style';

const { Content } = Layout;

const LABELS = [
  { label: 'success', value: 'success' },
  { label: 'error', value: 'error' },
  { label: 'processing', value: 'processing' },
  { label: 'warning', value: 'warning' },
  { label: 'default', value: 'default' },
];

const ASSIGNEES = [
  { label: 'Mark', value: 'Mark' },
  { label: 'Bob', value: 'Bob' },
  { label: 'Anthony', value: 'Anthony' },
];

const BoardLayout = ({
  children,
  setSearchText,
  boards,
  currentBoard = '',
}) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <DropdownHeader>Projects</DropdownHeader>
      </Menu.Item>

      {Object.values(boards).map(board => (
        <Menu.Item key={board.id}>
          <Link to={`/dashboard/scrum-board/project/${board.id}`}>
            <ProjectInfoCard>
              <Avatar src={AvatarIcon} />
              <InfoWrapper>
                <Title>{board.title}</Title>
                <Category>{board.category}</Category>
              </InfoWrapper>
            </ProjectInfoCard>
          </Link>
        </Menu.Item>
      ))}

      <Menu.Item>
        <ViewAll>
          <Link to="/dashboard/scrum-board">View All Projects</Link>
        </ViewAll>
      </Menu.Item>
      <Menu.Item>
        <CreateProject>
          <Link to="/dashboard/scrum-board/new">Create New Project</Link>
        </CreateProject>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout
      style={{
        backgroundColor: `${variables.WHITE_COLOR}`,
      }}
    >
      <Header>
        <Dropdown overlay={menu} overlayClassName="project-menu">
          <div>
            <ProjectInfoCard>
              <Avatar src={AvatarIcon} />
              <InfoWrapper>
                <Title>{currentBoard.title}</Title>
                <Category>{currentBoard.category}</Category>
              </InfoWrapper>
              <Icon type="down" style={{ marginLeft: 16 }} />
            </ProjectInfoCard>
          </div>
        </Dropdown>

        <AssigneeWrapper>
          <Assignee>Assigned By: </Assignee>
          <Tooltip
            title="Please Implements Your Own Assigne Methods"
            placement="bottomRight"
          >
            <IconSvg src={PlusIcon} padding={8} radius={'10% 30% 25%'} mr={0} />
          </Tooltip>
        </AssigneeWrapper>
      </Header>

      <HeaderSecondary>
        <SearchInput onChange={value => setSearchText(value)} />

        <Filters>
          <Popover
            placement="bottom"
            overlayClassName="scrum-popover"
            content={
              <Checkbox.Group
                options={LABELS}
                onChange={value => setSearchText(...value)}
              />
            }
            trigger="click"
          >
            <div>
              Labels <Icon type="caret-down" />
            </div>
          </Popover>

          <Popover
            placement="bottom"
            overlayClassName="scrum-popover"
            content={
              <Checkbox.Group
                options={ASSIGNEES}
                onChange={value => setSearchText(...value)}
              />
            }
            trigger="click"
          >
            <div>
              Assignee
              <Icon type="caret-down" />
            </div>
          </Popover>
        </Filters>
      </HeaderSecondary>

      <Content
        style={{
          padding: '0 24px',
          width: '100%',
        }}
      >
        <Scrollbars
          style={{
            width: '100%',
            height: 'calc(100vh - 300px)',
          }}
          autoHide
        >
          {children}
        </Scrollbars>
      </Content>
    </Layout>
  );
};

export default connect(
  null,
  { ...modalActions, ...scrumBoardActions }
)(BoardLayout);
