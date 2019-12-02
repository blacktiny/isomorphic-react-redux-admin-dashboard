import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Scrollbars from '@iso/components/utility/customScrollBar';
import { InputSearch } from '@iso/components/uielements/input';
import mailList from '@iso/components/Mail/MailList';
import mailBuckets from '@iso/components/Mail/MailBuckets';
import mailTags from '@iso/components/Mail/MailTags';
import singleMail from '@iso/components/Mail/SingleMail';
import ComposeBtn from '@iso/components/Mail/MailComposeBtn';
import ComposeMail from '@iso/components/Mail/ComposeMail';
import PaginationControl from '@iso/components/Mail/MailPagination';
import IntlMessages from '@iso/components/utility/intlMessages';
import mailActions from '@iso/redux/mail/actions';
import mailSelector from '@iso/redux/mail/selector';
import MailBox from './Mail.styles';

const {
  filterAction,
  selectMail,
  changeComposeMail,
  changeReplyMail,
  changeSearchString,
} = mailActions;

export default function DesktopView(props) {
  const dispatch = useDispatch();
  const mail = useSelector(state => state.Mails);
  const filterMails = mailSelector(mail);
  const {
    allMails,
    selectedMail,
    filterAttr,
    composeMail,
    replyMail,
    searchString,
  } = mail;
  const [search, setSearch] = React.useState(searchString);
  const handleSelectMail = React.useCallback(
    value => dispatch(selectMail(value)),
    [dispatch]
  );
  const handleChangeReplyMail = React.useCallback(
    value => dispatch(changeReplyMail(value)),
    [dispatch]
  );
  const handleFilterAction = React.useCallback(
    value => dispatch(filterAction(value)),
    [dispatch]
  );
  //   selectMail,
  //   filterAction,
  //   changeComposeMail,
  //   changeReplyMail,
  //   changeSearchString,
  // } = props;
  let singleMailComponent = (
    <p className="isoNoMailMsg">
      <IntlMessages id="email.noMessage" />
    </p>
  );
  const index = allMails.findIndex(mail => mail.id === selectedMail);
  if (index !== -1) {
    singleMailComponent = singleMail(
      allMails,
      filterMails,
      index,
      replyMail,
      handleChangeReplyMail,
      handleSelectMail
    );
  }
  return (
    <MailBox className="isomorphicMailBox">
      <div className="isoLeftWrapper">
        <ComposeBtn
          changeComposeMail={value => dispatch(changeComposeMail(value))}
        />
        <div className="isoMailOptions">
          <Scrollbars style={{ height: props.height - 70 }}>
            {mailBuckets(allMails, handleFilterAction, filterAttr)}
            {mailTags(allMails, handleFilterAction, filterAttr)}
          </Scrollbars>
        </div>
      </div>
      {composeMail ? null : (
        <div className="isoMiddleWrapper">
          <div className="isoBucketLabel">
            <h3>{filterAttr.bucket}</h3>
            <PaginationControl />
          </div>
          <div className="isoSearchMailWrapper">
            <InputSearch
              placeholder="Search Email"
              value={search}
              className="isoSearchEmail"
              onChange={event => setSearch(event.target.value)}
              onSearch={value => dispatch(changeSearchString(value))}
            />
          </div>
          <Scrollbars>
            {mailList(filterMails, handleSelectMail, selectedMail)}
          </Scrollbars>
        </div>
      )}
      <div className="isoSingleMailWrapper">
        <Scrollbars style={{ height: props.height - 70 }}>
          {composeMail ? (
            <ComposeMail allMails={allMails} />
          ) : (
            singleMailComponent
          )}
        </Scrollbars>
      </div>
    </MailBox>
  );
}
