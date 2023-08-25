import { useEffect } from 'react';
import { AddTodoForm, TodoList } from '@/components/domain/todo';
import { useTodoList } from '@/hooks';

const TodoPage = () => {
  const { todoList, getTodos, addTodo, removeTodo, modifyTodo } = useTodoList();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList items={todoList} removeTodo={removeTodo} modifyTodo={modifyTodo} />
    </>
  );
};

export default TodoPage;
