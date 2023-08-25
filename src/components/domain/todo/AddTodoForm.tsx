import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '@/components/common';
import { Todo } from '@/apis/todo';

interface Props {
  addTodo: (todo: Todo['todo']) => void;
}

const AddTodoForm = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState('');

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <Form>
      <Input
        data-testid="new-todo-input"
        value={todo}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        data-testid="new-todo-add-button"
        type="submit"
        onClick={onSubmit}
        disabled={todo === ''}
      >
        추가
      </Button>
    </Form>
  );
};

export default AddTodoForm;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 512px;
`;
