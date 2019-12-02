import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Input from '@iso/components/uielements/input';
import Tooltip from '@iso/components/uielements/tooltip';
import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import DatePicker from '@iso/components/uielements/datePicker';
import Modal from '@iso/components/Feedback/Modal';
import notification from '@iso/components/Notification';
import chatActions from '@iso/redux/chat/actions';
import { AddUserBtn, Fieldset, Form, Label } from './Messages.styles';

const dateFormat = 'DD/MM/YYYY';
const { updateNewUsersProp, addNewUser } = chatActions;
export default function AddNewUser() {
  const { user, users, addNewUsersProp } = useSelector(state => state.Chat);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(updateNewUsersProp({ modalActive: false }));
  };
  const initAddUser = () => {
    dispatch(
      updateNewUsersProp({
        modalActive: true,
        name: 'New User',
        dob: '22/04/1992',
        mobileNo: '9429692135',
        gender: 'Male',
        language: 'English',
        profileImageUrl:
          'https://thumb7.shutterstock.com/display_pic_with_logo/818215/552201991/stock-photo-beautiful-young-grinning-professional-black-woman-in-office-with-eyeglasses-folded-arms-and-552201991.jpg',
      })
    );
  };
  const userNameExist = newUser =>
    users.findIndex(
      user => user.name.toLowerCase() === newUser.name.toLowerCase()
    ) !== -1;

  const addUser = () => {
    if (addNewUsersProp.name) {
      if (userNameExist(addNewUsersProp)) {
        notification('error', 'User name already exists');
      } else {
        dispatch(addNewUser(user, addNewUsersProp));
        notification('success', 'New user created successfuly');
      }
    } else {
      notification('error', 'please add new user name');
    }
  };
  const {
    modalActive,
    name,
    dob,
    mobileNo,
    gender,
    language,
  } = addNewUsersProp;
  return (
    <div>
      <Tooltip placement="topRight" title="Add a new user (For demo only)">
        <AddUserBtn onClick={initAddUser}>
          <i className="ion-android-add" />
        </AddUserBtn>
      </Tooltip>

      <Modal
        visible={modalActive}
        onClose={handleCancel}
        title="Add New User"
        okText="Add User"
        onOk={addUser}
        onCancel={handleCancel}
      >
        <Form>
          <Fieldset>
            <Label>Name</Label>
            <Input
              label="Name"
              placeholder="Enter Name"
              value={name || ''}
              onChange={event => {
                addNewUsersProp.name = event.target.value;
                dispatch(updateNewUsersProp(addNewUsersProp));
              }}
            />
          </Fieldset>

          <Fieldset>
            <Label>Mobile</Label>
            <Input
              label="Mobile"
              placeholder="Mobile No"
              value={mobileNo || ''}
              onChange={event => {
                addNewUsersProp.mobileNo = event.target.value;
                dispatch(updateNewUsersProp(addNewUsersProp));
              }}
            />
          </Fieldset>

          <Fieldset>
            <Label>Gender</Label>
            <RadioGroup
              id="gender"
              name="gender"
              value={gender}
              onChange={event => {
                addNewUsersProp.gender = event.target.value;
                dispatch(updateNewUsersProp(addNewUsersProp));
              }}
            >
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </RadioGroup>
          </Fieldset>

          <Fieldset>
            <Label>Language</Label>
            <Input
              label="Language"
              placeholder="Language"
              value={language || ''}
              onChange={event => {
                addNewUsersProp.language = event.target.value;
                dispatch(updateNewUsersProp(addNewUsersProp));
              }}
            />
          </Fieldset>

          <Fieldset>
            <Label>Date</Label>
            <DatePicker
              allowClear={false}
              format={dateFormat}
              value={moment(dob, dateFormat)}
              onChange={(date, dateString) => {
                addNewUsersProp.dob = dateString;
                dispatch(updateNewUsersProp(addNewUsersProp));
              }}
            />
          </Fieldset>
        </Form>
      </Modal>
    </div>
  );
}
