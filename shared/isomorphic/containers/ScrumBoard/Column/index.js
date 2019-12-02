import React from 'react';
import { Icon, Popconfirm } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import TaskList from '../TaskList';
import Title from '@iso/components/scrumBoard/Title';
import ColumnForm from '@iso/components/scrumBoard/ColumnForm';
import { connect } from 'react-redux';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import modalActions from '@iso/redux/modal/actions';
import { Container, Header } from './style';

const Column = ({
  title,
  column,
  tasks,
  index,
  editColumn,
  cancelEditColumn,
  deleteColumn,
  openModal,
  isScrollable,
}) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {column.editing ? (
            <ColumnForm
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
              <Icon
                type="plus"
                style={{ margin: '0 10px', cursor: 'pointer' }}
                onClick={() =>
                  openModal({
                    modalType: 'CREATE_TASK',
                    modalProps: { columnId: column.id },
                  })
                }
              />
              <Icon
                type="edit"
                style={{ margin: '0 10px', cursor: 'pointer' }}
                onClick={() => editColumn(column)}
              />
              <Popconfirm
                title="Are you sure delete this Column?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => deleteColumn(column.id)}
              >
                <Icon
                  type="delete"
                  style={{ margin: '0 10px', cursor: 'pointer' }}
                />
              </Popconfirm>
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
  { ...scrumBoardActions, ...modalActions }
)(Column);
