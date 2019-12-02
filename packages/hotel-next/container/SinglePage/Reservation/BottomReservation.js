import React, { useState, Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';
import Rating from '@iso/ui/Rating/Rating';
import Button from '@iso/ui/Antd/Button/Button';
import Modal from '@iso/ui/Antd/Modal/Modal';
import StickyBooking from '@hotel/components/StickyBooking/StickyBooking';
import LogoImage from '@hotel/assets/images/logo-alt.svg';
import Reservation from './Reservation';

const BottomReservation = ({ title, price, rating, ratingCount }) => {
  // modal and reservation control state
  const [state, setState] = useState(false);

  // handle photo gallery modal
  const toggleModal = () => {
    setState(!state);
  };

  // handle photo gallery modal cancel
  const handleCancel = () => {
    setState(!state);
  };

  return (
    <Fragment>
      <StickyBooking
        logo={LogoImage}
        title={title}
        price={price}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={toggleModal}>
            Book
          </Button>
        }
      />

      <Modal
        visible={state}
        onCancel={handleCancel}
        footer={null}
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <Reservation />
        <Button onClick={handleCancel} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </Fragment>
  );
};

export default BottomReservation;
