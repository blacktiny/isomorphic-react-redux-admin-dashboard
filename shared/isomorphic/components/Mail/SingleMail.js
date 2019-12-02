import React from 'react';
import ComposeMail from './ComposeMail';
import { timeDifference } from '@iso/lib/helpers/utility';
import MailAction from './SingleMailActions';
import { tags, tagColor } from './MailTags.js';
import {
  SingleMailContents,
  SingleMailHeader,
  SingleMailInfo,
  SingleMailBody,
  SingleMailReply,
} from './SingleMail.style';

export default function singleMail(
  allMail,
  filterMails,
  index,
  replyMail,
  changeReplyMail,
  selectMail,
  toggleListVisible
) {
  const mail = allMail[index];
  const recpName = mail.name;
  const signature = {
    splitLet: recpName
      .match(/\b(\w)/g)
      .join('')
      .split('', 2),
  };

  const labelColor = mail.tags
    ? tagColor[tags.findIndex(tags => tags === mail.tags)]
    : '';

  return (
    <SingleMailContents className="isoSingleMailContents">
      <MailAction
        mail={mail}
        filterMails={filterMails}
        selectMail={selectMail}
        toggleListVisible={toggleListVisible}
      />
      <div className="isoSingleMail">
        <SingleMailHeader className="isoMailHeader">
          <h2>{mail.subject}</h2>
          <span className="label" style={{ backgroundColor: labelColor }}>
            {mail.tags ? mail.tags : mail.bucket}
          </span>
        </SingleMailHeader>

        <SingleMailInfo className="isoMailInfo">
          <div className="isoRecipentsImg">
            {mail.img ? (
              <img alt="#" src={mail.img} />
            ) : (
              <span>{signature.splitLet}</span>
            )}
          </div>
          <div className="isoMailAddress">
            <div className="isoAddress">
              <h3>
                {mail.name} <span>&lt;{mail.email}&gt;</span>
              </h3>
              <span className="mailDate">{timeDifference(mail.date)}</span>
            </div>
            <p>
              to <span>me</span>
            </p>
          </div>
        </SingleMailInfo>

        <SingleMailBody className="isoMailBody">
          <p>{mail.body}</p>
        </SingleMailBody>

        <SingleMailReply className="isoReplyMail">
          {replyMail ? (
            <ComposeMail allMail={allMail} />
          ) : (
            <div
              onClick={event => changeReplyMail(true)}
              className="isoReplyMailBtn"
            >
              Click here to <span>Reply</span>
            </div>
          )}
        </SingleMailReply>
      </div>
    </SingleMailContents>
  );
}
