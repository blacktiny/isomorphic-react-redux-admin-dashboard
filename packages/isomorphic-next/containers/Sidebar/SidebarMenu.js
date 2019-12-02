import React from 'react';
import Link from 'next/link';
import Menu from '@iso/components/uielements/menu';
import siteConfig from '@iso/config/site.config';
import IntlMessages from '@iso/components/utility/intlMessages';

const SubMenu = Menu.SubMenu;

export default function SidebarMenu({
  item,
  submenuStyle,
  submenuColor,
  ...rest
}) {
  const { key, label, leftIcon, children } = item;

  const url = siteConfig.dashboard;

  if (children) {
    return (
      <SubMenu
        key={key}
        title={
          <span className="isoMenuHolder" style={submenuColor}>
            <i className={leftIcon} />
            <span className="nav-text">
              <IntlMessages id={label} />
            </span>
          </span>
        }
        {...rest}
      >
        {children.map(({ key, label, withoutDashboard }) => {
          const linkTo = withoutDashboard ? `/${key}` : `${url}/${key}`;
          return (
            <Menu.Item style={submenuStyle} key={key}>
              <Link href={linkTo}>
                <a className="isoMenuHolder" style={submenuColor}>
                  <span className="nav-text">
                    <IntlMessages id={label} />
                  </span>
                </a>
              </Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={key} {...rest}>
      <Link href={`${url}/${key}`}>
        <a className="isoMenuHolder" style={submenuColor}>
          <i className={leftIcon} />
          <span className="nav-text">
            <IntlMessages id={label} />
          </span>
        </a>
      </Link>
    </Menu.Item>
  );
}
