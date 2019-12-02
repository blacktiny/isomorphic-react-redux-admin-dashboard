import React from 'react';
import { Input } from 'antd';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Form from '../uielements/form';
import isoModal from '../Feedback/Modal';
import { CardInfoWrapper, InfoFormWrapper } from './CardModal.style';
import { InputWrapper } from '../uielements/styles/input.style';
import Modals from './Modal.style';
import WithDirection from '@iso/lib/helpers/rtl';
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);

const InputField = InputWrapper(Input);

export default function({
  modalType,
  editView,
  handleCancel,
  selectedCard,
  submitCard,
  updateCard,
}) {
  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
      key: 'expiry',
    },
    {
      title: 'CVC',
      dataIndex: 'cvc',
      key: 'cvc',
    },
  ];

  const saveButton = () => {
    submitCard();
  };

  return (
    <Modal
      title={modalType === 'edit' ? 'Edit Card' : 'Add Card'}
      visible={editView}
      onCancel={handleCancel}
      cancelText="Cancel"
      onOk={saveButton}
      okText={modalType === 'edit' ? 'Edit Card' : 'Add Card'}
    >
      <CardInfoWrapper className="isoCardWrapper">
        <Cards
          number={selectedCard.number}
          name={selectedCard.name}
          expiry={selectedCard.expiry}
          cvc={selectedCard.cvc}
          focused={selectedCard.focused}
        />
      </CardInfoWrapper>
      <InfoFormWrapper>
        <Form className="isoCardInfoForm">
          {columns.map((column, index) => {
            const { key, title } = column;
            return (
              <InputField
                placeholder={title}
                type="text"
                className={`isoCardInput ${key}`}
                onChange={event => {
                  selectedCard[key] = event.target.value;
                  updateCard(selectedCard);
                }}
                name={key}
                key={index}
              />
            );
          })}
        </Form>
      </InfoFormWrapper>
    </Modal>
  );
}
