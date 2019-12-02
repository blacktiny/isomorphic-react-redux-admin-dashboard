import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import NoBoardFounds from '../BoardNotFound/BoardNotFound';
import BoardListCard from './BoardListCard/BoardListCard';
import AppLayout from '../../AppLayout/AppLayout';
import { filterProjects } from '@iso/lib/helpers/filterProjects';
import { Table } from './BoardList.style';
function BoardLists({
  boards,
  deleteBoardWatcher,
  editBoard,
  history,
  match,
  boardsRenderWatcher,
}) {
  useEffect(() => {
    boardsRenderWatcher();
  }, [boardsRenderWatcher]);

  const handleEdit = board => {
    editBoard(board);
    history.push(`/dashboard/scrum-board/${board.id}`);
  };

  return (
    <AppLayout history={history} match={match}>
      {!isEmpty(boards) ? (
        <Table>
          {Object.values(boards).map(board => (
            <BoardListCard
              key={board.id}
              item={board}
              onDelete={() => deleteBoardWatcher(board.id)}
              onEdit={() => handleEdit(board)}
            />
          ))}
        </Table>
      ) : (
        <NoBoardFounds history={history} match={match} />
      )}
    </AppLayout>
  );
}

export default connect(
  state => ({
    boards: filterProjects(
      state.scrumBoard.boards,
      state.scrumBoard.searchText
    ),
  }),
  { ...scrumBoardActions }
)(BoardLists);
