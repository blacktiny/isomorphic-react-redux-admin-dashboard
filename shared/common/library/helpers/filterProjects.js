import Fuse from 'fuse.js';

export const filterProjects = (boards = {}, searchText = '') => {
  if (searchText !== '') {
    let boardLists = Object.values(boards);
    let fuse = new Fuse(boardLists, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['title'],
    });
    let result = fuse.search(searchText);

    const filteredBoards = result.reduce((newBoards, board) => {
      newBoards[board.id] = board;
      return newBoards;
    }, {});
    return filteredBoards;
  }

  return boards;
};
