import { useDispatch } from 'react-redux';
export const useCounter = () => {
  const dispatch = useDispatch();
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    });
  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    });
  const reset = () =>
    dispatch({
      type: 'RESET',
    });
  return { count, increment, decrement, reset };
};
