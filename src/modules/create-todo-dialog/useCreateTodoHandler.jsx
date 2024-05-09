import * as yup from 'yup';
import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateTodos } from '@/store/todo/todo-slice';
import useTodoApi from '@/hooks/api/useTodoApi';

const useCreateTodoHandler = ({ submitEvent }) => {
  const dispatch = useDispatch();
  const { createTodoApiCall } = useTodoApi();

  const methods = useForm({
    resolver: yupResolver(
      yup.object({
        title: yup.string('Todo title is required.').required('Todo title is required.'),
        description: yup.string('Todo description is required.').required('Todo description is required.'),
      }),
    ),
    defaultValues: {
      title: '',
      description: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: false,
  });

  const handleOnSubmit = useCallback(
    async (formData) => {
      const todos = await createTodoApiCall(formData);
      dispatch(updateTodos(todos));
      submitEvent();
      methods.reset();
    },
    [dispatch, submitEvent, createTodoApiCall, methods],
  );

  return { methods, handleOnSubmit };
};

export default useCreateTodoHandler;
