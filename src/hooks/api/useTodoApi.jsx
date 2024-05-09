import { useCallback } from 'react';
import { useGetTodosMutation, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from '@/services/api/todo-api';

const useTodoApi = () => {
  const [reqGetTodos] = useGetTodosMutation();
  const [reqCreateTodo] = useCreateTodoMutation();
  const [reqpUpdateTodo] = useUpdateTodoMutation();
  const [reqDeleteTodo] = useDeleteTodoMutation();

  const getTodosApiCall = useCallback(
    async () =>
      reqGetTodos()
        .unwrap()
        .then(({ data }) => data),
    [reqGetTodos],
  );

  const createTodoApiCall = useCallback(
    async ({ title, description }) =>
      reqCreateTodo({ title, description })
        .unwrap()
        .then(({ data }) => data),
    [reqCreateTodo],
  );

  const updateTodoApiCall = useCallback(
    async ({ status, todoId }) =>
      reqpUpdateTodo({ status, todoId })
        .unwrap()
        .then(({ data }) => data),
    [reqpUpdateTodo],
  );

  const deleteTodoApiCall = useCallback(
    async ({ todoId }) =>
      reqDeleteTodo({ todoId })
        .unwrap()
        .then(({ data }) => data),
    [reqDeleteTodo],
  );

  return { getTodosApiCall, createTodoApiCall, updateTodoApiCall, deleteTodoApiCall };
};

export default useTodoApi;
