import { Stack } from '@mui/material';
import TodoCard from '@/components/cards/todo-card';
import useTodoCardHandler from './useTodoCardHandler';

export default function TodoCardModule() {
  const { todos, handleTodoUpdate, handleTodoDelete } = useTodoCardHandler();

  return (
    <Stack spacing="8px">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          id={todo._id}
          title={todo.title}
          description={todo.description}
          status={todo.status}
          onClickCheckBox={handleTodoUpdate}
          onClickDelete={handleTodoDelete}
        />
      ))}
    </Stack>
  );
}
