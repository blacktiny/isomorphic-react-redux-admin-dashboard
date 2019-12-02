import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import CreateOrUpdateColumn from './Column/ColumnCreateOrUpdate/ColumnCreateOrUpdate';
import modalActions from '@iso/redux/modal/actions';

const MODAL_COMPONENTS = {
  CREATE_COLUMN: CreateOrUpdateColumn,
  /* other modals */
};

const ModalRoot = ({ modalType, modalProps, modalVisibility, closeModal }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
    <>
      <Modal
        centered
        visible={modalVisibility}
        onCancel={() => closeModal()}
        footer={null}
      >
        <SpecificModal {...modalProps} onCancel={() => closeModal()} />
      </Modal>
    </>
  );
};

export default connect(
  state => state.modal,
  { ...modalActions }
)(ModalRoot);
