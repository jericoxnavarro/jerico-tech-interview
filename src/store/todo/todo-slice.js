import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: initialState,
  reducers: {
    updateTodos: (state, action) => ({
      todos: action.payload,
    }),
  },
  extraReducers: () => {},
});

export default todoSlice.reducer;

export const { updateTodos } = todoSlice.actions;
