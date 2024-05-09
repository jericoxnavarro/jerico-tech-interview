import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const todoApiService = createApi({
  reducerPath: 'todo-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (builder) => ({
    GetTodos: builder.mutation({
      query: () => ({
        url: `/api/todos`,
        method: 'GET',
      }),
    }),

    GetTodo: builder.mutation({
      query: ({ todoId }) => {
        return {
          url: `/api/todo/${todoId}`,
          method: 'GET',
        };
      },
    }),

    CreateTodo: builder.mutation({
      query: ({ title, description }) => ({
        url: `/api/todo`,
        method: 'POST',
        body: {
          title,
          description,
        },
      }),
    }),

    UpdateTodo: builder.mutation({
      query: ({ status, todoId }) => ({
        url: `/api/todo/${todoId}`,
        method: 'PUT',
        body: {
          status,
        },
      }),
    }),

    DeleteTodo: builder.mutation({
      query: ({ todoId }) => ({
        url: `/api/todo/${todoId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { GetTodo, GetTodos, CreateTodo, UpdateTodo, DeleteTodo } = todoApiService.endpoints;

export const { useGetTodosMutation, useGetTodoMutation, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApiService;

export const {
  util: { getRunningQueryThunk, getRunningQueriesThunk, getRunningMutationThunk, getRunningMutationsThunk },
} = todoApiService;
