import Fuse from 'fuse.js';

import cloneDeep from 'lodash/cloneDeep';

export const filterSearchedComponents = (
  tasks = {},
  columns = {},
  searchText = ''
) => {
  if (searchText !== '') {
    let allTaskslist = Object.values(tasks);
    let fuse = new Fuse(allTaskslist, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['title', 'labels', 'assignee'],
    });
    let result = fuse.search(searchText);
    const resultTasks = result.reduce((newTasks, task) => {
      newTasks[task.id] = task;
      return newTasks;
    }, {});
    const resolvedTaskIDs = Object.keys(resultTasks);
    const newColumns = cloneDeep(columns);
    Object.keys(newColumns).map(column => {
      return (newColumns[column].task_orders = newColumns[
        column
      ].task_orders.filter(taskid => resolvedTaskIDs.includes(taskid)));
    });

    return newColumns;
  }

  return columns;
};
