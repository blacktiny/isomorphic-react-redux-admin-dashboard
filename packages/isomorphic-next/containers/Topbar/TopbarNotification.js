import React from 'react';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

const demoNotifications = [
  {
    id: 1,
    name: 'David Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

export default function TopbarNotification() {
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  const [visible, setVisibility] = React.useState(false);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }
  const content = (
    <TopbarDropdownWrapper className="topbarNotification">
      <div className="isoDropdownHeader">
        <h3>Notifications</h3>
      </div>
      <div className="isoDropdownBody">
        {demoNotifications.map(notification => (
          <a className="isoDropdownListItem" key={notification.id}>
            <h5>{notification.name}</h5>
            <p>{notification.notification}</p>
          </a>
        ))}
      </div>
      <a className="isoViewAllBtn">View All</a>
    </TopbarDropdownWrapper>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <div className="isoIconWrapper">
        <i
          className="ion-android-notifications"
          style={{ color: customizedTheme.textColor }}
        />
        <span>{demoNotifications.length}</span>
      </div>
    </Popover>
  );
}
