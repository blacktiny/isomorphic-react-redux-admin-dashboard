import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';
import uuidV4 from 'uuid/v4';
import RenderBoardForm from '@iso/components/ScrumBoard/RenderBoardForm/RenderBoardForm';
import { dateFormat } from '@iso/components/ScrumBoard/FieldFormats';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';

import ArrowIcon from '@iso/assets/images/icon/04-icon.svg';
import CloseIcon from '@iso/assets/images/icon/07-icon.svg';
import {
  Wrapper,
  FormWrapper,
  Heading,
  TopBar,
} from './BoardCreateOrUpdate.style';
const initialValues = {
  id: '',
  column_orders: [],
  title: '',
  category: '',
  progress: '',
  thumb: '',
  open_to_company: false,
  open_to_members: true,
  editing: false,
  created_at: moment(Date.now(dateFormat)).toString(),
  updated_at: moment(Date.now(dateFormat)),
  selectOptions: ['Software', 'OPs', 'Service Desk', 'Business', 'General'],
  selectAssignees: ['Mark', 'Bob', 'Anthony'],
};

const CreateOrUpdateBoard = props => {
  const initials = {
    ...initialValues,
    ...props.board,
    updated_at: moment(Date.now(dateFormat)).toString(),
  };

  const handleSubmit = values => {
    if (!values.editing) {
      values.id = uuidV4();
    }
    props.createOrUpdateBoardWatcher(values);
    props.history.push(`/dashboard/scrum-board/project/${values.id}`);
  };

  return (
    <Wrapper>
      <TopBar>
        <IconSvg
          src={ArrowIcon}
          border="none"
          padding={'0'}
          alt="Arrow Icon"
          style={{ transform: 'rotateY(180deg)' }}
          onClick={() => window.history.back()}
        />
        <IconSvg
          src={CloseIcon}
          border="none"
          padding={'0'}
          alt="Close Icon"
          onClick={() => props.history.push(`/dashboard/scrum-board`)}
        />
      </TopBar>
      <FormWrapper>
        <Heading>Create New Project</Heading>
        <Formik
          initialValues={initials}
          onSubmit={handleSubmit}
          render={RenderBoardForm}
        />
      </FormWrapper>
    </Wrapper>
  );
};
export default connect(
  (state, ownProps) => ({
    board: state.scrumBoard.boards[ownProps.match.params.id],
  }),
  {
    ...scrumBoardActions,
  }
)(CreateOrUpdateBoard);
