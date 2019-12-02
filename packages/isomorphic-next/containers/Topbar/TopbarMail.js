import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Popover from '../uielements/popover';
import TopbarDropdownWrapper from './topbarDropdown.style';

const demoMails = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

export default function TopbarMail({ url }) {
  const [visible, setVisibility] = React.useState(false);
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="topbarMail">
      <div className="isoDropdownHeader">
        <h3>Email</h3>
      </div>
      <div className="isoDropdownBody">
        {demoMails.map(mail => (
          <Link href={`${url}/mailbox`} key={mail.id}>
            <div className="isoDropdownListItem">
              <div className="isoListHead">
                <h5>{mail.name}</h5>
                <span className="isoDate">{mail.time}</span>
              </div>
              <p>{mail.desc}</p>
            </div>
          </Link>
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
        <i className="ion-email" style={{ color: customizedTheme.textColor }} />
        <span>{demoMails.length}</span>
      </div>
    </Popover>
  );
}
