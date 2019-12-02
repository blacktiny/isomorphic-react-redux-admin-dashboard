import React from 'react';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

import Image from '@iso/assets/images/user3.png';

const demoMassage = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

export default function TopbarMessage() {
  const [visible, setVisibility] = React.useState(false);
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="topbarMessage withImg">
      <div className="isoDropdownHeader">
        <h3>Messages</h3>
      </div>
      <div className="isoDropdownBody">
        {demoMassage.map(massage => (
          <a className="isoDropdownListItem" key={massage.id}>
            <div className="isoImgWrapper">
              <img alt="#" src={Image} />
            </div>

            <div className="isoListContent">
              <div className="isoListHead">
                <h5>{massage.name}</h5>
                <span className="isoDate">{massage.time}</span>
              </div>
              <p>{massage.massage}</p>
            </div>
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
          className="ion-chatbubbles"
          style={{ color: customizedTheme.textColor }}
        />
        <span>{demoMassage.length}</span>
      </div>
    </Popover>
  );
}
