import { configureStore } from '@reduxjs/toolkit';
import { todoApiService } from '@/services/api/todo-api';
import todoSlice from './todo/todo-slice';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = ({ ...props }) =>
  configureStore({
    reducer: {
      todoSlice: todoSlice,
      [todoApiService.reducerPath]: todoApiService.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApiService.middleware),
    ...props,
  });

export const wrapper = createWrapper(makeStore);
