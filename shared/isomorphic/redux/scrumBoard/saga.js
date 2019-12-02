// saga.js
import { all, takeEvery, put, select } from 'redux-saga/effects';
import scrumBoardActions from './actions';
import DemoData from './data';
import { loadState, saveState } from '@iso/lib/helpers/localStorage';

const getScrumBoards = state => state.scrumBoard;

function* boardsRenderEffectSaga() {
  let boards;
  let columns;
  let tasks;
  if (localStorage.hasOwnProperty('scrum_boards')) {
    const scrum_boards = loadState('scrum_boards');
    boards = scrum_boards.boards;
    columns = scrum_boards.columns;
    tasks = scrum_boards.tasks;
  } else {
    boards = DemoData.boards;
    columns = DemoData.columns;
    tasks = DemoData.tasks;
  }
  saveState('scrum_boards', { boards, columns, tasks });
  yield put(scrumBoardActions.setBoardsData({ boards, columns, tasks }));
}

function* boardRenderEffectSaga({ payload }) {
  let scrum_boards;
  let boards;
  let columns;
  let tasks;
  if (localStorage.hasOwnProperty('scrum_boards')) {
    scrum_boards = loadState('scrum_boards');
    boards = scrum_boards.boards;
    columns = scrum_boards.columns;
    tasks = scrum_boards.tasks;
  } else {
    scrum_boards = DemoData;
    boards = DemoData.boards;
    columns = DemoData.columns;
    tasks = DemoData.tasks;
  }

  yield put(
    scrumBoardActions.setBoardData({
      boards,
      columns,
      tasks,
    })
  );
}
function* createOrUpdateBoardEffectSaga(action) {
  let scrum_boards = yield select(getScrumBoards);
  const boards = {
    ...scrum_boards.boards,
    [action.payload.id]: action.payload,
  };
  scrum_boards = {
    columns: scrum_boards.columns,
    tasks: scrum_boards.tasks,
    boards: boards,
  };
  saveState('scrum_boards', scrum_boards);

  yield put(scrumBoardActions.createOrUpdateBoard(boards));
}

function* deleteBoardEffectSaga(action) {
  let scrum_boards = yield select(getScrumBoards);
  const BOARDS = {
    ...scrum_boards.boards,
  };
  delete BOARDS[action.payload];

  const boards = BOARDS;

  scrum_boards = {
    ...scrum_boards,
    boards,
  };
  saveState('scrum_boards', scrum_boards);

  yield put(scrumBoardActions.deleteBoard(boards));
}

function* createOrUpdateColumnEffectSaga({ payload: { column, board_id } }) {
  let scrum_boards = yield select(getScrumBoards);
  console.log(column, board_id);
  const columns = {
    ...scrum_boards.columns,
    [column.id]: {
      ...column,
      editing: false,
    },
  };
  let boards = scrum_boards.boards;
  if (!column.editing) {
    boards = {
      ...scrum_boards.boards,
      [board_id]: {
        ...scrum_boards.boards[board_id],
        column_orders: [
          ...scrum_boards.boards[board_id].column_orders,
          column.id,
        ],
      },
    };
  }
  scrum_boards = {
    ...scrum_boards,
    columns,
    boards,
  };
  saveState('scrum_boards', scrum_boards);
  yield put(scrumBoardActions.createOrUpdateColumn({ columns, boards }));
}

function* deleteColumnEffectSaga({ payload: { column_id, board_id } }) {
  let scrum_boards = yield select(getScrumBoards);
  const COLUMNS = {
    ...scrum_boards.columns,
  };
  delete COLUMNS[column_id];

  const columns = COLUMNS;
  const boards = {
    ...scrum_boards.boards,
    [board_id]: {
      ...scrum_boards.boards[board_id],
      column_orders: scrum_boards.boards[board_id].column_orders.filter(
        order => order !== column_id
      ),
    },
  };

  scrum_boards = {
    ...scrum_boards,
    columns,
    boards,
  };
  saveState('scrum_boards', scrum_boards);

  yield put(scrumBoardActions.deleteColumn({ columns, boards }));
}

function* moveColumnEffectSaga({ payload: { board_id, column_orders } }) {
  let scrum_boards = yield select(getScrumBoards);
  const boards = {
    ...scrum_boards.boards,
    [board_id]: {
      ...scrum_boards.boards[board_id],
      column_orders: column_orders,
    },
  };
  scrum_boards = {
    ...scrum_boards,
    boards: boards,
  };
  saveState('scrum_boards', scrum_boards);

  yield put(scrumBoardActions.setMovedColumn(boards));
}

function* createOrUpdateTaskEffectSaga(action) {
  let scrum_boards = yield select(getScrumBoards);
  const tasks = {
    ...scrum_boards.tasks,
    [action.payload.id]: { ...action.payload, editing: false },
  };
  let columns = scrum_boards.columns;
  if (!action.payload.editing) {
    columns = {
      ...scrum_boards.columns,
      [action.payload.column_id]: {
        ...scrum_boards.columns[action.payload.column_id],
        task_orders: [
          ...scrum_boards.columns[action.payload.column_id].task_orders,
          action.payload.id,
        ],
      },
    };
  }

  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards,
  };
  saveState('scrum_boards', scrum_boards);

  yield put(scrumBoardActions.createOrUpdateTask({ tasks, columns }));
}

function* deleteTaskEffectSaga({ payload: { task_id, column_id } }) {
  let scrum_boards = yield select(getScrumBoards);
  const tasks = Object.keys(scrum_boards.tasks).reduce((object, key) => {
    if (key !== task_id) {
      object[key] = scrum_boards.tasks[key];
    }
    return object;
  }, {});
  const columns = {
    ...scrum_boards.columns,
    [column_id]: {
      ...scrum_boards.columns[column_id],
      task_orders: scrum_boards.columns[column_id].task_orders.filter(
        order => order !== task_id
      ),
    },
  };
  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards,
  };
  saveState('scrum_boards', scrum_boards);
  yield put(scrumBoardActions.deleteTask({ columns, tasks }));
}

function* moveTaskEffectSaga({ payload: { tasks, columns } }) {
  let scrum_boards = yield select(getScrumBoards);
  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards,
  };
  saveState('scrum_boards', scrum_boards);
  yield put(scrumBoardActions.setMovedTask({ columns, tasks }));
}

export default function* scrumBoardSaga() {
  yield all([
    takeEvery(scrumBoardActions.LOAD_BOARDS_DATA_SAGA, boardsRenderEffectSaga),
    takeEvery(
      scrumBoardActions.LOAD_CURRENT_BOARD_DATA_SAGA,
      boardRenderEffectSaga
    ),
    takeEvery(
      scrumBoardActions.CREATE_OR_UPDATE_BOARD_WATCHER,
      createOrUpdateBoardEffectSaga
    ),
    takeEvery(scrumBoardActions.DELETE_BOARD_WATCHER, deleteBoardEffectSaga),
    takeEvery(
      scrumBoardActions.CREATE_OR_UPDATE_COLUMN_WATCHER,
      createOrUpdateColumnEffectSaga
    ),
    takeEvery(scrumBoardActions.DELETE_COLUMN_WATCHER, deleteColumnEffectSaga),
    takeEvery(scrumBoardActions.MOVE_COLUMN_WATCHER, moveColumnEffectSaga),
    takeEvery(
      scrumBoardActions.CREATE_OR_UPDATE_TASK_WATCHER,
      createOrUpdateTaskEffectSaga
    ),
    takeEvery(scrumBoardActions.DELETE_TASK_WATCHER, deleteTaskEffectSaga),
    takeEvery(scrumBoardActions.MOVE_TASK_WATCHER, moveTaskEffectSaga),
  ]);
}
