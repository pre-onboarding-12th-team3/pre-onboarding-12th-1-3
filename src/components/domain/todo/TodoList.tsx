import styled from 'styled-components';
import { Todo } from '@/apis/todo';
import { TodoItem } from '@/components/domain/todo';

interface Props {
  items: Todo[];
  modifyTodo: ({ id, todo, isCompleted }: Omit<Todo, 'userId'>) => void;
  removeTodo: (id: Todo['id']) => void;
}

const TodoList = ({ items, modifyTodo, removeTodo }: Props) => {
  return (
    <>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <TodoItem key={item.id} item={item} modifyTodo={modifyTodo} removeTodo={removeTodo} />
          ))}
        </ul>
      ) : (
        <Fallback>등록된 TODO가 없습니다.</Fallback>
      )}
    </>
  );
};

export default TodoList;

const Fallback = styled.div`
  width: 512px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;
