import { useState } from 'react';
import { Todo, todoApi } from '@/apis/todo';

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const accessToken = localStorage.getItem('access_token')!;

  const getTodos = async () => {
    try {
      const todos = await todoApi
        .get({
          accessToken,
        })
        .then((res) => res.data);
      setTodoList(todos);
    } catch (error) {
      alert('할 일 목록을 불러오는 데 실패했습니다');
    }
  };

  const addTodo = async (todo: Todo['todo']) => {
    try {
      const newTodo = await todoApi
        .post({
          accessToken,
          todo,
        })
        .then((res) => res.data);
      setTodoList((prev: Todo[]) => [...prev, newTodo]);
    } catch (err) {
      window.alert('새로운 투두를 만드는 데 실패했습니다');
    }
  };

  const modifyTodo = async ({ id, todo, isCompleted }: Omit<Todo, 'userId'>) => {
    const prevTodo = todoList.find((todo) => todo.id === id);
    if (!prevTodo || (prevTodo.todo === todo && prevTodo.isCompleted === isCompleted)) return;

    try {
      await todoApi.put({ accessToken, id, todo, isCompleted });
      setTodoList((prev) =>
        prev.map((item) => (item.id === id ? { ...item, todo, isCompleted } : item)),
      );
    } catch (err) {
      window.alert('할 일을 수정하는 데 실패했습니다');
    }
  };

  const removeTodo = async (id: Todo['id']) => {
    try {
      await todoApi.delete({ accessToken, id });
      setTodoList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      window.alert('할 일을 삭제하는 데 실패했습니다');
    }
  };

  return { todoList, setTodoList, getTodos, addTodo, removeTodo, modifyTodo };
};

export default useTodoList;
