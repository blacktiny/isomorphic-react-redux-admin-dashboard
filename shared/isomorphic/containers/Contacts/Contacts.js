import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '@iso/redux/contacts/actions';
import { Layout, Icon } from 'antd';
import Button from '@iso/components/uielements/button';
import ContactList from '@iso/components/Contacts/ContactList';
import SingleContactView from '@iso/components/Contacts/SingleView';
import EditContactView from '@iso/components/Contacts/EditView';
import DeleteButton from '@iso/components/Contacts/DeleteButton';
import { otherAttributes } from './data';
import IntlMessages from '@iso/components/utility/intlMessages';
import { ContactsWrapper } from './Contacts.styles';
import Scrollbar from '@iso/components/utility/customScrollBar';

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange,
} = contactActions;

const { Content } = Layout;
export default function Contacts() {
  const { contacts, seectedId, editView } = useSelector(
    state => state.Contacts
  );
  const dispatch = useDispatch();

  const selectedContact = seectedId
    ? contacts.filter(contact => contact.id === seectedId)[0]
    : null;
  const onVIewChange = () => dispatch(viewChange(!editView));
  return (
    <ContactsWrapper
      className="isomorphicContacts"
      style={{ background: 'none' }}
    >
      <div className="isoContactListBar">
        <ContactList
          contacts={contacts}
          seectedId={seectedId}
          changeContact={id => dispatch(changeContact(id))}
          deleteContact={e => dispatch(deleteContact(e))}
        />
      </div>
      <Layout className="isoContactBoxWrapper">
        {selectedContact ? (
          <Content className="isoContactBox">
            <div className="isoContactControl">
              <Button type="default" onClick={onVIewChange}>
                {editView ? <Icon type="check" /> : <Icon type="edit" />}
              </Button>
              <DeleteButton
                deleteContact={id => dispatch(deleteContact(id))}
                contact={selectedContact}
              />
              <Button
                type="primary"
                onClick={() => dispatch(addContact())}
                className="isoAddContactBtn"
              >
                <IntlMessages id="contactlist.addNewContact" />
              </Button>
            </div>

            <Scrollbar className="contactBoxScrollbar">
              {editView ? (
                <EditContactView
                  contact={selectedContact}
                  editContact={contact => dispatch(editContact(contact))}
                  otherAttributes={otherAttributes}
                />
              ) : (
                <SingleContactView
                  contact={selectedContact}
                  otherAttributes={otherAttributes}
                />
              )}
            </Scrollbar>
          </Content>
        ) : (
          <div className="isoContactControl">
            <Button
              type="primary"
              onClick={() => dispatch(addContact())}
              className="isoAddContactBtn"
            >
              <IntlMessages id="contactlist.addNewContact" />
            </Button>
          </div>
        )}
      </Layout>
    </ContactsWrapper>
  );
}
