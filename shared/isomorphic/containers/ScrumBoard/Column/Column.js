import React from 'react';
import { Popconfirm, Popover } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import TaskList from '../Task/TaskList/TaskList';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import Title from '@iso/components/ScrumBoard/Title';
import CreateOrUpdateColumn from './ColumnCreateOrUpdate/ColumnCreateOrUpdate';
import { connect } from 'react-redux';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import drawerActions from '@iso/redux/drawer/actions';

import MoreIcon from '@iso/assets/images/icon/16.svg';
import Plus from '@iso/assets/images/icon/24.svg';
import {
  Container,
  Header,
  PlusIcon,
  MoreActionsWrapper,
} from './Column.style';

const Column = ({
  title,
  column,
  tasks,
  index,
  boardId,
  editColumn,
  cancelEditColumn,
  deleteColumnWatcher,
  openDrawer,
  isScrollable,
}) => {
  const MoreActions = (
    <MoreActionsWrapper>
      <p onClick={() => editColumn(column)}>Rename Column</p>
      <p>
        <Popconfirm
          title="Are you sure delete this Column?"
          okText="Yes"
          cancelText="No"
          onConfirm={() =>
            deleteColumnWatcher({ column_id: column.id, board_id: boardId })
          }
        >
          Delete Column
        </Popconfirm>
      </p>
    </MoreActionsWrapper>
  );
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {column.editing ? (
            <CreateOrUpdateColumn
              initials={column}
              onCancel={() => cancelEditColumn(column)}
            />
          ) : (
            <Header isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {title}
              </Title>
              <PlusIcon
                src={Plus}
                onClick={() =>
                  openDrawer({
                    drawerType: 'CREATE_OR_EDIT_TASK',
                    drawerProps: { columnId: column.id },
                  })
                }
              />
              <Popover placement="bottom" content={MoreActions} trigger="click">
                <IconSvg src={MoreIcon} border="none" padding="0" mr={'0'} />
              </Popover>
            </Header>
          )}

          <TaskList
            listId={column.id}
            listType="QUOTE"
            column={column}
            tasks={tasks}
            internalScroll={isScrollable}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default connect(
  null,
  { ...scrumBoardActions, ...drawerActions }
)(Column);
