// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderTasks = ({ columns, source, destination, draggableId }) => {
  const sourceColumn = columns[source.droppableId];
  const sourceColumnTaskOrders = Array.from(
    columns[source.droppableId].task_orders
  );
  const destinationColumn = columns[destination.droppableId];
  const destinationColumnTaskOrders = Array.from(
    columns[destination.droppableId].task_orders
  );
  // moving to same list
  if (source.droppableId === destination.droppableId) {
    sourceColumnTaskOrders.splice(source.index, 1);
    sourceColumnTaskOrders.splice(destination.index, 0, draggableId);

    const newColumns = {
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        task_orders: sourceColumnTaskOrders,
      },
    };
    return newColumns;
  }

  // moving to different list

  // remove from original
  sourceColumnTaskOrders.splice(source.index, 1);
  // insert into next
  destinationColumnTaskOrders.splice(destination.index, 0, draggableId);

  const newColumns = {
    ...columns,
    [source.droppableId]: {
      ...sourceColumn,
      task_orders: sourceColumnTaskOrders,
    },
    [destination.droppableId]: {
      ...destinationColumn,
      task_orders: destinationColumnTaskOrders,
    },
  };

  return newColumns;
};
