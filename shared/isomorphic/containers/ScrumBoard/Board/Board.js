import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import Column from '../Column/Column';
import { reorder, reorderTasks } from '@iso/lib/helpers/reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import { ParentContainer, Container, AddListButton } from './Board.style';
import { filterSearchedComponents } from '@iso/lib/helpers/searchTaskCard';
import BoardLayout from './BoardLayout/BoardLayout';
import modalActions from '@iso/redux/modal/actions';

function Board({
  currentBoard,
  openModal,
  boards,
  match,
  columns,
  moveColumnWatcher,
  tasks,
  moveTaskWatcher,
  ordered,
  containerHeight,
  withScrollableColumns = true,
  boardRenderWatcher,
}) {
  useEffect(() => {
    boardRenderWatcher(match.params.id);
  }, [boardRenderWatcher, match.params.id]);
  const onDragEnd = ({ source, destination, type, draggableId }) => {
    // source= {
    //   droppableId: 'column-1',
    //   index: 0
    // }
    // destination= {
    //   droppableId: 'column-1',
    //   index: 1
    // }
    // type= "TYPE"
    // draggableId: 'task-1'

    // dropped nowhere
    if (!destination) return;
    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (type === 'COLUMN') {
      const columnOrdered = reorder(ordered, source.index, destination.index);
      moveColumnWatcher({
        board_id: match.params.id,
        column_orders: columnOrdered,
      });
      return;
    }

    const updatedColumns = reorderTasks({
      columns,
      source,
      destination,
      draggableId,
    });
    const draggedTask = tasks[draggableId];
    const updatedTask = {
      ...draggedTask,
      column_id: destination.droppableId,
    };
    const updatedTasks = {
      ...tasks,
      [updatedTask.id]: updatedTask,
    };
    moveTaskWatcher({ columns: updatedColumns, tasks: updatedTasks });
  };

  const board = (
    <Droppable
      droppableId="board"
      type="COLUMN"
      direction="horizontal"
      ignoreContainerClipping={Boolean(containerHeight)}
    >
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {ordered &&
            ordered.map((columnId, index) => {
              const column = columns[columnId];
              const tasksWithinColumn = column.task_orders.map(
                task_id => tasks[task_id]
              );

              return (
                <Column
                  key={columnId}
                  index={index}
                  title={column.title}
                  column={column}
                  boardId={match.params.id}
                  tasks={tasksWithinColumn}
                  isScrollable={withScrollableColumns}
                />
              );
            })}
          <AddListButton
            onClick={() =>
              openModal({
                modalType: 'CREATE_COLUMN',
                modalProps: { boardId: match.params.id },
              })
            }
          >
            <Icon type="plus" /> Add another list
          </AddListButton>
        </Container>
      )}
    </Droppable>
  );

  return (
    <BoardLayout currentBoard={currentBoard} boards={boards} match={match}>
      <DragDropContext onDragEnd={onDragEnd}>
        {containerHeight ? (
          <ParentContainer height={containerHeight}>{board}</ParentContainer>
        ) : (
          board
        )}
      </DragDropContext>
    </BoardLayout>
  );
}

export default connect(
  (state, ownProps) => {
    return {
      ordered:
        state.scrumBoard.boards &&
        state.scrumBoard.boards[ownProps.match.params.id] &&
        state.scrumBoard.boards[ownProps.match.params.id].column_orders,
      state: state.scrumBoard,
      boards: state.scrumBoard.boards,
      currentBoard: state.scrumBoard.boards[ownProps.match.params.id],
      columns: filterSearchedComponents(
        state.scrumBoard.tasks,
        state.scrumBoard.columns,
        state.scrumBoard.searchText
      ),
      tasks: state.scrumBoard.tasks,
    };
  },
  { ...scrumBoardActions, ...modalActions }
)(Board);
