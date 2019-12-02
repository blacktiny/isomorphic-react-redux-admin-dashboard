import React from 'react';
import { timeDifference } from '@iso/lib/helpers/utility';
import { tags, tagColor } from './MailTags.js';
import MailListWrapper from './MailList.style';
import { direction } from '@iso/lib/helpers/rtl';

export default function mailList(
  mails,
  selectMail,
  selectedMail,
  toggleListVisible
) {
  const renderSingleMail = (mail, key) => {
    const onClick = () => {
      selectMail(mail.id);
      if (toggleListVisible) {
        toggleListVisible();
      }
    };
    const isSelected = selectedMail === mail.id;
    const recpName = mail.name;
    const signature = {
      splitLet: recpName
        .match(/\b(\w)/g)
        .join('')
        .split('', 2),
    };
    const activeClass = isSelected ? 'activeMail' : '';
    const unreadClass = !mail.read ? 'unreadMail' : '';
    const tagOption = mail.tags
      ? tagColor[tags.findIndex(tags => tags === mail.tags)]
      : 'transparent';
    return (
      <div
        key={`list${key}`}
        onClick={onClick}
        className={`${activeClass} ${unreadClass} isoMailList`}
      >
        <span
          className="isoLabelIndicator"
          style={
            direction === 'rtl'
              ? { borderRightColor: tagOption }
              : { borderTopColor: tagOption }
          }
        />
        <div className="isoRecipentsImg">
          {mail.img ? (
            <img alt="#" src={mail.img} />
          ) : (
            <span>{signature.splitLet}</span>
          )}
        </div>

        <div className="isoMailInfo">
          <div className="infoHead">
            <p className="isoRecipents">{mail.name}</p>
            <span className="isoReceiveDate">{timeDifference(mail.date)}</span>
          </div>
          <p className="isoSubject">{mail.subject}</p>
        </div>
      </div>
    );
  };
  return (
    <MailListWrapper className="isoMailListWrapper">
      {mails.map((mail, index) => renderSingleMail(mail, index))}
    </MailListWrapper>
  );
}
