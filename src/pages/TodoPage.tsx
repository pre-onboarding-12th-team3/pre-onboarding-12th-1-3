import { useEffect, useState } from 'react';
import useAPI from '@/apis/todo/todo';
import TodoList from '@/components/domain/todo/TodoList';

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoPage = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]); 
  const {getTodos} = useAPI();
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodoList(fetchedTodos);
      } catch (error) {
        window.alert('할 일 목록을 불러오는 데 실패했습니다');
      }
    }
    fetchTodos();
  }, []);

  return (
    <TodoList items={todoList}/>
  );
};

export default TodoPage;
