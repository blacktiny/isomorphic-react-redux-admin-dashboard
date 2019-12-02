import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from '../Task';
import { DropZone, Wrapper } from './TaskList.style';
import { Scrollbars } from 'react-custom-scrollbars';

class InnerTaskList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks !== this.props.tasks) {
      return true;
    }

    return false;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(dragProvided, dragSnapshot) => (
          <TaskItem
            key={task.id}
            task={task}
            columnId={this.props.columnId}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
          />
        )}
      </Draggable>
    ));
  }
}

const InnerList = ({ dropProvided, tasks, columnId }) => (
  <DropZone ref={dropProvided.innerRef}>
    <Scrollbars style={{ height: 500 }} autoHide>
      <InnerTaskList tasks={tasks} columnId={columnId} />
      {dropProvided.placeholder}
    </Scrollbars>
  </DropZone>
);

const TaskList = ({
  ignoreContainerClipping,
  internalScroll,
  scrollContainerStyle,
  isDropDisabled,
  isCombineEnabled,
  listId,
  listType,
  style,
  column,
  tasks,
  title,
  ...props
}) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDropDisabled={isDropDisabled}
          {...dropProvided.droppableProps}
        >
          {internalScroll ? (
            <InnerList
              tasks={tasks}
              title={title}
              columnId={column.id}
              dropProvided={dropProvided}
            />
          ) : (
            <InnerList
              title={title}
              tasks={tasks}
              columnId={column.id}
              dropProvided={dropProvided}
            />
          )}
        </Wrapper>
      )}
    </Droppable>
  );
};

TaskList.defaultProps = {
  listId: 'LIST',
};
export default TaskList;
