import React from 'react';
import { Icon, Row, Col } from 'antd';
import Menu from '@iso/components/uielements/menu';
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '@iso/components/uielements/dropdown';
import Buttons from '@iso/components/uielements/button';
import message from '@iso/components/uielements/message';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import { direction } from '@iso/lib/helpers/rtl';
const MenuDivider = Menu.Divider;
const DropdownButton = DropdownButtons;
const Button = Buttons;

export default function IsoDropDown() {
  const [visible, setVisibility] = React.useState(false);

  const handleButtonClick = e => {
    message.info('Click on left button.');
  };

  const handleMenuClickToLink = e => {
    message.info('Click on menu item.');
  };

  const handleMenuClick = e => {
    if (e.key === '3') {
      setVisibility(false);
    }
  };
  const handleVisibleChange = flag => {
    setVisibility(flag);
  };

  const { rowStyle, colStyle, gutter } = basicStyle;
  const demoStyle = {
    marginBottom: '8px',
    marginRight: '8px',
  };

  const menuHover = (
    <DropdownMenu>
      <MenuItem>
        <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
          1st menu item
        </a>
      </MenuItem>
      <MenuItem>
        <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
          2nd menu item
        </a>
      </MenuItem>
      <MenuItem>
        <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
          3d menu item
        </a>
      </MenuItem>
    </DropdownMenu>
  );
  const menuHoverDisable = (
    <DropdownMenu>
      <MenuItem key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
          1st menu item
        </a>
      </MenuItem>
      <MenuItem key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
          2nd menu item
        </a>
      </MenuItem>
      <MenuDivider />
      <MenuItem key="3" disabled>
        3d menu item（disabled）
      </MenuItem>
    </DropdownMenu>
  );
  const menuClicked = (
    <DropdownMenu onClick={handleMenuClickToLink}>
      <MenuItem key="1">1st menu item</MenuItem>
      <MenuItem key="2">2nd menu item</MenuItem>
      <MenuItem key="3">3d menu item</MenuItem>
    </DropdownMenu>
  );

  const menuSubmenu = (
    <DropdownMenu>
      <MenuItem>1st menu item</MenuItem>
      <MenuItem>2nd menu item</MenuItem>
      <SubMenu title="sub menu">
        <MenuItem>3d menu item</MenuItem>
        <MenuItem>4th menu item</MenuItem>
      </SubMenu>
    </DropdownMenu>
  );

  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="uiElements.dropdown.dropdown" />}
      </PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.dropdown.hoverDropdown" />}>
            <ContentHolder>
              <Dropdown overlay={menuHover}>
                <a className="ant-dropdown-link" href="# ">
                  {<IntlMessages id="uiElements.dropdown.hoverMe" />}{' '}
                  <Icon type="down" />
                </a>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.dropdown.hoverPlacement" />}>
            <ContentHolder>
              <Dropdown overlay={menuHover} placement="bottomLeft">
                <Button style={demoStyle}>bottomLeft</Button>
              </Dropdown>
              <Dropdown overlay={menuHover} placement="bottomCenter">
                <Button style={demoStyle}>bottomCenter</Button>
              </Dropdown>
              <Dropdown overlay={menuHover} placement="bottomRight">
                <Button style={demoStyle}>bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown overlay={menuHover} placement="topLeft">
                <Button style={demoStyle}>topLeft</Button>
              </Dropdown>
              <Dropdown overlay={menuHover} placement="topCenter">
                <Button style={demoStyle}>topCenter</Button>
              </Dropdown>
              <Dropdown overlay={menuHover} placement="topRight">
                <Button style={demoStyle}>topRight</Button>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>
      </Row>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.dropdown.hoverDisableLink" />}
          >
            <ContentHolder>
              <Dropdown overlay={menuHoverDisable}>
                <a className="ant-dropdown-link" href="# ">
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.dropdown.clickedDropdown" />}
          >
            <ContentHolder>
              <Dropdown overlay={menuHover} trigger={['click']}>
                <a className="ant-dropdown-link" href="# ">
                  Click me <Icon type="down" />
                </a>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>
      </Row>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.dropdown.buttonDropdown" />}>
            <ContentHolder>
              <DropdownButton onClick={handleButtonClick} overlay={menuClicked}>
                Dropdown
              </DropdownButton>
              <DropdownButton
                onClick={handleButtonClick}
                overlay={menuClicked}
                disabled
                style={{
                  margin: direction === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                }}
              >
                Dropdown
              </DropdownButton>
              <Dropdown overlay={menuClicked}>
                <Button
                  style={{
                    margin: direction === 'rtl' ? '0 8px 0 0' : '0 0 0 8px',
                  }}
                >
                  Button <Icon type="down" />
                </Button>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.dropdown.clickedDropdown" />}
          >
            <ContentHolder>
              <Dropdown overlay={menuSubmenu}>
                <a className="ant-dropdown-link" href="# ">
                  Cascading menu <Icon type="down" />
                </a>
              </Dropdown>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
