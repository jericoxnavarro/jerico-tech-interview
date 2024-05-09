import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodos } from '@/store/todo/todo-slice';
import useTodoApi from '@/hooks/api/useTodoApi';

const useTodoCardHandler = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(({ todoSlice }) => todoSlice);
  const { updateTodoApiCall, deleteTodoApiCall } = useTodoApi();

  const handleTodoUpdate = useCallback(
    async ({ todoId, value }) => {
      if (value) {
        const updatedTodos = await updateTodoApiCall({ status: 'done', todoId });
        dispatch(updateTodos(updatedTodos));
      } else {
        const updatedTodos = await updateTodoApiCall({ status: 'reopened', todoId });
        dispatch(updateTodos(updatedTodos));
      }
    },
    [dispatch, updateTodoApiCall],
  );

  const handleTodoDelete = useCallback(
    async ({ todoId }) => {
      const updatedTodos = await deleteTodoApiCall({ todoId });
      dispatch(updateTodos(updatedTodos));
    },
    [dispatch, deleteTodoApiCall],
  );

  return { todos, handleTodoUpdate, handleTodoDelete };
};

export default useTodoCardHandler;
